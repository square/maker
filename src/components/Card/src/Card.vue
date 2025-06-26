<template>
	<m-theme
		:class="[
			$s.Card,
			$s[`shape_${resolvedShape}`],
			$s[`variant_${resolvedVariant}`],
		]"
		v-bind="$attrs"
		:style="style"
		:theme="cardTheme"
		:aria-labelledby="ariaLabelledby"
		v-on="$listeners"
	>
		<!-- @slot card content -->
		<slot />
	</m-theme>
</template>

<script>
import {
	MTheme,
	MThemeKey,
	defaultTheme,
	resolveThemeableProps,
} from '@square/maker/components/Theme';
import { getContrast } from '@square/maker/utils/get-contrast';
import makerColors from '@square/maker/utils/maker-colors';
import { colord } from 'colord';

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	components: {
		MTheme,
	},

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
		/**
		 * card variant
		 */
		variant: {
			type: String,
			default: undefined,
			validator: (variant) => ['outline', 'glass'].includes(variant),
		},
		/**
		 * The ID of the element that labels the card.
		 */
		ariaLabelledby: {
			type: String,
			default: undefined,
		},
	},

	computed: {
		...resolveThemeableProps('card', [
			'shape',
			'variant',
		]),

		style() {
			if (this.variant !== 'glass') {
				return {};
			}

			const alpha = 0.8;
			return {
				'--bg-color-glass': colord(this.theme.colors['neutral-100']).alpha(alpha).toRgbString(),
			};
		},

		cardTheme() {
			if (this.variant !== 'glass') {
				return {};
			}

			const cardBg = this.theme.colors['neutral-100'];
			return {
				colors: {
					...makerColors(cardBg, this.theme.colors.primary),
					heading: getContrast(cardBg, this.theme.colors.heading),
					body: getContrast(cardBg, this.theme.colors.body),
				},
			};
		},
	},
};
</script>

<style module="$s">
.Card {
	--radius-rounded-default: 4px;
	--radius-pill-default: 4px;

	padding: 16px 24px;
	border-radius: $maker-shape-card-border-radius;

	&.variant_outline {
		background-color: $maker-color-background;
		border: 1px solid $maker-color-neutral-20;
	}

	&.variant_glass {
		background-color: var(--bg-color-glass);
		backdrop-filter: blur(2px);
	}

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
