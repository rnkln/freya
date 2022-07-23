import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'

const useStyles = makeStyles({ name: 'Surface' })((theme) => ({
	rounded: {
		borderRadius: theme.radius(1)
	},
	elevated: {
		boxShadow: theme.shadow(1)
	}
}))

const Surface = forwardRef(
	(
		{
			component: Component = 'div',
			rounded = true,
			elevated = true,
			className: classNameProp,
			...otherProps
		},
		ref
	) => {
		const { classes, cx } = useStyles()
		const className = cx(
			{
				[classes.rounded]: rounded,
				[classes.elevated]: elevated
			},
			classNameProp
		)

		return <Component ref={ref} className={className} {...otherProps} />
	}
)

Surface.displayName = 'Surface'

Surface.propTypes = {
	component: PropTypes.elementType,
	rounded: PropTypes.bool,
	elevated: PropTypes.bool,
	className: PropTypes.string
}

export default Surface
