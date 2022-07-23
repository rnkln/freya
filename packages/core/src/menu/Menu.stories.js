import storify from '../../dev/story'
import Button from '../button/Button'
import Menu from './Menu'
import MenuItem from './MenuItem'
import useMenuState from './useMenuState'

const Template = (args) => {
	const { open, anchor, handleOpen, handleClose, handleToggle } = useMenuState()

	return (
		<>
			<Button
				value={open ? 'Toggle (Close)' : 'Toggle (Open)'}
				variant='outlined'
				onClick={handleToggle}
			/>

			<Button value='Open' variant='outlined' onClick={handleOpen} />

			<Menu {...args} open={open} anchor={anchor} onClose={handleClose}>
				<MenuItem color='success' value='Menu Item 1' />
				<MenuItem color='error' value='Menu Item 2' />
				<MenuItem color='action' value='Menu Item 3' />
				<MenuItem value='Menu Item 4' />
			</Menu>
		</>
	)
}

export { Template as Menu }
export default storify({
	title: 'core/menu/menu',
	component: Menu
})
