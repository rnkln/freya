import PropTypes from 'prop-types'
import { ChevronLeft, ChevronRight } from '@hs/icons'
import Flex from '../layout/Flex'
import Text from '../typography/Text'
import Fade from '../transitions/Fade'
import PaginationBreak from './PaginationBreak'
import PaginationLimit from './PaginationLimit'
import PaginationButton from './PaginationButton'
import PaginationSpinner from './PaginationSpinner'

const PaginationNumbered = ({
	page = 1,
	step = 1,
	limit,
	limitLabel,
	limitOptions,
	total = 0,
	totalLabel,
	loading,
	nextLabel,
	prevLabel,
	onChange
}) => {
	const pages = Math.max(1, Math.ceil(total / limit))
	const minDelta = page < 4 ? 4 - page : 0
	const maxDelta = pages - page < 3 ? 3 - (pages - page) : 0
	const min = pages <= 7 ? 1 : Math.max(1, page - step - maxDelta)
	const max = pages <= 7 ? pages + 1 : Math.min(pages, page + step + minDelta) + 1
	const range = Array.from({ length: max - min }, (value, index) => min + index)
	const showPagesButtons = pages > 1

	const handleNext = () => onChange({ page: page + 1, limit })
	const handlePrev = () => onChange({ page: page - 1, limit })
	const handleJump = (value) => onChange({ page: value, limit })
	const handleLimit = (event) => onChange({ page: 1, limit: event.target.value })

	return (
		<Flex alignItems='center' justifyContent='end' gap={2}>
			<Fade in={loading}>
				<PaginationSpinner />
			</Fade>

			<Text value={totalLabel} />

			<PaginationLimit
				value={limit}
				label={limitLabel}
				options={limitOptions}
				onChange={handleLimit}
			/>

			{showPagesButtons && (
				<PaginationButton
					value={prevLabel}
					icon={ChevronLeft}
					disabled={page <= 1 || !pages}
					onClick={handlePrev}
				/>
			)}

			{showPagesButtons && !range.includes(1) && (
				<PaginationButton value={1} onClick={() => handleJump(1)} />
			)}
			{showPagesButtons && !range.includes(1) && min - 1 !== 1 && <PaginationBreak />}
			{showPagesButtons &&
				range.map((n) => {
					if (n === page) {
						return <PaginationBreak key={n} value={n} />
					}

					return <PaginationButton key={n} value={n} onClick={() => handleJump(n)} />
				})}
			{showPagesButtons && !range.includes(pages) && max !== pages && <PaginationBreak />}
			{showPagesButtons && !range.includes(pages) && (
				<PaginationButton value={pages} onClick={() => handleJump(pages)} />
			)}

			{showPagesButtons && (
				<PaginationButton
					value={nextLabel}
					adornment={ChevronRight}
					disabled={page === pages || !pages}
					onClick={handleNext}
				/>
			)}
		</Flex>
	)
}

PaginationNumbered.propTypes = {
	page: PropTypes.number,
	step: PropTypes.number,
	limit: PropTypes.number,
	limitLabel: PropTypes.string,
	limitOptions: PropTypes.arrayOf(PropTypes.number),
	total: PropTypes.number,
	totalLabel: PropTypes.string,
	loading: PropTypes.bool,
	nextLabel: PropTypes.string,
	prevLabel: PropTypes.string,
	onChange: PropTypes.func
}

export default PaginationNumbered
