import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'

const useStyles = makeStyles({ name: 'CalendarIcon' })((theme, props) => ({
	root: {
		fill: 'currentColor',
		pointerEvents: 'none',
		width: '1em',
		height: '1em',
		flexShrink: 0,
		userSelect: 'none',
		transition: theme.transitions.create(['fill'])
	},
	size: {
		fontSize: props.size ? theme.size(props.size) : 'inherit'
	}
}))

const CalendarIcon = forwardRef(({ size, className, ...otherProps }, ref) => {
	const { classes, cx } = useStyles({ size })

	return (
		<svg
			ref={ref}
			viewBox='0 0 24 24'
			className={cx(classes.root, classes.size, className)}
			{...otherProps}
		>
			<path d='M6 1v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2v2H8V1H6zM5 5h14v2H5V5zm0 4h14v10H5V9z' />
		</svg>
	)
})

CalendarIcon.displayName = 'CalendarIcon'

CalendarIcon.propTypes = {
	size: PropTypes.number,
	className: PropTypes.string
}

export default CalendarIcon
