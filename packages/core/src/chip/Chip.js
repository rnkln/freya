import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import Flex from '../layout/Flex'
import Button from '../button/Button'

const useStyles = makeStyles({ name: 'Chip' })((theme) => ({
	root: {
		height: 'auto',
		padding: theme.spacing(0.6, 1.5),
		borderRadius: theme.size(100)
	}
}))

const Chip = ({ className, ...otherProps }) => {
	const { classes, cx } = useStyles()

	return (
		<Flex
			component={Button}
			variant='contained'
			color='secondary'
			className={cx(classes.root, className)}
			{...otherProps}
		/>
	)
}

Chip.propTypes = {
	className: PropTypes.string
}

export default Chip
