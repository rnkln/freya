import { useEffect } from 'react'
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'

export default (ref, { enabled = true, reserveScrollBar = true } = {}) => {
	useEffect(() => {
		if (ref.current && enabled) {
			const element = ref.current

			disableBodyScroll(element, {
				reserveScrollBarGap: reserveScrollBar
			})

			return () => {
				enableBodyScroll(element)
			}
		}
	}, [ref, enabled, reserveScrollBar])
}
