import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { Close } from '@hs/icons'
import Button from '../button/Button'
import Flex from '../layout/Flex'
import FlexZeroHeight from '../layout/FlexZeroHeight'
import Heading from '../typography/Heading'

const useStyles = makeStyles({ name: 'AlertHeading' })((theme) => ({
	close: {
		marginRight: theme.spacing(-1)
	}
}))

const AlertHeading = ({ value, onClose }) => {
	const { classes } = useStyles()
	const heading = <Heading type='h4' value={value} />

	if (onClose) {
		return (
			<Flex alignItems='center' justifyContent='space-between' gap={2}>
				{heading}
				<FlexZeroHeight className={classes.close}>
					<Button
						color='inherit'
						icon={Close}
						iconProps={{ size: 1.8 }}
						tabIndex='-1'
						onClick={onClose}
					/>
				</FlexZeroHeight>
			</Flex>
		)
	}

	return heading
}

AlertHeading.propTypes = {
	value: PropTypes.string.isRequired,
	onClose: PropTypes.func
}

export default AlertHeading
