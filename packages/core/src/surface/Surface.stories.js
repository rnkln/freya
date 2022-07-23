import storify from '../../dev/story'
import Surface from './Surface'

const Story = (args) => <Surface {...args} />

export { Story as Surface }
export default storify({
	title: 'core/surface/surface',
	component: Surface,
	args: {
		children: 'Children of Paper'
	}
})
