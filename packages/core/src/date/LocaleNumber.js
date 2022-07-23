import PropTypes from 'prop-types'

const LocaleNumber = ({
	value,
	locale,
	style,
	notation,
	unit,
	unitDisplay,
	currency,
	currencyDisplay,
	minimumIntegerDigits,
	minimumFractionDigits,
	maximumFractionDigits,
	minimumSignificantDigits,
	maximumSignificantDigits
}) =>
	value.toLocaleString(locale, {
		style,
		notation,
		unit,
		unitDisplay,
		currency,
		currencyDisplay,
		minimumIntegerDigits,
		minimumFractionDigits,
		maximumFractionDigits,
		minimumSignificantDigits,
		maximumSignificantDigits
	})

LocaleNumber.propTypes = {
	value: PropTypes.number.isRequired,
	style: PropTypes.oneOf(['unit', 'decimal', 'currency', 'percent']),
	notation: PropTypes.oneOf(['standard', 'scientific', 'engineering', 'compact']),
	unit: PropTypes.string,
	unitDisplay: PropTypes.oneOf(['long', 'short', 'narrow']),
	currency: PropTypes.string,
	currencyDisplay: PropTypes.oneOf(['symbol', 'code', 'name']),
	minimumIntegerDigits: PropTypes.number,
	minimumFractionDigits: PropTypes.number,
	maximumFractionDigits: PropTypes.number,
	minimumSignificantDigits: PropTypes.number,
	maximumSignificantDigits: PropTypes.number
}

export default LocaleNumber
