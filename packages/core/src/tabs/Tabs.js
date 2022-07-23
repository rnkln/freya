import { useState, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import TabsContext from './TabsContext'
import RenderComponent from './RenderComponent'

const Tabs = ({ selected = 0, onChange, ...otherProps }) => {
	const [active, setActive] = useState(() => selected)
	const value = useMemo(
		() => ({
			active,
			setActive
		}),
		[active]
	)

	useEffect(() => {
		setActive(selected)
	}, [selected])

	useEffect(() => {
		if (onChange) {
			onChange(active)
		}
	}, [onChange, active])

	return (
		<TabsContext.Provider value={value}>
			<RenderComponent {...otherProps} />
		</TabsContext.Provider>
	)
}

Tabs.propTypes = {
	selected: PropTypes.number,
	onChange: PropTypes.func
}

export default Tabs
