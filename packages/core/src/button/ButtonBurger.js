import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import Button from './Button'

const useStyles = makeStyles({ name: 'ButtonBurger' })((theme, props, classes) => ({
	line: {
		color: 'inherit',
		background: 'currentColor',
		height: '.2rem',
		width: '1.8rem',
		marginTop: '.3rem',
		transition: theme.transitions.create(['transform', 'opacity', 'color']),
		'&:first-of-type': {
			marginTop: 0
		}
	},
	open: {
		[`& .${classes.line}:nth-of-type(1)`]: { transform: 'translateY(.5rem) rotate(135deg)' },
		[`& .${classes.line}:nth-of-type(2)`]: { transform: 'translate(-100%, 0)', opacity: 0 },
		[`& .${classes.line}:nth-of-type(3)`]: { transform: 'translateY(-.5rem) rotate(-135deg)' }
	}
}))

const Burger = ({ open, className: classNameProp }) => {
	const { classes, cx } = useStyles()
	const className = cx(
		{
			[classes.open]: open
		},
		classNameProp
	)

	return (
		<div className={className}>
			<div className={classes.line} />
			<div className={classes.line} />
			<div className={classes.line} />
		</div>
	)
}

const ButtonBurger = ({ open, ...otherProps }) => (
	<Button gap={1} icon={Burger} iconProps={{ open }} {...otherProps} />
)

Burger.propTypes = {
	open: PropTypes.bool,
	className: PropTypes.string
}

ButtonBurger.propTypes = {
	open: PropTypes.bool
}

export default ButtonBurger
