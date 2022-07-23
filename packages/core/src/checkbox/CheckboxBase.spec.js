import { renderWithTheme, fireEvent } from '../../dev/testy'
import CheckboxBase from './CheckboxBase'

describe('CheckboxBase />', () => {
	it('Renders checked checkbox', () => {
		const props = { checked: true, onChange: () => '', 'data-testid': 'checkbox' }
		const { getByTestId } = renderWithTheme(<CheckboxBase {...props} />)
		const checkboxbase = getByTestId('checkbox')
		const checkboxinput = checkboxbase.querySelector('input')

		expect(checkboxinput).toBeTruthy()
		expect(checkboxinput.getAttribute('checked')).toBe('')
		expect(checkboxinput.checked).toBeTruthy()
	})

	it('Renders unchecked checkbox', () => {
		const props = { checked: false, onChange: () => '', 'data-testid': 'checkbox' }
		const { getByTestId } = renderWithTheme(<CheckboxBase {...props} />)
		const checkboxbase = getByTestId('checkbox')
		const checkboxinput = checkboxbase.querySelector('input')

		expect(checkboxinput).toBeTruthy()
		expect(checkboxinput.getAttribute('checked')).toBe(null)
		expect(checkboxinput.checked).toBeFalsy()
	})

	it('Calls onChange when clicked', () => {
		const props = { onChange: jest.fn(), 'data-testid': 'checkbox' }
		const { getByTestId } = renderWithTheme(<CheckboxBase {...props} />)
		const checkboxbase = getByTestId('checkbox')
		const checkboxinput = checkboxbase.querySelector('input')

		fireEvent.click(checkboxinput)

		expect(checkboxinput).toBeTruthy()
		expect(checkboxinput.disabled).toBe(false)
		expect(props.onChange).toBeCalled()
	})
})
