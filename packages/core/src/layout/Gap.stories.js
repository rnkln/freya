import storify from '../../dev/story'
import Gap from './Gap'

const Story = (args) => <Gap style={{ background: 'red' }} {...args} />

export { Story as Gap }
export default storify({
	title: 'core/layout',
	component: Gap
})
