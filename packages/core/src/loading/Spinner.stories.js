import storify from '../../dev/story'
import Spinner from './Spinner'

const Story = (args) => <Spinner {...args} />

export { Story as Spinner }
export default storify({
	title: 'core/loading/spinner',
	component: Spinner
})
