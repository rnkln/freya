import { useContext } from 'react'
import PropTypes from 'prop-types'
import { createChainedFunction } from '@hs/utils'
import useUniqueId from '../hooks/useUniqueId'
import Control from '../form/Control'
import RadioBase from './RadioBase'
import RadioGroupContext from './RadioGroupContext'

const isChecked = (value, valueFromContext) => {
	if (!valueFromContext) {
		return false
	}

	return value === valueFromContext
}

const Radio = ({
	id,
	name: nameProp,
	value,
	checked: checkedProp,
	disabled: disabledProp,
	onChange: onChangeProp,
	...otherProps
}) => {
	const uid = useUniqueId('checkbox', id)
	const context = useContext(RadioGroupContext) ?? {}
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
			component={RadioBase}
			onChange={onChange}
			{...otherProps}
		/>
	)
}

Radio.displayName = 'Radio'

Radio.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	onChange: PropTypes.func
}

export default Radio
