export const parseQuery = (query) => {
	const [root] = query.definitions
	const [selection] = root.selectionSet.selections

	return {
		name: root?.name?.value,
		selection: selection.name.value
	}
}

export const parseSearch = (search = '', fields = []) => {
	if (search === '' || fields.length === 0) {
		return []
	}

	return fields.map((field) => ({ field, value: search, comparator: 'CONTAINS' }))
}

export const parseFilters = (filters = {}) =>
	Object.entries(filters)
		.filter(([, value]) => value !== undefined && Boolean(value.toString()))
		.flatMap(([field, value]) => ({ field, value, comparator: 'EQUAL' }))

export const parseGqlData = (data, previousData, selection, resultFieldName) => {
	if (data?.[selection]?.[resultFieldName]?.data === undefined) {
		return [data?.[selection]?.data ?? [], data?.[selection]?.pagination ?? {}]
	}
	return [
		data?.[selection]?.[resultFieldName]?.data ?? [],
		data?.[selection]?.[resultFieldName]?.pagination ?? {}
	]
}
