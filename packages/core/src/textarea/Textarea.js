import PropTypes from 'prop-types'
import useUniqueId from '../hooks/useUniqueId'
import Control from '../form/Control'
import TextareaBase from './TextareaBase'

const Textarea = ({ id, ...otherProps }) => (
	<Control id={useUniqueId('textarea', id)} component={TextareaBase} {...otherProps} />
)

Textarea.displayName = 'Textarea'

Textarea.propTypes = {
	id: PropTypes.string
}

export default Textarea
