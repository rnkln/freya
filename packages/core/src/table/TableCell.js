import { forwardRef, useContext } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import TableSortingIcon from './TableSortingIcon'
import TableSectionContext from './TableSectionContext'

const useStyles = makeStyles({ name: 'TableCell' })((theme) => ({
	root: {
		verticalAlign: 'inherit',
		padding: theme.spacing(0, 1),
		height: theme.size(5.6)
	},
	tbody: {
		borderTop: `1px solid ${theme.palette.common.three[100]}`
	},
	thead: {
		color: theme.palette.common.one[700],
		textAlign: 'start'
	},
	start: {
		textAlign: 'start'
	},
	center: {
		textAlign: 'center'
	},
	end: {
		textAlign: 'end'
	},
	nowrap: {
		whiteSpace: 'nowrap'
	},
	shrink: {
		width: '1px' // 0 Does not work in chrome
	},
	sortable: {
		cursor: 'pointer'
	},
	highlight: {
		background: theme.alpha(theme.palette.warning.main, 0.2)
	},
	accentuate: {
		fontWeight: theme.typography.weight('semibold')
	}
}))

const sortingToAria = (direction) =>
	direction === 'none' ? direction : `${direction.toLowerCase()}ending`
const contextToScope = (context) => (context === 'thead' ? 'col' : 'row')

const TableCell = forwardRef(
	(
		{
			component,
			value,
			align,
			scope: scopeProp,
			nowrap,
			shrink,
			sorting,
			highlight,
			accentuate,
			className: classNameProp,
			children,
			...otherProps
		},
		ref
	) => {
		const { classes, cx } = useStyles()
		const context = useContext(TableSectionContext)
		const Component = component || context === 'thead' ? 'th' : 'td'
		const sortable = context === 'thead' && sorting !== undefined
		const sortaria = !sortable ? undefined : sortingToAria(sorting)
		const scope = Component !== 'th' ? undefined : scopeProp ?? contextToScope(context)
		const className = cx(
			classes.root,
			classes[align],
			classes[context],
			{
				[classes.shrink]: shrink,
				[classes.nowrap]: nowrap ?? Component === 'th',
				[classes.sortable]: sortable,
				[classes.highlight]: highlight,
				[classes.accentuate]: accentuate ?? Component === 'th'
			},
			classNameProp
		)

		return (
			<Component
				ref={ref}
				scope={scope}
				aria-sort={sortaria}
				className={className}
				{...otherProps}
			>
				{value ? value : children}
				{sortable && <TableSortingIcon direction={sorting} />}
			</Component>
		)
	}
)

TableCell.displayName = 'TableCell'

TableCell.propTypes = {
	component: PropTypes.oneOf(['th', 'td']),
	value: PropTypes.string,
	align: PropTypes.oneOf(['start', 'center', 'end']),
	scope: PropTypes.oneOf(['col', 'row', 'colgroup', 'rowgroup']),
	nowrap: PropTypes.bool,
	shrink: PropTypes.bool,
	sorting: PropTypes.oneOf(['none', 'asc', 'ASC', 'desc', 'DESC']),
	highlight: PropTypes.bool,
	accentuate: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node
}

export default TableCell
