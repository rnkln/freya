import { useState, useCallback, useMemo, forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { Paper } from '../surface'
import { Flex } from '../layout'
import CalendarGridTitle from './CalendarGridTitle'
import DatePickerGrid from './DatePickerGrid'
import { getPrevMonth, getNextMonth } from './calendar-utils'

const useStyles = makeStyles({ name: 'DatePickerPaper' })((theme) => ({
	picker: {
		padding: theme.spacing(2),
		fontWeight: theme.typography.weight('normal')
	}
}))

const DatePicker = memo(
	forwardRef(
		(
			{
				name,
				value = new Date(),
				onChange,
				locale,
				min = 0,
				max = 8640000000000000,
				...otherProps
			},
			ref
		) => {
			const { classes } = useStyles()
			const minDate = useMemo(() => new Date(min), [min])
			const maxDate = useMemo(() => new Date(max), [max])
			const selectedDate = useMemo(() => new Date(value), [value])
			const [viewedDate, setViewedDate] = useState(selectedDate)
			const increaseViewedMonth = useCallback(() => setViewedDate(getNextMonth), [])
			const decreaseViewedMonth = useCallback(() => setViewedDate(getPrevMonth), [])

			return (
				<Paper ref={ref} {...otherProps}>
					<Flex gap={2} direction='column' className={classes.picker}>
						<Flex gap={1}>
							<DatePickerGrid
								title={
									<CalendarGridTitle
										value={`${viewedDate.toLocaleString(locale, {
											month: 'long'
										})} ${viewedDate.getFullYear()}`}
										increaseViewedMonth={increaseViewedMonth}
										decreaseViewedMonth={decreaseViewedMonth}
										showPrevButton
										showNextButton
									/>
								}
								date={viewedDate}
								selectedDate={selectedDate}
								onDateClick={onChange}
								locale={locale}
								minDate={minDate}
								maxDate={maxDate}
								name={name}
							/>
						</Flex>
					</Flex>
				</Paper>
			)
		}
	)
)

DatePicker.displayName = 'DatePicker'

DatePicker.propTypes = {
	name: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
	locale: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	min: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
	max: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)])
}

export default DatePicker
