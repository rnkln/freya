import storify, { argTypes } from '../../dev/story'
import Avatar from './Avatar'

const Story = (args) => <Avatar {...args} />

export { Story as Avatar }
export default storify({
	title: 'core/avatar/avatar',
	component: Avatar,
	argTypes: {
		color: argTypes.color
	},
	args: {
		value: 'SU',
		src: 'https://okawari.dk/wp-content/uploads/2018/01/avatar-placeholder.png'
	}
})
