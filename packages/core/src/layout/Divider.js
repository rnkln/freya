import PropTypes from 'prop-types'
import { makeStyles, breakpointsToStyles } from '@hs/styles'

const useStyles = makeStyles({ name: 'Divider' })((theme, props) => ({
	root: breakpointsToStyles(theme, props, (args) => ({
		background: theme.palette.common.three[100],
		flexShrink: 0,
		alignSelf: 'stretch',
		minHeight: '1px',
		minWidth: '1px',
		margin:
			args.direction === 'horizontal'
				? theme.spacing(args.gap, 0)
				: theme.spacing(0, args.gap)
	}))
}))

const Divider = ({ direction = 'horizontal', gap = 0, breakpoints, className }) => {
	const { classes, cx } = useStyles({ breakpoints, direction, gap })

	return <div className={cx(classes.root, className)} />
}

Divider.propTypes = {
	direction: PropTypes.oneOf(['vertical', 'horizontal']),
	gap: PropTypes.number,
	breakpoints: PropTypes.object,
	className: PropTypes.string
}

export default Divider
