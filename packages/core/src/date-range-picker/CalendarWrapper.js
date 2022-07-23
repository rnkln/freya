import { makeStyles } from '@hs/styles'
import { Flex } from '../layout'

const useStyles = makeStyles({ name: 'CalendarWrapper' })((theme) => ({
	picker: {
		padding: theme.spacing(2)
	}
}))

const CalendarWrapper = (props) => {
	const { classes } = useStyles()

	return <Flex gap={2} direction='column' className={classes.picker} {...props} />
}

export default CalendarWrapper
