import { renderWithTheme, waitFor } from '../../dev/testy'
import withDelayedRender from './withDelayedRender'

const renderWithThemeDelayed = (Component, delay) => {
	const ComponentDelayed = withDelayedRender(Component, delay)
	return renderWithTheme(<ComponentDelayed />)
}

describe('withDelayedRender', () => {
	it('renderWithThemes nothing initially', () => {
		const value = 'delayed'
		const { queryByText } = renderWithThemeDelayed(() => <span>{value}</span>, 200)
		const element = queryByText(value)

		expect(element).toBeFalsy()
	})

	it('renderWithThemes component after 200ms', () => {
		const value = 'delayed'
		const { getByText } = renderWithThemeDelayed(() => <span>{value}</span>, 200)
		const element = waitFor(() => getByText(value))

		expect(element).toBeTruthy()
	})
})
