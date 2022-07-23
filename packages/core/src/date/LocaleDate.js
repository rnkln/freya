import PropTypes from 'prop-types'
import { toLocaleDateString, toISOString } from './date-utils'

const LocaleDate = ({
	value,
	locale,
	era,
	year = 'numeric',
	month = 'short',
	weekday,
	day = 'numeric',
	hour = '2-digit',
	minute = '2-digit',
	second,
	timeZoneName
}) => {
	const iso = toISOString(value)
	const datetime = toLocaleDateString(value, locale, {
		era,
		year,
		month,
		weekday,
		day,
		hour,
		minute,
		second,
		timeZoneName
	})

	return <time dateTime={iso}>{datetime}</time>
}

LocaleDate.propTypes = {
	value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number, PropTypes.string]),
	locale: PropTypes.string,
	era: PropTypes.oneOf(['long', 'short', 'narrow']),
	year: PropTypes.oneOf(['numeric', '2-digit']),
	month: PropTypes.oneOf(['numeric', '2-digit', 'long', 'short', 'narrow']),
	weekday: PropTypes.oneOf(['long', 'short', 'narrow']),
	day: PropTypes.oneOf(['numeric', '2-digit']),
	hour: PropTypes.oneOf(['numeric', '2-digit']),
	minute: PropTypes.oneOf(['numeric', '2-digit']),
	second: PropTypes.oneOf(['numeric', '2-digit']),
	timeZoneName: PropTypes.oneOf(['long', 'short'])
}

export default LocaleDate
