import storify from '../../dev/story'
import TextareaBase from './TextareaBase'

const Story = (args) => <TextareaBase {...args} />

export { Story as TextareaBase }
export default storify({
	title: 'core/textarea/textareabase',
	component: TextareaBase,
	args: {
		placeholder: 'Type here!'
	}
})
