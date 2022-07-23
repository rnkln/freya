import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import TransitionBase from './TransitionBase'

const useStyles = makeStyles({ name: 'Slide' })((theme, { duration }) => ({
	enterStart: {
		transform: 'translateX(-100%)'
	},
	enterEnd: {
		transform: 'translateX(100%)'
	},
	enterActive: {
		transform: 'translateX(0)',
		transition: theme.transitions.create('transform', { duration })
	},
	enterDone: {
		transform: 'translateX(0)'
	},
	exit: {
		transform: 'translateX(0)'
	},
	exitActiveStart: {
		transform: 'translateX(-100%)',
		transition: theme.transitions.create('transform', { duration })
	},
	exitActiveEnd: {
		transform: 'translateX(100%)',
		transition: theme.transitions.create('transform', { duration })
	},
	exitDoneStart: {
		transform: 'translateX(-100%)'
	},
	exitDoneEnd: {
		transform: 'translateX(100%)'
	}
}))

const Slide = ({ duration = 'standard', align = 'start', ...otherProps }) => {
	const { classes } = useStyles({ duration })
	const upper = align.charAt(0).toUpperCase() + align.slice(1)
	const classNames = {
		appear: classes[`enter${upper}`],
		appearActive: classes.enterActive,
		appearDone: classes.enterDone,
		enter: classes[`enter${upper}`],
		enterActive: classes.enterActive,
		enterDone: classes.enterDone,
		exit: classes.exit,
		exitActive: classes[`exitActive${upper}`],
		exitDone: classes[`exitDone${upper}`]
	}

	return <TransitionBase classNames={classNames} duration={duration} {...otherProps} />
}

Slide.propTypes = {
	duration: PropTypes.oneOf(['short', 'standard', 'complex']),
	align: PropTypes.oneOf(['start', 'end'])
}

export default Slide
