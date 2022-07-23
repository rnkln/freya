const secondsPerMinute = 60
const secondsPerHour = secondsPerMinute * 60
const secondsPerDay = secondsPerHour * 24

function createDateFromValue(value) {
	const d = new Date(value)

	// An invalid date will return a date object where getTime() is NaN
	if (!Number.isNaN(d.getTime())) {
		return d
	}

	return new Date()
}

export function toISOString(date) {
	return createDateFromValue(date).toISOString()
}

export function toLocaleDateString(date, locale, options = {}) {
	return createDateFromValue(date).toLocaleDateString(locale, options)
}

export function toLocaleDateStringRelative(
	date,
	locale,
	daysTolerance,
	options = { numeric: 'auto' }
) {
	const diff = createDateFromValue(date) - new Date()
	const seconds = diff / 1000
	const abs = Math.abs(seconds)

	if (!Intl.RelativeTimeFormat) {
		return toLocaleDateString(date, locale, options)
	}

	const formatter = new Intl.RelativeTimeFormat(locale, options)

	if (abs < secondsPerMinute) {
		return formatter.format(Math.floor(seconds), 'seconds')
	} else if (abs < secondsPerHour) {
		return formatter.format(Math.floor(seconds / secondsPerMinute), 'minutes')
	} else if (abs < secondsPerDay) {
		return formatter.format(Math.floor(seconds / secondsPerHour), 'hours')
	} else if (abs < secondsPerDay * daysTolerance) {
		return formatter.format(Math.floor(seconds / secondsPerDay), 'days')
	}

	return toLocaleDateString(date, locale, options)
}
