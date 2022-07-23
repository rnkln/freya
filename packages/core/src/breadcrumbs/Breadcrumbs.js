import { Children } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { intersperseChildren } from '@hs/utils'
import Flex from '../layout/Flex'

const useStyles = makeStyles({ name: 'Breadcrumbs' })((theme) => ({
	root: {
		color: theme.palette.common.one[700]
	},
	seperator: {
		fontSize: '1.5rem'
	}
}))

const Breadcrumbs = ({ children, seperator: Seperator, className, ...otherProps }) => {
	const { classes, cx } = useStyles()
	const items = Children.toArray(children)

	return (
		<Flex gap={0.5} alignItems='center' className={cx(classes.root, className)} {...otherProps}>
			{intersperseChildren(items, Seperator, {
				direction: 'east',
				className: classes.seperator
			})}
		</Flex>
	)
}

Breadcrumbs.propTypes = {
	children: PropTypes.node,
	seperator: PropTypes.elementType,
	className: PropTypes.string
}

export default Breadcrumbs
