import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { useStyles } from '@hs/styles'

const TransitionBase = ({
	appear = true,
	duration = 'standard',
	unmountOnExit = true,
	...otherProps
}) => {
	const { theme } = useStyles()
	const timeout = theme.transitions.duration(duration)

	return (
		<CSSTransition
			appear={appear}
			timeout={timeout}
			unmountOnExit={unmountOnExit}
			{...otherProps}
		/>
	)
}

TransitionBase.propTypes = {
	appear: PropTypes.bool,
	duration: PropTypes.oneOf(['short', 'standard', 'complex']),
	unmountOnExit: PropTypes.bool
}

export default TransitionBase
