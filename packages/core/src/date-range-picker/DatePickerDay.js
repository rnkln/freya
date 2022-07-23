import { useMemo, memo } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { rewriteEventTarget } from '@hs/utils'
import { Flex } from '../layout'
import { Button } from '../button'
import { isDateEqual, isDateBetween } from './calendar-utils'

const useStyles = makeStyles({ name: 'DatePickerDay' })((theme, props) => ({
	root: {
		gridColumnStart: props.offset
	},
	today: {
		'& > span': {
			border: '2px solid #3578e5',
			width: theme.size(2.5),
			fontWeight: theme.typography.weight('semibold'),
			borderRadius: theme.radius(2)
		}
	},
	todayFocused: {
		'& > span': {
			border: '2px solid #ffffff'
		}
	},
	button: {
		transition: 'none',
		height: theme.size(3.2),
		width: '100%',
		textAlign: 'center',
		padding: 0
	}
}))

const DatePickerDay = memo(
	({ name, date, selectedDate, onDateClick, minDate, maxDate, ...otherProps }) => {
		const number = date.getDate()
		const offset = number === 1 ? date.getDay() || 7 : 'auto'
		const { classes, cx } = useStyles({ offset })
		const selected = useMemo(
			() => isDateEqual(date, new Date(selectedDate)),
			[date, selectedDate]
		)
		const isToday = useMemo(() => isDateEqual(date, new Date()), [date])
		const disabled = useMemo(
			() => !isDateBetween(date, minDate, maxDate),
			[date, maxDate, minDate]
		)
		const buttonClassName = cx(classes.button, {
			[classes.today]: isToday,
			[classes.todayFocused]: isToday && selected
		})

		return (
			<Flex className={classes.root}>
				<Button
					value={number.toString()}
					variant={selected ? 'contained' : 'text'}
					className={buttonClassName}
					onClick={(ev) => {
						onDateClick(rewriteEventTarget(ev, { name, value: date }))
					}}
					disabled={disabled}
					{...otherProps}
				/>
			</Flex>
		)
	}
)

DatePickerDay.displayName = 'DatePickerDay'

DatePickerDay.propTypes = {
	name: PropTypes.string,
	date: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
	selectedDate: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]),
	onDateClick: PropTypes.func.isRequired,
	minDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
	maxDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)])
}

export default DatePickerDay
