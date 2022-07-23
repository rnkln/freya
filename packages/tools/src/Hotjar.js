import { useEffect } from 'react'
import PropTypes from 'prop-types'

const Hotjar = ({ id, sv }) => {
	useEffect(() => {
		if (!window.hj) {
			window.hj = (...args) => window.hj.q.push(args)
			window.hj.q = []
			window._hjSettings = {
				hjid: id,
				hjsv: sv
			}

			const script = document.createElement('script')
			script.async = 1
			script.src = `https://static.hotjar.com/c/hotjar-${id}.js?sv=${sv}`
			document.head.appendChild(script)

			return () => {
				delete window.hj
				delete window._hjSettings
			}
		}
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	return null
}

Hotjar.propTypes = {
	id: PropTypes.string.isRequired,
	sv: PropTypes.number.isRequired
}

export default Hotjar
