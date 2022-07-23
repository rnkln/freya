import PropTypes from 'prop-types'
import { useStyles } from '@hs/styles'
import Float from '../layout/Float'
import Scroll from '../layout/Scroll'
import Paper from '../surface/Paper'

const AutocompletePopup = ({ size, anchor, children, ...otherProps }) => {
	const { theme } = useStyles()
	const width = anchor?.offsetWidth
	const height = size ? theme.size(size * 3.6 + 1.6) : undefined
	const style = { width, maxHeight: height }
	const onMouseDown = (event) => event.preventDefault()

	return (
		<Float anchor={anchor} trap={false} {...otherProps}>
			<Scroll component={Paper} style={style} onMouseDown={onMouseDown}>
				{children}
			</Scroll>
		</Float>
	)
}

AutocompletePopup.propTypes = {
	size: PropTypes.number,
	anchor: PropTypes.instanceOf(Element),
	children: PropTypes.node
}

export default AutocompletePopup
