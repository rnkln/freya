import { useState, useEffect, useRef } from 'react'
import { useConsole } from '@hs/utils'

class StorageChangedEvent extends CustomEvent {
	static name = 'onStorageChange'

	constructor(payload) {
		super(StorageChangedEvent.name, { detail: payload })
	}
}

export default (key, empty, store = 'session') => {
	const storage = window[`${store}Storage`]
	const [value, setValue] = useState(() => {
		const stored = storage.getItem(key)
		if (stored) {
			return stored !== 'undefined' ? JSON.parse(stored) : undefined
		}
		return empty
	})
	const prevKey = useRef(key)
	const developementWarning = useConsole('warn', 1)

	useEffect(() => {
		if (key !== prevKey.current) {
			developementWarning(
				[
					`Warning: The value of "key" is changing from "${prevKey.current}" to "${key}".`,
					'The "useStorage" hook is not intended to be used in such a way.'
				].join(' ')
			)
		}
		prevKey.current = key
	}, [developementWarning, key])

	useEffect(() => {
		storage.setItem(key, JSON.stringify(value))
		window.dispatchEvent(
			new StorageChangedEvent({ key, newValue: value, storageArea: storage })
		)
	}, [key, value, storage])

	useEffect(() => {
		const onStorageChange = (event) => {
			const payload = event.detail || event
			const { key: id, newValue, storageArea } = payload

			if (storageArea === storage && id === key) {
				setValue(newValue)
			}
		}

		window.addEventListener(StorageChangedEvent.name, onStorageChange)

		return () => {
			window.removeEventListener(StorageChangedEvent.name, onStorageChange)
		}
	}, [key, storage])

	return [value, setValue]
}
