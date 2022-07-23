import { useMemo } from 'react'

let index = 0
const generate = (prefix) => `${String(prefix) || ''}-${++index}`

export default (prefix, override) =>
	useMemo(() => {
		if (override) {
			return override
		}

		return generate(prefix)
	}, [override, prefix])
