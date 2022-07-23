import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import useUniqueId from '../hooks/useUniqueId'
import Flex from '../layout/Flex'
import Float from '../layout/Float'
import Scroll from '../layout/Scroll'
import Paper from '../surface/Paper'
import MenuContext from './MenuContext'
import useMenuNavigation from './useMenuNavigation'

const useStyles = makeStyles({ name: 'Menu' })((theme) => ({
	menu: {
		padding: theme.spacing(1, 0)
	}
}))

const Menu = ({ id: idProp, trap = true, anchor, children, onClose, ...otherProps }) => {
	const id = useUniqueId('menu', idProp)
	const { classes } = useStyles()
	const context = useMemo(() => ({ onClose }), [onClose])
	const open = Boolean(anchor)

	useMenuNavigation({
		listId: id,
		enabled: open,
		controller: trap ? undefined : anchor,
		onCancel: onClose
	})

	return (
		<MenuContext.Provider value={context}>
			<Float open={open} trap={trap} anchor={anchor} onClose={onClose} {...otherProps}>
				<Scroll id={id} role='menu' component={Paper}>
					<Flex direction='column' className={classes.menu}>
						{children}
					</Flex>
				</Scroll>
			</Float>
		</MenuContext.Provider>
	)
}

Menu.propTypes = {
	id: PropTypes.string,
	trap: PropTypes.bool,
	anchor: PropTypes.instanceOf(Element),
	component: PropTypes.elementType,
	className: PropTypes.string,
	children: PropTypes.node,
	onClose: PropTypes.func
}

export default Menu
