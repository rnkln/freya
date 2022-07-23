import storify from '../../dev/story'
import LocaleDateRelative from './LocaleDateRelative'

const Story = (args) => <LocaleDateRelative {...args} />

export { Story as LocaleDateRelative }
export default storify({
	title: 'core/date/localedaterelative',
	component: LocaleDateRelative
})
