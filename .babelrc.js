module.exports = {
	plugins: ['lodash', 'date-fns'],
	presets: [
		['@babel/preset-env', { modules: false }],
		'@vue/babel-preset-jsx',
	],
};
