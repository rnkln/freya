import storify from '../../dev/story'
import Divider from './Divider'

const Story = (args) => <Divider {...args} />

export { Story as Divider }
export default storify({
	title: 'core/layout/divider',
	component: Divider
})
