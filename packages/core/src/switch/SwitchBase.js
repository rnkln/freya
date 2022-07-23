import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { useRipple } from '@hs/core/hooks'

const useStyles = makeStyles({ name: 'SwitchBase' })((theme, { color, disabled }, classes) => ({
	root: {
		display: 'flex',
		position: 'relative',
		width: theme.size(5.4),
		height: theme.size(3.6),
		alignItems: 'center',
		justifyContent: 'center'
	},
	control: {
		width: theme.size(3.4),
		height: theme.size(1.4),
		borderRadius: theme.radius(3),
		backgroundColor: disabled ? theme.palette.disabled.light : theme.palette.common.three[100]
	},
	input: {
		appearance: 'none',
		[`&:checked + .${classes.control} .${classes.halo}`]: {
			left: theme.size(1.6),
			color: theme.palette[color].main
		},
		[`&:focus-visible + .${classes.control} .${classes.halo}`]: {
			backgroundColor: theme.alpha(theme.palette[color].main, 0.1)
		},
		[`&:checked + .${classes.control}`]: {
			backgroundColor: theme.palette.common.two[200]
		},
		[`&:active + .${classes.control} .${classes.halo}`]: {
			backgroundColor: theme.alpha(theme.palette[color].main, 0.2)
		}
	},
	halo: {
		position: 'absolute',
		color: theme.palette.white.main,
		cursor: 'pointer',
		top: `calc(50% - ${theme.size(2)})`,
		left: theme.size(-0.2),
		width: theme.size(4),
		height: theme.size(4),
		boxSizing: 'border-box',
		padding: theme.size(1),
		borderRadius: '50%',
		transition: theme.transitions.create(['left', 'box-shadow', 'background-color']),
		...theme.__unstable_hover({
			backgroundColor: theme.alpha(theme.palette[color].main, 0.1)
		})
	},
	circle: {
		width: theme.size(2),
		height: theme.size(2),
		borderRadius: '50%',
		boxShadow: '0px 1px 3px #00000036',
		transition: theme.transitions.create('color'),
		backgroundColor: 'currentColor'
	},
	disabled: {
		cursor: 'default',
		pointerEvents: 'none',
		borderColor: 'currentColor'
	},
	invalid: {},
	...theme.palette.create('color', (colors) => ({
		color: colors.main
	}))
}))

const SwitchBase = forwardRef(
	(
		{
			id,
			color: colorProp = 'primary',
			checked,
			defaultChecked,
			disabled,
			invalid,
			onClick,
			onChange,
			className,
			inputProps,
			...otherProps
		},
		forwaredRef
	) => {
		const color = disabled ? 'disabled' : colorProp
		const { classes, cx } = useStyles({ color, disabled })
		const ripple = useRipple({ center: true, scale: 0.7 })
		const rootClassName = cx(
			classes.root,
			classes[`color${color}`],
			{
				[classes.invalid]: invalid,
				[classes.disabled]: disabled
			},
			className
		)

		return (
			<label className={rootClassName} {...otherProps}>
				<input
					id={id}
					ref={forwaredRef}
					type='checkbox'
					className={classes.input}
					defaultChecked={defaultChecked}
					checked={checked}
					disabled={disabled}
					onClick={onClick}
					onChange={onChange}
					{...inputProps}
				/>
				<div className={classes.control}>
					<div className={classes.halo} {...ripple}>
						<div className={classes.circle} />
					</div>
				</div>
			</label>
		)
	}
)

SwitchBase.displayName = 'SwitchBase'

SwitchBase.propTypes = {
	id: PropTypes.string,
	color: PropTypes.string,
	checked: PropTypes.bool,
	defaultChecked: PropTypes.bool,
	disabled: PropTypes.bool,
	invalid: PropTypes.bool,
	onClick: PropTypes.func,
	onChange: PropTypes.func,
	inputProps: PropTypes.object,
	className: PropTypes.string
}

export default SwitchBase
