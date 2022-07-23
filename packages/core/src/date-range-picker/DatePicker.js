import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { Calendar, ChevronDown } from '@hs/icons'
import { useMenuState } from '../menu'
import { Button } from '../button'
import { Float } from '../layout'
import { formatDate } from './calendar-utils'
import DatePickerPaper from './DatePickerPaper'

const useStyles = makeStyles({ name: 'DatePicker' })((theme) => ({
	root: {
		border: `1px solid ${theme.palette.common.three[300]}`
	}
}))

const DatePicker = ({ name, value, locale, onChange, placeholder = '', ...otherProps }) => {
	const { classes } = useStyles()
	const { open, anchor, handleToggle, handleClose } = useMenuState()
	const formattedValue = useMemo(
		() => formatDate(value, locale, placeholder),
		[value, locale, placeholder]
	)

	return (
		<>
			<Button
				value={formattedValue}
				onClick={handleToggle}
				variant='outlined'
				color='inherit'
				icon={Calendar}
				adornment={ChevronDown}
				adornmentProps={{ rotate: open ? 180 : 0 }}
				justifyContent='space-between'
				className={classes.root}
				{...otherProps}
			/>
			<Float
				open={open}
				anchor={anchor}
				onClose={handleClose}
				portal={false}
				trap={false}
				align='bottom right'
			>
				<DatePickerPaper name={name} value={value} onChange={onChange} locale={locale} />
			</Float>
		</>
	)
}

DatePicker.propTypes = {
	name: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
	locale: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string
}

export default DatePicker
