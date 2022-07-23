import { renderWithTheme, fireEvent } from '../../dev/testy'
import Checkbox from './Checkbox'
import CheckboxGroup from './CheckboxGroup'

const renderWithThemeCheckboxGroup = (props) =>
	renderWithTheme(
		<CheckboxGroup {...props}>
			<Checkbox value='1' label='1' />
			<Checkbox value='2' label='2' />
		</CheckboxGroup>
	)

describe('<CheckboxGroup />', () => {
	it('Renders component and options', () => {
		const { getByText } = renderWithThemeCheckboxGroup()
		const checkbox1 = getByText('1')
		const checkbox2 = getByText('2')

		expect(checkbox1).toBeTruthy()
		expect(checkbox2).toBeTruthy()
	})

	it('Add value when clicked', () => {
		const onChange = jest.fn((event) => event.target.value)
		const { getByText } = renderWithThemeCheckboxGroup({ value: [], onChange })
		const checkbox = getByText('1')

		fireEvent.click(checkbox)

		expect(onChange.mock.results[0].value).toStrictEqual(['1'])
	})

	it('Remove value when clicked', () => {
		const onChange = jest.fn((event) => event.target.value)
		const { getByText } = renderWithThemeCheckboxGroup({ value: ['1'], onChange })
		const checkbox = getByText('1')

		fireEvent.click(checkbox)

		expect(onChange.mock.results[0].value).toStrictEqual([])
	})

	it('Set value true when clicked', () => {
		const onChange = jest.fn((event) => event.target.value)
		const { getByText } = renderWithThemeCheckboxGroup({ value: { 1: false }, onChange })
		const checkbox = getByText('1')

		fireEvent.click(checkbox)

		expect(onChange.mock.results[0].value).toStrictEqual({ 1: true })
	})

	it('Set value false when clicked', () => {
		const onChange = jest.fn((event) => event.target.value)
		const { getByText } = renderWithThemeCheckboxGroup({ value: { 1: true }, onChange })
		const checkbox = getByText('1')

		fireEvent.click(checkbox)

		expect(onChange.mock.results[0].value).toStrictEqual({ 1: false })
	})
})
