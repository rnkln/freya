import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'

const useStyles = makeStyles({ name: 'Icon' })((theme, props) => {
	let { color, size } = props
	if (color !== undefined) {
		color = color === 'inherit' ? 'inherit' : theme.palette.value(color)
	}
	if (size !== undefined) {
		size = size === 'inherit' ? 'inherit' : theme.size(props.size)
	}
	return {
		root: {
			display: 'inline-block',
			fill: 'currentColor',
			transition: theme.transitions.create(['fill', 'transform']),
			pointerEvents: 'none',
			width: '1em',
			height: '1em',
			flexShrink: 0,
			userSelect: 'none',
			color,
			fontSize: size,
			transform: !Number.isNaN(props.rotate) ? `rotate(${props.rotate}deg)` : undefined
		}
	}
})

const Icon = forwardRef(
	(
		{
			title,
			description,
			path,
			size,
			color,
			rotate,
			component: Component = 'svg',
			viewBox = '0 0 24 24',
			className,
			children,
			...otherProps
		},
		ref
	) => {
		const { classes, cx } = useStyles({ color, size, rotate })

		return (
			<Component
				ref={ref}
				className={cx(classes.root, className)}
				focusable={false}
				viewBox={viewBox}
				aria-hidden={true}
				role='presentation'
				{...otherProps}
			>
				{title && <title>{title}</title>}
				{description && <desc>{description}</desc>}
				{path && <path d={path} />}
				{children}
			</Component>
		)
	}
)

Icon.displayName = 'Icon'

Icon.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	path: PropTypes.string,
	size: PropTypes.number,
	color: PropTypes.string,
	rotate: PropTypes.number,
	component: PropTypes.elementType,
	viewBox: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node
}

export default Icon
