export default () => (value) => {
	if (!value) {
		return undefined
	}

	return `0 0 ${value * 0.4}rem 0 rgba(0, 0, 0, 0.2), 
				0 ${value * 0.4}rem ${value * 0.2}rem ${value * -0.2}rem rgba(0, 0, 0, 0.2)`
}
