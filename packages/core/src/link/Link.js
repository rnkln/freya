import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import Text from '../typography/Text'

const useStyles = makeStyles({ name: 'Link' })((theme) => ({
	root: {
		outline: 0,
		...theme.__unstable_hover({
			textDecoration: 'underline'
		})
	},
	inherit: {
		color: 'inherit'
	},
	...theme.palette.create('', (colors) => ({
		color: colors.main
	}))
}))

const Link = ({
	component = 'a',
	color = 'primary',
	decoration = 'none',
	value,
	children,
	className,
	...otherProps
}) => {
	const { classes, cx } = useStyles()

	return (
		<Text
			component={component}
			decoration={decoration}
			className={cx(classes.root, classes[color], className)}
			{...otherProps}
		>
			{value ? value : children}
		</Text>
	)
}

Link.propTypes = {
	component: PropTypes.elementType,
	value: PropTypes.string,
	children: PropTypes.node,
	decoration: PropTypes.oneOf([
		'none',
		'underline',
		'overline',
		'line-through',
		'initial',
		'inherit'
	]),
	color: PropTypes.string,
	className: PropTypes.string
}

export default Link
