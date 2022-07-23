import { useState } from 'react'
import storify from '../../dev/story'
import Input from '../input/Input'
import Button from '../button/Button'
import Heading from '../typography/Heading'
import Drawer from './Drawer'

const Story = ({
	open: ignoredOpen,
	transition: ignoredTransition,
	onClose: ignoredOnClose,
	...args
}) => {
	const [open, setOpen] = useState()

	return (
		<>
			<Button
				value={open ? 'Close' : 'Open'}
				variant='outlined'
				onClick={() => setOpen(true)}
			/>

			<Drawer open={open} transition={undefined} onClose={() => setOpen(false)} {...args}>
				<div style={{ padding: '16px' }}>
					<Heading value='D Paper with Input!' />
					<Input label='Name' style={{ marginTop: '32px' }} />
					<Input label='Name' style={{ marginTop: '32px' }} />
					<Input label='Name' style={{ marginTop: '32px' }} />
					<Input label='Name' style={{ marginTop: '32px' }} />
					<Input label='Name' style={{ marginTop: '32px' }} />
					<Input label='Name' style={{ marginTop: '32px' }} />
					<Input label='Name' style={{ marginTop: '32px' }} />
					<Input label='Name' style={{ marginTop: '32px' }} />
					<Input label='Name' style={{ marginTop: '32px' }} />
				</div>
			</Drawer>
		</>
	)
}

export { Story as Drawer }
export default storify({
	title: 'core/drawer/drawer',
	component: Drawer
})
