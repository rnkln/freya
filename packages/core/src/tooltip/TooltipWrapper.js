import { cloneElement } from 'react'
import PropTypes from 'prop-types'
import TooltipFromCore from './Tooltip'
import useTooltipState from './useTooltipState'

const TooltipWrapper = ({
	children: child,
	value,
	event = 'mouseover',
	align = 'start',
	showArrow = true,
	...otherProps
}) => {
	const { anchor, openTooltip, closeTooltip, toggleTooltip } = useTooltipState()
	const eventProps =
		event === 'mouseover'
			? {
					onMouseEnter: openTooltip,
					onMouseLeave: closeTooltip
			  }
			: {
					onClick: toggleTooltip
			  }
	if (value === undefined || value === null) {
		return child
	}

	return (
		<>
			{cloneElement(child, {
				...child.props,
				...eventProps
			})}
			<TooltipFromCore
				anchor={anchor}
				onClose={closeTooltip}
				value={value}
				showArrow={showArrow}
				align={align}
				{...otherProps}
			/>
		</>
	)
}

TooltipWrapper.propTypes = {
	children: PropTypes.node.isRequired,
	showArrow: PropTypes.bool,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
	color: PropTypes.string,
	align: PropTypes.oneOf(['start', 'center', 'end']),
	event: PropTypes.oneOf(['mouseover', 'click'])
}

export default TooltipWrapper
