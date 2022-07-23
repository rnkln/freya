import PropTypes from 'prop-types'
import useUniqueId from '../hooks/useUniqueId'
import Control from '../form/Control'
import SwitchBase from './SwitchBase'

const Switch = ({ id, ...otherProps }) => (
	<Control id={useUniqueId('switch', id)} component={SwitchBase} {...otherProps} />
)

Switch.displayName = 'Switch'

Switch.propTypes = {
	id: PropTypes.string
}

export default Switch
