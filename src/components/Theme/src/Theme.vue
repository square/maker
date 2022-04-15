<template>
	<div
		:class="$s.Theme"
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
			const { colors, fonts } = this;

			return {
				'--neutral-0': colors['neutral-0'],
				'--neutral-10': colors['neutral-10'],
				'--neutral-20': colors['neutral-20'],
				'--neutral-80': colors['neutral-80'],
				'--neutral-90': colors['neutral-90'],
				'--neutral-100': colors['neutral-100'],
				'--color-primary': colors.primary,
				'--color-background': colors.background,
				'--color-title': colors.title,
				'--color-paragraph': colors.paragraph,
				'--color-elevation': colors['color-elevation'],
				'--color-overlay': colors['color-overlay'],
				'--font-family-title': fonts.title.fontFamily,
				'--font-weight-title': fonts.title.fontWeight,
				'--font-family-paragraph': fonts.paragraph.fontFamily,
				'--font-weight-paragraph': fonts.paragraph.fontWeight,
				'--font-family-label': fonts.label.fontFamily,
				'--font-weight-label': fonts.label.fontWeight,
			};
		},
	},
	beforeUpdate() {
		// update theme on prop changes
		resolveTheme(this.$data, this.parentTheme, this.theme, this.profile);
	},
};
</script>

<style module="$s">
.Theme {
	color: var(--color-paragraph);
	font-weight: var(--font-weight-paragraph);
	font-family: var(--font-family-paragraph);
	background-color: var(--color-background);
}
</style>
