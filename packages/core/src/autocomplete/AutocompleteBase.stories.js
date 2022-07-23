import { useState } from 'react'
import { createChainedFunction } from '@hs/utils'
import storify from '../../dev/story'
import AutocompleteBase from './AutocompleteBase'

const options = [
	{ value: 'none', label: 'None' },
	{ value: 'red', label: 'Red' },
	{ value: 'green', label: 'Green' },
	{ value: 'blue', label: 'Blue' }
]

const Story = ({
	value: ignoredValue,
	options: ignoredOptions,
	onChange: onChangeProp,
	...args
}) => {
	const [value, setValue] = useState()
	const onChange = createChainedFunction(onChangeProp, (event) => setValue(event.target.value))

	return <AutocompleteBase value={value} onChange={onChange} options={options} {...args} />
}

export { Story as AutocompleteBase }
export default storify({
	title: 'core/autocomplete/autocompletebase',
	component: AutocompleteBase,
	argTypes: {
		onChange: { action: 'changed' }
	},
	args: {
		placeholder: 'Search here!'
	}
})
