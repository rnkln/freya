import { useMemo, useEffect } from 'react'
import { debounce } from 'lodash-es'

export default (callback, delay = 500, options = undefined) => {
	const debounced = useMemo(() => debounce(callback, delay, options), [callback, delay, options])

	useEffect(() => debounced.cancel, [debounced])

	return debounced
}
