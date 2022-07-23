import storify, { argTypes } from '../../dev/story'
import Marker from './Marker'

const Story = (args) => <Marker {...args} />

export { Story as Marker }
export default storify({
	title: 'core/typography/marker',
	component: Marker,
	argTypes: {
		color: argTypes.color
	},
	args: {
		value: 'phrase with some amazing mark styling',
		match: 'amazing'
	}
})
