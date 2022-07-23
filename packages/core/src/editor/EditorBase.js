import PropTypes from 'prop-types'
import CKEditorBuild from '@hs/ckeditor5'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { useStyles } from '@hs/styles'

const simulateDOMEvent = (event, editor, name) => ({
	editor: editor,
	target: {
		...editor.sourceElement,
		name,
		value: editor.getData()
	}
})

const wrapOnHandler = (handler, name) => {
	if (handler) {
		return (event, editor) => handler(simulateDOMEvent(event, editor, name))
	}

	return undefined
}

const Editor = ({
	id,
	name,
	rows = 2,
	value,
	disabled,
	placeholder,
	onBlur,
	onReady,
	onFocus,
	onChange,
	...otherProps
}) => {
	const { theme } = useStyles()

	const height = {
		min: theme.size(rows * 3.8)
	}

	const config = {
		height,
		placeholder,
		...otherProps
	}

	const handleBlur = wrapOnHandler(onBlur, name)
	const handleChange = wrapOnHandler(onChange, name)

	return (
		<CKEditor
			id={id}
			data={value}
			editor={CKEditorBuild}
			config={config}
			disabled={disabled}
			onReady={onReady}
			onFocus={onFocus}
			onBlur={handleBlur}
			onChange={handleChange}
		/>
	)
}

Editor.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	rows: PropTypes.number,
	value: PropTypes.string,
	disabled: PropTypes.bool,
	placeholder: PropTypes.string,
	onBlur: PropTypes.func,
	onReady: PropTypes.func,
	onFocus: PropTypes.func,
	onChange: PropTypes.func
}

export default Editor
