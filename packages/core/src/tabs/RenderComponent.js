import PropTypes from 'prop-types'

const RenderComponent = ({ component: Component, children, ...rest }) =>
	Component ? <Component {...rest}>{children}</Component> : children

RenderComponent.propTypes = {
	component: PropTypes.elementType,
	children: PropTypes.node
}

export default RenderComponent
