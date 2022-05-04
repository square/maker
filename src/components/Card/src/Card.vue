<template>
	<div
		:class="[
			$s.Card,
		]"
		:style="style"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<!-- @slot card content -->
		<slot />
	</div>
</template>

<script>
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	inject: {
		theme: {
			default: defaultTheme(),
			from: MThemeKey,
		},
	},

	inheritAttrs: false,

	props: {
		/**
		 * card shape
		 */
		shape: {
			type: String,
			default: undefined,
			validator: (shape) => ['squared', 'rounded', 'pill'].includes(shape),
		},
	},

	computed: {
		...resolveThemeableProps('card', ['shape']),

		style() {
			return {
				'--border-radius': this.theme.shapes[this.resolvedShape]?.defaultBorderRadius,
			};
		},
	},
};
</script>

<style module="$s">
.Card {
	padding: 16px 24px;
	background-color: var(--color-background, #fff);
	border: 1px solid var(--neutral-20, #eaeaea);
	border-radius: var(--border-radius, --maker-shape-default-border-radius);
}
</style>
