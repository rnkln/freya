export function latest(...dates) {
	return new Date(Math.max(...dates))
}

export function earliest(...dates) {
	return new Date(Math.min(...dates))
}

export function clone(date, parts = {}) {
	const nextDate = new Date(date)

	nextDate.setFullYear(parts.year === undefined ? date.getFullYear() : parts.year)
	nextDate.setMonth(parts.month === undefined ? date.getMonth() : parts.month)
	nextDate.setDate(parts.date === undefined ? date.getDate() : parts.date)
	nextDate.setHours(parts.hours === undefined ? date.getHours() : parts.hours)
	nextDate.setMinutes(parts.minutes === undefined ? date.getMinutes() : parts.minutes)
	nextDate.setSeconds(parts.seconds === undefined ? date.getSeconds() : parts.seconds)
	nextDate.setMilliseconds(parts.millis === undefined ? date.getMilliseconds() : parts.millis)

	return nextDate
}

export function isDateBetween(date, start, end) {
	return date >= start && date <= end
}

export function isDateEqual(date, compare) {
	return (
		date &&
		date.getFullYear() === compare.getFullYear() &&
		date.getMonth() === compare.getMonth() &&
		date.getDate() === compare.getDate()
	)
}

export function isTimeEqual(time, compare) {
	return (
		time &&
		time.getHours() === compare.getHours() &&
		time.getMinutes() === compare.getMinutes() &&
		time.getSeconds() === compare.getSeconds()
	)
}

export function combine(date, time) {
	const today = new Date()
	const datePart = date || today
	const timePart = time || today

	return new Date(
		datePart.getFullYear(),
		datePart.getMonth(),
		datePart.getDate(),
		timePart.getHours(),
		timePart.getMinutes(),
		timePart.getSeconds()
	)
}

export const getPrevMonth = (value) => {
	const next = new Date(value)
	next.setMonth(value.getMonth() - 1)
	return next
}

export const getNextMonth = (value) => {
	const next = new Date(value)
	next.setMonth(value.getMonth() + 1)
	return next
}

export const formatDate = (date, locale, placeholder = '', options = {}) => {
	if (date === undefined) return placeholder
	return new Date(date).toLocaleDateString(locale, {
		year: 'numeric',
		month: 'short',
		day: '2-digit',
		...options
	})
}

export const formatTime = (time, locale) => {
	if (time === undefined) return 'HH:mm'
	return new Date(time).toLocaleTimeString(locale, {
		hour: '2-digit',
		minute: '2-digit'
	})
}

export const isValidDate = (date) => date instanceof Date && !Number.isNaN(date)
