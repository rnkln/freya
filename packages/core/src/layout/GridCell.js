import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'

const useStyles = makeStyles({ name: 'GridCell' })((theme, props) => ({
	root: {
		gridArea: props.area,
		gridColumn: props.column,
		gridRow: props.row,
		alignSelf: props.align,
		justifySelf: props.justify
	}
}))

const GridCell = ({
	component: Component = 'div',
	area,
	align,
	row,
	column,
	justify,
	className,
	...otherProps
}) => {
	const { classes, cx } = useStyles({ area, column, row, align, justify })

	return <Component className={cx(classes.root, className)} {...otherProps} />
}

GridCell.propTypes = {
	component: PropTypes.elementType,
	area: PropTypes.string,
	align: PropTypes.oneOf(['normal', 'start', 'end', 'center', 'baseline', 'stretch']),
	row: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	column: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	justify: PropTypes.oneOf(['normal', 'start', 'end', 'center', 'baseline', 'stretch']),
	className: PropTypes.string
}

export default GridCell
