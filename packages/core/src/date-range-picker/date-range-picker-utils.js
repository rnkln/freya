import { clone } from './calendar-utils'

export const getViewedDate = (
	selectedDates,
	options = { date: 1, hours: 0, minutes: 0, seconds: 0, millis: 0 }
) => clone(selectedDates[0] ? new Date(selectedDates[0]) : new Date(), options)

export const getVisibleMonths = (date) => {
	const secondGridDate = new Date(date)
	secondGridDate.setMonth(date.getMonth() + 1)

	return [date, secondGridDate]
}

const copyDateHours = (date, original) => {
	const originalDate = new Date(original)

	return clone(date, {
		hours: originalDate.getHours(),
		minutes: originalDate.getMinutes(),
		seconds: originalDate.getSeconds(),
		millis: originalDate.getMilliseconds()
	})
}

export const getNextSelectedDates = (prevSelectedDates, selectedDate, start, end) => {
	if (prevSelectedDates.length === 0 || prevSelectedDates.length === 2) {
		return [copyDateHours(selectedDate, start)]
	}
	const [from] = prevSelectedDates
	if (selectedDate >= from) {
		return [copyDateHours(from, start), copyDateHours(selectedDate, end)]
	}
	if (selectedDate < from) {
		return [copyDateHours(selectedDate, start), copyDateHours(from, end)]
	}
}
