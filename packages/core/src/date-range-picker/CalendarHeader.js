import { useMemo } from 'react'
import { Flex, Divider } from '../layout'
import { Text } from '../typography'
import { useDateRangePicker } from './DateRangePickerContext'
import { formatDate } from './calendar-utils'

const formatHeaderValue = (dates, showHours, locale, placeholder) => {
	const [startDate, endDate] = dates
	const formatOptions = showHours ? { hour: '2-digit', minute: '2-digit' } : undefined
	const start = formatDate(startDate, locale, placeholder, formatOptions)
	const end = formatDate(endDate, locale, placeholder, formatOptions)

	return `${start} ~ ${end}`
}

const CalendarHeader = () => {
	const { locale, selectedDates, showHours, placeholder, direction } = useDateRangePicker()

	const headerValue = useMemo(
		() => formatHeaderValue(selectedDates, showHours, locale, placeholder),
		[locale, placeholder, selectedDates, showHours]
	)

	return (
		<>
			<Text
				component={Flex}
				weight='semibold'
				justifyContent={direction === 'horizontal' ? 'start' : 'center'}
			>
				{headerValue}
			</Text>
			<Divider />
		</>
	)
}

export default CalendarHeader
