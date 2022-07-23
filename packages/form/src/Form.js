import PropTypes from 'prop-types'
import { useFormikContext } from 'formik'

const Form = ({ noValidate = true, autoComplete = 'off', ...otherProps }) => {
	const { handleSubmit, handleReset } = useFormikContext()

	return (
		<form
			noValidate={noValidate}
			autoComplete={autoComplete}
			onReset={handleReset}
			onSubmit={handleSubmit}
			{...otherProps}
		/>
	)
}

Form.propTypes = {
	noValidate: PropTypes.bool,
	autoComplete: PropTypes.string
}

export default Form
