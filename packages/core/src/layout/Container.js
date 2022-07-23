import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'

const useStyles = makeStyles({ name: 'Container' })((theme) => ({
	root: {
		margin: '0 auto'
	},
	...Object.entries(theme.breakpoints.values).reduce(
		(acc, [key, value]) => ({
			...acc,
			[key]: {
				maxWidth: value
			}
		}),
		{}
	)
}))

const Container = forwardRef(
	({ component: Component = 'div', width, className, ...otherProps }, ref) => {
		const { classes, cx } = useStyles()

		return (
			<Component
				ref={ref}
				className={cx(classes.root, classes[width], className)}
				{...otherProps}
			/>
		)
	}
)

Container.displayName = 'Container'

Container.propTypes = {
	component: PropTypes.elementType,
	width: PropTypes.string,
	className: PropTypes.string
}

export default Container
