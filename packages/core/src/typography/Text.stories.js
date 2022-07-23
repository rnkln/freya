import storify from '../../dev/story'
import Text from './Text'

const Story = (args) => <Text {...args} />

export { Story as Text }
export default storify({
	title: 'core/typography/text',
	component: Text,
	args: {
		value: 'Text'
	}
})
