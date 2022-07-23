import { useEffect } from 'react'

const parseCombination = (combination) => {
	const parts = combination.split('+')
	const key = parts[parts.length - 1].toLowerCase()
	const modifiers = parts.slice(0, parts.length - 1)

	return [key, modifiers]
}

export default (combination, handler, { enabled = true } = {}) => {
	useEffect(() => {
		if (combination && handler && enabled) {
			const listener = (event) => {
				if (event.repeat || event.key === undefined) {
					return
				}

				const [key, modifiers] = parseCombination(combination)

				if (
					event.key.toLowerCase() === key &&
					modifiers.every((modifier) => event[`${modifier}Key`])
				) {
					handler(event)
				}
			}

			document.addEventListener('keydown', listener)

			return () => {
				document.removeEventListener('keydown', listener)
			}
		}
	}, [combination, handler, enabled])
}
