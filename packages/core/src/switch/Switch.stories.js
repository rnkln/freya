import storify from '../../dev/story'
import Switch from './Switch'

const Story = (args) => <Switch {...args} />

export { Story as Switch }
export default storify({
	title: 'core/switch/switch',
	component: Switch,
	args: {
		label: 'Switch'
	}
})
