import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'

const useStyles = makeStyles({ name: 'Scroll' })((theme) => ({
	root: {
		overflow: 'auto',
		overscrollBehavior: 'contain',
		WebkitOverflowScrolling: 'touch',
		'&::-webkit-scrollbar': {
			background: 'transparent',
			width: 0
		},
		'&::-webkit-scrollbar-track-piece': {
			background: 'transparent'
		},
		'&::-webkit-scrollbar-track': {
			background: 'transparent'
		},
		'&::-webkit-scrollbar-thumb': {
			background: 'transparent',
			borderRadius: theme.radius(1)
		}
	}
}))

/* CSS Overflow Module Level 4 */
/*
	overflow = 'auto',
	overflow-style,
	scroll-behaviour,
	scrollbar-color,
	scrollbar-width,
	scrollbar-gutter,
	overscroll-behaviour
*/

const Scroll = forwardRef(({ component: Component = 'div', className, ...otherProps }, ref) => {
	const { classes, cx } = useStyles()

	return <Component ref={ref} className={cx(classes.root, className)} {...otherProps} />
})

Scroll.displayName = 'Scroll'

Scroll.propTypes = {
	component: PropTypes.elementType,
	className: PropTypes.string
}

export default Scroll
