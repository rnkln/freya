import { useState } from 'react'
import useInterval from './useInterval'

export default ({ interval = 0 } = {}) => {
	const [, setState] = useState({})
	const refresh = () => setState({})
	const enabled = Boolean(interval)

	useInterval(refresh, interval, { enabled })
	return refresh
}
