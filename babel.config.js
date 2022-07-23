module.exports = function (api) {
	const mode = api.env()
	const isEnvTest = mode === 'test'

	return {
		presets: [
			[
				'@babel/preset-env',
				{
					modules: isEnvTest ? 'commonjs' : false,
					corejs: 3,
					useBuiltIns: 'usage',
					shippedProposals: true
				}
			],
			['@babel/preset-react', { runtime: 'automatic' }]
		],
		plugins: [
			['@babel/plugin-transform-runtime', { corejs: 3 }],
			['@babel/plugin-syntax-dynamic-import'],
			['@babel/plugin-proposal-private-methods'],
			['@babel/plugin-proposal-class-properties'],
			['@babel/plugin-proposal-optional-chaining'],
			['@babel/plugin-proposal-export-default-from'],
			['@babel/plugin-proposal-nullish-coalescing-operator'],
			['babel-plugin-optimize-clsx', { libraries: ['cx'] }],
			['babel-plugin-transform-react-remove-prop-types', { mode: 'unsafe-wrap' }],
			[
				'babel-plugin-transform-imports',
				{
					'@hs/icons': {
						transform: (importName) => `@hs/icons/components/${importName}`,
						preventFullImport: true
					}
				}
			],
			!isEnvTest && ['babel-plugin-react-remove-properties', { properties: ['data-testid'] }]
		].filter(Boolean)
	}
}
