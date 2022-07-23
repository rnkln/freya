import { createTheme, ThemeProvider, createCache, TssCacheProvider } from '@hs/styles'

const theme = createTheme()
const tssCache = createCache({
	key: 'tss',
	stylisPlugins: []
})

const withTheme = (Story) => (
	<TssCacheProvider value={tssCache}>
		<ThemeProvider theme={theme}>
			<Story />
		</ThemeProvider>
	</TssCacheProvider>
)

const argTypes = {
	color: {
		control: {
			type: 'select',
			options: Object.keys(theme.palette.values)
		}
	},
	onClick: {
		action: 'clicked'
	}
}

export { theme, argTypes }
export default (config) => ({
	decorators: [withTheme],
	...config
})
