import { createContext } from 'react'
import BreakpointsProvider from './BreakpointsProvider'

export const ThemeContext = createContext()

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ theme, children }) => (
	<ThemeContext.Provider value={theme}>
		<BreakpointsProvider>{children}</BreakpointsProvider>
	</ThemeContext.Provider>
)

export default ThemeProvider
