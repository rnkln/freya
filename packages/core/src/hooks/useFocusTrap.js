import { useEffect } from 'react'
import { createFocusTrap } from 'focus-trap'

export default (
	ref,
	{
		enabled = true,
		focusTarget,
		focusTargetFallback,
		focusReturn = true,
		focusReturnTarget,
		deactivateOnEscape = false,
		deactivateOnClickOutside = true
	} = {}
) => {
	useEffect(() => {
		if (ref.current && enabled) {
			const element = ref.current
			const trap = createFocusTrap(element, {
				initialFocus: focusTarget,
				fallbackFocus: focusTargetFallback ?? (() => element),
				returnFocusOnDeactive: focusReturn,
				setReturnFocus: focusReturnTarget,
				escapeDeactivates: deactivateOnEscape,
				clickOutsideDeactivates: deactivateOnClickOutside
			})

			trap.activate()

			return () => {
				trap.deactivate()
			}
		}
	}, [
		ref,
		enabled,
		focusTarget,
		focusTargetFallback,
		focusReturn,
		focusReturnTarget,
		deactivateOnEscape,
		deactivateOnClickOutside
	])
}
