export default (...funcs) =>
	funcs.reduce(
		(chained, func) => {
			if (!func) {
				return chained
			}

			return function (...args) {
				chained.apply(this, args)
				func.apply(this, args)
			}
		},
		() => {}
	)
