import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'

const useStyles = makeStyles({ name: 'TableRow' })({
	root: {
		verticalAlign: 'middle'
	}
})

const TableRow = forwardRef(({ className, ...otherProps }, ref) => {
	const { classes, cx } = useStyles()

	return <tr ref={ref} className={cx(classes.root, className)} {...otherProps} />
})

TableRow.displayName = 'TableRow'

TableRow.propTypes = {
	className: PropTypes.string
}

export default TableRow
