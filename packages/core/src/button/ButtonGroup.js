import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { mapChildren } from '@hs/utils'
import { Flex } from '../layout'

const useStyles = makeStyles({ name: 'ButtonGroup' })((theme) => ({
	root: {
		color: theme.palette.common.one[300]
	},
	button: {
		borderRightWidth: 0
	},
	first: {
		borderTopLeftRadius: theme.radius(1),
		borderBottomLeftRadius: theme.radius(1)
	},
	last: {
		borderTopRightRadius: theme.radius(1),
		borderBottomRightRadius: theme.radius(1),
		borderRightWidth: 1
	},
	highlight: {
		fontWeight: theme.typography.weight('bold'),
		borderRightWidth: 1
	},
	dormant: {
		borderLeftWidth: 0
	}
}))

const ButtonGroup = ({
	align = 'end',
	inline = true,
	color = 'primary',
	variant = 'outlined',
	highlight,
	className,
	children,
	...otherProps
}) => {
	const { classes, cx } = useStyles()

	return (
		<Flex
			inline={inline}
			justifyContent={align}
			className={cx(classes.root, className)}
			{...otherProps}
		>
			{mapChildren(children, (child, index) => {
				const isActive = highlight && highlight(child.props)
				const isActiveBefore =
					highlight && index !== 0 && highlight(children[index - 1].props)

				return {
					...child.props,
					rounded: false,
					active: isActive,
					color: isActive ? color : 'inherit',
					variant,
					className: cx(
						classes.button,
						{
							[classes.highlight]: isActive,
							[classes.dormant]: isActiveBefore,
							[classes.first]: index === 0,
							[classes.last]: index === children.length - 1
						},
						child.props.className
					)
				}
			})}
		</Flex>
	)
}

ButtonGroup.propTypes = {
	align: PropTypes.oneOf(['start', 'end']),
	inline: PropTypes.bool,
	color: PropTypes.string,
	variant: PropTypes.string,
	highlight: PropTypes.func,
	className: PropTypes.string,
	children: PropTypes.node
}

export default ButtonGroup
