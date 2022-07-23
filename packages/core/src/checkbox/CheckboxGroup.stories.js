import storify from '../../dev/story'
import Checkbox from './Checkbox'
import CheckboxGroup from './CheckboxGroup'

const Story = (args) => (
	<CheckboxGroup {...args} value={['red', 'green']}>
		<Checkbox label='Red' value='red' />
		<Checkbox label='Green' value='green' />
		<Checkbox label='Blue' value='blue' />
	</CheckboxGroup>
)

export { Story as CheckboxGroup }
export default storify({
	title: 'core/checkbox/checkboxgroup',
	component: CheckboxGroup,
	argTypes: {
		onChange: { action: 'changed' }
	}
})
