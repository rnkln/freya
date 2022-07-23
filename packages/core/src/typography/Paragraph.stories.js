import storify from '../../dev/story'
import Paragraph from './Paragraph'

const Story = (args) => <Paragraph {...args} />

export { Story as Paragraph }
export default storify({
	title: 'core/typography/paragraph',
	component: Paragraph,
	args: {
		value: 'Paragraph'
	}
})
