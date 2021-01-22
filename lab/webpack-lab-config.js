const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { JustSsrPlugin, clientOnly } = require('vue-just-ssr');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const branch = require('git-branch');
const { merge } = require('../build/utils');
const webpackBaseConfig = require('../build/webpack-base-config');

const entry = path.resolve('./lab/App.vue');
require.resolve(entry);

const isProduction = process.env.NODE_ENV === 'production';
const branchName = branch.sync();

const labDirectory = path.resolve('./lab/experiments/');

function generateRoutes(directoryPath = './') {
	const fullDirectoryPath = path.join(labDirectory, directoryPath);
	const files = fs.readdirSync(fullDirectoryPath).filter((file) => !file.startsWith('.'));
	const routes = [];

	files.forEach((file) => {
		if (file === 'components') {
			return;
		}
		const filePath = path.join(directoryPath, file);
		const id = filePath.replace(/\//g, '-').replace(/\B([A-Z])/g, '-$1').replace(/\.\w+$/, '').toLowerCase();

		let routeEntry = routes.find((route) => route.id === id);
		if (!routeEntry) {
			routeEntry = {
				id,
				name: id,
				rawName: file,
			};
			routes.push(routeEntry);
		}

		const fullFilePath = path.join(fullDirectoryPath, file);
		if (fs.statSync(fullFilePath).isDirectory()) {
			const children = generateRoutes(filePath);
			const hasIndex = children.find((route) => !route.path);
			Object.assign(routeEntry, {
				path: file,
				children,
				name: hasIndex ? undefined : routeEntry.name,
			});
		} else {
			const [fileName] = file.split('.');
			Object.assign(routeEntry, {
				path: fileName === 'index' ? '' : fileName,
				component: `|importExperiment('${filePath}')|`,
			});
		}
	});

	return routes;
}

const LAB_EXPERIMENTS = JSON.stringify(generateRoutes()).replace(/"\|(.+?)\|"/g, '$1');

const config = merge({}, webpackBaseConfig, {
	entry,

	optimization: {
		runtimeChunk: true,
		splitChunks: {
			chunks: 'all',
		},
	},

	output: {
		path: path.resolve(`.lab-dist/${branchName}`),
	},

	resolve: {
		alias: {
			'~': path.resolve('lab'),
			'@square/maker': path.resolve('src'),
		},
	},

	plugins: [
		new webpack.DefinePlugin({
			LAB_EXPERIMENTS,
		}),
		new JustSsrPlugin({
			createAppPath: './lab/create-app.js',
		}),
		clientOnly(new ESLintPlugin({
			files: '**/*.{vue,js}',
			emitWarning: true,
		})),
		clientOnly(new StylelintPlugin({
			files: '**/*.{vue,css}',
			emitWarning: true,
		})),
		...(isProduction ? [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				scriptLoading: 'defer',
				templateContent: '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body><div id="app"></div></body></html>',
			}),
		] : []),
	],
});

module.exports = config;
