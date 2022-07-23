import storify from '../../dev/story'
import EditorBase from './EditorBase'

const Story = (args) => <EditorBase {...args} />

export { Story as EditorBase }
export default storify({
	title: 'core/editor/editorbase',
	component: EditorBase,
	argTypes: {
		onChange: { action: 'changed' }
	}
})
