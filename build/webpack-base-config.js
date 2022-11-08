const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const webpackBaseConfig = {
	mode: isProduction ? 'production' : 'development',

	bail: isProduction,

	output: {
		filename: '[name].js',
		path: path.resolve('dist'),
	},

	optimization: {
		minimizer: [
			new TerserPlugin(),
			new CssMinimizerPlugin({
				minimizerOptions: {
					preset: [
						'default',
						{
							discardComments: {
								removeAll: true,
							},
						},
					],
				},
			}),
		],
	},

	module: {
		// noParse: (content) => /lodash|vue/.test(content),
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				// passes .cjs, .mjs, .js
				test: /\.(c|m)?js$/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				oneOf: [
					// Matches `<style module>`
					{
						resourceQuery: /module/,
						use: [
							'vue-style-loader',
							{
								loader: 'css-loader',
								options: {
									esModule: false,
									importLoaders: 1,
									modules: {
										localIdentName: '[local]_[hash:base64:5]',
									},
								},
							},
							'postcss-loader',
						],
					},

					// Matches plain `<style>` or `<style scoped>`
					{
						use: [
							'vue-style-loader',
							{
								loader: 'css-loader',
								options: {
									esModule: false,
									importLoaders: 1,
								},
							},
							'postcss-loader',
						],
					},
				],
			},
		],
	},

	plugins: [
		new VueLoaderPlugin(),
	],
};

module.exports = webpackBaseConfig;
