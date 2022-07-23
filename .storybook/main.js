const fs = require('fs');
const path = require('path');

const packages = path.resolve(__dirname, '..', 'packages');
const packagesFolders = fs.readdirSync(packages);
const packagesAliases = packagesFolders.reduce((acc, name) => ({
	...acc,
	['@hs/' + name]: path.resolve(__dirname, '..', 'packages', name, 'src')
}), {})

module.exports = {
	stories: ['../packages/**/*.stories.js'],
	addons: [{
		name: '@storybook/addon-essentials',
		options: {
			backgrounds: false
		}
	}],
	features: {
		postcss: false
	},
	core: {
		builder: "webpack5",
	},
	webpackFinal: async (config) => {
		return {
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve.alias,
					...packagesAliases
				}
			}
		};
	}
}
