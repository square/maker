const variables = require('./src/styles/default-variables.cjs');

module.exports = {
	plugins: [
		require('postcss-simple-vars')({
			variables,
		}),
		require('postcss-preset-env')({
			stage: 0,
			preserve: false,
			features: {
				'custom-properties': false,
				'focus-within-pseudo-class': false,
				'custom-media-queries': {
					importFrom: 'src/styles/breakpoints.css',
				},
			},
		}),
	],
};
