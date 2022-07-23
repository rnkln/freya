import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { ChevronRight } from '@hs/icons'
import Button from '../button/Button'

const useStyles = makeStyles({ name: 'TreeChevron' })((theme, { depth }) => ({
	root: {
		cursor: 'pointer',
		verticalAlign: 'middle',
		marginLeft: theme.spacing(2 * depth)
	},
	hidden: {
		visibility: 'hidden',
		pointerEvents: 'none'
	}
}))

const TreeChevron = ({
	size,
	depth,
	hidden,
	expanded,
	className: classNameProp,
	onClick,
	...otherProps
}) => {
	const { classes, cx } = useStyles({ depth })
	const className = cx(
		classes.root,
		{
			[classes.hidden]: hidden
		},
		classNameProp
	)

	return (
		<Button
			color='inherit'
			className={className}
			icon={ChevronRight}
			iconProps={{ size, rotate: expanded ? 90 : 0 }}
			onClick={onClick}
			{...otherProps}
		/>
	)
}

TreeChevron.propTypes = {
	size: PropTypes.number,
	depth: PropTypes.number.isRequired,
	hidden: PropTypes.bool,
	expanded: PropTypes.bool.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func
}

export default TreeChevron
