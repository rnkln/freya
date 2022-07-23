import { useState } from 'react'

export default () => {
	const [anchor, setAnchor] = useState()
	const open = Boolean(anchor)

	const handleOpen = (event) => setAnchor(event.currentTarget)
	const handleClose = () => setAnchor()
	const handleToggle = (event) => setAnchor(open ? undefined : event.currentTarget)

	return {
		open,
		anchor,
		handleOpen,
		handleClose,
		handleToggle
	}
}
