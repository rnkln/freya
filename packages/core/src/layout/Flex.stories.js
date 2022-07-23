import storify from '../../dev/story'
import Flex from './Flex'

const FlexChild = ({ lines = 1, width = 50 }) => (
	<Flex
		direction='column'
		gap={1}
		alignItems='center'
		justifyContent='center'
		style={{ padding: 8, border: '1px solid red', width }}
	>
		{new Array(lines).fill().map((v, index) => (
			<div key={index}>child</div>
		))}
	</Flex>
)

const Story = ({ direction, ...otherArgs }) => {
	const width = direction?.includes('column') ? 100 : 400 ?? 100
	const height = direction?.includes('column') ? 400 : 100 ?? 400

	return (
		<Flex
			direction={direction}
			style={{ padding: 8, border: '1px dashed blue', width, height }}
			{...otherArgs}
		>
			<FlexChild />
			<FlexChild lines={2} />
			<FlexChild />
		</Flex>
	)
}

export { Story as Flex }
export default storify({
	title: 'core/layout/flex',
	component: Flex
})
