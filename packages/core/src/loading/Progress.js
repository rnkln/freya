import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'

const useStyles = makeStyles({ name: 'Progress' })((theme, props) => ({
	root: {
		height: theme.size(0.4),
		background: theme.alpha(theme.palette[props.color].main, 0.2),
		borderRadius: theme.radius(1)
	},
	fill: {
		height: '100%',
		borderRadius: 'inherit',
		background: theme.palette[props.color].main,
		width: `${props.value}%`
	}
}))

const Progress = ({
	value: valueProp,
	min = 0,
	max = 100,
	color = 'primary',
	className,
	...otherProps
}) => {
	const value = Math.max(min, Math.min(max, valueProp))
	const complete = ((value - min) / (max - min)) * 100
	const { classes, cx } = useStyles({ value: complete, color })

	return (
		<div
			role='progressbar'
			aria-valuenow={value}
			aria-valuemin={min}
			aria-valuemax={max}
			className={cx(classes.root, className)}
			{...otherProps}
		>
			<div className={classes.fill} />
		</div>
	)
}

Progress.propTypes = {
	value: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	color: PropTypes.string,
	className: PropTypes.string
}

export default Progress
