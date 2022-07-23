import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { ChevronUp } from '@hs/icons'
import Button from '../button/Button'

const useStyles = makeStyles({ name: 'AutocompleteButton' })((theme) => ({
	root: {
		height: '100%',
		borderLeft: `1px solid ${theme.palette.common.three[100]}`
	},
	rounded: {
		borderRadius: `0 ${theme.radius(1)} ${theme.radius(1)} 0`
	}
}))

const AutocompleteButton = ({ open, rounded, className: classNameProp, ...otherProps }) => {
	const { classes, cx } = useStyles()
	const className = cx(classes.root, { [classes.rounded]: rounded }, classNameProp)
	const onMouseDown = (event) => event.preventDefault()

	return (
		<Button
			variant='contained'
			color='common'
			rounded={false}
			icon={ChevronUp}
			iconProps={{ rotate: open ? 0 : 180 }}
			className={className}
			onMouseDown={onMouseDown}
			{...otherProps}
		/>
	)
}

AutocompleteButton.propTypes = {
	open: PropTypes.bool,
	rounded: PropTypes.bool,
	className: PropTypes.string
}

export default AutocompleteButton
