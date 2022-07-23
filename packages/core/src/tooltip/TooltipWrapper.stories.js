import storify, { argTypes } from '../../dev/story'
import TooltipWrapper from './TooltipWrapper'

const Story = (args) => (
	<TooltipWrapper {...args}>
		<div style={{ border: '2px solid red', padding: 5 }}>Hover me!</div>
	</TooltipWrapper>
)

export { Story as TooltipWrapper }
export default storify({
	title: 'core/tooltip/tooltipwrapper',
	component: TooltipWrapper,
	argTypes: {
		color: argTypes.color
	},
	args: {
		value: "This is the tooltip's content"
	}
})
