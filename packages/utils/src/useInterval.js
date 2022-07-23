import { useEffect, useRef } from 'react'

export default (handler, rate = 10, { enabled = true } = {}) => {
	const handlerCallback = useRef(handler)
	useEffect(() => {
		handlerCallback.current = handler
	}, [handler])

	useEffect(() => {
		if (enabled) {
			const interval = setInterval(handlerCallback.current, rate)

			return () => {
				clearInterval(interval)
			}
		}
	}, [rate, enabled])
}
