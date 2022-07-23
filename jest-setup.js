global.matchMedia = jest.fn((query) => ({
	media: query,
	matches: false,
	onchange: null,
	addListener: jest.fn(),
	removeListener: jest.fn()
}))
