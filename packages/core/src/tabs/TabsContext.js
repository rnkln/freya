import { createContext } from 'react'

const TabsContext = createContext({
	active: 0,
	setActive: () => null
})

export default TabsContext
