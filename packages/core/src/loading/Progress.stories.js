import storify from '../../dev/story'
import Progress from './Progress'

const Story = (args) => <Progress {...args} style={{ width: '200px' }} />

export { Story as Progress }
export default storify({
	title: 'core/loading/progress',
	component: Progress
})
