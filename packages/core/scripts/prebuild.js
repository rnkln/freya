const p = require('path')
const fs = require('fs').promises

const exclude = /.spec|.stories|-utils$/
const components = (file) => {
	const ext = p.extname(file)
	const name = p.basename(file, ext)

	if (ext !== '.js') {
		return false
	}

	if (name === 'index' || exclude.test(name)) {
		return false
	}

	return true
}

const generate = async () => {
	try {
		const src = p.resolve(__dirname, '..', 'src')
		const index = p.resolve(src, 'index.js')
		const contents = await fs.readdir(src)
		const reexports = contents
			.filter((name) => name !== 'index.js')
			.map((folder) => `export * from './${folder}'`)

		await fs.writeFile(index, `${reexports.join('\n')}\n`, 'utf8')

		for await (const folder of contents) {
			const feature = p.resolve(__dirname, '..', 'src', folder)
			const stats = await fs.stat(feature)

			if (stats.isDirectory()) {
				const path = p.resolve(feature, 'index.js')
				const files = await fs.readdir(feature)
				const exports = files.filter(components).map((file) => {
					const name = p.basename(file, p.extname(file))

					return `export ${name} from './${name}'`
				})

				await fs.writeFile(path, `${exports.join('\n')}\n`, 'utf8')
			}
		}
	} catch (err) {
		console.log(err) //eslint-disable-line no-console
		process.exit(1)
	}
}

generate()
