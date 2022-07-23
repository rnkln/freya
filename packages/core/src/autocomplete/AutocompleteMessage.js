import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import Flex from '../layout/Flex'
import ListItem from '../layout/ListItem'

const useStyles = makeStyles({ name: 'AutocompleteMessage' })((theme) => ({
	root: {
		height: theme.size(3.6),
		padding: theme.spacing(1, 2)
	}
}))

const AutocompleteMessage = ({ message, ...otherProps }) => {
	const { classes } = useStyles()

	return (
		<Flex
			component={ListItem}
			presentation='true'
			alignItems='center'
			className={classes.root}
			{...otherProps}
		>
			{message}
		</Flex>
	)
}

AutocompleteMessage.propTypes = {
	message: PropTypes.string,
	children: PropTypes.node
}

export default AutocompleteMessage
