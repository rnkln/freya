import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import Button from '../button/Button'

const useStyles = makeStyles({ name: 'PaginationButton' })((theme) => ({
	root: {
		minWidth: theme.size(3.6)
	}
}))

const PaginationButton = ({ value, ...otherProps }) => {
	const { classes } = useStyles()

	return (
		<Button
			value={value.toString()}
			variant='outlined'
			color='inherit'
			className={classes.root}
			{...otherProps}
		/>
	)
}

PaginationButton.propTypes = {
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default PaginationButton
