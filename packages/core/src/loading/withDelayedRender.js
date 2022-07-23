import { useState, useEffect } from 'react'

/**
 * delays the render of the component
 * useful for preventing renders of fallback components too fast
 * which leads to some blinking screen
 */

/* eslint-disable react/display-name */
export default (Component, timeoutMs = 500) =>
	(props) => {
		const [shown, setShown] = useState(false)

		useEffect(() => {
			const timer = setTimeout(() => setShown(true), timeoutMs)

			return () => {
				clearTimeout(timer)
			}
		}, [])

		if (!shown) {
			return null
		}

		return <Component {...props} />
	}
