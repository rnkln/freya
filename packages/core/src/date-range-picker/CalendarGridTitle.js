import { memo } from 'react'
import PropTypes from 'prop-types'
import { Flex } from '../layout'
import { Text } from '../typography'
import CalendarButton from './CalendarButton'

const CalendarGridTitle = memo(
	({ value, increaseViewedMonth, decreaseViewedMonth, showPrevButton, showNextButton }) => (
		<Flex justifyContent='space-between' alignItems='center' alignSelf='stretch'>
			<Flex>
				{showPrevButton && (
					<CalendarButton variant='text' value='≪' onClick={decreaseViewedMonth} />
				)}
			</Flex>
			<Text weight='semibold'>{value}</Text>
			<Flex>
				{showNextButton && (
					<CalendarButton variant='text' value='≫' onClick={increaseViewedMonth} />
				)}
			</Flex>
		</Flex>
	)
)

CalendarGridTitle.displayName = 'CalendarGridTitle'

CalendarGridTitle.propTypes = {
	value: PropTypes.string.isRequired,
	showPrevButton: PropTypes.bool.isRequired,
	showNextButton: PropTypes.bool.isRequired,
	increaseViewedMonth: PropTypes.func.isRequired,
	decreaseViewedMonth: PropTypes.func.isRequired
}

export default CalendarGridTitle
