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
				'--color-background': colors.background,
				'--color-heading': colors.heading,
				'--color-text': colors.text,
				'--color-elevation': colors['color-elevation'],
				'--color-overlay': colors['color-overlay'],
				'--font-size': fonts.baseSize,
				'--font-size-scale': fonts.sizeScale,
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
	color: var(--color-text);
	background-color: var(--color-background);

	/* derived minus sizes */
	--font-step-minus-1-size: calc(var(--font-step-0-size) / var(--font-size-scale));

	/* base sizes */
	--font-step-0-size: var(--font-size);

	/* derived larger sizes */
	--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));
	--font-step-2-size: calc(var(--font-step-1-size) * var(--font-size-scale));
	--font-step-3-size: calc(var(--font-step-2-size) * var(--font-size-scale));
	--font-step-4-size: calc(var(--font-step-3-size) * var(--font-size-scale));
	--font-step-5-size: calc(var(--font-step-4-size) * var(--font-size-scale));
	--font-step-6-size: calc(var(--font-step-5-size) * var(--font-size-scale));
	--font-step-7-size: calc(var(--font-step-6-size) * var(--font-size-scale));
}
</style>
