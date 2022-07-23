import { useRef, useState } from 'react'
import storify from '../../dev/story'
import Button from '../button/Button'
import Paper from '../surface/Paper'
import Float from './Float'

const Story = ({
	open: ignoredOpen,
	anchor: ignoredAnchor,
	transition: ignoredTransition,
	onClose: ignoredOnClose,
	...args
}) => {
	const [anchor, setAnchor] = useState()
	const ref = useRef()
	const open = Boolean(anchor)

	return (
		<>
			<Button
				ref={ref}
				value={open ? 'Close' : 'Open'}
				variant='outlined'
				onClick={(event) => setAnchor(open ? undefined : event.currentTarget)}
			/>

			<Float
				open={open}
				anchor={anchor}
				transition={undefined}
				onClose={() => setAnchor()}
				{...args}
			>
				<Paper style={{ padding: '8px' }}>Floating Paper</Paper>
			</Float>
		</>
	)
}

export { Story as Float }
export default storify({
	title: 'core/layout/float',
	component: Float
})
