import storify, { argTypes } from '../../dev/story'
import Button from './Button'

const Story = (args) => <Button {...args} />

export { Story as Button }
export default storify({
	title: 'core/button/button',
	component: Button,
	argTypes: {
		color: argTypes.color,
		onClick: { action: 'clicked' }
	},
	args: {
		value: 'Click me!'
	}
})
