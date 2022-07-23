import storify from '../../dev/story'
import Textarea from './Textarea'

const Story = (args) => <Textarea {...args} />

export { Story as Textarea }
export default storify({
	title: 'core/textarea/textarea',
	component: Textarea,
	args: {
		label: 'Textarea',
		placeholder: 'Type here!'
	}
})
