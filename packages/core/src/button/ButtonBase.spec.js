import { renderWithTheme, fireEvent } from '../../dev/testy'
import ButtonBase from './ButtonBase'

const renderWithThemeButtonBase = (props) => renderWithTheme(<ButtonBase {...props} />)

describe('<ButtonBase />', () => {
	it('Renders component and children', () => {
		const props = { component: 'span', children: 'test' }
		const { getByText } = renderWithThemeButtonBase(props)
		const button = getByText(props.children)

		expect(button).toBeTruthy()
		expect(button.tagName === 'SPAN').toBeTruthy()
	})

	it('Call onClick when enabled', () => {
		const props = { children: 'test', onClick: jest.fn() }
		const { getByText } = renderWithThemeButtonBase(props)
		const button = getByText(props.children)

		fireEvent.click(button)

		expect(props.onClick).toHaveBeenCalled()
	})

	it('Ignore onClick when disabled', () => {
		const props = { children: 'test', onClick: jest.fn(), disabled: true }
		const { getByText } = renderWithThemeButtonBase(props)
		const button = getByText(props.children)

		fireEvent.click(button)

		expect(props.onClick).not.toHaveBeenCalled()
	})
})
