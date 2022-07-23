import storify from '../../dev/story'
import PaginationNumbered from './PaginationNumbered'

const Story = (args) => <PaginationNumbered {...args} />

export { Story as PaginationNumbered }
export default storify({
	title: 'core/pagination/paginationnumbered',
	component: PaginationNumbered,
	args: {
		limitLabel: 'Limit',
		totalLabel: 'Total 10',
		nextLabel: 'Next',
		prevLabel: 'Prev',
		total: 100,
		limit: 10
	}
})
