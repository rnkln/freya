import storify from '../../dev/story'
import Skeleton from './Skeleton'

const Story = (args) => <Skeleton {...args} />

export { Story as Skeleton }
export default storify({
	title: 'core/loading/skeleton',
	component: Skeleton,
	args: {
		width: 30,
		height: 10
	}
})
