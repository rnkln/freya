import { Children } from 'react'
import PropTypes from 'prop-types'
import useActiveTab from './useActiveTab'
import RenderComponent from './RenderComponent'

const TabPanels = ({ children, ...otherProps }) => {
	const { active } = useActiveTab()
	const panel = Children.toArray(children)[active]

	return <RenderComponent {...otherProps}>{panel}</RenderComponent>
}

TabPanels.propTypes = {
	children: PropTypes.node
}

export default TabPanels
