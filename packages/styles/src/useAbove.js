import { useContext } from 'react'
import { BreakpointsContext } from './BreakpointsProvider'

export default (breakpoint) => {
	const mediaBreakpoints = useContext(BreakpointsContext)

	return mediaBreakpoints[breakpoint]
}
