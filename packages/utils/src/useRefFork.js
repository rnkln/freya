import { useMemo } from 'react'

const setRef = (ref, value) => {
	if (typeof ref === 'function') {
		ref(value)
	} else if (ref) {
		ref.current = value
	}
}

export default (refA, refB) =>
	useMemo(() => {
		if (!refA && !refB) {
			return null
		}

		return (value) => {
			setRef(refA, value)
			setRef(refB, value)
		}
	}, [refA, refB])
