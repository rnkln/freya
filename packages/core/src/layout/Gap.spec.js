import { renderWithTheme } from '../../dev/testy'
import Gap from './Gap'

describe('<Gap />', () => {
	it('Renders gap', () => {
		const props = { 'data-testid': 'gap' }
		const { getByTestId } = renderWithTheme(<Gap {...props} />)
		const gap = getByTestId(props['data-testid'])

		expect(gap).toBeTruthy()
	})
})
