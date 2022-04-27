<template>
	<div
		:class="[
			$s.Card,
			$s[`shape_${resolvedShape}`],
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
			validator: (shape) => ['squared', 'rounded'].includes(shape),
		},
	},

	computed: {
		...resolveThemeableProps('card', ['shape']),
		style() {
			return {
				'--border-radius-small': this.theme.shapes.radii.small,
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

	&.shape_rounded,
	&.shape_pill {
		border-radius: var(--border-radius-small, 8px);
	}

	&.shape_squared {
		border-radius: 0;
	}
}
</style>
