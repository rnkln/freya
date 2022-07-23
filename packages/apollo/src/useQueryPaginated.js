import { useState, useMemo, useEffect, useCallback, useRef } from 'react'
import { useQuery, NetworkStatus } from '@apollo/client'
import {
	parseQuery,
	parseSearch,
	parseFilters,
	parseGqlData as parseGqlDataDefault
} from './parse-utils'
import queryPaginatedReducer, { defaultState, actions } from './queryPaginatedReducer'
import useReducerWithMiddlewares from './useReducerWithMiddlewares'

const getCombinedData = (prev, next, selection) => {
	const prevResult = prev[selection]
	const nextResult = next[selection]

	return {
		[selection]: {
			...prevResult,
			data: [...prevResult.data, ...nextResult.data],
			pagination: {
				...prevResult.pagination,
				to: nextResult.pagination.to
			}
		}
	}
}

const useQueryPaginated = (
	query,
	{
		searchFields,
		liveScroll = false,
		sortingField = 'id',
		sortingDirection = 'ASC',
		transformVariables,
		identifierField = 'id',
		resultFieldName = 'data',
		useVariablesV2 = false,
		initialState,
		middlewares,
		writeQueryTransformator = getCombinedData,
		parseGqlData = parseGqlDataDefault,
		...otherProps
	}
) => {
	const [state, dispatch] = useReducerWithMiddlewares(queryPaginatedReducer, middlewares, {
		...defaultState,
		...(initialState || { sorting: { field: sortingField, direction: sortingDirection } })
	})

	const dispatchers = useMemo(
		() =>
			Object.entries(actions).reduce(
				(acc, [key, creator]) => ({
					...acc,
					[key]: (...args) => dispatch(creator(...args))
				}),
				{
					resetPagination: () => dispatch(actions.setPagination({ page: 1, limit: 10 }))
				}
			),
		[dispatch]
	)

	const searches = useMemo(
		() => parseSearch(state.searchTerm, searchFields),
		[searchFields, state.searchTerm]
	)
	const criteria = useMemo(() => parseFilters(state.filters), [state.filters])
	const searchesAndCriteria = useMemo(() => [...searches, ...criteria], [searches, criteria])

	const filterVariables = useVariablesV2
		? { search: searches, filters: criteria }
		: { search: searchesAndCriteria }

	const queryVariables = {
		...filterVariables,
		sorting: state.sorting,
		languageIds: state.languages.map(({ id }) => id),
		pagination: {
			page: liveScroll ? 1 : state.pagination.page,
			limit: liveScroll
				? state.pagination.page * state.pagination.limit
				: state.pagination.limit
		}
	}

	const {
		data: qglData,
		previousData: previousGglData,
		loading,
		refetch,
		error,
		fetchMore,
		client,
		variables,
		networkStatus
	} = useQuery(query, {
		...otherProps,
		variables: transformVariables ? transformVariables(queryVariables, state) : queryVariables
	})

	const { selection } = parseQuery(query)
	const [data, meta] = useMemo(
		() => parseGqlData(qglData, previousGglData, selection, resultFieldName),
		[parseGqlData, qglData, previousGglData, selection, resultFieldName]
	)

	const [refetchLoading, setRefetchLoading] = useState(false)
	const refetchExtended = useCallback(
		(...args) => {
			setRefetchLoading(true)
			return refetch(...args).finally(() => {
				setRefetchLoading(false)
			})
		},
		[refetch]
	)

	/**
	 * extended fetch more
	 */
	const [fetchMoreLoading, setFetchMoreLoading] = useState(false)
	const nextPage = Math.ceil((data?.length ?? 0) / meta.limit + 1)
	const canFetchMore = nextPage <= meta.pages
	const fetchMoreExtended = useCallback(() => {
		setFetchMoreLoading(true)
		return fetchMore({
			variables: {
				pagination: {
					...variables.pagination,
					page: nextPage
				}
			}
		})
			.then((res) => {
				const prev = client.cache.readQuery({
					query,
					variables
				})
				client.cache.writeQuery({
					query,
					variables,
					data: writeQueryTransformator(prev, res.data, selection)
				})
			})
			.finally(() => {
				setFetchMoreLoading(false)
			})
	}, [client.cache, fetchMore, writeQueryTransformator, nextPage, query, selection, variables])

	const handleSelectedAll = useCallback(
		() => dispatchers.toggleSelectedAll(data),
		[dispatchers, data]
	)

	/**
	 * reset with skip on first render
	 * should reset also on search
	 */

	const isFirstRender = useRef(true)
	const prevLiveScroll = useRef(liveScroll)

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false
			return
		}
		if (!liveScroll && prevLiveScroll.current) {
			dispatchers.resetPagination()
		}
		prevLiveScroll.current = liveScroll
	}, [liveScroll, dispatchers])

	/**
	 * in order to have liveScrolling, we increase
	 * the limit to 10 in case the user sees
	 * only 5 items and is on page 1
	 */

	useEffect(() => {
		if (liveScroll && state.pagination.limit === 5 && state.pagination.page === 1) {
			dispatchers.setPagination({ limit: 10 })
		}
	}, [dispatchers, liveScroll, state.pagination.limit, state.pagination.page])

	const empty = useMemo(
		() => data.length === 0 && searchesAndCriteria.length > 0,
		[data.length, searchesAndCriteria.length]
	)

	const shouldSubtract =
		qglData !== undefined &&
		networkStatus === NetworkStatus.ready &&
		data.length === 0 &&
		state.pagination.page > 1
	useEffect(() => {
		if (shouldSubtract) {
			dispatchers.subtractPage()
		}
	}, [dispatchers, shouldSubtract])

	return {
		data,
		meta,
		loading,
		refetch: refetchExtended,
		refetchLoading,
		liveScroll,
		criteria,
		empty,
		handleSelectedAll,
		state,
		dispatchers,
		error,
		identifierField,
		canFetchMore,
		fetchMore: fetchMoreExtended,
		fetchMoreLoading,
		client
	}
}

export default useQueryPaginated
