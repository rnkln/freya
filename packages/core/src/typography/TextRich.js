import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import Text from './Text'

const useStyles = makeStyles({ name: 'TextRich' })((theme) => ({
	root: {
		'& ul, ol': {
			padding: theme.spacing(1, 2.5)
		},
		'& img, video': {
			maxWidth: '100%',
			objectFit: 'contain'
		}
	}
}))

const TextRich = forwardRef(({ value, component = 'div', className, ...otherProps }, ref) => {
	const { classes, cx } = useStyles()

	return (
		<Text
			ref={ref}
			dangerouslySetInnerHTML={{ __html: value }}
			className={cx(classes.root, className)}
			component={component}
			{...otherProps}
		/>
	)
})

TextRich.displayName = 'TextRich'

TextRich.propTypes = {
	value: PropTypes.string,
	component: PropTypes.elementType,
	className: PropTypes.string
}

export default TextRich
