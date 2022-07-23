import { useCallback } from 'react'
import { useMutation } from '@apollo/client'
import { parseQuery } from './parse-utils'
import ClientError from './ClientError'

export default (mutation, options = {}) => {
	const [callback, callbackInfo] = useMutation(mutation, options)
	const { selection } = parseQuery(mutation)

	const callbackWithThrow = useCallback(
		(optionsMutation) =>
			callback(optionsMutation).then(({ data, ...rest }) => {
				const content = data?.[selection].content
				const errors = data?.[selection].errors

				if (errors && errors.length > 0) {
					throw new ClientError('GraphQL client error', errors, optionsMutation)
				}

				return {
					data,
					content,
					...rest
				}
			}),
		[callback, selection]
	)

	return [callbackWithThrow, callbackInfo]
}
