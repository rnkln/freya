import { useState } from 'react'
import { createChainedFunction } from '@hs/utils'
import storify, { argTypes } from '../../dev/story'
import ButtonBurger from './ButtonBurger'

const Story = ({ open: ignoredOpen, onClick: onClickProp, ...args }) => {
	const [open, setOpen] = useState()
	const onClick = createChainedFunction(onClickProp, () => setOpen(!open))

	return <ButtonBurger open={open} onClick={onClick} {...args} />
}

export { Story as ButtonBurger }
export default storify({
	title: 'core/button/buttonburger',
	component: ButtonBurger,
	argTypes: {
		color: argTypes.color,
		onClick: { action: 'clicked' }
	},
	args: {
		value: 'Click me!'
	}
})
