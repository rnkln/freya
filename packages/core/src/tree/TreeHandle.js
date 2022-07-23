import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { DragAlternative } from '@hs/icons'

const useStyles = makeStyles({ name: 'TreeHandle' })({
	disabled: {
		pointerEvents: 'none'
	}
})

const TreeHandle = ({ size, disabled, className: classNameProp, ...otherProps }) => {
	const { classes, cx } = useStyles()
	const className = cx(
		classes.root,
		{
			[classes.disabled]: disabled
		},
		classNameProp
	)

	return (
		<div className={className} {...otherProps}>
			<DragAlternative size={size} color={disabled ? 'disabled' : 'inherit'} />
		</div>
	)
}

TreeHandle.propTypes = {
	size: PropTypes.number,
	disabled: PropTypes.bool,
	className: PropTypes.string
}

export default TreeHandle
