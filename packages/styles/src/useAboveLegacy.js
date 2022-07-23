import { useStyles } from '@hs/styles'
import useMatchMedia from './useMatchMedia'

export default (breakpoint) => {
	const { theme } = useStyles()
	const media = theme.breakpoints.above(breakpoint).replace('@media ', '')

	return useMatchMedia(media)
}
