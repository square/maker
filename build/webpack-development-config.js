const path = require('path');
const fs = require('fs');
const assert = require('assert');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { JustSsrPlugin, clientOnly } = require('vue-just-ssr');
const { merge } = require('./utils');
const webpackBaseConfig = require('./webpack-base-config');

const isDevelopmentCmd = process.env.npm_lifecycle_event === 'dev';
const { component, util } = process.env;
assert(
	!isDevelopmentCmd || component || util,
	'Must specify a "component" or "util" environment variable for local development',
);

let entry;
if (component) {
	entry = path.resolve(`./src/components/${component}/README.md`);
} else if (util) {
	entry = path.resolve(`./src/utils/${util}/README.md`);
}

if (isDevelopmentCmd) {
	require.resolve(entry);
}

const config = merge({}, webpackBaseConfig, {
	entry,

	devtool: 'source-map',

	optimization: {
		minimize: false,
		splitChunks: {
			chunks: 'all',
		},
	},

	cache: {
		type: 'filesystem',
		buildDependencies: {
			config: [__filename],
		},
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
							buildDemos: true,
							markdownCSS: fs.readFileSync(require.resolve('github-markdown-css/github-markdown.css')),
						},
					},
				],
			},
		],
	},

	plugins: [
		new JustSsrPlugin({
			createAppPath: './build/create-development-app.js',
		}),
		clientOnly(new ESLintPlugin({
			files: '**/*.{vue,js,md}',
			failOnError: false,
			lintDirtyModulesOnly: true,
		})),
		clientOnly(new StylelintPlugin({
			files: '**/*.{vue,css}',
			failOnError: false,
			lintDirtyModulesOnly: true,
		})),
	],
});

module.exports = config;
