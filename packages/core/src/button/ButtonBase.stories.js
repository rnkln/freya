import storify from '../../dev/story'
import ButtonBase from './ButtonBase'

const Story = (args) => <ButtonBase {...args}>Click me!</ButtonBase>

export { Story as ButtonBase }
export default storify({
	title: 'core/button/buttonbase',
	component: ButtonBase
})
