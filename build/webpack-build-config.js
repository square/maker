const fs = require('fs');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
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
			(context, request, callback) => {
				if (request.startsWith('@square/maker')) {
					callback(undefined, request.replace('@square/maker', '../..'));
					return;
				}
				callback();
			},
		],
		output: {
			globalObject: 'this',
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
				},
			],
		},
		optimization: {
			minimizer: [
				new TerserJSPlugin({}),
				new OptimizeCSSAssetsPlugin({
					cssProcessorOptions: {
						reduceIdents: false,
						discardUnused: false,
						discardComments: {
							removeAll: true,
						},
						map: {
							inline: false,
						},
					},
				}),
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

const componentsDirectory = './src/components';
const buildComponents = fs.readdirSync(componentsDirectory)
	.filter((componentDirectory) => !componentDirectory.startsWith('.') && fs.existsSync(path.join(componentsDirectory, componentDirectory, 'index.js')))
	.map((component) => merge({}, webpackBuildConfig, {
		entry: `./components/${component}`,
		output: {
			filename: 'script.js',
			path: path.resolve('components', component),
			libraryTarget: 'umd',
		},
		plugins: [
			componentEntryPlugin,
		],
	}));

const utilsDirectory = './src/utils';
const buildUtils = fs.readdirSync(utilsDirectory)
	.filter((utilPath) => !utilPath.startsWith('.'))
	.map((utilPath) => {
		const isComponent = fs.statSync(path.join(utilsDirectory, utilPath)).isDirectory();

		return merge({}, webpackBuildConfig, {
			entry: `./utils/${utilPath}`,
			output: {
				filename: isComponent ? 'script.js' : utilPath,
				path: path.resolve('utils', isComponent ? utilPath : ''),
				libraryTarget: 'umd',
			},
			plugins: [
				...(isComponent ? [componentEntryPlugin] : []),
			],
		});
	});

module.exports = [
	...buildComponents,
	...buildUtils,
];
