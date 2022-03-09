<template>
	<div :class="$s.Container">
		<div :class="$s.Dialog">
			<!-- @slot Dialog content -->
			<slot />
		</div>
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
.Container {
	position: relative;
	width: 100%;
	max-height: calc(100% - 48px);
	overflow: scroll;
	border-radius: 8px 8px 0 0;
}

.Dialog {
	overflow: scroll;
	color: var(--color, inherit);
	background: var(--bg-color, #f5f6f7);
}

@media screen and (--for-tablet-landscape-up) {
	.Container {
		display: inline-block;
		width: auto;
		height: auto;
		max-height: calc(100% - 64px);
		overflow: hidden;
		border-radius: 8px;
		box-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);
	}

	.Dialog {
		width: 400px;
		min-height: 180px;
		max-height: calc(100vh - 64px);
	}
}
</style>
