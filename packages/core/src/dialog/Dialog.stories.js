import { useState } from 'react'
import storify from '../../dev/story'
import Button from '../button/Button'
import Dialog from './Dialog'

const Story = ({
	open: ignoredOpen,
	transition: ignoredTransition,
	onCancel: ignoredOnCancel,
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

			<Dialog open={open} transition={undefined} onCancel={() => setOpen(false)} {...args}>
				I am the content of this dialog!
			</Dialog>
		</>
	)
}

export { Story as Dialog }
export default storify({
	title: 'core/dialog/dialog',
	component: Dialog,
	argTypes: {
		onAccept: { action: 'clicked' }
	},
	args: {
		title: 'Title',
		accept: 'Confirm',
		cancel: 'Cancel'
	}
})
