import createBreakpoints from './createBreakpoints'

describe('createBreakpoints', () => {
	it('Should create default breakpoints', () => {
		const breakpoints = createBreakpoints({})

		expect(breakpoints.unit).toBe('px')
		expect(breakpoints.step).toBe(0.05)
		expect(breakpoints.above).toBeInstanceOf(Function)
		expect(breakpoints.below).toBeInstanceOf(Function)
		expect(breakpoints.value).toBeInstanceOf(Function)
		expect(breakpoints.keys).toEqual(['xs', 'sm', 'md', 'lg', 'xl'])
		expect(breakpoints.values).toEqual({
			xs: 320,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920
		})
	})

	it('Should return media query for below()', () => {
		const breakpoints = createBreakpoints({})

		expect(breakpoints.below('xs')).toBe('@media (max-width: 599.95px)')
		expect(breakpoints.below('sm')).toBe('@media (max-width: 959.95px)')
		expect(breakpoints.below('md')).toBe('@media (max-width: 1279.95px)')
		expect(breakpoints.below('lg')).toBe('@media (max-width: 1919.95px)')
		expect(breakpoints.below('xl')).toBe('@media (min-width: 0)')
	})
})
