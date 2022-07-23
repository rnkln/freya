import { useState } from 'react'
import PropTypes from 'prop-types'
import Flex from '../layout/Flex'
import AccordionContext from './AccordionContext'

const Accordion = ({ defaultOpened = [], multiple = false, children, ...otherProps }) => {
	const [opened, setOpened] = useState(defaultOpened)

	const handleOpen = (panelId) => {
		if (opened.includes(panelId)) {
			setOpened((prev) => prev.filter((panel) => panel !== panelId))
		} else {
			if (multiple) {
				setOpened((prev) => [...prev, panelId])
			} else {
				setOpened([panelId])
			}
		}
	}

	return (
		<AccordionContext.Provider value={{ opened, handleOpen }}>
			<Flex direction='column' {...otherProps}>
				{children}
			</Flex>
		</AccordionContext.Provider>
	)
}

Accordion.propTypes = {
	defaultOpened: PropTypes.array,
	multiple: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node
}

export default Accordion
