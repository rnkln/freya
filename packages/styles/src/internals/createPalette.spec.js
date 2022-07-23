import createPalette from './createPalette'

describe('createPalette', () => {
	it('Should create default palette', () => {
		const palette = createPalette({})

		expect(palette.values).toEqual({
			primary: {
				main: '#3578e5',
				dark: '#004db2',
				light: '#75a6ff',
				contrastText: '#ffffff'
			},
			secondary: {
				main: '#13bda6',
				dark: '#008c77',
				light: '#61f0d7',
				contrastText: '#ffffff'
			},
			white: {
				main: '#ffffff',
				dark: '#ced8de',
				light: '#ebeff3',
				contrastText: '#244572'
			},
			error: {
				main: '#f55426',
				dark: '#bb1a00',
				light: '#ff8753',
				contrastText: '#ffffff'
			},
			success: {
				main: '#4db37c',
				dark: '#0c8350',
				light: '#80e6ab',
				contrastText: '#ffffff'
			},
			action: {
				main: '#5344ad',
				dark: '#1a1c7d',
				light: '#8670e0',
				contrastText: '#ffffff'
			},
			warning: {
				main: '#f8aa00',
				dark: '#c07b00',
				light: '#ffdb4a',
				contrastText: '#ffffff'
			},
			disabled: {
				main: '#c8cfd7',
				dark: '#9b9ea1',
				light: '#d8dde2',
				contrastText: '#7A7D80'
			},
			common: {
				main: '#ebeff3',
				dark: '#ced8de',
				light: '#e6eaef',
				contrastText: '#244572',
				one: {
					50: '#e6eaef',
					100: '#c0cada',
					200: '#98a8c0',
					300: '#7287a6',
					400: '#536e95',
					500: '#335686',
					600: '#2c4e7e',
					700: '#244572',
					800: '#1e3b65',
					900: '#172b4d',
					A100: '#82b1ff',
					A200: '#448aff',
					A400: '#2979ff',
					A700: '#2962ff'
				},
				two: {
					50: '#ebefff',
					100: '#cfdaed',
					200: '#b5c1d8',
					300: '#9aa8c3',
					400: '#8594b2',
					500: '#7082a2',
					600: '#617391',
					700: '#505f79',
					800: '#404c63',
					900: '#2d374a',
					A100: '#FF0000',
					A200: '#FF0000',
					A400: '#FF0000',
					A700: '#FF0000'
				},
				three: {
					50: '#ebeff3',
					100: '#ced8de',
					200: '#b0bdc8',
					300: '#90a3b1',
					400: '#798f9f',
					500: '#617c8e',
					600: '#556d7d',
					700: '#465967',
					800: '#374651',
					900: '#26313a',
					A100: '#FF0000',
					A200: '#FF0000',
					A400: '#FF0000',
					A700: '#FF0000'
				}
			}
		})
	})

	it('Should return color from value()', () => {
		const palette = createPalette({})

		expect(palette.value('does.not.exists')).toBe('inherit')
		expect(palette.value('primary')).toBe('#3578e5')
		expect(palette.value('primary.main')).toBe('#3578e5')
		expect(palette.value('secondary.light')).toBe('#61f0d7')
	})
})
