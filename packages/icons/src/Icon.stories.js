import { createTheme, ThemeProvider, createCache, TssCacheProvider } from '@hs/styles'
import Icon from './Icon'

const theme = createTheme()
const tssCache = createCache({
	key: 'tss',
	stylisPlugins: []
})

const withTheme = (story) => (
	<TssCacheProvider value={tssCache}>
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	</TssCacheProvider>
)

/*
const iconsContext = require.context('../src/icons', false, /\.js$/)
const icons = iconsContext.keys().map((file) => {
	const Icon = iconsContext(file).default
	const name = file.replace('.js', '').replace('./', '')
	return <Icon key={name} style={{ pointerEvents: 'all' }} />
})
*/

window.theme = theme

const Story = (args) => (
	<Icon title='Alert' path='M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z' {...args} />
)

export { Story as Icon }
export default {
	title: 'icons/icon',
	component: Icon,
	decorators: [withTheme]
}

/*
export const Gallery = () => (
	<div style={{ display: 'grid', gap: '16px', fontSize: '24px', gridTemplateColumns: 'repeat(auto-fit, 24px)' }}>
		{ icons }
	</div>
)
*/
