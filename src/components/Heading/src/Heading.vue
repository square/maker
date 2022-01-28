<script>
import chroma from 'chroma-js';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

const MIN_SIZE = -2;
const MAX_SIZE = 9;
const MIN_WEIGHT = 100;
const MAX_WEIGHT = 900;

/**
 * Heading
 * @inheritAttrs h1
 * @inheritListeners h1
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
		 * Size of heading. Influences which element is used.
		 */
		size: {
			type: Number,
			default: undefined,
			validator: (size) => size >= MIN_SIZE && size <= MAX_SIZE,
		},
		/**
		 * Override Heading element. By default, the element is derived from size.
		 */
		element: {
			type: String,
			default: undefined,
			validator: (element) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'].includes(element),
		},
		/**
		 * Heading font family
		 */
		fontFamily: {
			type: String,
			default: undefined,
		},
		/**
		 * Heading text color
		 */
		textColor: {
			type: String,
			default: undefined,
			validator: (color) => chroma.valid(color),
		},
		/**
		 * font weight
		 */
		weight: {
			type: Number,
			default: undefined,
			validator: (weight) => weight >= MIN_WEIGHT && weight <= MAX_WEIGHT,
		},
	},

	computed: {
		...resolveThemeableProps('heading', ['size', 'fontFamily', 'textColor', 'weight']),
		tag() {
			if (this.element) {
				return this.element;
			}
			const h1Threshold = 4;
			const h2Threshold = 3;
			const h3Threshold = 2;
			const h4Threshold = 1;
			const h5Threshold = 0;
			if (this.resolvedSize >= h1Threshold) {
				return 'h1';
			}
			if (this.resolvedSize >= h2Threshold) {
				return 'h2';
			}
			if (this.resolvedSize >= h3Threshold) {
				return 'h3';
			}
			if (this.resolvedSize >= h4Threshold) {
				return 'h4';
			}
			if (this.resolvedSize >= h5Threshold) {
				return 'h5';
			}
			return 'h6';
		},
		sizeClass() {
			const minNonNegativeSize = 0;
			if (this.resolvedSize >= minNonNegativeSize) {
				return this.resolvedSize.toString();
			}
			return `minus${this.resolvedSize}`;
		},
		inlineStyles() {
			const { fonts } = this.theme;
			return {
				fontFamily: this.resolvedFontFamily,
				color: this.resolvedTextColor,
				fontWeight: this.resolvedWeight,
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

	render(createElement) {
		const {
			$s,
			sizeClass,
			tag,
			inlineStyles,
		} = this;
		/**
		 * @slot heading content
		 */
		const defaultSlot = this.$slots.default;
		return createElement(tag, {
			class: [$s.Heading, $s[`size_${sizeClass}`]],
			style: inlineStyles,
			attrs: this.$attrs,
			on: this.$listeners,
		}, defaultSlot);
	},
};
</script>

<style module="$s">
.Heading {
	margin: 0;

	--font-size: var(--mobile-base-font-size);
	--font-size-scale: var(--mobile-font-size-scale);
	--line-height: var(--mobile-base-line-height);
	--line-height-scale: var(--mobile-line-height-scale);

	/* derived minus sizes */
	--font-step-minus-2-size: calc(var(--font-step-minus-1-size) / var(--font-size-scale));
	--font-step-minus-2-line-height:
		calc(
			var(--font-step-mins-1-line-height) / var(--line-height-scale)
		);
	--font-step-minus-1-size: calc(var(--font-step-0-size) / var(--font-size-scale));
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
	.Heading {
		--font-size: var(--desktop-base-font-size);
		--font-size-scale: var(--desktop-font-size-scale);
		--line-height: var(--desktop-base-line-height);
		--line-height-scale: var(--desktop-line-height-scale);
	}
}

.Heading.size_minus-2 {
	font-size: var(--font-step-minus-2-size);
	line-height: var(--font-step-minus-2-line-height);
}

.Heading.size_minus-1 {
	font-size: var(--font-step-minus-1-size);
	line-height: var(--font-step-minus-1-line-height);
}

.Heading.size_0 {
	font-size: var(--font-step-0-size);
	line-height: var(--font-step-0-line-height);
}

.Heading.size_1 {
	font-size: var(--font-step-1-size);
	line-height: var(--font-step-1-line-height);
}

.Heading.size_2 {
	font-size: var(--font-step-2-size);
	line-height: var(--font-step-2-line-height);
}

.Heading.size_3 {
	font-size: var(--font-step-3-size);
	line-height: var(--font-step-3-line-height);
}

.Heading.size_4 {
	font-size: var(--font-step-4-size);
	line-height: var(--font-step-4-line-height);
}

.Heading.size_5 {
	font-size: var(--font-step-5-size);
	line-height: var(--font-step-5-line-height);
}

.Heading.size_6 {
	font-size: var(--font-step-6-size);
	line-height: var(--font-step-6-line-height);
}

.Heading.size_7 {
	font-size: var(--font-step-7-size);
	line-height: var(--font-step-7-line-height);
}

.Heading.size_8 {
	font-size: var(--font-step-8-size);
	line-height: var(--font-step-8-line-height);
}

.Heading.size_9 {
	font-size: var(--font-step-9-size);
	line-height: var(--font-step-9-line-height);
}
</style>
