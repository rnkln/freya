import PropTypes from 'prop-types'
import { useState, useRef } from 'react'
import { makeStyles } from '@hs/styles'
import Flex from '../layout/Flex'
import Button from '../button/Button'
import TextRich from './TextRich'

const useStyles = makeStyles({ name: 'Readmore' })((theme) => ({
	wrap: {
		position: 'relative',
		overflow: 'hidden',
		transition: theme.transitions.create(['max-height'])
	},
	fade: {
		width: '100%',
		height: '100%',
		bottom: '0',
		pointerEvents: 'none',
		position: 'absolute',
		background:
			'transparent linear-gradient(180deg, #FFFFFF00 60%, #FFFFFF 100%) 0% 0% no-repeat padding-box'
	}
}))

const Readmore = ({
	text = '',
	btnTextExpanded = 'Read less',
	btnTextCollapsed = 'Read more',
	collapsedMaxHeight,
	...otherProps
}) => {
	const ref = useRef()
	const { classes } = useStyles()
	const [expanded, setExpanded] = useState(false)

	return (
		<Flex gap={2} direction='column' {...otherProps}>
			<div
				ref={ref}
				style={{ maxHeight: expanded ? ref.current.scrollHeight : collapsedMaxHeight }}
				className={classes.wrap}
			>
				<TextRich value={text} />

				{!expanded && <div className={classes.fade} />}
			</div>

			<Button
				value={expanded ? btnTextExpanded : btnTextCollapsed}
				onClick={() => setExpanded(!expanded)}
			/>
		</Flex>
	)
}

Readmore.propTypes = {
	text: PropTypes.string,
	btnTextCollapsed: PropTypes.string,
	btnTextExpanded: PropTypes.string,
	collapsedMaxHeight: PropTypes.string.isRequired
}

export default Readmore
