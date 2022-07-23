import storify, { theme } from '../../dev/story'
import Container from './Container'

const Story = (args) => <Container style={{ border: '1px solid red' }} {...args} />

export { Story as Container }
export default storify({
	title: 'core/layout/container',
	component: Container,
	argTypes: {
		width: {
			control: {
				type: 'select',
				options: Object.keys(theme.breakpoints.values)
			}
		}
	}
})
