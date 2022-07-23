import storify from '../../dev/story'
import Input from './Input'

const Story = (args) => <Input {...args} />

export { Story as Input }
export default storify({
	title: 'core/input/input',
	component: Input,
	args: {
		label: 'Input',
		placeholder: 'Type here!'
	}
})
