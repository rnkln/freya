import storify from '../../dev/story'
import TreeChevron from './TreeChevron'

const Story = (args) => <TreeChevron {...args} />

export { Story as TreeChevron }
export default storify({
	title: 'core/tree/treechevron',
	component: TreeChevron,
	args: {
		depth: 0,
		expanded: false
	}
})
