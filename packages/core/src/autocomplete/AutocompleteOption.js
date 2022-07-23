import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import Button from '../button/Button'
import ListItem from '../layout/ListItem'

const useStyles = makeStyles({ name: 'AutocompleteOption' })((theme, props, classes) => ({
	root: {
		padding: theme.spacing(0, 2),
		transition: theme.transitions.create(['color', 'background-color']),
		[`&.${classes.selected}`]: {
			background: theme.palette.white.contrastText,
			color: theme.palette.white.main
		},
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
		}
	},
	selected: {}
}))

const AutocompleteOption = ({
	label,
	value,
	selected,
	className: classNameProp,
	...otherProps
}) => {
	const { classes, cx } = useStyles()
	const className = cx(classes.root, { [classes.selected]: selected }, classNameProp)

	return (
		<Button
			gap={1}
			role='option'
			color='inherit'
			value={label}
			inline={false}
			component={ListItem}
			variant='text'
			rounded={false}
			justifyContent='normal'
			tabIndex={-1}
			aria-selected={selected}
			data-value={value}
			className={className}
			{...otherProps}
		/>
	)
}

AutocompleteOption.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
	selected: PropTypes.bool,
	className: PropTypes.string
}

export default AutocompleteOption
