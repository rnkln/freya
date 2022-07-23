/* https://www.w3.org/TR/wai-aria-practices-1.1/examples/menu-button/menu-button-actions.html */
/* https://www.w3.org/TR/wai-aria-practices-1.1/examples/combobox/aria1.1pattern/listbox-combo.html */

import { useEffect } from 'react'

const fetchById = (id, fallback) => document.getElementById(id) ?? fallback

const fetchAdes = (controller) => fetchById(controller.getAttribute('aria-activedescendant'))

const fetchNextRecursively = (items, fallback, index, decrement, wrapped) => {
	const offset = decrement ? -1 : 1
	const next = index + offset
	const item = items[next]

	if (item === undefined) {
		if (wrapped) {
			return fallback
		}

		if (decrement) {
			return fetchNextRecursively(items, fallback, items.length, decrement, true)
		}

		return fetchNextRecursively(items, fallback, -1, decrement, true)
	}

	if (!item.disabled && item.getAttribute('aria-disabled') !== 'true') {
		return item
	}

	return fetchNextRecursively(items, fallback, next, decrement, wrapped)
}

const fetchNext = (list, role, active, key, initialId) => {
	const items = Array.from(list.querySelectorAll(`[role="${role}"]`))
	const ifind = active ?? initialId
	const index = ifind ? items.findIndex((item) => item.id === ifind.id) : undefined
	const first = index === undefined

	switch (key) {
		case 'ArrowUp':
			return first
				? items[items.length - 1]
				: fetchNextRecursively(items, active, index, true)
		case 'ArrowDown':
			return first ? items[0] : fetchNextRecursively(items, active, index, false)
		case 'Home':
			return items[0]
		case 'End':
			return items[items.length - 1]
		default:
			return active
	}
}

const keysToSubmit = ['Enter']
const keysToCancel = ['Escape']
const arrowKeys = ['ArrowUp', 'ArrowDown']
const homeEndKeys = ['Home', 'End']

const useMenuNavigation = ({
	role = 'menuitem',
	enabled = true,
	controller: controllerProp,
	listId,
	initialId,
	className = 'active',
	ignoreHomeEndKeys = false,
	onMove,
	onCancel,
	onSubmit
} = {}) => {
	useEffect(() => {
		if (enabled) {
			const controller = controllerProp ?? document.getElementById(listId)
			const handleKeyDown = (event) => {
				if (
					(arrowKeys.includes(event.key) ||
						(!ignoreHomeEndKeys && homeEndKeys.includes(event.key))) &&
					!event.shiftKey
				) {
					const list = fetchById(listId, event.target)
					const ades = fetchAdes(controller)
					const next = fetchNext(list, role, ades, event.key, initialId)

					event.preventDefault()
					ades?.classList.remove(className)
					if (next) {
						next.classList.add(className)
						next.scrollIntoView({ block: 'nearest' })
						controller.setAttribute('aria-activedescendant', next.id)
					}

					if (onMove) {
						onMove(event)
					}
				}

				if (keysToSubmit.includes(event.key)) {
					const ades = fetchAdes(controller)
					event.preventDefault()
					ades?.click()

					if (onSubmit) {
						onSubmit(event)
					}
				}

				if (keysToCancel.includes(event.key)) {
					event.preventDefault()

					if (onCancel) {
						onCancel(event)
					}
				}
			}

			if (initialId) {
				controller.setAttribute('aria-activedescendant', initialId)
			}

			controller.addEventListener('keydown', handleKeyDown)

			return () => {
				const ades = fetchAdes(controller)

				ades?.classList.remove(className)
				controller.removeAttribute('aria-activedescendant', null)
				controller.removeEventListener('keydown', handleKeyDown)
			}
		}
	}, [
		role,
		enabled,
		controllerProp,
		listId,
		initialId,
		className,
		onMove,
		onSubmit,
		onCancel,
		ignoreHomeEndKeys
	])
}

export default useMenuNavigation
