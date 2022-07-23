import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { capitalise } from '@hs/utils'
import Surface from './Surface'

const useStyles = makeStyles({ name: 'Sugar' })((theme) => ({
	root: {
		transition: theme.transitions.create(['color', 'background-color', 'border-color'])
	},
	...theme.palette.create('Contained', (colors) => ({
		color: colors.contrastText,
		background: colors.main
	})),
	...theme.palette.create('Outlined', (colors) => ({
		color: colors.main,
		border: `1px solid ${colors.main}`
	})),
	...theme.palette.create('Blended', (colors) => ({
		color: colors.main,
		background: theme.lightness(colors.main, 0.85)
	}))
}))

const Sugar = forwardRef(
	({ variant = 'contained', color = 'white', className, ...otherProps }, ref) => {
		const { classes, cx } = useStyles()
		const styling = color + capitalise(variant)

		return (
			<Surface
				ref={ref}
				className={cx(classes.root, classes[styling], className)}
				{...otherProps}
			/>
		)
	}
)

Sugar.displayName = 'Sugar'

Sugar.propTypes = {
	component: PropTypes.elementType,
	variant: PropTypes.oneOf(['contained', 'outlined', 'blended']),
	color: PropTypes.string,
	className: PropTypes.string
}

export default Sugar
