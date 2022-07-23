import { useState, useMemo } from 'react'

export default () => {
	const [anchor, setAnchor] = useState()

	return useMemo(
		() => ({
			anchor,
			openTooltip: (event) => setAnchor(event.currentTarget),
			toggleTooltip:
				anchor === undefined
					? (event) => setAnchor(event.currentTarget)
					: () => setAnchor(undefined),
			closeTooltip: () => setAnchor(undefined)
		}),
		[anchor]
	)
}
