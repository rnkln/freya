import { useMemo } from 'react'

const flattenRecursively = (node, callback, list = []) => {
	const mapped = callback(node)

	if (mapped) {
		list.push(mapped)
		node.children.forEach((child) => flattenRecursively(child, callback, list))
	}

	return list
}

const filterRecursively = (node, callback, decendants = true) => {
	const matches = callback(node)
	const implicit = decendants ? node.children : []
	const children = matches
		? implicit
		: node.children.reduce((acc, child) => {
				const found = filterRecursively(child, callback, decendants)

				if (found) {
					acc.push(found)
				}

				return acc
		  }, [])

	if (matches || children.length > 0 || node.key === 'root') {
		return { ...node, children }
	}

	return null
}

class Tree {
	static from(
		array,
		{
			key: keyConfig = 'id',
			order: orderConfig = undefined,
			parent: parentConfig = 'parent'
		} = {}
	) {
		const prop = (node, finder, fallback) => {
			const isfn = typeof finder === 'function'
			const value = isfn ? finder(node) : node[finder]

			return value ?? fallback
		}

		const post = (node, depth = 0) => {
			node.depth = depth
			node.children.forEach((child) => post(child, depth + 1))

			if (orderConfig) {
				node.children.sort((child, childCompare) => child.order - childCompare.order)
			}

			return node
		}

		const base = {
			root: {
				key: 'root',
				data: null,
				parent: null,
				children: []
			}
		}

		const nodes = array.reduce((acc, data) => {
			const key = prop(data, keyConfig)
			const order = prop(data, orderConfig)
			const parent = prop(data, parentConfig, 'root')

			if (!acc[key]) acc[key] = { children: [] }
			if (!acc[parent]) acc[parent] = { children: [] }

			acc[key].key = key
			acc[key].data = data
			acc[key].order = order
			acc[key].parent = parent
			acc[parent].children.push(acc[key])

			return acc
		}, base)

		const root = post(nodes.root)

		return new Tree(root)
	}

	constructor(tree) {
		this.root = tree
	}

	flatten(callback) {
		return flattenRecursively(this.root, callback)
	}

	filter(callback, { decendants = true } = {}) {
		return new Tree(filterRecursively(this.root, callback, decendants))
	}
}

export default (nodes, { key, order, parent } = {}) => {
	const tree = useMemo(
		() =>
			Tree.from(nodes, {
				key,
				order,
				parent
			}),
		[nodes, key, order, parent]
	)

	return tree
}
