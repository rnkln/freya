import PropTypes from 'prop-types'
import Text from '../typography/Text'

const PaginationBreak = ({ value = '...' }) => <Text value={value.toString()} />

PaginationBreak.propTypes = {
	value: PropTypes.number
}

export default PaginationBreak
