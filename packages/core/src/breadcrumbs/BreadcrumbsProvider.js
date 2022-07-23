import PropTypes from 'prop-types'
import BreadcrumbsContext from './BreadcrumbsContext'

const BreadcrumbsProvider = ({ value, children }) => (
	<BreadcrumbsContext.Provider value={value}>{children}</BreadcrumbsContext.Provider>
)

BreadcrumbsProvider.propTypes = {
	value: PropTypes.array.isRequired,
	children: PropTypes.node
}

export default BreadcrumbsProvider
