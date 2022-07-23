import { useCallback } from 'react'

const options = { fill: 'forwards', easing: 'ease-in-out', duration: 450, iterations: 1 }

const create = (x, y, d, r, c) => {
	const element = document.createElement('div')

	element.style.opacity = 0.4
	element.style.borderRadius = r ? '50%' : 'inherit'
	element.style.pointerEvents = 'none'
	element.style.height = `${d}px`
	element.style.width = `${d}px`
	element.style.position = 'absolute'
	element.style.left = c ? '50%' : `${x}px`
	element.style.top = c ? '50%' : `${y}px`
	element.style.background = 'currentColor'

	return element
}

const ripple = (event, { scale, center, round } = {}) => {
	const target = event.currentTarget
	const rect = target.getBoundingClientRect()
	const clientX = event.clientX ? event.clientX : event.touches[0].clientX
	const clientY = event.clientY ? event.clientY : event.touches[0].clientY
	const rippleX = center ? rect.width / 2 : clientX - rect.left
	const rippleY = center ? rect.height / 2 : clientY - rect.top
	const radiusX = Math.max(rippleX, target.clientWidth - rippleX)
	const radiusY = Math.max(rippleY, target.clientHeight - rippleY)
	const radius = Math.hypot(radiusX, radiusY)
	const diameter = radius * 2
	const scaling = [
		{ transform: 'translate(-50%, -50%) scale(0)' },
		{ transform: `translate(-50%, -50%) scale(${scale})` }
	]
	const element = create(rippleX, rippleY, diameter, round, center)
	const abort = () => {
		element.animate([{ opacity: 0.4 }, { opacity: 0 }], options).onfinish = () =>
			element.remove()
		target.removeEventListener('pointerup', abort)
		target.removeEventListener('pointerleave', abort)
		target.removeEventListener('pointercancel', abort)
	}

	element.animate(scaling, options)
	target.appendChild(element)
	target.addEventListener('pointerup', abort)
	target.addEventListener('pointerleave', abort)
	target.addEventListener('pointercancel', abort)
}

export default ({
	enabled = true,
	scale = 1,
	round = true,
	center = false,
	onPointerDown: onPointerDownProp
} = {}) => {
	const onPointerDown = useCallback(
		(event) => {
			if (onPointerDownProp) {
				onPointerDownProp(event)
			}

			if (enabled && 'animate' in event.currentTarget) {
				ripple(event, { scale, round, center })
			}
		},
		[enabled, scale, round, center, onPointerDownProp]
	)

	return { onPointerDown }
}
