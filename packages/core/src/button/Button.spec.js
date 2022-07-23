import { renderWithTheme } from '../../dev/testy'
import Button from './Button'

describe('<Button />', () => {
	it('Renders value', () => {
		const props = { value: 'value' }
		const { getByText, queryByTestId } = renderWithTheme(<Button {...props} />)
		const button = getByText(props.value)
		const spinner = queryByTestId('spinner')

		expect(button).toBeTruthy()
		expect(spinner).toBeFalsy()
	})

	it('Renders value and spinner', () => {
		const props = { value: 'value', loading: true }
		const { getByText, getByTestId } = renderWithTheme(<Button {...props} />)
		const button = getByText(props.value)
		const spinner = getByTestId('spinner')

		expect(button).toBeTruthy()
		expect(spinner).toBeTruthy()
	})

	it('Renders value, icon and adornment', () => {
		const props = {
			value: 'value',
			icon: (iProps) => <span {...iProps}>icon</span>,
			iconProps: { 'data-testid': 'icon' },
			adornment: (aProps) => <div {...aProps}>adornment</div>,
			adornmentProps: { 'data-testid': 'adornment' }
		}

		const { getByText, getByTestId } = renderWithTheme(<Button {...props} />)
		const icon = getByTestId('icon')
		const button = getByText(props.value)
		const adornment = getByTestId('adornment')

		expect(icon).toBeTruthy()
		expect(button).toBeTruthy()
		expect(adornment).toBeTruthy()
	})
})
