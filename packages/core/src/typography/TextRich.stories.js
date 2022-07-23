import storify from '../../dev/story'
import TextRich from './TextRich'

const Story = (args) => <TextRich {...args} />

export { Story as TextRich }
export default storify({
	title: 'core/typography/textrich',
	component: TextRich,
	args: {
		value: '<b>Text Rich</b>'
	}
})
