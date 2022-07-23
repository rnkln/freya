import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Text from './Text'

const normalizeSize = (type) => {
	switch (type) {
		case 'h1':
			return 2.4
		case 'h2':
			return 2.2
		case 'h3':
			return 1.8
		case 'h4':
			return 1.6
		case 'h5':
			return 1.4
		case 'h6':
			return 1.2
		default:
			return 2.2
	}
}

const Heading = forwardRef(({ type = 'h2', component = type, ...otherProps }, ref) => (
	<Text
		ref={ref}
		component={component}
		size={normalizeSize(type)}
		weight='semibold'
		{...otherProps}
	/>
))

Heading.displayName = 'Heading'

Heading.propTypes = {
	type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
	component: PropTypes.elementType
}

export default Heading
