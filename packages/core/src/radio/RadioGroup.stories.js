import storify from '../../dev/story'
import Radio from './Radio'
import RadioGroup from './RadioGroup'

const Story = (args) => (
	<RadioGroup {...args}>
		<Radio label='Red' value='red' />
		<Radio label='Green' value='green' />
		<Radio label='Blue' value='blue' />
	</RadioGroup>
)

export { Story as RadioGroup }
export default storify({
	title: 'core/radio/radiogroup',
	component: RadioGroup,
	argTypes: {
		onChange: { action: 'changed' }
	}
})
