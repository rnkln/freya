import { useState, useEffect } from 'react'

export default (query) => {
	const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

	useEffect(() => {
		const list = window.matchMedia(query)
		const listener = (next) => setMatches(next.matches)

		list.addListener(listener)
		return () => list.removeListener(listener)
	}, [query])

	return matches
}
