import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import Paragraph from '../typography/Paragraph'

const useStyles = makeStyles({ name: 'Helper' })((theme) => ({
	root: {
		color: theme.palette.common.one[500],
		fontSize: theme.size(1.2)
	},
	error: {
		fontWeight: theme.typography.weight('semibold'),
		color: theme.palette.error.main
	},
	disabled: {
		color: theme.palette.disabled.dark
	}
}))

const Helper = ({
	component: Component = Paragraph,
	value,
	error,
	disabled,
	className,
	...otherProps
}) => {
	const { classes, cx } = useStyles()
	const rootClassName = cx(
		classes.root,
		{
			[classes.error]: error,
			[classes.disabled]: disabled
		},
		className
	)

	return (
		<Component className={rootClassName} {...otherProps}>
			{value === ' ' ? '\u200B' : value}
		</Component>
	)
}

Helper.propTypes = {
	component: PropTypes.elementType,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	error: PropTypes.bool,
	disabled: PropTypes.bool,
	className: PropTypes.string
}

export default Helper
