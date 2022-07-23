import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { mapChildren } from '@hs/utils'
import ListItem from '../layout/ListItem'
import Divider from '../layout/Divider'
import Text from '../typography/Text'

const useStyles = makeStyles({ name: 'AutocompleteOptionsGroup' })((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		fontSize: theme.size(1.2),
		fontWeight: theme.typography.weight('semibold')
	},
	label: {
		padding: theme.spacing(1, 2)
	},
	option: {
		padding: theme.spacing(0, 0, 0, 3)
	}
}))

const AutocompleteOptionsGroup = ({ label, children, divider, ...otherProps }) => {
	const { classes } = useStyles()

	return (
		<>
			{divider && <Divider gap={1} />}
			<ListItem presentation='true' className={classes.root} {...otherProps}>
				<Text className={classes.label}>{label}</Text>
			</ListItem>
			{mapChildren(children, () => ({ className: classes.option }))}
		</>
	)
}

AutocompleteOptionsGroup.propTypes = {
	label: PropTypes.string,
	children: PropTypes.node,
	divider: PropTypes.bool
}

export default AutocompleteOptionsGroup
