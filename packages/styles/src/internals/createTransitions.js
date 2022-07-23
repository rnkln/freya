export default (transistions) => {
	const {
		easings = {
			easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
			easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
			easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)'
		},
		durations = {
			short: 150,
			standard: 300,
			complex: 375
		}
	} = transistions

	return {
		easings,
		easing: (key) => easings[key],
		durations,
		duration: (key) => durations[key],
		create: (
			props = 'all',
			{
				delay: delayConfig = 0,
				easing: easingConfig = 'easeInOut',
				duration: durationConfig = 'standard'
			} = {}
		) => {
			const values = Array.isArray(props) ? props : [props]
			const easing = easings[easingConfig]
			const duration = durations[durationConfig]

			return values
				.map((value) => `${value} ${duration}ms ${easing} ${delayConfig}ms`)
				.join(',')
		}
	}
}
