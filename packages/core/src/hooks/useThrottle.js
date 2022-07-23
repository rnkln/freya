import { useMemo, useEffect } from 'react'
import { throttle } from 'lodash-es'

export default (callback, delay = 500, options = undefined) => {
	const throttled = useMemo(() => throttle(callback, delay, options), [callback, delay, options])

	useEffect(() => throttled.cancel, [throttled.cancel])

	return throttled
}
