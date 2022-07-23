import { createTheme, ThemeProvider, createCache, TssCacheProvider } from '@hs/styles'
import { render } from '@testing-library/react'

const theme = createTheme()
const tssCache = createCache({
	key: 'tss',
	stylisPlugins: []
})

const renderWithTheme = (component) =>
	render(
		<TssCacheProvider value={tssCache}>
			<ThemeProvider theme={theme}>{component}</ThemeProvider>
		</TssCacheProvider>
	)

export * from '@testing-library/react'
export { renderWithTheme }
