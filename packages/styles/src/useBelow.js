import { useContext } from 'react'
import { useStyles } from '@hs/styles'
import { BreakpointsContext } from './BreakpointsProvider'

export default (breakpoint) => {
	const { theme } = useStyles()
	const mediaBreakpoints = useContext(BreakpointsContext)
	const { keys } = theme.breakpoints

	if (mediaBreakpoints[keys[keys.indexOf(breakpoint) + 1]] === false) {
		return true
	}

	return false
}
