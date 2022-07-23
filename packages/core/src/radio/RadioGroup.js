import PropTypes from 'prop-types'
import { useControlled } from '@hs/utils'
import Flex from '../layout/Flex'
import useUniqueId from '../hooks/useUniqueId'
import RadioGroupContext from './RadioGroupContext'

const RadioGroup = ({
	id,
	name,
	value: valueProp,
	defaultValue,
	disabled,
	children,
	onChange,
	...otherProps
}) => {
	const uid = useUniqueId('radiogroup', id)
	const [value, setValue] = useControlled('RadioGroup', valueProp, defaultValue)
	const handleChange = (event) => {
		setValue(event.target.value)

		if (onChange) {
			onChange(event, event.target.value)
		}
	}

	return (
		<RadioGroupContext.Provider value={{ name, value, disabled, onChange: handleChange }}>
			<Flex id={uid} role='radiogroup' direction='column' gap={2} {...otherProps}>
				{children}
			</Flex>
		</RadioGroupContext.Provider>
	)
}

RadioGroup.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.any,
	defaultValue: PropTypes.any,
	disabled: PropTypes.bool,
	children: PropTypes.node,
	onChange: PropTypes.func
}

export default RadioGroup
