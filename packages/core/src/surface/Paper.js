import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import Surface from './Surface'

const useStyles = makeStyles({ name: 'Paper' })((theme) => ({
	root: {
		color: theme.palette.white.contrastText,
		background: theme.palette.white.main
	},
	outlined: {
		border: `1px solid ${theme.palette.white.dark}`
	}
}))

const Paper = forwardRef(({ outlined = false, className: classNameProp, ...otherProps }, ref) => {
	const { classes, cx } = useStyles()
	const className = cx(
		classes.root,
		{
			[classes.outlined]: outlined
		},
		classNameProp
	)

	return <Surface ref={ref} className={className} {...otherProps} />
})

Paper.displayName = 'Paper'

Paper.propTypes = {
	component: PropTypes.elementType,
	outlined: PropTypes.bool,
	className: PropTypes.string
}

export default Paper
