const path = require('path');
const tinyGlob = require('tiny-glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('./utils');
const webpackBaseConfig = require('./webpack-base-config');
const componentEntryPlugin = require('./component-entry-plugin');
const packageJsn = require('../package.json');

const buildNamespace = `📚${(process.env.npm_package_version || '').replace(/\./g, '-')}`;

const webpackBuildConfig = (() => {
	const config = merge({}, webpackBaseConfig, {
		devtool: 'source-map',
		externals: [
			...Object.keys(packageJsn.peerDependencies).map((dep) => new RegExp(`^${dep}(/.+)?$`)),
			({ request }, callback) => {
				if (request.startsWith('@square/maker')) {
					callback(undefined, request.replace('@square/maker', '../..'));
					return;
				}
				callback();
			},
		],
		output: {
			globalObject: 'this',
			libraryTarget: 'umd',
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
				},
			],
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'styles.css',
			}),
		],
	});

	const cssRule = config.module.rules.find((r) => r.test.test('file.css'));
	cssRule.oneOf.forEach((rule) => {
		const vsl = rule.use.indexOf('vue-style-loader');
		const singleLoader = 1;
		rule.use.splice(vsl, singleLoader, MiniCssExtractPlugin.loader);

		if (rule.resourceQuery && rule.resourceQuery.test('module')) {
			const cssLoader = rule.use.find((loader) => (loader.loader || loader) === 'css-loader');
			cssLoader.options.modules.localIdentName = `${buildNamespace}[hash:base64:5]`;
		}
	});

	return config;
})();

const getComponentDirectory = (componentPath) => (
	// eslint-disable-next-line no-magic-numbers
	componentPath.split(path.sep).slice(2, -1).join(path.sep)
);

const buildComponent = (componentPath) => merge({}, webpackBuildConfig, {
	entry: componentPath,
	output: {
		filename: 'script.js',
		path: path.resolve('dist', getComponentDirectory(componentPath)),
	},
	plugins: [
		componentEntryPlugin,
	],
});

const getUtilDirectory = (utilPath) => (
	// eslint-disable-next-line no-magic-numbers
	utilPath.split(path.sep).slice(2).join(path.sep)
);

const buildUtil = (utilPath) => merge({}, webpackBuildConfig, {
	entry: utilPath,
	output: {
		filename: path.basename(utilPath),
		path: path.dirname(path.resolve('dist', getUtilDirectory(utilPath))),
	},
});

module.exports = async () => [
	...(await tinyGlob('./src/{components,utils}/**/index.js')).map(
		(componentPath) => buildComponent(`./${ componentPath}`),
	),
	...(await tinyGlob('./src/utils/*.js')).map(
		(utilPath) => buildUtil(`./${ utilPath}`),
	),
];
