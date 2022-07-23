import PropTypes from 'prop-types'

const Wrap = ({ component: Component = 'div', wrap = true, children, ...otherProps }) => {
	if (!wrap) {
		return children
	}

	return <Component {...otherProps}>{children}</Component>
}

Wrap.propTypes = {
	wrap: PropTypes.bool,
	component: PropTypes.elementType,
	children: PropTypes.node
}

export default Wrap
