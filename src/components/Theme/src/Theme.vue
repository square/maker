<template>
	<div
		:style="styles"
	>
		<slot />
	</div>
</template>

<script>
import { merge, find, get } from 'lodash';
import key from './key';
import defaultTheme from './default-theme';
import contrastColors from './contrast-colors';
import { resolve, getPath } from './utils';

function resolveTheme(data, parentTheme, theme, profileId) {
	merge(data, parentTheme, theme);
	merge(data, find(data.profiles, { id: profileId }));

	const backgroundColor = get(data, 'colors.background', '#ffffff');
	const contrast = contrastColors(backgroundColor);

	data.colors = {
		...data.colors,
		contrast,
	};

	data.resolve = resolve;
	data.getPath = getPath;
}

export default {
	inject: {
		parentTheme: {
			default: defaultTheme(),
			from: key,
		},
	},
	provide() {
		return {
			// provided data needs to be reactive
			[key]: this.$data,
		};
	},
	inheritAttrs: false,
	props: {
		theme: {
			type: Object,
			default: () => ({}),
		},
		profile: {
			type: String,
			default: 'defaultProfile',
		},
	},
	data() {
		const data = {};
		resolveTheme(data, this.parentTheme, this.theme, this.profile);
		return data;
	},
	computed: {
		styles() {
			const { colors } = this;
			const { contrast } = colors;
			const contrastVariables = {};

			Object.entries(contrast).forEach(([name, hex]) => {
				contrastVariables[`--${name}`] = hex;
			});

			return {
				'--color-background': colors.background,
				color: contrast['color-800'],
				...contrastVariables,
			};
		},
	},
	beforeUpdate() {
		// update theme on prop changes
		resolveTheme(this.$data, this.parentTheme, this.theme, this.profile);
	},
};
</script>
