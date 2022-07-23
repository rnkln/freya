const p = require('path')
const fs = require('fs').promises
const mdi = require('@mdi/js')
const prettier = require('prettier')
const hs = require('./extensions')

const iconify = ({ title, path }) => `
	import iconify from '../iconify'

	export default iconify({
		title: '${title}',
		path: 
			'${path}'
	})
`

const generate = async () => {
	try {
		const src = p.resolve(__dirname, '..', 'src')
		const index = p.resolve(src, 'index.js')
		const components = p.resolve(src, 'components')
		const icons = Object.entries(mdi).concat(Object.entries(hs))
		const config = await prettier.resolveConfig(__filename)
		const exports = []

		for await (const icon of icons) {
			const [name, path] = icon
			const nameWithoutPrefix = name.slice(3)
			const dest = p.resolve(components, `${nameWithoutPrefix}.js`)

			if (name !== '__esModule') {
				const source = iconify({
					title: nameWithoutPrefix,
					path
				})

				const prettied = prettier.format(source, { ...config, parser: 'babel' })

				exports.push(`export ${nameWithoutPrefix} from './components/${nameWithoutPrefix}'`)
				await fs.writeFile(dest, prettied, 'utf8')
			}
		}

		await fs.writeFile(index, `${exports.join('\n')}\n`, 'utf8')
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}

generate()
