import storify from '../../dev/story'
import List from './List'
import ListItem from './ListItem'

const Story = (args) => (
	<List {...args}>
		<ListItem>list item</ListItem>
		<ListItem>list item</ListItem>
		<ListItem>list item</ListItem>
	</List>
)

export { Story as List }
export default storify({
	title: 'core/layout/list',
	component: List
})
