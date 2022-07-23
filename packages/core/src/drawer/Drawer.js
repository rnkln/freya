import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Modal from '../layout/Modal'
import Scroll from '../layout/Scroll'
import Paper from '../surface/Paper'
import Slide from '../transitions/Slide'

// This is a work around for modal to pass ref to <Scroll /> and not <Slide />
// and is only needed because the handling of nodeRef in ReactTransitionGroup
// is horrible https://github.com/reactjs/react-transition-group/issues/623

// eslint-disable-next-line react/display-name, react/prop-types
const Inner = forwardRef(({ open, align, ...otherProps }, ref) => (
	<Slide in={open} align={align}>
		<Scroll ref={ref} {...otherProps} />
	</Slide>
))

const Drawer = ({ open = false, align = 'start', children, className, ...otherProps }) => {
	const style = align === 'start' ? { left: 0 } : { right: 0 }

	return (
		<Modal open={open} inset={0} width={28} align={`stretch ${align}`} {...otherProps}>
			<Inner
				component={Paper}
				rounded={false}
				elevated={false}
				open={open}
				align={align}
				style={{ height: '100vh', ...style }}
				className={className}
				tabIndex='-1'
			>
				{children}
			</Inner>
		</Modal>
	)
}

Drawer.propTypes = {
	open: PropTypes.bool,
	align: PropTypes.oneOf(['start', 'end']),
	className: PropTypes.string,
	children: PropTypes.node
}

export default Drawer
