import storify from '../../dev/story'
import Checkbox from './Checkbox'

const Story = (args) => <Checkbox {...args} />

export { Story as Checkbox }
export default storify({
	title: 'core/checkbox/checkbox',
	component: Checkbox,
	args: {
		label: 'Checkbox'
	}
})
