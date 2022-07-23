import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import Flex from '../layout/Flex'

const useStyles = makeStyles({ name: 'TabPanel' })((theme) => ({
	root: {
		padding: theme.spacing(2),
		color: theme.palette.common.one[900],
		backgroundColor: theme.palette.white.main
	}
}))

const TabPanel = ({ className, children, ...rest }) => {
	const { classes, cx } = useStyles()

	return (
		<Flex className={cx(classes.root, className)} {...rest}>
			{children}
		</Flex>
	)
}

TabPanel.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
}

export default TabPanel
