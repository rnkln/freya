const SET_PAGINATION = 'SET_PAGINATION'
const SUBTRACT_PAGE = 'SUBTRACT_PAGE'
const SET_SORTING = 'SET_SORTING'
const ADD_LANGUAGE = 'ADD_LANGUAGE'
const REMOVE_LANGUAGE = 'REMOVE_LANGUAGE'
const TOGGLE_LANGUAGE = 'TOGGLE_LANGUAGE'
const CLEAR_LANGUAGES = 'CLEAR_LANGUAGES'
const SET_LANGUAGES = 'SET_LANGUAGES'
const TOGGLE_ITEM = 'TOGGLE_ITEM'
const DESELECT_ITEM = 'DESELECT_ITEM'
const CLEAR_SELECTED = 'CLEAR_SELECTED'
const SET_SEARCH_TERM = 'SET_SEARCH_TERM'
const SET_FILTER_VALUE = 'SET_FILTER_VALUE'
const CLEAR_FILTERS = 'CLEAR_FILTERS'
const TOGGLE_SELECTED_ALL = 'TOGGLE_SELECTED_ALL'

const setPagination = (pagination) => ({ type: SET_PAGINATION, payload: pagination })
const subtractPage = () => ({ type: SUBTRACT_PAGE })
const setSorting = (sorting) => ({ type: SET_SORTING, payload: sorting })
const addLanguage = (language) => ({ type: ADD_LANGUAGE, payload: language })
const removeLanguage = (language) => ({ type: REMOVE_LANGUAGE, payload: language })
const toggleLanguage = (language) => ({ type: TOGGLE_LANGUAGE, payload: language })
const clearLanguages = () => ({ type: CLEAR_LANGUAGES })
const setLanguages = (languages) => ({ type: SET_LANGUAGES, payload: languages })
const toggleItem = (item) => ({ type: TOGGLE_ITEM, payload: item })
const deselectItem = (item) => ({ type: DESELECT_ITEM, payload: item })
const clearSelected = () => ({ type: CLEAR_SELECTED })
const setSearchTerm = (value) => ({ type: SET_SEARCH_TERM, payload: value })
const setFilterValue = (field, value) => ({ type: SET_FILTER_VALUE, payload: { field, value } })
const clearFilters = () => ({ type: CLEAR_FILTERS })
const toggleSelectedAll = (items) => ({ type: TOGGLE_SELECTED_ALL, payload: items })

export const actions = {
	setPagination,
	subtractPage,
	setSorting,
	addLanguage,
	removeLanguage,
	toggleLanguage,
	clearLanguages,
	setLanguages,
	toggleItem,
	deselectItem,
	clearSelected,
	setSearchTerm,
	setFilterValue,
	clearFilters,
	toggleSelectedAll
}

export const defaultState = {
	searchTerm: '',
	selected: [],
	selectedAll: false,
	filters: {},
	languages: [],
	pagination: { page: 1, limit: 10 },
	sorting: { field: 'id', direction: 'ASC' }
}

export default (state, { type, payload }) => {
	switch (type) {
		case TOGGLE_SELECTED_ALL: {
			const nextSelectedAll = !state.selectedAll
			const selected = nextSelectedAll ? payload.map((item) => item.id) : []
			return {
				...state,
				selectedAll: nextSelectedAll,
				selected
			}
		}

		case ADD_LANGUAGE: {
			if (!state.languages.some((language) => language.id === payload.id)) {
				return {
					...state,
					selected: [],
					selectedAll: false,
					languages: [...state.languages, payload],
					pagination: {
						...state.pagination,
						page: 1
					}
				}
			}
			return state
		}

		case REMOVE_LANGUAGE: {
			if (state.languages.some((language) => language.id === payload.id)) {
				return {
					...state,
					selected: [],
					selectedAll: false,
					languages: state.languages.filter((language) => language.id !== payload.id),
					pagination: {
						...state.pagination,
						page: 1
					}
				}
			}
			return state
		}

		case TOGGLE_LANGUAGE: {
			const nextLanguages = state.languages.some((language) => language.id === payload.id)
				? state.languages.filter((language) => language.id !== payload.id)
				: [...state.languages, payload]
			return {
				...state,
				selected: [],
				selectedAll: false,
				languages: nextLanguages,
				pagination: {
					...state.pagination,
					page: 1
				}
			}
		}

		case CLEAR_LANGUAGES: {
			return {
				...state,
				selected: [],
				selectedAll: false,
				languages: [],
				pagination: {
					...state.pagination,
					page: 1
				}
			}
		}

		case SET_LANGUAGES: {
			return {
				...state,
				selected: [],
				selectedAll: false,
				languages: payload,
				pagination: {
					...state.pagination,
					page: 1
				}
			}
		}

		case SET_FILTER_VALUE: {
			if (state.filters[payload.field] === payload.value) return state
			return {
				...state,
				selected: [],
				selectedAll: false,
				filters: {
					...state.filters,
					[payload.field]: payload.value !== undefined ? payload.value : undefined
				},
				pagination: {
					...state.pagination,
					page: 1
				}
			}
		}

		case CLEAR_FILTERS: {
			return {
				...state,
				selected: [],
				selectedAll: false,
				languages: [],
				pagination: {
					...state.pagination,
					page: 1
				},
				filters: {}
			}
		}

		case SET_SEARCH_TERM: {
			return {
				...state,
				selected: [],
				selectedAll: false,
				searchTerm: payload,
				pagination: {
					...state.pagination,
					page: 1
				}
			}
		}

		case SET_PAGINATION: {
			return {
				...state,
				selected: [],
				selectedAll: false,
				pagination: {
					...state.pagination,
					...payload
				}
			}
		}

		case SUBTRACT_PAGE: {
			const nextPageValue =
				state.pagination.page > 1 ? state.pagination.page - 1 : state.pagination.page
			return {
				...state,
				pagination: {
					...state.pagination,
					page: nextPageValue
				}
			}
		}

		case SET_SORTING: {
			const sameField = state.sorting.field === payload
			const direction = state.sorting.direction === 'ASC' ? 'DESC' : 'ASC'
			return {
				...state,
				selected: [],
				selectedAll: false,
				sorting: {
					...state.sorting,
					field: payload,
					direction: sameField ? direction : 'ASC'
				}
			}
		}

		case DESELECT_ITEM: {
			if (state.selected.includes(payload.id)) {
				const nextSelected = state.selected.filter((id) => id !== payload.id)
				return {
					...state,
					selected: nextSelected,
					selectedAll: nextSelected.length === 0 ? false : state.selectedAll
				}
			}
			return state
		}

		case TOGGLE_ITEM: {
			const nextSelected = state.selected.includes(payload.id)
				? state.selected.filter((id) => id !== payload.id)
				: [...state.selected, payload.id]
			return {
				...state,
				selectedAll: nextSelected.length === 0 ? false : state.selectedAll,
				selected: nextSelected
			}
		}

		case CLEAR_SELECTED: {
			return {
				...state,
				selectedAll: false,
				selected: []
			}
		}

		default:
			return state
	}
}
