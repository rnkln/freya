import { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@hs/styles'
import { useRefFork, mapChildrenOnly, MemoizedContent } from '@hs/utils'
import useHotkey from '../hooks/useHotkey'
import useOutside from '../hooks/useOutside'
import useViewport from '../hooks/useViewport'
import useBodyLock from '../hooks/useBodyLock'
import useFocusTrap from '../hooks/useFocusTrap'
import Fade from '../transitions/Fade'
import Portal from './Portal'

const axisToSize = (axis) => (axis === 'y' ? 'height' : 'width')

const getOrigin = (axis, origin, rect) => {
	switch (origin) {
		case 'center':
			return rect[axis] + rect[axisToSize(axis)] / 2
		case 'end':
			return rect[axis === 'y' ? 'bottom' : 'right']
		default:
			return rect[axis === 'y' ? 'top' : 'left']
	}
}

const getOffset = (axis, align, translate, rect) => {
	switch (align) {
		case 'center':
			return rect[axisToSize(axis)] / 2
		case 'end':
			return rect[axisToSize(axis)] + translate
		default:
			return -translate
	}
}

const getPosition = (anchor, anchorOrigin, element, align, inset, translate, viewport) => {
	const arect = anchor.getBoundingClientRect()
	const erect = element.getBoundingClientRect()
	const [alignY = 'start', alignX = 'start'] = align.split(' ')
	const [originY = 'end', originX = 'start'] = anchorOrigin.split(' ')
	const [translateY = 0, translateX = translateY] = translate.split(' ').map((n) => Number(n))

	const originTop = getOrigin('y', originY, arect)
	const originLeft = getOrigin('x', originX, arect)
	const offsetTop = getOffset('y', alignY, translateY, erect)
	const offsetLeft = getOffset('x', alignX, translateX, erect)

	const top = Math.min(
		viewport.height - inset - erect.height,
		Math.max(inset, originTop - offsetTop)
	)
	const left = Math.min(
		viewport.width - inset - erect.width,
		Math.max(inset, originLeft - offsetLeft)
	)

	return { top, left }
}

const Float = ({
	open = false,
	lock = true,
	trap = true,
	renderOnClose = false,
	inset = 1,
	style,
	align = 'start start',
	portal = true,
	anchor,
	anchorOrigin = 'end start',
	translate = '2 0',
	transition: Transition = Fade,
	transitionProps,
	onEnter,
	onEntered,
	onExit,
	onExited,
	onClose,
	children
}) => {
	const { theme } = useStyles()
	const viewport = useViewport()
	const childRef = useRef()
	const forkedRef = useRefFork(childRef, children.ref)
	const [position, setPosition] = useState()

	useHotkey('escape', onClose, { enabled: open })
	useOutside(childRef, onClose, { enabled: open, exclude: anchor })
	useBodyLock(childRef, { enabled: open && lock })
	useFocusTrap(childRef, { enabled: open && trap })

	useEffect(() => {
		if (open && anchor && childRef.current) {
			setPosition(
				getPosition(
					anchor,
					anchorOrigin,
					childRef.current,
					align,
					inset * 8,
					translate,
					viewport
				)
			)
		}
	}, [anchor, anchorOrigin, align, inset, translate, viewport, open, children])

	return (
		<Portal disabled={!portal}>
			<Transition
				in={open}
				onEnter={onEnter}
				onEntered={onEntered}
				onExit={onExit}
				onExited={onExited}
				{...transitionProps}
			>
				<MemoizedContent renderWhen={open && !renderOnClose}>
					{mapChildrenOnly(children, (child) => ({
						ref: forkedRef,
						tabIndex: -1,
						style: {
							position: 'fixed',
							boxSizing: 'border-box',
							maxWidth: `calc(100vw - ${theme.spacing(inset * 2)})`,
							maxHeight: `calc(100vh - ${theme.spacing(inset * 2)})`,
							zIndex: 30,
							outline: 0,
							...position,
							...style,
							...child.props.style
						}
					}))}
				</MemoizedContent>
			</Transition>
		</Portal>
	)
}

Float.displayName = 'Float'

Float.propTypes = {
	open: PropTypes.bool,
	lock: PropTypes.bool,
	trap: PropTypes.bool,
	renderOnClose: PropTypes.bool,
	inset: PropTypes.number,
	style: PropTypes.object,
	align: PropTypes.string,
	portal: PropTypes.bool,
	anchor: PropTypes.instanceOf(Element),
	anchorOrigin: PropTypes.string,
	translate: PropTypes.string,
	transition: PropTypes.elementType,
	transitionProps: PropTypes.object,
	onEnter: PropTypes.func,
	onEntered: PropTypes.func,
	onExit: PropTypes.func,
	onExited: PropTypes.func,
	onClose: PropTypes.func,
	children: PropTypes.element.isRequired
}

export default Float
