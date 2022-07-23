import PropTypes from 'prop-types'
import TableSectionContext from './TableSectionContext'

const TableSection = ({ component: Component, ...otherProps }) => (
	<TableSectionContext.Provider value={Component}>
		<Component {...otherProps} />
	</TableSectionContext.Provider>
)

TableSection.propTypes = {
	component: PropTypes.oneOf(['thead', 'tbody', 'tfoot']).isRequired
}

export default TableSection
