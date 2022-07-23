import { makeStyles } from '@hs/styles'
import { Button } from '../button'

const useStyles = makeStyles({ name: 'CalendarButton' })({
	button: {
		width: '3.2rem',
		height: '3.2rem'
	}
})

const CalendarButton = (props) => {
	const { classes } = useStyles()

	return <Button className={classes.button} {...props} />
}

export default CalendarButton
