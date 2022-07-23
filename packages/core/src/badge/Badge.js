import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import Sugar from '../surface/Sugar'

const useStyles = makeStyles({ name: 'Badge' })((theme) => ({
	root: {
		display: 'inline-block',
		padding: theme.spacing(0, 0.6),
		textTransform: 'uppercase',
		flexShrink: 0,
		fontSize: theme.size(1.1),
		fontWeight: theme.typography.weight('semibold')
	},
	dot: {
		height: theme.size(1.6),
		width: theme.size(1.6),
		lineHeight: theme.size(1.6),
		padding: '0',
		textAlign: 'center',
		borderRadius: '50%'
	},
	absolute: {
		position: 'absolute'
	},
	left: {
		left: 0
	},
	right: {
		right: 0
	},
	top: {
		top: 0
	},
	center: {
		top: '50%',
		transform: 'translateY(-50%)'
	},
	bottom: {
		bottom: 0
	}
}))

const Badge = ({
	dot,
	value,
	color: colorProp = 'secondary',
	disabled,
	placement = 'static',
	className: classNameProp,
	...otherProps
}) => {
	const { classes, cx } = useStyles()
	const [y, x] = placement ? placement.split(' ') : []
	const color = disabled ? 'disabled' : colorProp
	const className = cx(
		classes.root,
		{
			[classes.dot]: dot,
			[classes.absolute]: placement !== 'static',
			[classes.disabled]: disabled
		},
		classes[y],
		classes[x],
		classNameProp
	)

	return (
		<Sugar
			color={color}
			variant='outlined'
			elevated={false}
			className={className}
			{...otherProps}
		>
			{value}
		</Sugar>
	)
}

Badge.propTypes = {
	dot: PropTypes.bool,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	color: PropTypes.string,
	disabled: PropTypes.bool,
	placement: PropTypes.string,
	className: PropTypes.string
}

export default Badge
