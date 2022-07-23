import storify, { argTypes } from '../../dev/story'
import RadioBase from './RadioBase'

const Story = (args) => <RadioBase {...args} />

export { Story as RadioBase }
export default storify({
	title: 'core/radio/radiobase',
	component: RadioBase,
	argTypes: {
		color: argTypes.color,
		onChange: { action: 'changed' }
	}
})
