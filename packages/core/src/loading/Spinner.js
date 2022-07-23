import PropTypes from 'prop-types'
import { makeStyles, keyframes } from '@hs/styles'
import { Loading } from '@hs/icons'

const useStyles = makeStyles({ name: 'Spinner' })({
	root: {
		animation: `${keyframes`
			to {
				transform: rotate(360deg)
			}
		`} 0.5s linear infinite`
	}
})

const Spinner = ({ className, ...otherProps }) => {
	const { classes, cx } = useStyles()

	return <Loading data-testid='spinner' className={cx(classes.root, className)} {...otherProps} />
}

Spinner.propTypes = {
	className: PropTypes.string
}

export default Spinner
