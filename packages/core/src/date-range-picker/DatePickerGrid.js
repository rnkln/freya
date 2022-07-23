import { useMemo, memo } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { Flex } from '../layout'
import CalendarDayName from './CalendarDayName'
import DatePickerDay from './DatePickerDay'

const useStyles = makeStyles({ name: 'DatePickerGrid' })((theme) => ({
	root: {
		display: 'grid',
		gridGap: theme.spacing(0.5, 0),
		gridTemplateColumns: `repeat(7, ${theme.size(4.2)})`
	}
}))

const DatePickerGrid = memo(({ title, locale, date, className, ...otherProps }) => {
	const { classes, cx } = useStyles()
	const days = useMemo(
		() =>
			[1, 2, 3, 4, 5, 6, 0].map((day) => (
				<CalendarDayName key={day} day={day} locale={locale} />
			)),
		[locale]
	)
	const daysFromThisMonth = useMemo(() => {
		const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0)
		return Array.from({ length: endDate.getDate() }, (v, i) => {
			const day = new Date(date)
			day.setDate(i + 1)
			return day
		})
	}, [date])

	return (
		<Flex direction='column' gap={1} alignItems='center'>
			{title && title}
			<div className={cx(classes.root, className)}>
				{days}
				{daysFromThisMonth.map((monthDate, i) => (
					<DatePickerDay key={i} date={monthDate} {...otherProps} />
				))}
			</div>
		</Flex>
	)
})

DatePickerGrid.displayName = 'DatePickerGrid'

DatePickerGrid.propTypes = {
	title: PropTypes.node,
	date: PropTypes.instanceOf(Date),
	locale: PropTypes.string.isRequired,
	className: PropTypes.string
}

export default DatePickerGrid
