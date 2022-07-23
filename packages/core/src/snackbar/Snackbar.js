import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { capitalise } from '@hs/utils'
import { Close } from '@hs/icons'
import Flex from '../layout/Flex'
import FlexZeroHeight from '../layout/FlexZeroHeight'
import Text from '../typography/Text'
import Fade from '../transitions/Fade'
import Surface from '../surface/Surface'
import Button from '../button/Button'

const useStyles = makeStyles({ name: 'Snackbar' })((theme, props) => ({
	root: {
		color: theme.palette.white.main,
		background: theme.palette[props.color].main,
		padding: theme.spacing(2),
		minWidth: theme.size(26),
		maxWidth: `calc(100vw - ${theme.spacing(4)})`,
		position: 'fixed',
		transform:
			'var(--verticalTranslate, translate(0)) var(--horizontalTranslate, translate(0))',
		zIndex: 50
	},
	text: {
		flex: 1
	},
	close: {
		marginRight: theme.spacing(-1)
	},
	verticalStart: {
		top: theme.spacing(2)
	},
	verticalCenter: {
		top: '50%',
		'--verticalTranslate': 'translateY(-50%)'
	},
	verticalEnd: {
		bottom: theme.spacing(2)
	},
	horizontalStart: {
		left: theme.spacing(2)
	},
	horizontalCenter: {
		left: '50%',
		'--horizontalTranslate': 'translateX(-50%)'
	},
	horizontalEnd: {
		right: theme.spacing(2)
	}
}))

const severityToColor = (severity) => {
	switch (severity) {
		case 'info':
			return 'primary'
		default:
			return severity
	}
}

const Snackbar = ({
	open,
	value,
	align = 'end center',
	duration = 4000,
	severity = 'info',
	transition: Transition = Fade,
	className: classNameProp,
	onClose,
	...otherProps
}) => {
	const color = severityToColor(severity)
	const { classes, cx } = useStyles({ color })
	const alignment = align.split(' ')
	const alignY = `vertical${capitalise(alignment?.[0] ?? 'end')}`
	const alignX = `horizontal${capitalise(alignment?.[1] ?? 'center')}`
	const className = cx(classes.root, classes[alignY], classes[alignX], classNameProp)

	useEffect(() => {
		if (open && duration !== Infinity) {
			const timeout = setTimeout(onClose, duration)

			return () => {
				clearTimeout(timeout)
			}
		}
	}, [open, duration, onClose])

	return (
		<Transition in={open}>
			<Surface
				gap={1}
				alignItems='center'
				className={className}
				component={Flex}
				{...otherProps}
			>
				<Text value={value} className={classes.text} whiteSpace='pre-line' />

				{onClose && (
					<FlexZeroHeight className={classes.close}>
						<Button
							color='inherit'
							icon={Close}
							iconProps={{ size: 1.8 }}
							tabIndex='-1'
							onClick={onClose}
						/>
					</FlexZeroHeight>
				)}
			</Surface>
		</Transition>
	)
}

Snackbar.propTypes = {
	open: PropTypes.bool,
	value: PropTypes.string.isRequired,
	align: PropTypes.string,
	duration: PropTypes.number,
	severity: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
	transition: PropTypes.elementType,
	className: PropTypes.string,
	onClose: PropTypes.func.isRequired
}

export default Snackbar
