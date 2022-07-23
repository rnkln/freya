import PropTypes from 'prop-types'
import { useRefresh } from '@hs/utils'
import { toLocaleDateStringRelative, toISOString } from './date-utils'

const LocaleDateRelative = ({ auto = true, rate = 10000, value, locale, daysTolerance = 7 }) => {
	useRefresh(rate, auto)

	const iso = toISOString(value)
	const datetime = toLocaleDateStringRelative(value, locale, daysTolerance)

	return <time dateTime={iso}>{datetime}</time>
}

LocaleDateRelative.propTypes = {
	auto: PropTypes.bool,
	rate: PropTypes.number,
	value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number, PropTypes.string]),
	locale: PropTypes.string,
	daysTolerance: PropTypes.number
}

export default LocaleDateRelative
