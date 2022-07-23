import storify from '../../dev/story'
import Radio from './Radio'

const Story = (args) => <Radio {...args} />

export { Story as Radio }
export default storify({
	title: 'core/radio/radio',
	component: Radio,
	args: {
		label: 'Radio'
	}
})
