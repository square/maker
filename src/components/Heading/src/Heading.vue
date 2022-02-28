<script>
import chroma from 'chroma-js';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

const MIN_SIZE = -2;
const MAX_SIZE = 7;
const MIN_WEIGHT = 100;
const MAX_WEIGHT = 900;

/**
 * Heading
 * @inheritAttrs Heading_Elements
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
		 * @values 7, 6, 5, 4, 3, 2, 1, 0, -1, -2
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
		 * Font family
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-family}
		 */
		fontFamily: {
			type: String,
			default: undefined,
		},
		/**
		 * Font weight with standard numeric keyword values
		 * @values 100, 200, 300, 400, 500, 600, 700, 800, 900
		 */
		fontWeight: {
			type: Number,
			default: undefined,
			validator: (weight) => weight >= MIN_WEIGHT && weight <= MAX_WEIGHT,
		},
		/**
		 * Color
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color}
		 */
		color: {
			type: String,
			default: undefined,
			validator: (color) => chroma.valid(color),
		},
		/**
		 * font style
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-style}
		 */
		fontStyle: {
			type: String,
			default: 'inherit',
			validator: (fontStyle) => ['inherit', 'normal', 'italic'].includes(fontStyle),
		},
		/**
		 * text transform
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform}
		 */
		textTransform: {
			type: String,
			default: 'inherit',
			validator: (textTransform) => ['inherit', 'none', 'uppercase'].includes(textTransform),
		},
	},

	computed: {
		...resolveThemeableProps('heading', ['size', 'fontFamily', 'fontWeight', 'color']),
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
				fontWeight: this.resolvedFontWeight,
				color: this.resolvedColor,
				'--mobile-base-font-size': fonts.baseSize,
				'--mobile-font-size-scale': fonts.sizeScale,
			};
		},
	},

	render(createElement) {
		const {
			$s,
			sizeClass,
			tag,
			inlineStyles,
			fontStyle,
			textTransform,
		} = this;
		/**
		 * @slot heading content
		 */
		const defaultSlot = this.$slots.default;
		return createElement(tag, {
			class: [
				$s.Heading,
				$s[`size_${sizeClass}`],
				$s[`fontstyle_${fontStyle}`],
				$s[`texttransform_${textTransform}`],
			],
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

	/* min breakpoint config */
	--min-resolution: 320; /* arbitrary value */
	--min-font-size: var(--mobile-base-font-size);
	--min-font-size-scale: var(--mobile-font-size-scale);

	/* min type scale */
	--min-fs--2: calc(var(--min-fs--1) / var(--min-font-size-scale));
	--min-fs--1: calc(var(--min-fs-0) / var(--min-font-size-scale));
	--min-fs-0: var(--min-font-size);
	--min-fs-1: calc(var(--min-fs-0) * var(--min-font-size-scale));
	--min-fs-2: calc(var(--min-fs-1) * var(--min-font-size-scale));
	--min-fs-3: calc(var(--min-fs-2) * var(--min-font-size-scale));
	--min-fs-4: calc(var(--min-fs-3) * var(--min-font-size-scale));
	--min-fs-5: calc(var(--min-fs-4) * var(--min-font-size-scale));
	--min-fs-6: calc(var(--min-fs-5) * var(--min-font-size-scale));
	--min-fs-7: calc(var(--min-fs-6) * var(--min-font-size-scale));

	/* max breakpoint config */
	--max-resolution: 1280; /* arbitrary value */
	--max-font-size: var(--min-font-size);
	--max-font-size-scale: calc(var(--min-font-size-scale) + 0.11); /* arbitrary value */

	/* max type scale */
	--max-fs--2: calc(var(--max-fs--1) / var(--max-font-size-scale));
	--max-fs--1: calc(var(--max-fs-0) / var(--max-font-size-scale));
	--max-fs-0: var(--max-font-size);
	--max-fs-1: calc(var(--max-fs-0) * var(--max-font-size-scale));
	--max-fs-2: calc(var(--max-fs-1) * var(--max-font-size-scale));
	--max-fs-3: calc(var(--max-fs-2) * var(--max-font-size-scale));
	--max-fs-4: calc(var(--max-fs-3) * var(--max-font-size-scale));
	--max-fs-5: calc(var(--max-fs-4) * var(--max-font-size-scale));
	--max-fs-6: calc(var(--max-fs-5) * var(--max-font-size-scale));
	--max-fs-7: calc(var(--max-fs-6) * var(--max-font-size-scale));

	/* interpolation variables */
	--resolution-range: calc(var(--max-resolution) - var(--min-resolution));
	--resolution: 100vw;
	--resolution-progress: calc(var(--resolution) - (var(--min-resolution) * 1px));
	--interpolate-by: calc(var(--resolution-progress) / var(--resolution-range));
	--range-fs--2: calc(var(--max-fs--2) - var(--min-fs--2));
	--range-fs--1: calc(var(--max-fs--1) - var(--min-fs--1));
	--range-fs-0: calc(var(--max-fs-0) - var(--min-fs-0));
	--range-fs-1: calc(var(--max-fs-1) - var(--min-fs-1));
	--range-fs-2: calc(var(--max-fs-2) - var(--min-fs-2));
	--range-fs-3: calc(var(--max-fs-3) - var(--min-fs-3));
	--range-fs-4: calc(var(--max-fs-4) - var(--min-fs-4));
	--range-fs-5: calc(var(--max-fs-5) - var(--min-fs-5));
	--range-fs-6: calc(var(--max-fs-6) - var(--min-fs-6));
	--range-fs-7: calc(var(--max-fs-7) - var(--min-fs-7));

	/* fluid type scale */
	--fs--2: max(12px, calc(var(--min-fs--2) * 1px + var(--range-fs--2) * var(--interpolate-by)));
	--fs--1: max(14px, calc(var(--min-fs--1) * 1px + var(--range-fs--1) * var(--interpolate-by)));
	--fs-0: calc(var(--min-fs-0) * 1px + var(--range-fs-0) * var(--interpolate-by));
	--fs-1: calc(var(--min-fs-1) * 1px + var(--range-fs-1) * var(--interpolate-by));
	--fs-2: calc(var(--min-fs-2) * 1px + var(--range-fs-2) * var(--interpolate-by));
	--fs-3: calc(var(--min-fs-3) * 1px + var(--range-fs-3) * var(--interpolate-by));
	--fs-4: calc(var(--min-fs-4) * 1px + var(--range-fs-4) * var(--interpolate-by));
	--fs-5: calc(var(--min-fs-5) * 1px + var(--range-fs-5) * var(--interpolate-by));
	--fs-6: calc(var(--min-fs-6) * 1px + var(--range-fs-6) * var(--interpolate-by));
	--fs-7: calc(var(--min-fs-7) * 1px + var(--range-fs-7) * var(--interpolate-by));

	/* line height config */
	--line-height: 1.5;
	--line-height-scale: 0.95;

	/* line height scale */
	--lh--2: calc(var(--lh--1) / var(--line-height-scale));
	--lh--1: calc(var(--lh-0) / var(--line-height-scale));
	--lh-0: var(--line-height);
	--lh-1: calc(var(--lh-0) * var(--line-height-scale));
	--lh-2: calc(var(--lh-1) * var(--line-height-scale));
	--lh-3: calc(var(--lh-2) * var(--line-height-scale));
	--lh-4: calc(var(--lh-3) * var(--line-height-scale));
	--lh-5: calc(var(--lh-4) * var(--line-height-scale));
	--lh-6: calc(var(--lh-5) * var(--line-height-scale));
	--lh-7: calc(var(--lh-6) * var(--line-height-scale));
}

.fontstyle_inherit {
	font-style: inherit;
}

.fontstyle_normal {
	font-style: normal;
}

.fontstyle_italic {
	font-style: italic;
}

.texttransform_inherit {
	text-transform: inherit;
}

.texttransform_none {
	text-transform: none;
}

.texttransform_uppercase {
	text-transform: uppercase;
}

@media (min-width: 1200px) {
	.Heading {
		--resolution: 1200px;
	}
}

.Heading.size_minus-2 {
	font-size: var(--fs--2);
	line-height: var(--lh--2);
}

.Heading.size_minus-1 {
	font-size: var(--fs--1);
	line-height: var(--lh--1);
}

.Heading.size_0 {
	font-size: var(--fs-0);
	line-height: var(--lh-0);
}

.Heading.size_1 {
	font-size: var(--fs-1);
	line-height: var(--lh-1);
}

.Heading.size_2 {
	font-size: var(--fs-2);
	line-height: var(--lh-2);
}

.Heading.size_3 {
	font-size: var(--fs-3);
	line-height: var(--lh-3);
}

.Heading.size_4 {
	font-size: var(--fs-4);
	line-height: var(--lh-4);
}

.Heading.size_5 {
	font-size: var(--fs-5);
	line-height: var(--lh-5);
}

.Heading.size_6 {
	font-size: var(--fs-6);
	line-height: var(--lh-6);
}

.Heading.size_7 {
	font-size: var(--fs-7);
	line-height: var(--lh-7);
}
</style>
