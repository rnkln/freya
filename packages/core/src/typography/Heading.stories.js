import storify from '../../dev/story'
import Heading from './Heading'

const Story = (args) => <Heading {...args} />

export { Story as Heading }
export default storify({
	title: 'core/typography/heading',
	component: Heading,
	args: {
		value: 'Heading'
	}
})
