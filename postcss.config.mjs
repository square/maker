import postcssSimpleVars from 'postcss-simple-vars';
import postcssPresetEnv from 'postcss-preset-env';
import variables from './src/styles/default-variables';

export default {
	plugins: [
		postcssSimpleVars({
			variables,
		}),
		postcssPresetEnv({
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
