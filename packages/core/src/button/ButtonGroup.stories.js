import { useState } from 'react'
import storify, { argTypes } from '../../dev/story'
import Button from './Button'
import ButtonGroup from './ButtonGroup'

const Story = (args) => {
	const [active, setActive] = useState('Button 1')
	const onClick = (event) => setActive(event.target.textContent)

	return (
		<ButtonGroup highlight={(item) => item.value === active} {...args}>
			<Button value='Button 1' onClick={onClick} />
			<Button value='Button 2' onClick={onClick} />
			<Button value='Button 3' onClick={onClick} />
			<Button value='Button 4' onClick={onClick} />
		</ButtonGroup>
	)
}

export { Story as ButtonGroup }
export default storify({
	title: 'core/button/buttongroup',
	component: ButtonGroup,
	argTypes: {
		color: argTypes.color
	}
})
