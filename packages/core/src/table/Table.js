import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'

const useStyles = makeStyles({ name: 'Table' })((theme, props) => ({
	root: {
		width: '100%',
		tableLayout: props.layout,
		borderSpacing: theme.spacing(props.borderSpacing),
		borderCollapse: props.borderCollapse
	}
}))

const Table = forwardRef(
	(
		{
			layout = 'auto',
			borderSpacing = 0,
			borderCollapse = 'collapse',
			className,
			...otherProps
		},
		ref
	) => {
		const { classes, cx } = useStyles({ layout, borderSpacing, borderCollapse })

		return <table ref={ref} className={cx(classes.root, className)} {...otherProps} />
	}
)

Table.displayName = 'Table'

Table.propTypes = {
	layout: PropTypes.oneOf(['auto', 'fixed']),
	borderSpacing: PropTypes.number,
	borderCollapse: PropTypes.oneOf(['seperate', 'collapse', 'inherit']),
	className: PropTypes.string
}

export default Table
