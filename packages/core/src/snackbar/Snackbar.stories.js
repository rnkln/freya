import { useState } from 'react'
import storify from '../../dev/story'
import Button from '../button/Button'
import Snackbar from './Snackbar'

const Story = ({
	open: ignoredOpen,
	transition: ignoredTransition,
	onClose: ignoredOnClose,
	...args
}) => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<Button
				value={open ? 'Close' : 'Open'}
				variant='outlined'
				onClick={() => setOpen(true)}
			/>

			<Snackbar open={open} transition={undefined} onClose={() => setOpen(false)} {...args} />
		</>
	)
}

export { Story as Snackbar }
export default storify({
	title: 'core/snackbar/snackbar',
	component: Snackbar,
	argTypes: {
		onClose: { action: 'closed' }
	},
	args: {
		value: 'Settings successfully saved!'
	}
})
