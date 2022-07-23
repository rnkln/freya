import { useMemo, memo } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { Flex } from '../layout'
import { Button } from '../button'
import { isDateEqual, isDateBetween } from './calendar-utils'

const useStyles = makeStyles({ name: 'CalendarDay' })((theme, props) => ({
	root: {
		gridColumnStart: props.offset
	},
	highlighted: {
		backgroundColor: '#ebefff'
	},
	focused: {
		backgroundColor: '#3578e533'
	},
	today: {
		border: '2px solid #3578e5',
		fontWeight: theme.typography.weight('semibold')
	},
	button: {
		transition: 'none',
		height: theme.size(3.2),
		width: '100%',
		textAlign: 'center',
		padding: 0
	}
}))

const isDateHighlighted = (date, selectedDates, highlightedDate) => {
	if (selectedDates.length === 2) {
		return isDateBetween(date, ...selectedDates)
	}
	if (selectedDates.length === 1 && highlightedDate) {
		if (selectedDates[0] < highlightedDate) {
			return isDateBetween(date, selectedDates[0], highlightedDate)
		} else if (selectedDates[0] > highlightedDate) {
			return isDateBetween(date, highlightedDate, selectedDates[0])
		}
		return false
	}
	return false
}

const isDateSelected = (date, selectedDates) => selectedDates.some((en) => isDateEqual(en, date))

const CalendarDay = memo(
	({
		date,
		minDate,
		maxDate,
		selectedDates,
		handleSelectedDates,
		highlightedDate,
		setHighlightedDate,
		...otherProps
	}) => {
		const number = date.getDate()
		const offset = number === 1 ? date.getDay() || 7 : 'auto'
		const { classes, cx } = useStyles({ offset })
		const selected = useMemo(() => isDateSelected(date, selectedDates), [date, selectedDates])
		const highlighted = useMemo(
			() => isDateHighlighted(date, selectedDates, highlightedDate),
			[date, selectedDates, highlightedDate]
		)
		const focused = useMemo(
			() => highlightedDate !== undefined && isDateEqual(date, highlightedDate),
			[date, highlightedDate]
		)
		const isToday = useMemo(() => isDateEqual(date, new Date()), [date])
		const disabled = useMemo(
			() => !isDateBetween(date, minDate, maxDate),
			[date, maxDate, minDate]
		)
		const rootClassName = cx(classes.root, {
			[classes.highlighted]: highlighted,
			[classes.focused]: focused
		})
		const buttonClassName = cx(classes.button, {
			[classes.today]: isToday
		})

		return (
			<Flex className={rootClassName}>
				<Button
					value={number.toString()}
					variant={selected ? 'contained' : 'text'}
					className={buttonClassName}
					onClick={(event) => handleSelectedDates(event, date)}
					onMouseEnter={() => setHighlightedDate(date)}
					onMouseLeave={() => setHighlightedDate(undefined)}
					disabled={disabled}
					{...otherProps}
				/>
			</Flex>
		)
	}
)

CalendarDay.displayName = 'CalendarDay'

CalendarDay.propTypes = {
	date: PropTypes.instanceOf(Date).isRequired,
	minDate: PropTypes.instanceOf(Date),
	maxDate: PropTypes.instanceOf(Date),
	selectedDates: PropTypes.array,
	handleSelectedDates: PropTypes.func,
	highlightedDate: PropTypes.instanceOf(Date),
	setHighlightedDate: PropTypes.func
}

export default CalendarDay
