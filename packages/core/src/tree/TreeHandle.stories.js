import storify from '../../dev/story'
import TreeHandle from './TreeHandle'

const Story = (args) => <TreeHandle {...args} />

export { Story as TreeHandle }
export default storify({
	title: 'core/tree/treehandle',
	component: TreeHandle
})
