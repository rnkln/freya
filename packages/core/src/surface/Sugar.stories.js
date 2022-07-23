import storify, { argTypes } from '../../dev/story'
import Sugar from './Sugar'

const Story = (args) => <Sugar {...args} />

export { Story as Sugar }
export default storify({
	title: 'core/surface/sugar',
	component: Sugar,
	argTypes: {
		color: argTypes.color
	},
	args: {
		children: 'Children of Sugar'
	}
})
