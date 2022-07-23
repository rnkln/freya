import PropTypes from 'prop-types'
import QueryPaginatedContext from './QueryPaginatedContext'
import useQueryPaginated from './useQueryPaginated'

const QueryPaginated = ({ children, query, ...otherProps }) => {
	const contextValue = useQueryPaginated(query, otherProps)

	return (
		<QueryPaginatedContext.Provider value={contextValue}>
			{children(contextValue)}
		</QueryPaginatedContext.Provider>
	)
}

QueryPaginated.propTypes = {
	children: PropTypes.func.isRequired,
	query: PropTypes.object.isRequired
}

export default QueryPaginated
