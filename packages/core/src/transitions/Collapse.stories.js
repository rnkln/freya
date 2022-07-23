import { useState } from 'react'
import storify from '../../dev/story'
import Button from '../button/Button'
import Alert from '../alert/Alert'
import Flex from '../layout/Flex'
import TextRich from '../typography/TextRich'
import Collapse from './Collapse'

const Story = (props) => {
	const [closed, setClosed] = useState([1])
	const [alerts] = useState([
		{
			id: 1,
			severity: 'info',
			title: 'COLLAPSE #1',
			text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Phasellus consectetur vitae ligula sed pellentesque.`
		},
		{
			id: 2,
			severity: 'error',
			title: 'COLLAPSE #2',
			text: 'Nunc porttitor ex rhoncus imperdiet convallis.<br />Donec dapibus magna sed metus ultricies, ac venenatis enim aliquet.'
		},
		{
			id: 3,
			severity: 'warning',
			title: 'COLLAPSE #3',
			text: `Fusce sit amet gravida massa, eu aliquam leo.<br />Proin rutrum lacus dictum sapien suscipit pharetra.<br />Vestibulum placerat ornare eros vitae tempus.`
		}
	])

	const toggle = (id) => {
		if (closed.includes(id)) {
			setClosed((prev) => prev.filter((pid) => pid !== id))
		} else {
			setClosed((prev) => [...prev, id])
		}
	}

	return (
		<Flex direction='column' gap={3}>
			<Flex direction='row' gap={3} alignItems='end' justifyContent='start'>
				{alerts.map((alert) => (
					<Button
						key={alert.id}
						value={alert.title}
						variant='contained'
						onClick={() => toggle(alert.id)}
					/>
				))}
			</Flex>
			<Flex gap={0} direction='column'>
				{alerts.map((alert) => (
					<Collapse key={alert.id} in={!closed.includes(alert.id)} {...props}>
						<Alert
							severity={alert.severity}
							title={alert.title}
							onClose={() => setClosed((prev) => [...prev, alert.id])}
						>
							<TextRich value={alert.text} />
						</Alert>
					</Collapse>
				))}
			</Flex>
		</Flex>
	)
}

export { Story as Collapse }
export default storify({
	title: 'core/transitions/collapse',
	component: Collapse,
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
