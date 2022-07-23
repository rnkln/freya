import PropTypes from 'prop-types'
import { Float } from '../layout'
import TooltipContent from './TooltipContent'

const Tooltip = ({
	anchor,
	value,
	color = 'primary',
	align = 'start',
	trap = false,
	children,
	showArrow = true,
	...otherProps
}) => (
	<Float
		open={Boolean(anchor)}
		anchor={anchor}
		trap={trap}
		align={`start ${align}`}
		anchorOrigin={`end ${align}`}
		{...otherProps}
	>
		<TooltipContent
			anchor={anchor}
			color={color}
			value={value}
			children={children}
			showArrow={showArrow}
		/>
	</Float>
)

Tooltip.propTypes = {
	anchor: PropTypes.instanceOf(Element),
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
	color: PropTypes.string,
	align: PropTypes.oneOf(['start', 'center', 'end']),
	showArrow: PropTypes.bool,
	children: PropTypes.node,
	trap: PropTypes.bool
}

export default Tooltip
