import { memo, forwardRef } from 'react'
import Icon from './Icon'

export default ({ title, description, path, children }) => {
	const Component = forwardRef((props, ref) => (
		<Icon ref={ref} title={title} description={description} path={path} {...props}>
			{children}
		</Icon>
	))

	Component.displayName = title
	return memo(Component)
}
