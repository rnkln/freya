import storify from '../../dev/story'
import Alert from './Alert'

const Story = (args) => <Alert {...args} />

export { Story as Alert }
export default storify({
	title: 'core/alert/alert',
	component: Alert,
	argTypes: {
		onClose: { action: 'closed' }
	},
	args: {
		title: 'High Risk of Fraud',
		value: 'We have detected several orders that has a high probability of being fraudulent',
		severity: 'error'
	}
})
