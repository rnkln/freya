import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'

const useStyles = makeStyles({ name: 'BreadcrumbItem' })((theme) => ({
	root: {
		color: 'inherit',
		fontSize: theme.size(1.3),
		fontWeight: theme.typography.weight('semibold'),
		'&:hover': {
			color: theme.palette.common.one[800]
		}
	},
	underline: {
		textDecoration: 'underline'
	}
}))

const BreadcrumbItem = ({ component: Component, value, to, disabled }) => {
	const { classes, cx } = useStyles()

	return (
		<Component
			value={value}
			to={to}
			disabled={disabled}
			className={cx(classes.root, { [classes.underline]: !disabled })}
		/>
	)
}

BreadcrumbItem.propTypes = {
	component: PropTypes.elementType.isRequired,
	value: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	disabled: PropTypes.bool
}

export default BreadcrumbItem
