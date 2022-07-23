import { useState, useEffect } from 'react'

export default (value) => {
	const [current, setCurrent] = useState(value)

	useEffect(() => {
		if (value) {
			setCurrent(value)
		}
	}, [value])

	return current
}
