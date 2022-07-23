import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'

const useStyles = makeStyles({ name: 'Gap' })((theme, { size }) => ({
	root: {
		flexShrink: 0,
		aspectRatio: '1/1',
		width: theme.spacing(size)
	}
}))

const Gap = ({ size = 1, className, ...otherProps }) => {
	const { classes, cx } = useStyles({ size })

	return <div className={cx(classes.root, classes[`width-${size}`], className)} {...otherProps} />
}

Gap.propTypes = {
	size: PropTypes.number,
	className: PropTypes.string
}

export default Gap
