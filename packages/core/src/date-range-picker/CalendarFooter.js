import { Flex, Divider } from '../layout'
import { Button } from '../button'
import { useDateRangePicker } from './DateRangePickerContext'

const CalendarFooter = () => {
	const { selectedDates, accept, cancel, clear, handleAccept, handleCancel, handleClear } =
		useDateRangePicker()

	return (
		<>
			<Divider />
			<Flex>
				<Flex flex={1}>
					{clear && handleClear && (
						<Button
							value={clear}
							color='inherit'
							onClick={handleClear}
							disabled={selectedDates.length === 0}
						/>
					)}
				</Flex>
				<Flex flex={1} gap={1} direction='row-reverse'>
					<Button
						value={accept}
						color='primary'
						variant='contained'
						onClick={handleAccept}
						disabled={selectedDates.length !== 2}
					/>
					{cancel && handleCancel && (
						<Button value={cancel} color='inherit' onClick={handleCancel} />
					)}
				</Flex>
			</Flex>
		</>
	)
}

export default CalendarFooter
