import { forwardRef } from 'react'
import Text from './Text'

const Paragraph = forwardRef((props, ref) => <Text ref={ref} component='p' {...props} />)

Paragraph.displayName = 'Paragraph'

export default Paragraph
