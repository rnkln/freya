import storify from '../../dev/story'
import Scroll from './Scroll'

const Story = (args) => <Scroll {...args} />

export { Story as Scroll }
export default storify({
	title: 'core/layout/scroll',
	component: Scroll
})
