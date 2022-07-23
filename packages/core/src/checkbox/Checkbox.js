import { useContext } from 'react'
import PropTypes from 'prop-types'
import { createChainedFunction } from '@hs/utils'
import useUniqueId from '../hooks/useUniqueId'
import Control from '../form/Control'
import CheckboxBase from './CheckboxBase'
import CheckboxGroupContext from './CheckboxGroupContext'

const isChecked = (value, valueFromContext) => {
	if (!valueFromContext) {
		return false
	}

	if (Array.isArray(valueFromContext)) {
		return valueFromContext.includes(value)
	}

	return valueFromContext[value]
}

const Checkbox = ({
	id,
	name: nameProp,
	value,
	checked: checkedProp,
	disabled: disabledProp,
	onChange: onChangeProp,
	...otherProps
}) => {
	const uid = useUniqueId('checkbox', id)
	const context = useContext(CheckboxGroupContext) ?? {}
	const name = nameProp ?? context.name
	const checked = checkedProp ?? isChecked(value, context.value)
	const disabled = disabledProp ?? context.disabled
	const onChange = createChainedFunction(onChangeProp, context.onChange)

	return (
		<Control
			id={uid}
			name={name}
			value={value}
			layout='boolean'
			checked={checked}
			disabled={disabled}
			labelProps={{ weight: 'normal', size: undefined }}
			component={CheckboxBase}
			onChange={onChange}
			{...otherProps}
		/>
	)
}

Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	onChange: PropTypes.func
}

export default Checkbox
