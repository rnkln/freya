import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, breakpointsToStyles } from '@hs/styles'

const useStyles = makeStyles({ name: 'Grid' })((theme, props) => ({
	root: breakpointsToStyles(theme, props, (args) => ({
		display: args.inline ? 'inline-grid' : 'grid',
		gridAutoFlow: args.flow,
		gridTemplateRows: args.rows,
		gridTemplateColumns: args.columns,
		gridTemplateAreas: args.areas,
		alignItems: args.alignItems,
		alignContent: args.alignContent,
		justifyItems: args.justifyItems,
		justifyContent: args.justifyContent,
		gap: theme.spacing(args.gap)
	}))
}))

const Grid = forwardRef(
	(
		{
			component: Component = 'div',
			inline,
			flow,
			columns,
			rows,
			areas,
			gap = 0,
			alignItems,
			alignContent,
			justifyItems,
			justifyContent,
			breakpoints,
			className,
			...otherProps
		},
		ref
	) => {
		const { classes, cx } = useStyles({
			inline,
			flow,
			columns,
			rows,
			areas,
			gap,
			alignItems,
			alignContent,
			justifyItems,
			justifyContent,
			breakpoints
		})

		return <Component ref={ref} className={cx(classes.root, className)} {...otherProps} />
	}
)

Grid.displayName = 'Grid'

Grid.propTypes = {
	component: PropTypes.elementType,
	inline: PropTypes.bool,
	flow: PropTypes.oneOf(['row', 'column']),
	columns: PropTypes.string,
	rows: PropTypes.string,
	areas: PropTypes.string,
	gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	alignItems: PropTypes.oneOf([
		'auto',
		'normal',
		'start',
		'end',
		'center',
		'stretch',
		'baseline'
	]),
	alignContent: PropTypes.oneOf([
		'normal',
		'start',
		'end',
		'center',
		'stretch',
		'space-around',
		'space-between',
		'space-evenly',
		'baseline'
	]),
	justifyItems: PropTypes.oneOf([
		'auto',
		'normal',
		'start',
		'end',
		'center',
		'stretch',
		'baseline'
	]),
	justifyContent: PropTypes.oneOf([
		'normal',
		'start',
		'end',
		'center',
		'stretch',
		'space-around',
		'space-between',
		'space-evenly',
		'baseline'
	]),
	breakpoints: PropTypes.object,
	className: PropTypes.string
}

export default Grid
