import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { capitalise } from '@hs/utils'
import Text from '../typography/Text'
import Spinner from '../loading/Spinner'
import ButtonBase from './ButtonBase'

const useStyles = makeStyles({ name: 'Button' })((theme, props, classes) => ({
	root: {
		height: theme.size(3.6),
		boxSizing: 'border-box',
		padding: theme.spacing(0, 1),
		transition: theme.transitions.create(['color', 'background-color', 'border-color'])
	},
	iconly: {
		padding: 0,
		width: theme.size(3.6)
	},
	value: {},
	disabled: {},
	loading: {
		[`& .${classes.value}`]: {
			visibility: 'hidden'
		}
	},
	spinner: {
		position: 'absolute'
	},
	inherit: {
		'&::after': {
			transition: theme.transitions.create(['background-color']),
			content: '""',
			position: 'absolute',
			display: 'block',
			pointerEvents: 'none',
			backgroundColor: 'transparent',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			opacity: 0.2
		},
		...theme.__unstable_hover({
			'&::after': {
				backgroundColor: 'currentColor'
			}
		})
	},
	inheritText: {
		color: 'inherit',
		[`&.${classes.disabled}`]: {
			color: theme.palette.disabled.contrastText
		}
	},
	inheritOutlined: {
		color: 'inherit',
		border: '1px solid currentColor',
		[`&.${classes.disabled}`]: {
			color: theme.palette.disabled.contrastText
		}
	},
	...theme.palette.create('Text', (colors) => ({
		color: colors.main,
		[`&.${classes.disabled}`]: {
			color: theme.palette.disabled.main
		},
		...theme.__unstable_hover({
			backgroundColor: theme.alpha(colors.main, 0.2)
		})
	})),
	...theme.palette.create('Outlined', (colors) => ({
		color: colors.main,
		border: '1px solid currentColor',
		[`&.${classes.disabled}`]: {
			color: theme.palette.disabled.contrastText
		},
		...theme.__unstable_hover({
			backgroundColor: theme.alpha(colors.main, 0.2)
		})
	})),
	...theme.palette.create('Contained', (colors) => ({
		color: colors.contrastText,
		background: colors.main,
		[`&.${classes.disabled}`]: {
			backgroundColor: theme.palette.disabled.main,
			color: theme.palette.disabled.contrastText
		},
		...theme.__unstable_hover({
			backgroundColor: colors.dark
		})
	}))
}))

const Button = forwardRef(
	(
		{
			value,
			color = 'primary',
			variant = 'text',
			active = false,
			loading = false,
			disabled = false,
			icon: Icon,
			iconProps,
			adornment: Adornment,
			adornmentProps,
			className: classNameProp,
			...otherProps
		},
		ref
	) => {
		const { classes, cx } = useStyles()
		const styling = color + capitalise(variant)
		const className = cx(
			classes.root,
			classes[styling],
			{
				[classes.iconly]: Icon && !value,
				[classes.inherit]: color === 'inherit',
				[classes.loading]: loading,
				[classes.disabled]: disabled,
				active
			},
			classNameProp
		)

		return (
			<ButtonBase
				ref={ref}
				gap={1}
				disabled={disabled || loading}
				aria-busy={loading}
				aria-label={value}
				className={className}
				{...otherProps}
			>
				{Icon && <Icon {...iconProps} />}
				{value && <Text className={classes.value}>{value}</Text>}
				{loading && <Spinner className={classes.spinner} />}
				{Adornment && <Adornment {...adornmentProps} />}
			</ButtonBase>
		)
	}
)

Button.displayName = 'Button'

Button.propTypes = {
	value: PropTypes.string,
	color: PropTypes.string,
	variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
	active: PropTypes.bool,
	loading: PropTypes.bool,
	disabled: PropTypes.bool,
	icon: PropTypes.elementType,
	iconProps: PropTypes.object,
	adornment: PropTypes.elementType,
	adornmentProps: PropTypes.object,
	className: PropTypes.string
}

export default Button
