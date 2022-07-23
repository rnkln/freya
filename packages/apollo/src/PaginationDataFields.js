import { gql } from '@apollo/client'

export const PaginationDataFields = gql`
	fragment PaginationDataFields on PaginationData {
		from
		to
		count
		page
		pages
		limit
		total
	}
`
