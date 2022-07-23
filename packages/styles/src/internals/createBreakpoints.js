export default (breakpoints) => {
	const {
		unit = 'px',
		step = 0.05,
		values = {
			xs: 320,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920
		}
	} = breakpoints

	const keys = Object.keys(values)
	const value = (key) => `${values[key]}${unit}`
	const above = (key) => `@media (min-width: ${values[key]}${unit})`
	const below = (key) => {
		const upperIndex = keys.indexOf(key) + 1
		const upperValue = values[keys[upperIndex]] ?? 'auto'

		if (upperValue === 'auto') {
			return '@media (min-width: 0)' // last breakpoint applies to all sizes
		}

		return `@media (max-width: ${upperValue - step}${unit})`
	}

	return {
		unit,
		step,
		keys,
		values,
		value,
		above,
		below
	}
}
