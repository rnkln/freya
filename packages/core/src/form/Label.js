import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import Text from '../typography/Text'

const useStyles = makeStyles({ name: 'Label' })((theme) => ({
	root: {
		flexShrink: 0,
		color: theme.palette.common.one[900]
	},
	disabled: {
		color: theme.palette.disabled.dark
	},
	required: {
		'&::after': {
			content: '" *"'
		}
	}
}))

const Label = ({ value, target, disabled, required, className, ...otherProps }) => {
	const { classes, cx } = useStyles()
	const rootClassName = cx(
		classes.root,
		{
			[classes.disabled]: disabled,
			[classes.required]: required
		},
		className
	)

	return (
		<Text
			component='label'
			weight='semibold'
			size={1.6}
			htmlFor={target}
			className={rootClassName}
			{...otherProps}
		>
			{value}
		</Text>
	)
}

Label.propTypes = {
	value: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['title', 'text']),
	target: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	className: PropTypes.string
}

export default Label
