import { useState, useEffect, useCallback, useRef } from 'react'
import useConsole from './useConsole'

const warning = (name, controlled) => {
	const from = controlled ? 'controlled' : 'uncontrolled'
	const to = controlled ? 'uncontrolled' : 'controlled'

	return [
		`Warning: A ${name} component is changing from ${from} to ${to}.`,
		`${name} elements should not switch from ${from} to ${to} (or vice versa).`,
		`Decide between using a ${from} or ${to} ${name} element for the lifetime of the component.`,
		'More info: https://fb.me/react-controlled-components'
	].join(' ')
}

export default (name, value, defaultValue) => {
	const warn = useConsole('warn', 1)
	const mounted = useRef(false)

	const [current, setCurrent] = useState(defaultValue)
	const controlled = value !== undefined
	const state = controlled ? value : current

	if (process.env.NODE_ENV !== 'production') {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			if (mounted.current) {
				warn(warning(name, controlled))
			}
		}, [controlled]) // eslint-disable-line react-hooks/exhaustive-deps

		useEffect(() => {
			mounted.current = true

			return () => {
				mounted.current = false
			}
		}, [])
	}

	const setState = useCallback(
		(next) => {
			if (!controlled) {
				setCurrent(next)
			}
		},
		[controlled]
	)

	return [state, setState]
}
