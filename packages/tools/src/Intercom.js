import { useEffect } from 'react'
import PropTypes from 'prop-types'

const Intercom = ({ id, ...otherProps }) => {
	useEffect(() => {
		if (window.Intercom) {
			window.Intercom('update', otherProps)
		}
	})

	useEffect(() => {
		if (!window.Intercom) {
			window.Intercom = (...args) => window.Intercom.c(args)
			window.Intercom.q = []
			window.Intercom.c = (args) => window.Intercom.q.push(args)

			const script = document.createElement('script')
			script.async = 1
			script.src = `https://widget.intercom.io/widget/${id}`
			document.head.appendChild(script)
			window.Intercom('boot', { app_id: id, ...otherProps })

			return () => {
				window.Intercom('shutdown')
				delete window.Intercom
			}
		}
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	return null
}

Intercom.propTypes = {
	id: PropTypes.string.isRequired
}

export default Intercom
