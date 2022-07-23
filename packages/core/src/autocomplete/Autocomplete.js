import PropTypes from 'prop-types'
import useUniqueId from '../hooks/useUniqueId'
import Control from '../form/Control'
import AutocompleteBase from './AutocompleteBase'

const Autocomplete = ({ id, ...otherProps }) => (
	<Control id={useUniqueId('combobox', id)} component={AutocompleteBase} {...otherProps} />
)

Autocomplete.propTypes = {
	id: PropTypes.string
}

export default Autocomplete
