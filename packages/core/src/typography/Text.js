import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'

const useStyles = makeStyles({ name: 'Text' })(
	(theme, { size, align, weight, color, overflow, transform, decoration, whiteSpace }) => ({
		root: {
			fontSize: size ? theme.size(size) : undefined,
			textAlign: align,
			fontWeight: weight ? theme.typography.weight(weight) : undefined,
			textOverflow: overflow,
			color: color ? theme.palette[color].main : undefined,
			textTransform: transform,
			textDecoration: decoration,
			whiteSpace,
			overflow: overflow ? 'hidden' : undefined
		}
	})
)

const Text = forwardRef(
	(
		{
			component: Component = 'span',
			value,
			size,
			align = 'start',
			weight,
			color,
			overflow,
			transform,
			decoration,
			whiteSpace,
			className,
			children,
			...otherProps
		},
		ref
	) => {
		const { classes, cx } = useStyles({
			size,
			align,
			weight,
			color,
			overflow,
			transform,
			decoration,
			whiteSpace
		})

		return (
			<Component ref={ref} className={cx(classes.root, className)} {...otherProps}>
				{value ? value : children}
			</Component>
		)
	}
)

Text.displayName = 'Text'

Text.propTypes = {
	component: PropTypes.elementType,
	value: PropTypes.string,
	size: PropTypes.number,
	align: PropTypes.oneOf(['start', 'end', 'center', 'justify', 'initial', 'inherit']),
	weight: PropTypes.oneOf(['normal', 'semibold', 'bold']),
	color: PropTypes.string,
	overflow: PropTypes.oneOf(['visible', 'clip', 'ellipsis']),
	transform: PropTypes.oneOf([
		'none',
		'lowercase',
		'uppercase',
		'capitalize',
		'initial',
		'inherit'
	]),
	decoration: PropTypes.oneOf([
		'none',
		'underline',
		'overline',
		'line-through',
		'initial',
		'inherit'
	]),
	whiteSpace: PropTypes.oneOf([
		'normal',
		'nowrap',
		'pre',
		'pre-line',
		'pre-wrap',
		'initial',
		'inherit'
	]),
	className: PropTypes.string,
	children: PropTypes.node
}

export default Text
