import { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import Flex from '../layout/Flex'
import Surface from '../surface/Sugar'

const useStyles = makeStyles({ name: 'Avatar' })((theme) => ({
	root: {
		height: theme.size(3.6),
		width: theme.size(3.6),
		borderRadius: '50%',
		overflow: 'hidden'
	},
	image: {
		objectFit: 'cover',
		height: '100%',
		width: '100%'
	},
	...theme.palette.create('', (colors) => ({
		color: colors.contrastText,
		background: colors.main
	}))
}))

const Avatar = ({
	value,
	src,
	alt = value,
	color = 'primary',
	className,
	children,
	...otherProps
}) => {
	const { classes, cx } = useStyles()
	const [error, setError] = useState(false)
	const content = value ?? children
	const handleError = () => setError(true)

	return (
		<Surface
			component={Flex}
			shrink={0}
			elevated={false}
			alignItems='center'
			justifyContent='center'
			className={cx(classes.root, classes[color], className)}
			rounded={false}
			{...otherProps}
		>
			{src && !error ? (
				<img src={src} alt={alt} className={classes.image} onError={handleError} />
			) : (
				content
			)}
		</Surface>
	)
}

Avatar.propTypes = {
	value: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string,
	color: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node
}

export default Avatar
