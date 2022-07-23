import { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import useActiveTab from './useActiveTab'
import RenderComponent from './RenderComponent'

const TabList = ({ children, ...otherProps }) => {
	const { active, setActive } = useActiveTab()
	const tabList = Children.toArray(children).map((child, index) =>
		cloneElement(child, {
			selected: active === index,
			onClick: child.props.disabled
				? undefined
				: (ev) => {
						if (child.props.onClick) {
							child.props.onClick(ev)
						}
						setActive(index)
				  }
		})
	)

	return <RenderComponent {...otherProps}>{tabList}</RenderComponent>
}

TabList.propTypes = {
	children: PropTypes.node
}

export default TabList
