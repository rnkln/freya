import PropTypes from 'prop-types'
import useUniqueId from '../hooks/useUniqueId'
import Control from '../form/Control'
import EditorBase from './EditorBase'

// Because CKEditor does not support adding classes...
const EditorBaseWrapped = ({ className, ...otherProps }) => (
	<div className={className}>
		<EditorBase {...otherProps} />
	</div>
)

EditorBaseWrapped.displayName = 'EditorBaseWrapped'

EditorBaseWrapped.propTypes = {
	className: PropTypes.string
}

const Editor = ({ id, ...otherProps }) => (
	<Control id={useUniqueId('editor', id)} component={EditorBaseWrapped} {...otherProps} />
)

Editor.displayName = 'Editor'

Editor.propTypes = {
	id: PropTypes.string
}

export default Editor
