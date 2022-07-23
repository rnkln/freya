import { makeStyles } from '@hs/styles'
import { MovieOutline } from '@hs/icons'
import storify from '../../dev/story'
import Paper from '../surface/Paper'
import Accordion from './Accordion'
import AccordionPanel from './AccordionPanel'

const useStyles = makeStyles({ name: 'AccordionPanelStory' })((theme) => ({
	panel: {
		width: theme.spacing(64),
		padding: theme.spacing(2, 1, 2, 1.5)
	},
	content: {
		paddingLeft: theme.spacing(7)
	}
}))

const Story = (props) => {
	const { classes } = useStyles()

	return (
		<Paper>
			<Accordion>
				<AccordionPanel {...props} icon={MovieOutline} className={classes.panel}>
					<div className={classes.content}>
						Aenean vitae imperdiet sem. Suspendisse vel pellentesque est. Sed et nunc at
						ligula porta pretium iaculis sit amet tortor. Duis hendrerit lectus ac arcu
						pretium elementum. Sed ornare orci non imperdiet dictum. Nullam cursus
						hendrerit congue. Vivamus laoreet at augue nec bibendum. Nullam bibendum
						posuere tortor, nec pretium quam.
					</div>
				</AccordionPanel>
			</Accordion>
		</Paper>
	)
}

export { Story as AccordionPanel }
export default storify({
	title: 'core/accordion/accordionpanel',
	component: AccordionPanel,
	args: {
		title: 'Aenean vitae imperdiet sem',
		iconProps: { size: 4, rotate: 45, color: 'primary' }
	}
})
