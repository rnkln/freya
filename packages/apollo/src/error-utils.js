import { get, set } from 'lodash-es'

export const clientErrorsToObject = ({
	errors: errorsProp = [],
	localise,
	variables: variablesProp
}) => {
	const hasVariablesInput = Boolean(variablesProp.input)
	const variables = hasVariablesInput ? variablesProp.input : variablesProp
	const errors = errorsProp.reduce((acc, error) => {
		const { code, field } = error
		const key = field[field.length - 1]
		const path = hasVariablesInput ? field.slice(1) : field
		const value = get(variables, path)
		const message = localise({ code, key, path, value, error })

		set(acc, path, message)

		return acc
	}, {})

	return errors
}

export const clientErrorsToMessages = ({ errors = [], localise, variables: variablesProp }) => {
	const hasVariablesInput = Boolean(variablesProp.input)
	const variables = hasVariablesInput ? variablesProp.input : variablesProp

	return errors.reduce((acc, error) => {
		const { code, field } = error
		const key = field[field.length - 1]
		const path = hasVariablesInput ? field.slice(1) : field
		const value = get(variables, path)
		const message = localise({ key, code, path, value, error })

		acc.push(message)

		return acc
	}, [])
}
