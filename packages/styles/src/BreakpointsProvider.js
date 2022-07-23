import { createContext } from 'react'
import useMediaBreakpoints from './useMediaBreakpoints'

export const BreakpointsContext = createContext()

const BreakpointsProvider = (props) => {
	const mediaBreakpoints = useMediaBreakpoints()

	return <BreakpointsContext.Provider value={mediaBreakpoints} {...props} />
}

export default BreakpointsProvider
