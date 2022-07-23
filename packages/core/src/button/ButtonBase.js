import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import Flex from '../layout/Flex'
import useRipple from '../hooks/useRipple'

const useStyles = makeStyles({ name: 'ButtonBase' })((theme, props, classes) => ({
	root: {
		position: 'relative',
		font: 'inherit',
		color: 'inherit',
		background: 'transparent',
		overflow: 'hidden',
		cursor: 'pointer',
		padding: 0,
		outline: 0,
		border: 0,
		borderRadius: 0,
		margin: 0,
		flexShrink: 0,
		appearance: 'none',
		userSelect: 'none',
		textDecoration: 'none',
		tapHighlightColor: 'transparent',
		'&::-moz-focus-inner': {
			border: 0
		},
		[`&.${classes.disabled}`]: {
			pointerEvents: 'none',
			cursor: 'default'
		}
	},
	rounded: {
		borderRadius: theme.radius(1)
	},
	disabled: {}
}))

const useButtonProps = (component, props) => {
	if (component === 'button') {
		return {
			type: props.type,
			disabled: props.disabled
		}
	}

	return {
		role: 'button',
		'aria-disabled': props.disabled
	}
}

const ButtonBase = forwardRef(
	(
		{
			component = 'button',
			type = 'button',
			ripple = true,
			rounded = true,
			disabled,
			className: classNameProp,
			onPointerDown,
			...otherProps
		},
		ref
	) => {
		const { classes, cx } = useStyles()
		const rippleProps = useRipple({ enabled: ripple, onPointerDown })
		const buttonProps = useButtonProps(component, { type, disabled })
		const className = cx(
			classes.root,
			{
				[classes.rounded]: rounded,
				[classes.disabled]: disabled
			},
			classNameProp
		)

		return (
			<Flex
				ref={ref}
				component={component}
				inline={true}
				alignItems='center'
				justifyContent='center'
				className={className}
				{...buttonProps}
				{...rippleProps}
				{...otherProps}
			/>
		)
	}
)

ButtonBase.displayName = 'ButtonBase'

ButtonBase.propTypes = {
	component: PropTypes.elementType,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	ripple: PropTypes.bool,
	rounded: PropTypes.bool,
	disabled: PropTypes.bool,
	className: PropTypes.string,
	onPointerDown: PropTypes.func
}

export default ButtonBase
