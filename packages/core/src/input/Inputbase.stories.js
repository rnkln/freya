import storify from '../../dev/story'
import InputBase from './InputBase'

const Story = (args) => <InputBase {...args} />

export { Story as InputBase }
export default storify({
	title: 'core/input/inputbase',
	component: InputBase,
	args: {
		placeholder: 'Type here!'
	}
})
