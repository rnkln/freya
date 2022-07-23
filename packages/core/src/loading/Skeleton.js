import PropTypes from 'prop-types'
import { makeStyles, keyframes } from '@hs/styles'

const isString = (value) => Object.prototype.toString.call(value) === '[object String]'

const useStyles = makeStyles({ name: 'Skeleton' })((theme, props) => ({
	root: {
		width: '100%',
		overflow: 'hidden',
		color: '#f0f0f0'
	},
	line: {
		marginTop: theme.size(0.4),
		'&:first-of-type': {
			marginTop: 0
		}
	},
	animation: {
		borderRadius: theme.radius(1),
		background: 'currentColor',
		position: 'relative',
		'&::before': {
			content: '"\u200B"'
		},
		'&::after': {
			content: '""',
			position: 'absolute',
			height: '100%',
			width: '120%',
			top: 0,
			left: 0,
			background:
				'linear-gradient(90deg, rgba(0,0,0,0) 0, rgba(0,0,0,.04) 15%, rgba(0,0,0,.04) 85%, rgba(0,0,0,0) 100%)',
			animation: `${keyframes`
				from {
					transform: translateX(-100%)
				}
				to {
					transform: translateX(100%)
				}
			`} 2s linear infinite`
		}
	},
	dynamic: {
		fontWeight: isString(props.weight) ? props.weight : theme.typography.weight(props.weight),
		fontSize: isString(props.size) ? props.size : theme.size(props.size),
		width: isString(props.width) ? props.width : theme.size(props.width),
		height: isString(props.height) ? props.height : theme.size(props.height)
	}
}))

const Skeleton = ({
	component: Component = 'div',
	size,
	lines = 1,
	width = '100%',
	height,
	weight = 'normal',
	className,
	...otherProps
}) => {
	const { classes, cx } = useStyles({ size, weight, width, height })
	const componentProps = {
		role: 'presentation',
		focusable: false,
		'aria-hidden': true,
		...otherProps
	}

	if (lines > 1) {
		return (
			<Component className={cx(classes.root, className)} {...componentProps}>
				{Array(lines)
					.fill('')
					.map((ignore, index) => (
						<div
							key={index}
							className={cx(classes.line, classes.animation, classes.dynamic)}
						/>
					))}
			</Component>
		)
	}

	return (
		<Component
			className={cx(classes.root, classes.animation, classes.dynamic, className)}
			{...componentProps}
		/>
	)
}

Skeleton.propTypes = {
	size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	lines: PropTypes.number,
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	weight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	component: PropTypes.elementType,
	className: PropTypes.string
}

export default Skeleton
