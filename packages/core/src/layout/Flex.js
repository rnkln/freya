import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, breakpointsToStyles } from '@hs/styles'

const prefixStartOrEnd = (prop) => (prop === 'start' || prop === 'end' ? `flex-${prop}` : prop)

const useStyles = makeStyles({ name: 'Flex' })((theme, props) => ({
	root: breakpointsToStyles(theme, props, (args) => ({
		display: args.inline ? 'inline-flex' : 'flex',
		flex: args.flex,
		flexWrap: args.wrap,
		flexGrow: args.grow,
		flexShrink: args.shrink,
		flexDirection: args.direction,
		gap: args.gap ? theme.spacing(args.gap) : undefined,
		alignSelf: prefixStartOrEnd(args.alignSelf),
		alignItems: prefixStartOrEnd(args.alignItems),
		alignContent: prefixStartOrEnd(args.alignContent),
		justifyContent: prefixStartOrEnd(args.justifyContent)
	}))
}))

const Flex = forwardRef(
	(
		{
			component: Component = 'div',
			flex,
			gap,
			wrap,
			grow,
			inline,
			shrink,
			direction,
			alignSelf,
			alignItems,
			alignContent,
			justifyContent,
			breakpoints,
			className,
			children,
			...otherProps
		},
		ref
	) => {
		const { classes, cx } = useStyles({
			flex,
			gap,
			wrap,
			grow,
			inline,
			shrink,
			direction,
			alignSelf,
			alignItems,
			alignContent,
			justifyContent,
			breakpoints
		})

		return (
			<Component ref={ref} className={cx(classes.root, className)} {...otherProps}>
				{children}
			</Component>
		)
	}
)

Flex.displayName = 'Flex'

Flex.propTypes = {
	component: PropTypes.elementType,
	flex: PropTypes.number,
	gap: PropTypes.number,
	wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
	grow: PropTypes.number,
	inline: PropTypes.bool,
	shrink: PropTypes.number,
	direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
	alignSelf: PropTypes.oneOf(['normal', 'start', 'end', 'center', 'stretch', 'baseline']),
	alignItems: PropTypes.oneOf(['normal', 'start', 'end', 'center', 'stretch', 'baseline']),
	alignContent: PropTypes.oneOf([
		'normal',
		'start',
		'end',
		'center',
		'space-between',
		'space-around',
		'space-evenly',
		'baseline'
	]),
	justifyContent: PropTypes.oneOf([
		'normal',
		'start',
		'end',
		'center',
		'space-between',
		'space-around',
		'space-evenly',
		'baseline'
	]),
	breakpoints: PropTypes.object,
	className: PropTypes.string,
	children: PropTypes.node
}

export default Flex
