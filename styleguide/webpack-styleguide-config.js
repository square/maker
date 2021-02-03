const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const { JustSsrPlugin } = require('vue-just-ssr');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ent = require('ent');
const { merge } = require('../build/utils');
const webpackBaseConfig = require('../build/webpack-base-config');
const { version } = require('../package.json');

const entry = path.resolve('./styleguide/App.vue');
require.resolve(entry);

const componentsDirectory = path.resolve('./src/components/');
function generateRoutes() {
	const componentNames = fs.readdirSync(componentsDirectory);
	const routes = componentNames.map((componentName) => ({
		name: componentName,
		path: `/${componentName}`,
		component: `|importComponentDocument('${componentName}')|`,
		navLabel: componentName,
	}));

	return routes;
}

const COMPONENT_ROUTES = JSON.stringify(generateRoutes()).replace(/"\|(.+?)\|"/g, '$1');

const config = merge({}, webpackBaseConfig, {
	entry,

	optimization: {
		runtimeChunk: true,
		splitChunks: {
			chunks: 'all',
		},
	},

	output: {
		path: path.resolve(`.dist/styleguide/${version}`),
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
			COMPONENT_ROUTES,
		}),
		new JustSsrPlugin({
			createAppPath: './styleguide/create-app.js',
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			scriptLoading: 'defer',
			templateContent: '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body><div id="app"></div></body></html>',
		}),
	],
});

module.exports = config;
