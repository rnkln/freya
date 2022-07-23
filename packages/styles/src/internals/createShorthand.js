const getValues = (input) => {
	if (input.length === 0) {
		return undefined
	}

	if (input.length === 1 && typeof input[0] === 'string') {
		return input[0].split(' ')
	}

	if (input.length === 1 && Array.isArray(input[0])) {
		return input[0]
	}

	return input
}

export default (mapping, seperator = ' ') =>
	(...input) => {
		const values = getValues(input)

		if (values.length === 0) {
			return undefined
		}

		if (values.length > 4) {
			throw new Error('Shorthand does not support more then 4 values')
		}

		return values.map(mapping).join(seperator)
	}
