import PropTypes from 'prop-types'
import { useControlled, rewriteEventTarget } from '@hs/utils'
import Flex from '../layout/Flex'
import useUniqueId from '../hooks/useUniqueId'
import CheckboxGroupContext from './CheckboxGroupContext'

const toggleValue = (value, values = []) => {
	if (Array.isArray(values)) {
		if (values.includes(value)) {
			return values.filter((v) => v !== value)
		}

		return [...values, value]
	}

	return { ...values, [value]: !values[value] }
}

const CheckboxGroup = ({
	id,
	name,
	value: valueProp,
	defaultValue,
	disabled,
	children,
	onChange,
	...otherProps
}) => {
	const uid = useUniqueId('checkboxgroup', id)
	const [value, setValue] = useControlled('CheckboxGroup', valueProp, defaultValue)
	const handleChange = (event) => {
		const nextValue = toggleValue(event.target.value, value)
		const nextEvent = rewriteEventTarget(event, { name, value: nextValue })

		setValue(nextValue)

		if (onChange) {
			onChange(nextEvent, nextValue)
		}
	}

	return (
		<CheckboxGroupContext.Provider value={{ name, value, disabled, onChange: handleChange }}>
			<Flex id={uid} role='group' direction='column' gap={2} {...otherProps}>
				{children}
			</Flex>
		</CheckboxGroupContext.Provider>
	)
}

CheckboxGroup.displayName = 'CheckboxGroup'

CheckboxGroup.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	disabled: PropTypes.bool,
	children: PropTypes.node,
	onChange: PropTypes.func
}

export default CheckboxGroup
