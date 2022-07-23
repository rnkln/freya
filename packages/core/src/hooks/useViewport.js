import { useState, useEffect } from 'react'

const getViewport = () => ({
	width: window.innerWidth,
	height: window.innerHeight
})

export default () => {
	const [viewport, setViewport] = useState(getViewport)

	useEffect(() => {
		const listener = () => {
			setViewport(getViewport())
		}

		window.addEventListener('resize', listener)

		return () => {
			window.removeEventListener('resize', listener)
		}
	}, [])

	return viewport
}
