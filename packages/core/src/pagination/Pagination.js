import PropTypes from 'prop-types'
import { ChevronLeft, ChevronRight } from '@hs/icons'
import Flex from '../layout/Flex'
import Paragraph from '../typography/Paragraph'
import Button from '../button/Button'
import PaginationLimit from './PaginationLimit'
import PaginationSpinner from './PaginationSpinner'

const Pagination = ({
	compact,
	loading,
	options,
	pageCount,
	itemCount,
	currentPage,
	nextLabel,
	previousLabel,
	resultsLabel,
	limitLabel,
	limitValue,
	onChange
}) => (
	<Flex wrap='wrap' alignItems='center' justifyContent='end' gap={2}>
		{loading && <PaginationSpinner />}

		{itemCount > 0 && <Paragraph value={resultsLabel} />}

		{!compact && (
			<Flex wrap='wrap' alignItems='center' justifyContent='end' gap={2}>
				<PaginationLimit
					value={limitValue}
					options={options}
					limitLabel={limitLabel}
					onChange={(event) => onChange(currentPage, event.target.value)}
				/>

				<Button
					value={previousLabel}
					onClick={() => onChange(currentPage - 1, limitValue)}
					disabled={currentPage === 1 || pageCount <= 0}
					variant='outlined'
					color='inherit'
					icon={ChevronLeft}
				/>

				<Button
					value={nextLabel}
					onClick={() => onChange(currentPage + 1, limitValue)}
					disabled={currentPage === pageCount || pageCount <= 0}
					variant='outlined'
					color='inherit'
					dir='ltr'
					icon={ChevronRight}
				/>
			</Flex>
		)}
	</Flex>
)

Pagination.propTypes = {
	compact: PropTypes.bool,
	loading: PropTypes.bool,
	options: PropTypes.array,
	currentPage: PropTypes.number.isRequired,
	limitLabel: PropTypes.string.isRequired,
	limitValue: PropTypes.number.isRequired,
	pageCount: PropTypes.number.isRequired,
	itemCount: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
	previousLabel: PropTypes.string.isRequired,
	nextLabel: PropTypes.string.isRequired,
	resultsLabel: PropTypes.string.isRequired
}

export default Pagination
