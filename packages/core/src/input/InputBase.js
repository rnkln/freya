import { useRef, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { useRefFork } from '@hs/utils'
import Flex from '../layout/Flex'

const useStyles = makeStyles({ name: 'InputBase' })((theme) => ({
	root: {
		fontWeight: theme.typography.weight('normal'),
		border: `1px solid ${theme.palette.common.three[300]}`,
		borderRadius: 0,
		cursor: 'text',
		height: theme.size(3.6),
		padding: theme.spacing(0, 1),
		boxSizing: 'border-box',
		background: theme.palette.white.main,
		'&:focus-within': {
			borderColor: theme.palette.primary.main
		}
	},
	input: {
		font: 'inherit',
		cursor: 'inherit',
		color: 'currentColor',
		appearance: 'none',
		border: 0,
		width: '100%',
		height: '100%',
		display: 'block',
		boxShadow: 'none',
		background: 'transparent',
		resize: 'none',
		outline: '0',
		overflow: 'hidden',
		'&::placeholder': {
			color: theme.palette.common.two[500],
			opacity: 1
		},
		'&:disabled::placeholder': {
			color: theme.palette.disabled.contrastText
		}
	},
	number: {
		'&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
			appearance: 'none',
			margin: 0
		},
		'&[type=number]': {
			appearance: 'textfield'
		}
	},
	rounded: {
		borderRadius: theme.radius(1)
	},
	invalid: {
		borderColor: theme.palette.error.main
	},
	disabled: {
		color: theme.palette.disabled.contrastText,
		cursor: 'default',
		borderColor: theme.palette.disabled.main
	}
}))

const InputBase = forwardRef(
	(
		{
			accept,
			adornment: Adornment,
			adornmentProps,
			autoComplete,
			autoFocus,
			className: classNameProp,
			defaultValue,
			disabled,
			icon: Icon,
			iconProps,
			id,
			input: Input = 'input',
			inputProps = {},
			invalid,
			name,
			onBlur,
			onChange,
			onClick,
			onFocus,
			onKeyDown,
			onKeyUp,
			placeholder,
			readOnly,
			required,
			rounded = true,
			type = 'text',
			value,
			...otherProps
		},
		ref
	) => {
		const inputRef = useRef()
		const forkedRef = useRefFork(ref, inputRef)
		const { classes, cx } = useStyles()
		const className = cx(
			classes.root,
			{
				[classes.rounded]: rounded,
				[classes.invalid]: invalid,
				[classes.disabled]: disabled
			},
			classNameProp
		)

		const { className: inputClassNameProp, ...inputOtherProps } = inputProps
		const inputClassName = cx(
			classes.input,
			{
				[classes.number]: type === 'number'
			},
			inputClassNameProp
		)

		const handleClick = (event) => {
			if (event.currentTarget === event.target) {
				inputRef.current.focus()
			}

			if (onClick) {
				onClick(event)
			}
		}

		// For this to work in uncontrolled mode we need to prevent KeyPress
		const handleChange = !accept
			? onChange
			: (event) => {
					if (event.target.value === '') {
						onChange(event)
					} else if (accept instanceof RegExp && accept.test(event.target.value)) {
						onChange(event)
					} else if (typeof accept === 'function' && accept(event.target.value)) {
						onChange(event)
					}
			  }

		return (
			<Flex
				gap={1}
				inline={true}
				alignItems='center'
				className={className}
				onClick={handleClick}
				{...otherProps}
			>
				{Icon && <Icon {...iconProps} />}

				<Input
					id={id}
					ref={forkedRef}
					type={type}
					name={name}
					value={value}
					defaultValue={defaultValue}
					readOnly={readOnly}
					disabled={disabled}
					required={required}
					placeholder={placeholder}
					className={inputClassName}
					autoFocus={autoFocus}
					autoComplete={autoComplete}
					onBlur={onBlur}
					onFocus={onFocus}
					onChange={handleChange}
					onKeyUp={onKeyUp}
					onKeyDown={onKeyDown}
					{...inputOtherProps}
				/>

				{Adornment && <Adornment {...adornmentProps} />}
			</Flex>
		)
	}
)

InputBase.displayName = 'InputBase'

InputBase.propTypes = {
	accept: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(RegExp)]),
	adornment: PropTypes.elementType,
	adornmentProps: PropTypes.object,
	autoComplete: PropTypes.string,
	autoFocus: PropTypes.bool,
	className: PropTypes.string,
	defaultValue: PropTypes.string,
	disabled: PropTypes.bool,
	icon: PropTypes.elementType,
	iconProps: PropTypes.object,
	id: PropTypes.string,
	input: PropTypes.elementType,
	inputProps: PropTypes.object,
	invalid: PropTypes.bool,
	name: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
	onFocus: PropTypes.func,
	onKeyDown: PropTypes.func,
	onKeyUp: PropTypes.func,
	placeholder: PropTypes.string,
	readOnly: PropTypes.bool,
	required: PropTypes.bool,
	rounded: PropTypes.bool,
	type: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default InputBase
