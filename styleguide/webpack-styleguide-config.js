const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const { JustSsrPlugin } = require('vue-just-ssr');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ent = require('ent');
const { merge } = require('../build/utils');
const webpackBaseConfig = require('../build/webpack-base-config');
const { getDeployName } = require('../build/utils');

const deployName = getDeployName();

const entry = path.resolve('./styleguide/App.vue');
require.resolve(entry);

const componentsDirectory = path.resolve('./src/components/');

function generateRoutes(directory, importFnName, category) {
	const files = fs.readdirSync(directory, {
		withFileTypes: true,
	});
	const routes = files
		.filter((file) => file.isDirectory())
		.map((file) => ({
			name: file.name,
			path: `/${file.name}`,
			component: `|${importFnName}('${file.name}')|`,
			navLabel: file.name,
			category,
		}));
	return routes;
}

function stringifyRoutes(routes) {
	return JSON.stringify(routes).replace(/"\|(.+?)\|"/g, '$1');
}

const COMPONENTS_ROUTES = stringifyRoutes(generateRoutes(
	componentsDirectory,
	'importComponentsDocument',
	'components',
));

const config = merge({}, webpackBaseConfig, {
	entry,

	optimization: {
		runtimeChunk: true,
		splitChunks: {
			chunks: 'all',
		},
	},

	output: {
		path: path.resolve(`.dist/styleguide/${deployName}`),
	},

	resolve: {
		alias: {
			'@square/maker': path.resolve('src'),
		},
	},

	module: {
		rules: [
			{
				test: /\.md$/,
				use: [
					'vue-loader',
					{
						loader: 'md-vue-loader',
						options: {
							markdownItOpts: {
								html: true,
								linkify: true,
								typographer: true,
							},
							buildDemos(Tag, demoFiles) {
								this.addComponent(['DemoCollapse', 'SrcFile'], 'vue-demo-collapse');

								const listFiles = demoFiles
									.map((file) => `
										<src-file name="${file.name || ''}" language="html">
											<template v-pre>${ent.encode(file.content)}</template>
										</src-file>
									`)
									.join('');

								return `
									<demo-collapse>
										${Tag}
										${listFiles}
									</demo-collapse>
								`;
							},
							markdownCSS: fs.readFileSync(require.resolve('github-markdown-css/github-markdown.css')),
						},
					},
				],
			},
		],
	},

	plugins: [
		new webpack.DefinePlugin({
			COMPONENTS_ROUTES,
		}),
		new JustSsrPlugin({
			createAppPath: './styleguide/create-app.js',
		}),
		new HtmlWebpackPlugin({
			scriptLoading: 'defer',
			templateContent: '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body><div id="app"></div></body></html>',
		}),
	],
});

module.exports = config;
