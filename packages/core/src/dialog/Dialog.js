import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { Close } from '@hs/icons'
import Modal from '../layout/Modal'
import Flex from '../layout/Flex'
import FlexZeroHeight from '../layout/FlexZeroHeight'
import Scroll from '../layout/Scroll'
import Divider from '../layout/Divider'
import Heading from '../typography/Heading'
import Button from '../button/Button'
import Paper from '../surface/Paper'

const useStyles = makeStyles({ name: 'Dialog' })((theme) => ({
	root: {
		padding: theme.spacing(2)
	},
	close: {
		marginRight: theme.spacing(-1)
	}
}))

const Dialog = ({
	title,
	titleProps,
	accept,
	acceptProps,
	cancel,
	cancelProps,
	children,
	onAccept,
	onCancel,
	...otherProps
}) => {
	const { classes } = useStyles()

	return (
		<Modal onClose={onCancel} {...otherProps}>
			<Scroll component={Paper}>
				<Flex direction='column' gap={2} className={classes.root}>
					<Flex alignItems='center' justifyContent='space-between' gap={2}>
						<Heading value={title} type='h3' {...titleProps} />

						<FlexZeroHeight className={classes.close}>
							<Button color='inherit' icon={Close} tabIndex='-1' onClick={onCancel} />
						</FlexZeroHeight>
					</Flex>

					{children}

					{onAccept && (
						<>
							<Divider />

							<Flex gap={1} direction='row-reverse'>
								{onAccept && (
									<Button
										value={accept}
										color='primary'
										type='submit'
										variant='contained'
										onClick={onAccept}
										{...acceptProps}
									/>
								)}

								{onCancel && (
									<Button
										value={cancel}
										color='inherit'
										onClick={onCancel}
										{...cancelProps}
									/>
								)}
							</Flex>
						</>
					)}
				</Flex>
			</Scroll>
		</Modal>
	)
}

Dialog.propTypes = {
	title: PropTypes.string,
	titleProps: PropTypes.object,
	accept: PropTypes.string.isRequired,
	acceptProps: PropTypes.object,
	cancel: PropTypes.string.isRequired,
	cancelProps: PropTypes.object,
	children: PropTypes.node,
	onAccept: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired
}

export default Dialog
