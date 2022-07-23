import { Children, cloneElement } from 'react'

export const mapChildren = (children, mapFn) =>
	Children.map(children, (child, index) => cloneElement(child, mapFn(child, index)))

export const mapChildrenOnly = (children, mapFn) =>
	cloneElement(Children.only(children), mapFn(children))

export const findChildren = (children, findFn) => Children.toArray(children).find(findFn)

export const filterChildren = (children, filterFn) => Children.toArray(children).filter(filterFn)

export const reduceChildren = (children, reduceFn, initialValue) =>
	Children.toArray(children).reduce(reduceFn, initialValue)

export const intersperseChildren = (children, Separator, separatorProps) => {
	if (Children.count(children) <= 1) {
		return children
	}

	return Children.map(children, (child) => [
		child,
		child !== null && <Separator {...separatorProps} />
	]).slice(0, -1)
}
