import { useState, useEffect } from 'react'

let cache = []

const createScript = (src) => {
	const script = document.createElement('script')
	script.src = src
	script.async = true
	return script
}

const createLink = (href, rel) => {
	const link = document.createElement('link')
	link.rel = rel
	link.href = href
	return link
}

const createResource = (src, type) => {
	switch (type) {
		case 'script':
			return createScript(src)
		case 'stylesheet':
			return createLink(src, type)
		default:
			return undefined
	}
}

export default (src, type = 'script', parent = 'head') => {
	const [state, setState] = useState({ loaded: false, error: false })

	useEffect(() => {
		if (!src) return
		if (cache.includes(src)) {
			setState({ loaded: true, error: false })
		} else {
			const target = document[parent]
			const resource = createResource(src, type)

			if (!target || !resource) {
				setState({ loaded: true, error: true })
			} else {
				cache = [...cache, src]
				const onLoad = () => setState({ loaded: true, error: false })
				const onError = () => {
					cache = cache.filter((cached) => cached !== src)
					resource.remove()
					setState({ loaded: true, error: true })
				}

				resource.addEventListener('load', onLoad)
				resource.addEventListener('error', onError)
				target.appendChild(resource)

				return () => {
					resource.removeEventListener('load', onLoad)
					resource.removeEventListener('error', onError)
				}
			}
		}
	}, [src, type, parent])

	return [state.loaded, state.error]
}
