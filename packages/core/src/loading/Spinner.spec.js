import { renderWithTheme } from '../../dev/testy'
import Spinner from './Spinner'

describe('<Spinner />', () => {
	it('Renders spinner', () => {
		const { getByTestId } = renderWithTheme(<Spinner data-testid='spinner' />)
		const spinner = getByTestId('spinner')

		expect(spinner).toBeTruthy()
	})
})
