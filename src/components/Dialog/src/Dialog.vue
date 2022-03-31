<template>
	<div
		:class="$s.Dialog"
		:style="style"
	>
		<!-- @slot Dialog content -->
		<slot />
	</div>
</template>

<script>
import chroma from 'chroma-js';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

export default {
	name: 'Dialog',

	inject: {
		theme: {
			default: defaultTheme(),
			from: MThemeKey,
		},
	},

	props: {
		/**
		 * Background color of container
		 */
		bgColor: {
			type: String,
			default: undefined,
			validator: (color) => chroma.valid(color),
		},
		/**
		 * Text color of container
		 */
		color: {
			type: String,
			default: undefined,
			validator: (color) => chroma.valid(color),
		},
	},

	computed: {
		...resolveThemeableProps('dialog', ['bgColor', 'color']),

		style() {
			return {
				'--bg-color': this.resolvedBgColor,
				'--color': this.resolvedColor,
			};
		},
	},
};
</script>

<style module="$s">
.Dialog {
	overflow: auto;
	color: var(--color, inherit);
	background: var(--bg-color, #f5f6f7);
}

@media screen and (--for-tablet-landscape-up) {
	.Dialog {
		width: 400px;
		min-height: 180px;
		max-height: calc(100vh - 64px);
	}
}
</style>
