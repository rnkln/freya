import { useRef, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { useRefFork, MemoizedContent } from '@hs/utils'
import useHotkey from '../hooks/useHotkey'
import useOutside from '../hooks/useOutside'
import useBodyLock from '../hooks/useBodyLock'
import useFocusTrap from '../hooks/useFocusTrap'
import Fade from '../transitions/Fade'
import Flex from './Flex'
import Portal from './Portal'

const isString = (value) => Object.prototype.toString.call(value) === '[object String]'

const useStyles = makeStyles({ name: 'Modal' })((theme) => ({
	root: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100vw',
		height: '100vh',
		zIndex: 20
	},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100vw',
		height: '100vh',
		background: `${theme.palette.common.two[900]}D9`,
		tapHighlightColor: 'transparent',
		touchAction: 'none',
		zIndex: -1
	}
}))

const Modal = ({
	open = false,
	lock = true,
	trap = true,
	renderOnClose = false,
	inset = 2,
	style,
	align = 'center center',
	width = 54,
	portal = true,
	overlay = true,
	transition: Transition = Fade,
	transitionProps,
	onEnter,
	onEntered,
	onExit,
	onExited,
	onClose,
	children: child
}) => {
	const { classes, theme } = useStyles()
	const childRef = useRef()
	const forkedRef = useRefFork(childRef, child.ref)
	const [y = 'center', x = 'center'] = align.split(' ')

	useHotkey('escape', onClose, { enabled: open })
	useOutside(childRef, onClose, { enabled: open })
	useBodyLock(childRef, { enabled: open && lock })
	useFocusTrap(childRef, { enabled: open && trap })

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
					<Flex
						role='presentation'
						alignItems={y}
						justifyContent={x}
						className={classes.root}
					>
						{overlay && <div aria-hidden={true} className={classes.overlay} />}

						{cloneElement(child, {
							ref: forkedRef,
							tabIndex: -1,
							style: {
								width: isString(width) ? width : theme.size(width),
								boxSizing: 'border-box',
								maxWidth: `calc(100vw - ${theme.spacing(inset * 2)})`,
								maxHeight: `calc(100vh - ${theme.spacing(inset * 2)})`,
								outline: 0,
								...style,
								...child.props.style
							}
						})}
					</Flex>
				</MemoizedContent>
			</Transition>
		</Portal>
	)
}

Modal.displayName = 'Modal'

Modal.propTypes = {
	open: PropTypes.bool,
	lock: PropTypes.bool,
	trap: PropTypes.bool,
	renderOnClose: PropTypes.bool,
	inset: PropTypes.number,
	style: PropTypes.object,
	align: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	top: PropTypes.number,
	right: PropTypes.number,
	bottom: PropTypes.number,
	left: PropTypes.number,
	portal: PropTypes.bool,
	overlay: PropTypes.bool,
	transition: PropTypes.elementType,
	transitionProps: PropTypes.object,
	onEnter: PropTypes.func,
	onEntered: PropTypes.func,
	onExit: PropTypes.func,
	onExited: PropTypes.func,
	onClose: PropTypes.func,
	children: PropTypes.element.isRequired
}

export default Modal
