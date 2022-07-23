export default (value, mode) => {
	if (mode === 'word') {
		return value.toUpperCase()
	}

	return value.charAt(0).toUpperCase() + value.slice(1)
}
