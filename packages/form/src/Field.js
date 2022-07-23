import PropTypes from 'prop-types'
import { useCallback } from 'react'
import useField from './useField'

const getValueByType = (event, type) => {
	switch (type) {
		case 'number':
			return Number(event.target.value)
		case 'checkbox':
			return Boolean(event.target.checked)
		default:
			return event.target.value
	}
}

const FieldExtended = ({
	component: Component,
	type,
	name,
	empty = '',
	error,
	validate,
	validateOnBlur,
	validateOnChange,
	validateOnChangeWhenError = true,
	...otherProps
}) => {
	const [field, meta, helpers] = useField({ name, validate, validateOnChange, validateOnBlur })
	const onChange = useCallback(
		(event) => {
			helpers.setValue(
				getValueByType(event, type),
				validateOnChangeWhenError ? Boolean(meta.error) : undefined
			)
		},
		[helpers, meta.error, validateOnChangeWhenError, type]
	)

	return (
		<Component
			name={field.name}
			value={field.value ?? empty}
			checked={type === 'checkbox' ? field.value : undefined}
			error={error ?? meta.error}
			onBlur={field.onBlur}
			onChange={onChange}
			type={type}
			{...otherProps}
		/>
	)
}

FieldExtended.propTypes = {
	component: PropTypes.elementType.isRequired,
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	empty: PropTypes.any,
	error: PropTypes.string,
	validate: PropTypes.func,
	validateOnBlur: PropTypes.bool,
	validateOnChange: PropTypes.bool,
	validateOnChangeWhenError: PropTypes.bool
}

export default FieldExtended
