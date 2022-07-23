import { makeStyles } from '@hs/styles'
import { AccountOutline, DatabaseOutline, MovieOutline } from '@hs/icons'
import storify from '../../dev/story'
import { Divider } from '../layout'
import Paper from '../surface/Paper'
import Accordion from './Accordion'
import AccordionPanel from './AccordionPanel'

const useStyles = makeStyles({ name: 'AccordionStory' })((theme) => ({
	accordion: {
		width: theme.spacing(80)
	},
	panel: {
		padding: theme.spacing(2, 1, 2, 1.5)
	}
}))

const Story = (props) => {
	const { classes } = useStyles()

	return (
		<Paper>
			<Accordion {...props} className={classes.accordion}>
				<AccordionPanel
					title='Lorem ipsum dolor sit amet'
					icon={AccountOutline}
					panelId='1'
					className={classes.panel}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis libero id
					arcu tincidunt, ac malesuada neque vulputate. Donec nec mi dapibus, commodo eros
					in, maximus odio. Integer aliquam facilisis magna, sed vehicula lectus rhoncus
					ut. Nunc venenatis sed turpis in luctus. Nam sodales feugiat efficitur. Integer
					nec ornare est.
				</AccordionPanel>
				<Divider />
				<AccordionPanel
					title='Sed cursus laoreet erat'
					icon={DatabaseOutline}
					disabled={true}
					className={classes.panel}
				>
					Sed cursus laoreet erat, nec feugiat erat consequat at. Aenean in varius mauris,
					sed blandit eros. Fusce viverra mi eget felis posuere, nec pharetra urna
					tristique. Phasellus non consequat felis, ac egestas dui
				</AccordionPanel>
				<Divider />
				<AccordionPanel title='Vivamus sit amet volutpat turpis' className={classes.panel}>
					Vivamus sit amet volutpat turpis. Mauris sollicitudin malesuada arcu, molestie
					posuere nulla interdum ut. Maecenas et posuere sem. Donec ac pretium ex.
					Praesent nec finibus justo. Duis lectus mi, feugiat sed congue eu, ultrices quis
					nisl. Nulla placerat erat in pretium finibus. Sed ex magna, elementum vel ornare
					vel, fringilla ac ligula
				</AccordionPanel>
				<Divider />
				<AccordionPanel
					title='Aenean vitae imperdiet sem'
					icon={MovieOutline}
					className={classes.panel}
				>
					Aenean vitae imperdiet sem. Suspendisse vel pellentesque est. Sed et nunc at
					ligula porta pretium iaculis sit amet tortor. Duis hendrerit lectus ac arcu
					pretium elementum. Sed ornare orci non imperdiet dictum. Nullam cursus hendrerit
					congue. Vivamus laoreet at augue nec bibendum. Nullam bibendum posuere tortor,
					nec pretium quam.
				</AccordionPanel>
			</Accordion>
		</Paper>
	)
}

export { Story as Accordion }
export default storify({
	title: 'core/accordion/accordion',
	component: Accordion
})
