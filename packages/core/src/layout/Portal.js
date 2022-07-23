import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const getRootElement = (id) => {
	let root = document.getElementById(id)

	if (root === null) {
		root = document.createElement('div')
		root.setAttribute('id', id)
		document.body.insertBefore(root, document.body.lastElementChild.nextElementSibling)
	}

	return root
}

const Portal = ({ id = 'portal-root', disabled, children }) => {
	const root = getRootElement(id)

	return disabled ? children : ReactDOM.createPortal(children, root)
}

Portal.propTypes = {
	id: PropTypes.string,
	disabled: PropTypes.bool,
	children: PropTypes.node
}

export default Portal
