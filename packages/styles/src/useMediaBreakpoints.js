import { useState, useEffect, useMemo } from 'react'
import { useStyles } from '@hs/styles'

export default () => {
	const { theme } = useStyles()
	const mqls = useMemo(
		() =>
			theme.breakpoints.keys.map((breakpoint) => {
				const query = theme.breakpoints.above(breakpoint).replace('@media ', '')
				return {
					breakpoint,
					mql: window.matchMedia(query)
				}
			}),
		[theme.breakpoints]
	)

	const [matches, setMatches] = useState(() =>
		mqls.reduce(
			(acc, curr) => ({
				...acc,
				[curr.breakpoint]: curr.mql.matches
			}),
			{}
		)
	)

	/**
	 * for each of the available breakpoints
	 * we hook up a listener that waits for changes
	 * and updates the matches state when necessary
	 * {
	 *   'xs': false,
	 *   'md': false,
	 *    ...
	 * }
	 * the matches state holds an object with which
	 * breakpoints are currently active
	 *
	 * Example : { xs: true, sm: true, md: false, lg: false, xl: false }
	 */

	useEffect(() => {
		const removeListeners = mqls.map(({ breakpoint, mql }) => {
			const listener = (next) => {
				setMatches((prev) => ({
					...prev,
					[breakpoint]: next.matches
				}))
			}
			mql.addListener(listener)
			return () => mql.removeListener(listener)
		})

		return () => {
			removeListeners.forEach((removeListener) => removeListener())
		}
	}, [mqls])

	return matches
}
