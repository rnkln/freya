import { useMemo } from 'react'
import { useField, useFormikContext } from 'formik'

export default (...args) => {
	const [field, meta] = useField(...args)
	const { setFieldValue, setFieldTouched, setFieldError } = useFormikContext()

	const helpers = useMemo(
		() => ({
			setValue: (...a) => setFieldValue(field.name, ...a),
			setTouched: (...a) => setFieldTouched(field.name, ...a),
			setError: (...a) => setFieldError(field.name, ...a)
		}),
		[field.name, setFieldError, setFieldTouched, setFieldValue]
	)

	return [field, meta, helpers]
}
