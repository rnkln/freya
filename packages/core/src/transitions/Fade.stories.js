import { useState } from 'react'
import storify from '../../dev/story'
import Button from '../button/Button'
import Flex from '../layout/Flex'
import Fade from './Fade'

const Story = (args) => {
	const [open, setOpen] = useState(false)

	return (
		<Flex gap={2} alignItems='center'>
			<Button value='Toggle' onClick={() => setOpen(!open)} />
			<Fade {...args} in={open}>
				<p>This is going to Fade!</p>
			</Fade>
		</Flex>
	)
}

export { Story as Fade }
export default storify({
	title: 'core/transitions/fade',
	component: Fade,
	argTypes: {
		unmountOnExit: {
			control: {
				type: 'boolean'
			}
		}
	},
	args: {
		unmountOnExit: true
	}
})
