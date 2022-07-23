import { useEffect } from 'react'

export default (handler, enabled = true) => {
	useEffect(() => {
		if (handler && enabled) {
			const elm = document.documentElement
			const listener = (event) => {
				if (!(elm.scrollHeight - elm.scrollTop < elm.clientHeight + 5)) {
					return
				}
				handler(event)
			}

			window.addEventListener('scroll', listener)

			return () => {
				window.removeEventListener('scroll', listener)
			}
		}
	}, [handler, enabled])
}
