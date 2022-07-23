import { useRef, useCallback } from 'react'

export default (channel = 'log', limit = 2) => {
	const called = useRef(0)
	const callback = useCallback(
		(message) => {
			if (process.env.NODE_ENV !== 'production') {
				if (limit === undefined || called.current < limit) {
					called.current++
					console[channel](message) // eslint-disable-line no-console
				}
			}
		},
		[channel, limit]
	)

	return callback
}
