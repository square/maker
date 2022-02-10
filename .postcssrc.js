module.exports = {
	plugins: [
		require('postcss-preset-env')({
			stage: 0,
			preserve: false,
			features: {
				'custom-properties': false,
				'custom-media-queries': {
					importFrom: 'src/styles/breakpoints.css'
				},
			},
		}),
	],
};
