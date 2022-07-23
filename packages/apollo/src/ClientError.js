import { gql } from '@apollo/client'
import { clientErrorsToObject, clientErrorsToMessages } from './error-utils'

export const ClientErrorFields = gql`
	fragment ClientErrorFields on ClientErrorInterface {
		code: name
		field
		message
	}
`

class ClientError extends Error {
	constructor(errorMessage, clientErrors, options) {
		super(errorMessage)

		this.name = 'ClientError'
		this.clientErrors = clientErrors
		this.getClientErrors = (localise) => {
			const opts = {
				errors: clientErrors,
				variables: options?.variables ?? {},
				localise
			}
			return {
				toObject: () => clientErrorsToObject(opts),
				toMessages: () => clientErrorsToMessages(opts)
			}
		}
	}
}

export default ClientError
