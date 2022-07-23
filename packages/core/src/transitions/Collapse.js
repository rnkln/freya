import { useRef, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import TransitionBase from './TransitionBase'

const useStyles = makeStyles({ name: 'Collapse' })((theme, { duration }) => ({
	root: {
		transition: theme.transitions.create('height', { duration })
	}
}))

const useTiming = (original, update) =>
	useCallback(
		(element) => {
			update(element)

			if (original) {
				original(element)
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[original]
	)

const Collapse = ({
	in: inProp,
	duration = 'standard',
	children,
	onEnter: onEnterProp,
	onEntering: onEnteringProp,
	onEntered: onEnteredProp,
	onExit: onExitProp,
	onExiting: onExitingProp,
	onExited: onExitedProp,
	...otherProps
}) => {
	const nodeRef = useRef()
	const { classes } = useStyles({ duration })
	const [style, setStyleRaw] = useState({
		height: inProp ? 'auto' : 0,
		display: inProp ? 'block' : 'none',
		overflow: inProp ? 'visible' : 'hidden'
	})

	const setStyle = useCallback(
		(mutations) => setStyleRaw((prev) => ({ ...prev, ...mutations })),
		[]
	)

	const onEnter = useTiming(onEnterProp, () => setStyle({ height: 0, display: 'block' }))

	const onEntering = useTiming(onExitProp, (element) =>
		setStyle({ height: element.scrollHeight })
	)

	const onEntered = useTiming(onExitProp, () => setStyle({ height: 'auto', overflow: 'visible' }))

	const onExit = useTiming(onExitProp, (element) =>
		setStyle({ height: element.scrollHeight, overflow: 'hidden' })
	)
	const onExiting = useTiming(onExitingProp, () => setStyle({ height: 0 }))
	const onExited = useTiming(onExitedProp, () => setStyle({ height: 0, display: 'none' }))

	return (
		<TransitionBase
			in={inProp}
			duration={duration}
			onEnter={onEnter}
			onEntering={onEntering}
			onEntered={onEntered}
			onExit={onExit}
			onExiting={onExiting}
			onExited={onExited}
			{...otherProps}
		>
			<div ref={nodeRef} className={classes.root} style={style}>
				{children}
			</div>
		</TransitionBase>
	)
}

Collapse.propTypes = {
	in: PropTypes.bool,
	duration: PropTypes.oneOf(['short', 'standard', 'complex']),
	children: PropTypes.node,
	onEnter: PropTypes.func,
	onEntering: PropTypes.func,
	onEntered: PropTypes.func,
	onExit: PropTypes.func,
	onExiting: PropTypes.func,
	onExited: PropTypes.func
}

export default Collapse
