import { useContext, useMemo } from 'react'
import BreadcrumbsContext from './BreadcrumbsContext'

export default (crumbs) => {
	const current = useContext(BreadcrumbsContext)

	return useMemo(
		() => [...current, ...(Array.isArray(crumbs) ? crumbs : [crumbs])],
		[crumbs, current]
	)
}
