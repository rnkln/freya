import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { BatchHttpLink } from '@apollo/client/link/batch-http'

export default ({ uri, credentials = 'same-origin', cache = new InMemoryCache() } = {}) => {
	/* Enable bathcing of queries. */
	const batch = new BatchHttpLink({
		uri,
		credentials,
		headers: {
			accept: 'application/json'
		}
	})

	/* Automatically remove __typename from input variables. */
	const sanitise = new ApolloLink((operation, forward) => {
		if (operation.variables) {
			operation.variables = JSON.parse(JSON.stringify(operation.variables), (key, value) =>
				key === '__typename' ? undefined : value
			)
		}

		return forward(operation)
	})

	return new ApolloClient({
		link: ApolloLink.from([sanitise, batch]),
		cache
	})
}
