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
				'--mobile-base-font-size': fonts.mobileBaseSize,
				'--mobile-font-size-scale': fonts.mobileSizeScale,
				'--mobile-base-line-height': fonts.mobileBaseLineHeight,
				'--mobile-line-height-scale': fonts.mobileLineHeightScale,
				'--desktop-base-font-size': fonts.desktopBaseSize,
				'--desktop-font-size-scale': fonts.desktopSizeScale,
				'--desktop-base-line-height': fonts.desktopBaseLineHeight,
				'--desktop-line-height-scale': fonts.desktopLineHeightScale,
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

	--font-size: var(--mobile-base-font-size);
	--font-size-scale: var(--mobile-font-size-scale);
	--line-height: var(--mobile-base-line-height);
	--line-height-scale: var(--mobile-line-height-scale);

	/* derived minus sizes */
	--font-step-minus-2-size: max(12px, calc(var(--font-step-minus-1-size) / var(--font-size-scale)));
	--font-step-minus-2-line-height:
		calc(
			var(--font-step-mins-1-line-height) / var(--line-height-scale)
		);
	--font-step-minus-1-size: max(14px, calc(var(--font-step-0-size) / var(--font-size-scale)));
	--font-step-minus-1-line-height:
		calc(
			var(--font-step-0-line-height) / var(--line-height-scale)
		);

	/* base sizes */
	--font-step-0-size: var(--font-size);
	--font-step-0-line-height: var(--line-height);

	/* derived larger sizes */
	--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));
	--font-step-1-line-height: calc(var(--font-step-0-line-height) * var(--line-height-scale));
	--font-step-2-size: calc(var(--font-step-1-size) * var(--font-size-scale));
	--font-step-2-line-height: calc(var(--font-step-1-line-height) * var(--line-height-scale));
	--font-step-3-size: calc(var(--font-step-2-size) * var(--font-size-scale));
	--font-step-3-line-height: calc(var(--font-step-2-line-height) * var(--line-height-scale));
	--font-step-4-size: calc(var(--font-step-3-size) * var(--font-size-scale));
	--font-step-4-line-height: calc(var(--font-step-3-line-height) * var(--line-height-scale));
	--font-step-5-size: calc(var(--font-step-4-size) * var(--font-size-scale));
	--font-step-5-line-height: calc(var(--font-step-4-line-height) * var(--line-height-scale));
	--font-step-6-size: calc(var(--font-step-5-size) * var(--font-size-scale));
	--font-step-6-line-height: calc(var(--font-step-5-line-height) * var(--line-height-scale));
	--font-step-7-size: calc(var(--font-step-6-size) * var(--font-size-scale));
	--font-step-7-line-height: calc(var(--font-step-6-line-height) * var(--line-height-scale));
	--font-step-8-size: calc(var(--font-step-7-size) * var(--font-size-scale));
	--font-step-8-line-height: calc(var(--font-step-7-line-height) * var(--line-height-scale));
	--font-step-9-size: calc(var(--font-step-8-size) * var(--font-size-scale));
	--font-step-9-line-height: calc(var(--font-step-8-line-height) * var(--line-height-scale));
}

@media (min-width: 600px) {
	.Theme {
		--font-size: var(--desktop-base-font-size);
		--font-size-scale: var(--desktop-font-size-scale);
		--line-height: var(--desktop-base-line-height);
		--line-height-scale: var(--desktop-line-height-scale);
	}
}
</style>
