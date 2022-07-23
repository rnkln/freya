import { useContext } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { createChainedFunction } from '@hs/utils'
import useUniqueId from '../hooks/useUniqueId'
import Button from '../button/Button'
import MenuContext from './MenuContext'

const useStyles = makeStyles({ name: 'MenuItem' })((theme) => ({
	root: {
		padding: theme.spacing(0, 2)
	},
	selected: {
		pointerEvents: 'none',
		background: theme.palette.white.contrastText,
		color: theme.palette.white.main
	}
}))

const MenuItem = ({
	id: idProp,
	value,
	selected,
	className: classNameProp,
	onClick: onClickProp,
	...otherProps
}) => {
	const id = useUniqueId('menuitem', idProp)
	const { classes, cx } = useStyles()
	const context = useContext(MenuContext)
	const onClick = createChainedFunction(onClickProp, context.onClose)
	const className = cx(
		classes.root,
		{
			[classes.selected]: selected
		},
		classNameProp
	)

	return (
		<Button
			id={id}
			gap={1}
			role='menuitem'
			color='inherit'
			value={value}
			variant='text'
			rounded={false}
			justifyContent='normal'
			tabIndex={-1}
			className={className}
			onClick={onClick}
			{...otherProps}
		/>
	)
}

MenuItem.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	value: PropTypes.string,
	selected: PropTypes.bool,
	onClick: PropTypes.func,
	className: PropTypes.string
}

export default MenuItem
