import { useStyles } from '@hs/styles'
import useMatchMedia from './useMatchMedia'

/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
export default () => {
	const { theme } = useStyles()
	const breakpoints = theme.breakpoints.keys

	return breakpoints.reduce((output, breakpoint) => {
		const media = theme.breakpoints.below(breakpoint).replace('@media ', '')
		const matches = useMatchMedia(media)

		if (matches) {
			return [...output, breakpoint]
		}

		return output
	}, [])
}
