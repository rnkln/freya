import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { Check } from '@hs/icons'
import useRipple from '../hooks/useRipple'

const useStyles = makeStyles({ name: 'CheckboxBase' })((theme, props, classes) => ({
	root: {
		display: 'inline-flex',
		position: 'relative',
		height: theme.size(2),
		width: theme.size(2),
		cursor: 'pointer',
		borderRadius: theme.radius(1),
		alignItems: 'center',
		justifyContent: 'center',
		transition: theme.transitions.create('box-shadow')
	},
	disabled: {
		cursor: 'default',
		pointerEvents: 'none',
		borderColor: 'currentColor'
	},
	invalid: {
		borderColor: 'currentColor'
	},
	input: {
		position: 'absolute',
		appearance: 'none',
		color: 'inherit',
		cursor: 'inherit',
		outline: 0,
		width: '100%',
		height: '100%',
		border: `2px solid ${theme.palette.common.one[400]}`,
		borderRadius: 'inherit',
		boxSizing: 'border-box',
		'&:checked': {
			background: 'currentColor',
			borderColor: 'currentColor'
		},
		'&:disabled': {
			borderColor: 'currentColor'
		},
		[`&:not(:checked) + .${classes.check}`]: {
			display: 'none'
		}
	},
	check: {
		position: 'absolute'
	},
	...theme.palette.create('color', (colors) => ({
		color: colors.main,
		...theme.__unstable_hover({
			boxShadow: `
				0 0 0 5px ${theme.alpha(colors.main, 0.2)},
				0 0 0 10px inset ${theme.alpha(colors.main, 0.2)}
			`
		})
	}))
}))

const useColor = ({ disabled, invalid, color }) => {
	if (disabled) return 'disabled'
	if (invalid) return 'error'
	return color
}

const CheckboxBase = forwardRef(
	(
		{
			autoFocus,
			checked,
			className: classNameProp,
			color: colorProp = 'primary',
			defaultChecked,
			disabled,
			id,
			invalid,
			input: Input = 'input',
			inputProps = {},
			name,
			onBlur,
			onChange,
			onFocus,
			readOnly,
			required,
			value,
			...otherProps
		},
		ref
	) => {
		const color = useColor({ disabled, invalid, color: colorProp })
		const ripple = useRipple({ center: true, round: false })
		const { classes, cx } = useStyles()
		const className = cx(
			classes.root,
			classes[`${color}color`],
			{
				[classes.invalid]: !disabled && invalid,
				[classes.disabled]: disabled
			},
			classNameProp
		)

		const { className: inputClassNameProp, ...inputOtherProps } = inputProps

		return (
			<div className={className} {...ripple} {...otherProps}>
				<Input
					id={id}
					ref={ref}
					type='checkbox'
					name={name}
					value={value}
					checked={checked}
					defaultChecked={defaultChecked}
					readOnly={readOnly}
					disabled={disabled}
					required={required}
					className={cx(classes.input, inputClassNameProp)}
					autoFocus={autoFocus}
					onBlur={onBlur}
					onFocus={onFocus}
					onChange={onChange}
					{...inputOtherProps}
				/>
				<Check size={1.6} color='white' className={classes.check} />
			</div>
		)
	}
)

CheckboxBase.displayName = 'CheckboxBase'

CheckboxBase.propTypes = {
	autoFocus: PropTypes.bool,
	checked: PropTypes.bool,
	className: PropTypes.string,
	color: PropTypes.string,
	defaultChecked: PropTypes.bool,
	disabled: PropTypes.bool,
	id: PropTypes.string,
	invalid: PropTypes.bool,
	input: PropTypes.elementType,
	inputProps: PropTypes.object,
	name: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	readOnly: PropTypes.bool,
	required: PropTypes.bool,
	value: PropTypes.string
}

export default CheckboxBase
