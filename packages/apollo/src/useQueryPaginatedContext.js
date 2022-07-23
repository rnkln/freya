import { useContext } from 'react'
import QueryPaginatedContext from './QueryPaginatedContext'

export default () => {
	const context = useContext(QueryPaginatedContext)
	if (context === undefined) {
		throw new Error('useQueryPaginatedContext must be used within a QueryPaginated component')
	}

	return context
}
