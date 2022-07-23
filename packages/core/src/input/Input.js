import PropTypes from 'prop-types'
import useUniqueId from '../hooks/useUniqueId'
import Control from '../form/Control'
import InputBase from './InputBase'

const Input = ({ id, ...otherProps }) => (
	<Control id={useUniqueId('input', id)} component={InputBase} {...otherProps} />
)

Input.displayName = 'Input'

Input.propTypes = {
	id: PropTypes.string
}

export default Input
