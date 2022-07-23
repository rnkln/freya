import storify, { argTypes } from '../../dev/story'
import CheckboxBase from './CheckboxBase'

const Story = (args) => <CheckboxBase {...args} />

export { Story as CheckboxBase }
export default storify({
	title: 'core/checkbox/checkboxbase',
	component: CheckboxBase,
	argTypes: {
		color: argTypes.color,
		onChange: { action: 'changed' }
	}
})
