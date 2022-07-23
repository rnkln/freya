import storify from '../../dev/story'
import Paper from './Paper'

const Story = (args) => <Paper {...args} />

export { Story as Paper }
export default storify({
	title: 'core/surface/paper',
	component: Paper,
	args: {
		children: 'Children of Paper'
	}
})
