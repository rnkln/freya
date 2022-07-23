import { useContext } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { ChevronUp } from '@hs/icons'
import useUniqueId from '../hooks/useUniqueId'
import Flex from '../layout/Flex'
import FlexZeroHeight from '../layout/FlexZeroHeight'
import Button from '../button/Button'
import Heading from '../typography/Heading'
import Collapse from '../transitions/Collapse'
import AccordionContext from './AccordionContext'

const useStyles = makeStyles({ name: 'AccordionPanel' })((theme) => ({
	header: {
		cursor: 'pointer'
	},
	title: {
		flex: 1
	},
	content: {
		paddingTop: theme.spacing(1)
	},
	disabled: {
		pointerEvents: 'none'
	}
}))

const AccordionPanelButton = ({ open, ...otherProps }) => (
	<Button
		icon={ChevronUp}
		iconProps={{ size: 2.4, rotate: open ? 0 : 180 }}
		color='inherit'
		{...otherProps}
	/>
)

AccordionPanelButton.propTypes = {
	open: PropTypes.bool
}

const isOpen = (id, openedFromContext) => {
	if (!openedFromContext) {
		return false
	}

	return openedFromContext.includes(id)
}

const AccordionPanel = ({
	title,
	open,
	icon: Icon,
	iconProps,
	button: ButtonProp = AccordionPanelButton,
	buttonProps,
	panelId,
	disabled,
	children,
	className: classNameProp,
	...otherProps
}) => {
	const id = useUniqueId('accordion-panel', panelId)
	const { classes, cx } = useStyles()
	const context = useContext(AccordionContext)
	const opened = open ?? isOpen(id, context.opened)
	const className = cx({ [classes.disabled]: disabled }, classNameProp)
	const handleOpen = () => !disabled && context.handleOpen(id)

	return (
		<Flex direction='column' className={className} {...otherProps}>
			<Flex
				gap={2}
				direction='row'
				alignItems='center'
				className={classes.header}
				onClick={handleOpen}
			>
				{Icon && (
					<FlexZeroHeight>
						<Icon size={iconProps?.size ?? 2.4} {...iconProps} />
					</FlexZeroHeight>
				)}

				<Heading value={title} type='h4' className={classes.title} />

				{!disabled && (
					<FlexZeroHeight>
						<ButtonProp open={opened} {...buttonProps} />
					</FlexZeroHeight>
				)}
			</Flex>

			<Collapse in={opened} appear={false}>
				<Flex className={classes.content}>{children}</Flex>
			</Collapse>
		</Flex>
	)
}

AccordionPanel.propTypes = {
	title: PropTypes.string.isRequired,
	open: PropTypes.bool,
	icon: PropTypes.elementType,
	iconProps: PropTypes.object,
	button: PropTypes.elementType,
	buttonProps: PropTypes.object,
	disabled: PropTypes.bool,
	panelId: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node
}

export default AccordionPanel
