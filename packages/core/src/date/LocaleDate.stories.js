import storify from '../../dev/story'
import LocaleDate from './LocaleDate'

const Story = (args) => <LocaleDate {...args} />

export { Story as LocaleDate }
export default storify({
	title: 'core/date/localedate',
	component: LocaleDate
})
