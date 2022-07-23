import { useState, useCallback, useMemo, forwardRef, memo, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { rewriteEventTarget } from '@hs/utils'
import { Paper } from '../surface'
import DateRangePickerContext from './DateRangePickerContext'
import CalendarWrapper from './CalendarWrapper'
import CalendarHeader from './CalendarHeader'
import CalendarBody from './CalendarBody'
import CalendarFooter from './CalendarFooter'
import { getPrevMonth, getNextMonth } from './calendar-utils'
import { getViewedDate, getVisibleMonths, getNextSelectedDates } from './date-range-picker-utils'

const DateRangePicker = memo(
	forwardRef(
		(
			{
				from = new Date(),
				to = new Date(),
				locale,
				direction = 'horizontal',
				min = 0,
				max = 8640000000000000,
				showHours = true,
				placeholder = '',
				onChange,
				onAccept,
				onCancel,
				onClear,
				accept,
				cancel,
				clear,
				wrapperComponent: WrapperComponent = CalendarWrapper,
				headerComponent: HeaderComponent = CalendarHeader,
				bodyComponent: BodyComponent = CalendarBody,
				footerComponent: FooterComponent = CalendarFooter,
				...otherProps
			},
			ref
		) => {
			const onChangeRef = useRef()
			onChangeRef.current = onChange

			// the value of the range picker
			// an array that hold from and to
			const [selectedDates, setSelectedDates] = useState([new Date(from), new Date(to)])
			const handleSelectedDates = useCallback(
				(event, date) =>
					setSelectedDates((prevSelectedDates) =>
						getNextSelectedDates(prevSelectedDates, date, from, to)
					),
				[from, to]
			)

			// the date under the mouse cursor
			// used for hightlighing the dates between the first selected and the current highlighted date
			const [highlightedDate, setHighlightedDate] = useState()

			// the two months that are visible in the calendar body
			const [viewedDate, setViewedDate] = useState(() => getViewedDate(selectedDates))
			const visibleMonths = useMemo(() => getVisibleMonths(viewedDate), [viewedDate])
			const increaseViewedMonth = useCallback(() => setViewedDate(getNextMonth), [])
			const decreaseViewedMonth = useCallback(() => setViewedDate(getPrevMonth), [])

			const handleAccept = (ev) =>
				onAccept?.(rewriteEventTarget(ev, { value: selectedDates }))
			const handleCancel = onCancel
			const handleClear = onClear

			useEffect(() => {
				onChangeRef?.current?.(selectedDates)
			}, [selectedDates])

			return (
				<DateRangePickerContext.Provider
					value={{
						locale,
						direction,
						min,
						max,
						showHours,
						placeholder,
						onChange,
						handleAccept,
						handleCancel,
						handleClear,
						accept,
						cancel,
						clear,
						selectedDates,
						handleSelectedDates,
						viewedDate,
						setViewedDate,
						increaseViewedMonth,
						decreaseViewedMonth,
						highlightedDate,
						setHighlightedDate,
						visibleMonths
					}}
				>
					<Paper ref={ref} {...otherProps}>
						<WrapperComponent>
							{HeaderComponent !== null && <HeaderComponent />}
							<BodyComponent />
							{FooterComponent !== null && <FooterComponent />}
						</WrapperComponent>
					</Paper>
				</DateRangePickerContext.Provider>
			)
		}
	)
)

DateRangePicker.displayName = 'DateRangePicker'

DateRangePicker.propTypes = {
	from: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
	to: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
	locale: PropTypes.string.isRequired,
	direction: PropTypes.oneOf(['horizontal', 'vertical']),
	min: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
	max: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
	showHours: PropTypes.bool,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	onAccept: PropTypes.func,
	onCancel: PropTypes.func,
	onClear: PropTypes.func,
	accept: PropTypes.string,
	cancel: PropTypes.string,
	clear: PropTypes.string,
	wrapperComponent: PropTypes.elementType,
	headerComponent: PropTypes.elementType,
	bodyComponent: PropTypes.elementType,
	footerComponent: PropTypes.elementType
}

export default DateRangePicker
