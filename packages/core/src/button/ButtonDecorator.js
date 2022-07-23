import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import Button from './Button'

const useStyles = makeStyles({ name: 'ButtonDecorator' })((theme) => ({
	root: {
		height: 0
	},
	button: {
		transform: 'translateY(-50%)'
	},
	adjust: {
		marginRight: theme.spacing(-1)
	}
}))

const ButtonDecorator = ({ variant, className, ...otherProps }) => {
	const { classes, cx } = useStyles()
	const buttonClassName = cx(classes.button, {
		[classes.adjust]: !variant || variant === 'text'
	})

	return (
		<div className={cx(classes.root, className)}>
			<Button className={buttonClassName} tabIndex={-1} {...otherProps} />
		</div>
	)
}

ButtonDecorator.propTypes = {
	variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
	className: PropTypes.string
}

export default ButtonDecorator
