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
			const { colors, fonts, shapes } = this;

			return {
				'--maker-color-neutral-0': colors['neutral-0'],
				'--maker-color-neutral-10': colors['neutral-10'],
				'--maker-color-neutral-20': colors['neutral-20'],
				'--maker-color-neutral-80': colors['neutral-80'],
				'--maker-color-neutral-90': colors['neutral-90'],
				'--maker-color-neutral-100': colors['neutral-100'],
				'--maker-color-primary': colors.primary,
				'--maker-color-background': colors.background,
				'--maker-color-heading': colors.heading,
				'--maker-color-body': colors.body,
				'--maker-color-elevation': colors.elevation,
				'--maker-color-overlay': colors.overlay,
				'--maker-font-heading-font-family': fonts.heading.fontFamily,
				'--maker-font-heading-font-weight': fonts.heading.fontWeight,
				'--maker-font-body-font-family': fonts.body.fontFamily,
				'--maker-font-body-font-weight': fonts.body.fontWeight,
				'--maker-font-label-font-family': fonts.label.fontFamily,
				'--maker-font-label-font-weight': fonts.label.fontWeight,
				'--maker-shape-default-border-radius': shapes.defaultBorderRadius,
				'--maker-shape-button-border-radius': shapes.buttonBorderRadius,
				'--maker-shape-image-border-radius': shapes.imageBorderRadius,
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
	color: var(--maker-color-body);
	font-weight: var(--maker-font-body-font-weight);
	font-family: var(--maker-font-body-font-family);
	background-color: var(--maker-color-background);
}
</style>
