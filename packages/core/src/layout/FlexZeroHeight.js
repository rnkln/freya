import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import Flex from './Flex'

const useStyles = makeStyles({ name: 'FlexZeroHeight' })({
	root: {
		height: 0,
		flexShrink: 0
	}
})

const FlexZeroHeight = ({ className, ...otherProps }) => {
	const { classes, cx } = useStyles()

	return <Flex alignItems='center' className={cx(classes.root, className)} {...otherProps} />
}

FlexZeroHeight.propTypes = {
	className: PropTypes.string
}

export default FlexZeroHeight
