<template>
	<span
		:class="[$s.Pill, shapeClass]"
		:style="style"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<!-- @slot pill content -->
		<slot />
	</span>
</template>

<script>
import cssValidator from '@square/maker/utils/css-validator';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

const MAXIMUM_ALLOWED_SHAPES = 2;
const ALLOWED_SHAPES = new Set([
	'squared',
	'rounded',
	'pill',
	'point',
	'ribbon',
]);

/**
 * @inheritAttrs span
 * @inheritListeners span
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
		 * pattern defined at theme level
		 */
		pattern: {
			type: String,
			default: undefined,
		},

		/**
		 * text color, also border color if no bg color
		 */
		textColor: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},

		/**
		 * bg & border color
		 */
		bgColor: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},

		/**
		 * The shape the pill should take, or a tuple of shapes for each endcap.
		 * @values pill, squared, rounded, point, ribbon
		 */
		shape: {
			type: [String, Array],
			default: 'pill',
			validator: function validatePillShape(input) {
				if (Array.isArray(input)) {
					return input.length === MAXIMUM_ALLOWED_SHAPES
						&& input.every((value) => ALLOWED_SHAPES.has(value));
				}

				return ALLOWED_SHAPES.has(input);
			},
		},
	},

	computed: {
		...resolveThemeableProps('pill', [
			'pattern',
			'textColor',
			'bgColor',
		]),

		style() {
			const textColor = this.resolvedTextColor || 'var(--maker-color-neutral-90, #1b1b1b)';
			const bgColor = this.resolvedBgColor || 'transparent';
			const borderColor = bgColor === 'transparent' ? textColor : bgColor;

			return {
				'--text-color': textColor,
				'--bg-color': bgColor,
				'--border-color': borderColor,
			};
		},

		shapeClass() {
			const { '--bg-color': bgColor } = this.style;

			const selectors = Array.isArray(this.shape)
				? [`start--${this.shape[0]}`, `end--${this.shape[1]}`]
				: [`start--${this.shape}`, `end--${this.shape}`];

			if (bgColor === 'transparent') {
				selectors.push('outlined');
			}

			return selectors.map((style) => this.$s[style]);
		},
	},
};
</script>

<style module="$s">
.Pill {
	position: relative;
	display: inline-block;
	padding: 4px 8px;
	color: var(--text-color, #1b1b1b);
	font-weight: $maker-font-label-font-weight;
	font-size: 12px; /* TODO: refactor to font-size step -2 later? */
	font-family: $maker-font-label-font-family;
	line-height: 16px; /* TODO: refactor to line-height step -2 later? */
	background-color: var(--bg-color);
	border: 1px solid var(--border-color);

	&.start--pill {
		border-top-left-radius: 100px;
		border-bottom-left-radius: 100px;
	}

	&.start--rounded {
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
	}

	&.start--squared,
	&.start--point,
	&.start--ribbon {
		border-top-left-radius: unset;
		border-bottom-left-radius: unset;
	}

	&.start--point,
	&.start--ribbon {
		/* Absolute position doesn't make space in layouts for the decoration, so we force it here */
		margin-left: 15px;
		border-left: none;

		&::before {
			position: absolute;
			top: -1px; /* align to border */
			bottom: -1px; /* align to border */
			left: -15px;
			width: 15px;
			background-color: var(--bg-color);
			content: '';
		}

		&.outlined::before {
			background-color: var(--border-color);
		}
	}

	&.start--point {
		&::before {
			clip-path:
				polygon(
					100% 0%,
					0% 50%,
					100% 100%,
					100% 0%
				);
		}

		&.outlined::before {
			clip-path:
				polygon(
					100% 0%,
					0% 50%,
					100% 100%,
					100% calc(100% - 1px),
					calc(0% + 1px) 50%,
					100% calc(0% + 1px),
					100% 0%
				);
		}
	}

	&.start--ribbon {
		&::before {
			clip-path:
				polygon(
					100% 0%,
					0% 0%,
					80% 50%,
					0% 100%,
					100% 100%,
					100% 0%
				);
		}

		&.outlined::before {
			clip-path:
				polygon(
					100% 0%,
					0% 0%,
					80% 50%,
					0% 100%,
					100% 100%,
					100% calc(100% - 1px),
					calc(0% + 2px) calc(100% - 1px),
					calc(80% + 1px) 50%,
					calc(0% + 2px) calc(0% + 1px),
					100% calc(0% + 1px),
					100% 0%
				);
		}
	}

	&.end--pill {
		border-top-right-radius: 100px;
		border-bottom-right-radius: 100px;
	}

	&.end--rounded {
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
	}

	&.end--squared,
	&.end--point,
	&.end--ribbon {
		border-top-right-radius: unset;
		border-bottom-right-radius: unset;
	}

	&.end--point,
	&.end--ribbon {
		/* Absolute position doesn't make space in layouts for the decoration, so we force it here */
		margin-right: 15px;
		border-right: none;

		&::after {
			position: absolute;
			top: -1px;  /* align to border */
			bottom: -1px; /* align to border */
			left: 100%;
			width: 15px;
			background-color: var(--bg-color);
			content: '';
		}

		&.outlined::after {
			background-color: var(--border-color);
		}
	}

	&.end--point {
		&::after {
			clip-path:
				polygon(
					0% 0%,
					100% 50%,
					0% 100%,
					0% 0%
				);
		}

		&.outlined::after {
			clip-path:
				polygon(
					0% 0%,
					100% 50%,
					0% 100%,
					0% calc(100% - 1px),
					calc(100% - 1px) 50%,
					0% calc(0% + 1px),
					0% 0%
				);
		}
	}

	&.end--ribbon {
		&::after {
			clip-path:
				polygon(
					0% 0%,
					100% 0%,
					20% 50%,
					100% 100%,
					0% 100%,
					0% 0%
				);
		}

		&.outlined::after {
			clip-path:
				polygon(
					0% 0%,
					100% 0%,
					20% 50%,
					100% 100%,
					0% 100%,
					0% calc(100% - 1px),
					calc(100% - 2px) calc(100% - 1px),
					calc(20% - 1px) 50%,
					calc(100% - 2px) calc(0% + 1px),
					0% calc(0% + 1px),
					0% 0%
				);
		}
	}
}
</style>
