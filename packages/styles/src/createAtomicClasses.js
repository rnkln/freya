export default (cssPropertiesObject) =>
	Object.entries(cssPropertiesObject).reduce(
		(accumulatedClasses, [cssProperty, allowedValues]) => {
			const currentCssClasses = allowedValues.reduce((acc, current) => {
				let propValue = current
				let cssValue = current

				if (typeof current === 'object') {
					// eslint-disable-next-line prefer-destructuring
					propValue = Object.keys(current)[0]
					cssValue = current[propValue]
				}

				return {
					...acc,
					[`${cssProperty}-${propValue}`]: {
						[cssProperty]: cssValue
					}
				}
			}, {})

			return {
				...accumulatedClasses,
				...currentCssClasses
			}
		},
		{}
	)
