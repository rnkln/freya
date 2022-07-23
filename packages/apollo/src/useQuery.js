import { useQuery } from '@apollo/client'
import { parseQuery } from './parse-utils'
import ClientError from './ClientError'

export default (query, options = {}) => {
	const { data, error: errorFromQuery, ...rest } = useQuery(query, options)
	const { selection } = parseQuery(query)

	const content = data?.[selection].content
	const errors = data?.[selection].errors
	const error =
		errors && errors.length !== 0
			? new ClientError('GraphQL client error', errors, options)
			: errorFromQuery

	return {
		data,
		error,
		content,
		...rest
	}
}
