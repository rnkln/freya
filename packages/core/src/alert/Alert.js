import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import Flex from '../layout/Flex'
import Surface from '../surface/Surface'
import AlertHeading from './AlertHeading'

const severityToColor = (severity) => {
	switch (severity) {
		case 'info':
			return 'primary'

		default:
			return severity
	}
}

const useStyles = makeStyles({ name: 'Alert' })((theme, props) => ({
	root: {
		color: theme.palette.common.one[900],
		border: `1px solid ${theme.palette.common.one[50]}`,
		padding: theme.spacing(2),
		background: theme.lightness(theme.palette[props.color].main, 0.85)
	}
}))

const Alert = ({
	severity = 'info',
	value,
	title,
	className,
	children,
	onClose,
	...otherProps
}) => {
	const color = severityToColor(severity)
	const { classes, cx } = useStyles({ color })
	const content = value ?? children

	return (
		<Surface
			gap={2}
			elevated={false}
			direction='column'
			component={Flex}
			className={cx(classes.root, className)}
			{...otherProps}
		>
			{title && <AlertHeading value={title} onClose={onClose} />}
			{content}
		</Surface>
	)
}

Alert.propTypes = {
	severity: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
	title: PropTypes.string,
	value: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
	onClose: PropTypes.func
}

export default Alert
