import storify from '../../dev/story'
import LocaleNumber from './LocaleNumber'

const Story = (args) => <LocaleNumber {...args} />

export { Story as LocaleDateRelative }
export default storify({
	title: 'core/date/localenumber',
	component: LocaleNumber
})
