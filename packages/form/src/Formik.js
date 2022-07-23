import PropTypes from 'prop-types'
import { Formik as FormikBase } from 'formik'

const Formik = ({
	enableReinitialize = true,
	validateOnBlur = false,
	validateOnChange = false,
	...otherProps
}) => (
	<FormikBase
		enableReinitialize={enableReinitialize}
		validateOnBlur={validateOnBlur}
		validateOnChange={validateOnChange}
		{...otherProps}
	/>
)

Formik.propTypes = {
	enableReinitialize: PropTypes.bool,
	validateOnBlur: PropTypes.bool,
	validateOnChange: PropTypes.bool
}

export default Formik
