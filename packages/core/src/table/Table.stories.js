import { useBelow } from '@hs/styles'
import { DotsHorizontal } from '@hs/icons'
import storify from '../../dev/story'
import Button from '../button/Button'
import CheckboxBase from '../checkbox/CheckboxBase'
import { Table, TableHead, TableBody, TableRow, TableCell } from './index'

const Head = () => {
	const isMobile = useBelow('sm')

	return isMobile ? (
		<TableRow>
			<TableCell>column</TableCell>
		</TableRow>
	) : (
		<TableRow>
			<TableCell />
			<TableCell>column</TableCell>
			<TableCell />
		</TableRow>
	)
}

const Row = ({ number }) => {
	const isMobile = useBelow('sm')

	return isMobile ? (
		<TableRow>
			<TableCell>
				<Button icon={DotsHorizontal} />
			</TableCell>
		</TableRow>
	) : (
		<TableRow>
			<TableCell>
				<CheckboxBase />
			</TableCell>
			<TableCell>row {number} text</TableCell>
			<TableCell>
				<Button value='button' />
			</TableCell>
		</TableRow>
	)
}

const Story = (args) => (
	<Table {...args}>
		<TableHead>
			<Head />
		</TableHead>
		<TableBody>
			{Array.from({ length: 5 }, (_, i) => (
				<Row key={i} number={i + 1} />
			))}
		</TableBody>
	</Table>
)

export { Story as Table }
export default storify({
	title: 'core/table/table',
	component: Table
})
