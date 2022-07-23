import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { groupBy as lodashGroupBy } from 'lodash-es'
import List from '../layout/List'
import AutocompleteOptionsGroup from './AutocompleteOptionsGroup'

const useStyles = makeStyles({ name: 'AutocompleteList' })((theme) => ({
	root: {
		padding: theme.spacing(1, 0)
	}
}))

const AutocompleteList = ({ id, options, renderOption, state }) => {
	const { classes } = useStyles()
	const groupedOptions = lodashGroupBy(options, state.groupBy)

	return (
		<List id={id} type='none' role='listbox' className={classes.root}>
			{Object.entries(groupedOptions).map(([group, groupOptions], index) => {
				const grouped = groupOptions.map((option) => renderOption(option, state))

				if (group !== 'undefined') {
					return (
						<AutocompleteOptionsGroup key={group} divider={index > 0} label={group}>
							{grouped}
						</AutocompleteOptionsGroup>
					)
				}

				return grouped
			})}
		</List>
	)
}

AutocompleteList.propTypes = {
	id: PropTypes.string,
	options: PropTypes.array,
	renderOption: PropTypes.func,
	state: PropTypes.object
}

export default AutocompleteList
