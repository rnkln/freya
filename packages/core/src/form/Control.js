import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import useUniqueId from '../hooks/useUniqueId'
import Grid from '../layout/Grid'
import GridCell from '../layout/GridCell'
import Label from './Label'
import Helper from './Helper'

const getNormalLayout = (helping, decorated) => {
	const top = decorated ? '"label decorator"' : '"label label"'
	const bot = helping ? '"helper helper"' : ''
	const mid = '"control control"'

	return {
		areas: top + mid + bot,
		columns: decorated ? '1fr auto' : undefined
	}
}

const getCompactLayout = (helping) => ({
	gap: '0 1',
	areas: `"label ${helping ? 'helper control' : 'control'}"`,
	columns: helping ? '1fr auto 1fr' : undefined
})

const getBooleanLayout = (helping) => ({
	gap: '0 1',
	areas: `"control label"${helping ? '". helper"' : ''}`,
	columns: 'auto 1fr'
})

const getGridProps = (layout, helping, decorated) => {
	switch (layout) {
		case 'normal':
			return getNormalLayout(helping, decorated)
		case 'compact':
			return getCompactLayout(helping, decorated)
		case 'boolean':
			return getBooleanLayout(helping, decorated)
		default:
			throw new Error('Invalid layout prop')
	}
}

const useStyles = makeStyles({ name: 'Control' })({
	label: {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap'
	}
})

const Control = forwardRef(
	(
		{
			id,
			gap = 1,
			name,
			value,
			label,
			labelProps,
			error,
			helper,
			layout = 'normal',
			disabled,
			required,
			component: Component,
			decorator: Decorator,
			decoratorProps,
			style,
			className,
			...otherProps
		},
		ref
	) => {
		const uid = useUniqueId('control', id)
		const { classes } = useStyles()
		const invalid = Boolean(error)
		const decorated = Boolean(Decorator) && layout === 'normal'
		const helping = helper || invalid
		const gridProps = getGridProps(layout, helping, decorated)

		return (
			<Grid gap={gap} style={style} alignItems='center' className={className} {...gridProps}>
				<GridCell
					area='label'
					component={Label}
					target={uid}
					value={label}
					disabled={disabled}
					required={required}
					className={classes.label}
					{...labelProps}
				/>

				<GridCell
					ref={ref}
					area='control'
					component={Component}
					id={uid}
					name={name}
					value={value}
					invalid={invalid}
					required={required}
					disabled={disabled}
					{...otherProps}
				/>

				{helping && (
					<GridCell
						area='helper'
						component={Helper}
						value={invalid ? error : helper}
						error={invalid}
						disabled={disabled}
					/>
				)}

				{decorated && (
					<GridCell
						area='decorator'
						component={Decorator}
						value={value}
						{...decoratorProps}
					/>
				)}
			</Grid>
		)
	}
)

Control.displayName = 'Control'

Control.propTypes = {
	id: PropTypes.string,
	gap: PropTypes.number,
	name: PropTypes.string,
	areas: PropTypes.string,
	value: PropTypes.any,
	label: PropTypes.string,
	labelProps: PropTypes.object,
	error: PropTypes.string,
	helper: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	layout: PropTypes.oneOf(['normal', 'compact', 'boolean']),
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	component: PropTypes.elementType.isRequired,
	decorator: PropTypes.elementType,
	decoratorProps: PropTypes.object,
	style: PropTypes.object,
	className: PropTypes.string
}

export default Control
