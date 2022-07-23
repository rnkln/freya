import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'

const useStyles = makeStyles({ name: 'List' })((theme, props) => ({
	root: {
		listStyleType: props.type,
		listStylePosition: props.position,
		listStyleImage: props.image
	}
}))

const List = forwardRef(
	({ type, position, image, component: Component = 'ul', className, ...otherProps }, ref) => {
		const { classes, cx } = useStyles({ type, position, image })

		return <Component ref={ref} className={cx(classes.root, className)} {...otherProps} />
	}
)

List.displayName = 'List'

List.propTypes = {
	type: PropTypes.string,
	position: PropTypes.oneOf(['inside', 'outside']),
	image: PropTypes.string,
	component: PropTypes.oneOf(['ul', 'ol']),
	className: PropTypes.string
}

export default List
