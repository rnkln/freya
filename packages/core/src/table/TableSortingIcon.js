import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'

const useStyles = makeStyles({ name: 'TableSortingIcon' })((theme) => ({
	root: {
		marginLeft: theme.spacing(1),
		pointerEvents: 'none',
		width: '1em',
		height: '1em',
		flexShrink: 0,
		userSelect: 'none',
		verticalAlign: 'middle',
		transition: theme.transitions.create(['fill', 'transform'])
	},
	active: {
		fill: 'currentColor'
	},
	inactive: {
		fill: theme.palette.disabled.main
	}
}))

/* eslint-disable max-len */
const TableSortingIcon = forwardRef(({ direction, className, ...otherProps }, ref) => {
	const { classes, cx } = useStyles()
	const classNameASC = direction.toLowerCase() === 'asc' ? classes.active : classes.inactive
	const classNameDESC = direction.toLowerCase() === 'desc' ? classes.active : classes.inactive

	/* eslint-disabled max-length */
	return (
		<svg
			ref={ref}
			viewBox='0 0 24 24'
			focusable={false}
			aria-hidden={true}
			role='presentation'
			className={cx(classes.root, className)}
			{...otherProps}
		>
			<path
				className={classNameASC}
				d='M7.004 2.002c-.2133 0-.4274.0796-.59.2421L2.9903 5.9375C2.6142 6.3425 2.9012 7 3.4532 7H6v5a1.0001 1.0001 0 102 0V7h2.5527c.553 0 .84-.6575.463-1.0625L7.5917 2.2441a.8262.8262 0 00-.5879-.2421zM7 15c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm0 4c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z'
			/>
			<path
				className={classNameDESC}
				d='M17 3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm0 4c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-.0156 3.9863A1.0001 1.0001 0 0016 12v5h-2.5469c-.552 0-.8389.6575-.4629 1.0625l3.4239 3.6934a.8332.8332 0 001.1777 0l3.4238-3.6934c.377-.405.0901-1.0625-.4629-1.0625H18v-5a1.0001 1.0001 0 00-1.0156-1.0137z'
			/>
		</svg>
	)
})

TableSortingIcon.displayName = 'TableSortingIcon'

TableSortingIcon.propTypes = {
	direction: PropTypes.oneOf(['none', 'asc', 'ASC', 'desc', 'DESC']),
	className: PropTypes.string
}

export default TableSortingIcon
