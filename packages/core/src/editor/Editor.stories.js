import storify from '../../dev/story'
import Editor from './Editor'

const Story = (args) => <Editor {...args} />

export { Story as Editor }
export default storify({
	title: 'core/editor/editor',
	component: Editor,
	args: {
		label: 'Editor'
	},
	argTypes: {
		onChange: { action: 'changed' }
	}
})
