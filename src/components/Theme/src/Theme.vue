<template>
	<div
		:style="styles"
	>
		<slot />
	</div>
</template>

<script>
import { merge, find } from 'lodash';
import key from './key';
import defaultTheme from './default-theme';
import { resolve, getPath } from './utils';

function resolveTheme(data, parentTheme, theme, profileId) {
	merge(data, parentTheme, theme);
	merge(data, find(data.profiles, { id: profileId }));

	data.colors = {
		...data.colors,
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

			return {
				'--color-100': colors['color-100'],
				'--color-300': colors['color-300'],
				'--color-700': colors['color-700'],
				'--color-800': colors['color-800'],
				'--color-900': colors['color-900'],
				'--color-background': colors.background,
				'--color-elevation': colors['color-elevation'],
				'--color-error': colors['color-error'],
			};
		},
	},
	beforeUpdate() {
		// update theme on prop changes
		resolveTheme(this.$data, this.parentTheme, this.theme, this.profile);
	},
};
</script>
