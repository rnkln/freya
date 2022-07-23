import { useState } from 'react'
import { createChainedFunction } from '@hs/utils'
import storify from '../../dev/story'
import Autocomplete from './Autocomplete'

const options = [
	{ value: 'none', label: 'None' },
	{ value: 'red', label: 'Red', disabled: true },
	{ value: 'green', label: 'Green' },
	{ value: 'blue', label: 'Blue' }
]

const Story = ({ value: ignoredValue, onChange: onChangeProp, ...args }) => {
	const [value, setValue] = useState()
	const onChange = createChainedFunction(onChangeProp, (event) => setValue(event.target.value))

	return <Autocomplete value={value} onChange={onChange} options={options} {...args} />
}

export { Story as Autocomplete }
export default storify({
	title: 'core/autocomplete/autocomplete',
	component: Autocomplete,
	argTypes: {
		onChange: { action: 'changed' }
	},
	args: {
		label: 'Autocomplete',
		placeholder: 'Search here!',
		searchable: true,
		openOnClick: true,
		disabled: false
	}
})
