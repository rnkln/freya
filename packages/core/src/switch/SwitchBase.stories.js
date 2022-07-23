import storify, { argTypes } from '../../dev/story'
import SwitchBase from './SwitchBase'

const Story = (args) => <SwitchBase {...args} />

export { Story as SwitchBase }
export default storify({
	title: 'core/switch/switchbase',
	component: SwitchBase,
	argTypes: {
		color: argTypes.color,
		onChange: { action: 'changed' }
	}
})
