import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'

const useStyles = makeStyles({ name: 'CalendarDayName' })((theme) => ({
	root: {
		textAlign: 'center',
		padding: theme.spacing(0.4)
	}
}))

const CalendarDayName = ({ day, locale, ...otherProps }) => {
	const { classes } = useStyles()

	return (
		<div className={classes.root} {...otherProps}>
			{new Date(0, 0, day).toLocaleString(locale, { weekday: 'short' })}
		</div>
	)
}

CalendarDayName.propTypes = {
	day: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
	locale: PropTypes.string.isRequired
}

export default CalendarDayName
