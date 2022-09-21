<template>
	<div
		:class="$s.BladeContainer"
		:style="style"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<div :class="$s.Blade">
			<!-- @slot Blade content -->
			<slot />
		</div>
	</div>
</template>

<script>
import cssValidator from '@square/maker/utils/css-validator';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

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
		 * Background color of blade
		 */
		bgColor: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
		/**
		 * Text color of blade
		 */
		color: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
	},

	computed: {
		...resolveThemeableProps('blade', [
			'bgColor',
			'color',
		]),
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
.BladeContainer {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	color: var(--color, $maker-color-body);
	background-color: var(--bg-color, $maker-color-background);
}

.Blade {
	height: 100%;
	overflow: auto;
}

@media screen and (--for-tablet-landscape-up) {
	.BladeContainer {
		width: 400px;
		box-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);
	}

	.Blade {
		width: 400px;
	}
}
</style>
