<template>
	<div
		:class="[
			$s.Card,
			$s[`shape_${resolvedShape}`],
		]"
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
		...resolveThemeableProps('card', [
			'shape',
		]),
	},
};
</script>

<style module="$s">
.Card {
	--radius-rounded-default: 4px;
	--radius-pill-default: 4px;

	padding: 16px 24px;
	background-color: $maker-color-background;
	border: 1px solid $maker-color-neutral-20;
	border-radius: $maker-shape-card-border-radius;

	&.shape_squared {
		border-radius: 0;
	}

	&.shape_rounded {
		border-radius: var(--radius-rounded-default);
	}

	&.shape_pill {
		border-radius: var(--radius-pill-default);
	}
}
</style>
