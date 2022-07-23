import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import usePersist from '../hooks/usePersist'
import { Flex } from '../layout'

const useStyles = makeStyles({ name: 'TooltipArrow' })((theme, props) => ({
	root: {
		zIndex: 1,
		width: 0,
		height: 0,
		borderLeft: '5px solid transparent',
		borderRight: '5px solid transparent',
		color: theme.palette[props.color].main,
		transition: theme.transitions.create(['color', 'background-color', 'border-color']),
		borderBottom: '5px solid currentColor'
	}
}))

const TooltipArrow = ({ anchor, color, tooltipElementLeft }) => {
	const { classes } = useStyles({ color })
	const savedAnchor = usePersist(anchor)
	const marginLeft =
		savedAnchor.offsetWidth / 2 -
		5 +
		(savedAnchor.getBoundingClientRect().left - tooltipElementLeft)

	return <Flex className={classes.root} style={{ marginLeft }} />
}

TooltipArrow.propTypes = {
	anchor: PropTypes.instanceOf(Element),
	tooltipElementLeft: PropTypes.number.isRequired,
	color: PropTypes.string
}

export default TooltipArrow
