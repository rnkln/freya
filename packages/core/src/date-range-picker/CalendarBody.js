import { useMemo } from 'react'
import { Flex } from '../layout'
import CalendarGridTitle from './CalendarGridTitle'
import CalendarGrid from './CalendarGrid'
import { useDateRangePicker } from './DateRangePickerContext'

const CalendarBody = () => {
	const {
		locale,
		direction,
		min,
		max,
		increaseViewedMonth,
		decreaseViewedMonth,
		selectedDates,
		handleSelectedDates,
		highlightedDate,
		setHighlightedDate,
		visibleMonths
	} = useDateRangePicker()

	const minDate = useMemo(() => new Date(min), [min])
	const maxDate = useMemo(() => new Date(max), [max])

	return (
		<Flex gap={1} direction={direction === 'horizontal' ? 'row' : 'column'}>
			{visibleMonths.map((date, i) => {
				const titleValue = `${date.toLocaleString(locale, {
					month: 'long'
				})} ${date.getFullYear()}`
				const showPrev = i === 0
				const showNext =
					(i === 0 && direction === 'vertical') || (i === 1 && direction === 'horizontal')

				return (
					<CalendarGrid
						key={i}
						title={
							<CalendarGridTitle
								value={titleValue}
								showPrevButton={showPrev}
								showNextButton={showNext}
								increaseViewedMonth={increaseViewedMonth}
								decreaseViewedMonth={decreaseViewedMonth}
							/>
						}
						date={date}
						locale={locale}
						minDate={minDate}
						maxDate={maxDate}
						selectedDates={selectedDates}
						handleSelectedDates={handleSelectedDates}
						highlightedDate={highlightedDate}
						setHighlightedDate={setHighlightedDate}
					/>
				)
			})}
		</Flex>
	)
}

export default CalendarBody
