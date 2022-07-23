import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import Flex from '../layout/Flex'
import Sugar from '../surface/Sugar'
import TooltipArrow from './TooltipArrow'

const useStyles = makeStyles({ name: 'TooltipContent' })((theme) => ({
	root: {
		padding: theme.spacing(0.6, 1)
	}
}))

const TooltipContent = forwardRef(
	({ anchor, color = 'secondary', value, children, showArrow = true, ...otherProps }, ref) => {
		const { classes } = useStyles()
		const tooltipElementLeft = otherProps?.style?.left

		return (
			<Flex ref={ref} direction='column' {...otherProps}>
				{showArrow && tooltipElementLeft && (
					<TooltipArrow
						anchor={anchor}
						color={color}
						tooltipElementLeft={tooltipElementLeft}
					/>
				)}
				<Sugar color={color} className={classes.root}>
					{value || children}
				</Sugar>
			</Flex>
		)
	}
)

TooltipContent.displayName = 'TooltipContent'

TooltipContent.propTypes = {
	anchor: PropTypes.instanceOf(Element),
	color: PropTypes.string,
	showArrow: PropTypes.bool,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
	children: PropTypes.node
}

export default TooltipContent
