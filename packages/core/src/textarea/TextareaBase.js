import { useRef, forwardRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRefFork } from '@hs/utils'
import { makeStyles } from '@hs/styles'

const useStyles = makeStyles({ name: 'TextareaBase' })((theme, props) => ({
	root: {
		font: 'inherit',
		fontWeight: theme.typography.weight('normal'),
		border: `1px solid ${theme.palette.common.three[300]}`,
		borderRadius: 0,
		padding: theme.spacing(1),
		boxSizing: 'border-box',
		boxShadow: 'none',
		outline: '0',
		resize: props.resize,
		background: theme.palette.white.main,
		'&:focus': {
			borderColor: theme.palette.primary.main
		},
		'&::placeholder': {
			color: theme.palette.common.two[500],
			opacity: 1
		},
		'&:disabled::placeholder': {
			color: theme.palette.disabled.contrastText
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
		borderColor: theme.palette.disabled.main
	},
	overflow: {
		overflow: 'hidden'
	}
}))

const TextareaBase = forwardRef(
	(
		{
			rows = 3,
			resize = 'auto',
			rounded = true,
			invalid,
			disabled,
			className: classNameProp,
			onChange,
			...otherProps
		},
		ref
	) => {
		const areaRef = useRef()
		const forkedRef = useRefFork(ref, areaRef)
		const { classes, cx } = useStyles({ resize })
		const className = cx(
			classes.root,
			classes.resize,
			{
				[classes.rounded]: rounded,
				[classes.invalid]: invalid,
				[classes.disabled]: disabled,
				[classes.overflow]: resize === 'auto'
			},
			classNameProp
		)

		const handleResize = () => {
			if (resize === 'auto') {
				areaRef.current.style.height = 'auto'
				areaRef.current.style.height = `${areaRef.current.scrollHeight}px`
			}
		}

		const handleChange = (event) => {
			handleResize()

			if (onChange) {
				onChange(event)
			}
		}

		useEffect(() => {
			handleResize()
		}, []) // eslint-disable-line react-hooks/exhaustive-deps

		return (
			<textarea
				ref={forkedRef}
				rows={rows}
				disabled={disabled}
				className={className}
				onChange={handleChange}
				{...otherProps}
			/>
		)
	}
)

TextareaBase.displayName = 'TextareaBase'

TextareaBase.propTypes = {
	rows: PropTypes.number,
	resize: PropTypes.oneOf(['none', 'auto', 'both', 'horizontal', 'vertical']),
	rounded: PropTypes.bool,
	invalid: PropTypes.bool,
	disabled: PropTypes.bool,
	className: PropTypes.string,
	onChange: PropTypes.func
}

export default TextareaBase
