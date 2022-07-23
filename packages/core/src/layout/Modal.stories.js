import { useState } from 'react'
import storify from '../../dev/story'
import Input from '../input/Input'
import Button from '../button/Button'
import Paper from '../surface/Paper'
import Heading from '../typography/Heading'
import Scroll from './Scroll'
import Modal from './Modal'

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

			<Modal open={open} transition={undefined} onClose={() => setOpen(false)} {...args}>
				<Scroll component={Paper}>
					<div style={{ padding: '16px' }}>
						<Heading value='Modalised Paper with Input!' />
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
				</Scroll>
			</Modal>
		</>
	)
}

export { Story as Modal }
export default storify({
	title: 'core/layout/modal',
	component: Modal
})
