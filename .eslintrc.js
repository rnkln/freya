module.exports = {
	root: true,
	parser: 'babel-eslint',
	plugins: ['import', 'react', 'react-hooks'],
	env: {
		node: true,
		browser: true,
		es6: true,
		jest: true
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src']
			}
		}
	},
	rules: {
		'import/no-unresolved': 'off'
	},
	overrides: [
		{
			files: ['*.stories.js', '*.spec.js'],
			rules: {
				'react/prop-types': 'off',
				'react/display-name': 'off',
				'react/no-multi-comp': 'off',
				'no-unused-vars': ['warn', { ignoreRestSiblings: true }]
			}
		},
		{
			files: ['**/scripts/*'],
			rules: {
				'no-console': 'off',
				'no-unused-expressions': 'off'
			}
		}
	]
}
