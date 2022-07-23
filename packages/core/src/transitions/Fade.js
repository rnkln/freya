import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import TransitionBase from './TransitionBase'

const useStyles = makeStyles({ name: 'Fade' })((theme, { duration }) => ({
	enter: {
		opacity: 0
	},
	enterActive: {
		opacity: 1,
		transition: theme.transitions.create('opacity', { duration })
	},
	enterDone: {
		opacity: 1
	},
	exit: {
		opacity: 1
	},
	exitActive: {
		opacity: 0,
		transition: theme.transitions.create('opacity', { duration })
	},
	exitDone: {
		opacity: 0
	}
}))

const Fade = ({ duration = 'standard', ...otherProps }) => {
	const { classes } = useStyles({ duration })

	return <TransitionBase classNames={classes} duration={duration} {...otherProps} />
}

Fade.propTypes = {
	duration: PropTypes.oneOf(['short', 'standard', 'complex'])
}

export default Fade
