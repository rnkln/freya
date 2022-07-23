import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import ButtonBase from '../button/ButtonBase'

const useStyles = makeStyles({ name: 'TabButton' })((theme) => ({
	root: {
		padding: theme.spacing(2, 2, 1),
		border: `1px solid ${theme.palette.common.dark}`,
		transition: theme.transitions.create(['color', 'background-color', 'border-color']),
		'&:first-of-type': {
			borderLeft: 'none'
		},
		'&:last-of-type': {
			borderRight: 'none'
		},
		'&::before': {
			content: '""',
			position: 'absolute',
			top: 0,
			left: 0,
			height: '1px',
			width: '100%',
			background: 'transparent',
			transition: theme.transitions.create(['background-color'])
		}
	},
	common: {
		color: theme.palette.common.contrastText,
		background: theme.palette.common.main,
		...theme.__unstable_hover({
			backgroundColor: theme.alpha(theme.palette.common.main, 0.2)
		})
	},
	selected: {
		background: theme.palette.white.main,
		borderColor: 'transparent',
		borderTopColor: theme.palette.primary.main,
		'&::before': {
			background: theme.palette.primary.main
		},
		...theme.__unstable_hover({
			backgroundColor: theme.palette.white.main
		})
	}
}))

const TabButton = ({
	value,
	color = 'common',
	direction = 'column',
	gap = 0.5,
	selected,
	className,
	children,
	...otherProps
}) => {
	const { classes, cx } = useStyles()
	const rootClassName = cx(
		classes.root,
		classes[color],
		{
			[classes.selected]: selected
		},
		className
	)

	return (
		<ButtonBase
			className={rootClassName}
			gap={gap}
			direction={direction}
			alignItems='start'
			{...otherProps}
		>
			{value ? value : children}
		</ButtonBase>
	)
}

TabButton.propTypes = {
	value: PropTypes.string,
	direction: PropTypes.string,
	gap: PropTypes.number,
	color: PropTypes.oneOf(['common']),
	selected: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node
}

export default TabButton
