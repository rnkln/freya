export default (typography) => {
	const {
		families = ['Segoe UI', 'sans-serif'],
		weights = {
			light: 200,
			semilight: 300,
			normal: 400,
			semibold: 600,
			bold: 700
		},
		headings = {
			h1: 2.4,
			h2: 2.2,
			h3: 1.8,
			h4: 1.6,
			h5: 1.4
		}
	} = typography

	return {
		families: families.join(','),
		family: (key) => families[key],
		weights,
		weight: (key) => weights[key],
		headings,
		heading: (key) => `${headings[key]} rem`
	}
}
