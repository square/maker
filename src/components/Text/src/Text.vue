<script>
import chroma from 'chroma-js';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

const MIN_SIZE = -2;
const MAX_SIZE = 1;
const MIN_WEIGHT = 100;
const MAX_WEIGHT = 900;

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
		 * which HTML element to wrap the text with
		 */
		element: {
			type: String,
			default: 'p',
			validator: (element) => ['p', 'span'].includes(element),
		},
		/**
		 * size of text
		 */
		size: {
			type: Number,
			default: undefined,
			validator: (size) => size >= MIN_SIZE && size <= MAX_SIZE,
		},
		/**
		 * text font family
		 */
		fontFamily: {
			type: String,
			default: undefined,
		},
		/**
		 * text color
		 */
		color: {
			type: String,
			default: undefined,
			validator: (color) => chroma.valid(color),
		},
		/**
		 * font weight
		 */
		fontWeight: {
			type: Number,
			default: undefined,
			validator: (fontWeight) => fontWeight >= MIN_WEIGHT && fontWeight <= MAX_WEIGHT,
		},
	},

	computed: {
		...resolveThemeableProps('text', ['size', 'fontFamily', 'color', 'fontWeight']),
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
				color: this.resolvedColor,
				fontWeight: this.resolvedFontWeight,
				'--mobile-base-font-size': fonts.baseSize,
				'--mobile-font-size-scale': fonts.sizeScale,
			};
		},
	},

	render(createElement) {
		const {
			$s,
			sizeClass,
			element,
			inlineStyles,
		} = this;
		/**
		 * @slot text content
		 */
		const defaultSlot = this.$slots.default;
		return createElement(element, {
			class: [$s.Paragraph, $s[`size_${sizeClass}`]],
			attrs: this.$attrs,
			style: inlineStyles,
			on: this.$listeners,
		}, defaultSlot);
	},
};
</script>

<style module="$s">
.Paragraph {
	/* min breakpoint config */
	--min-resolution: 320; /* arbitrary value */
	--min-font-size: var(--mobile-base-font-size);
	--min-font-size-scale: var(--mobile-font-size-scale);

	/* min type scale */
	--min-fs--2: calc(var(--min-fs--1) / var(--min-font-size-scale));
	--min-fs--1: calc(var(--min-fs-0) / var(--min-font-size-scale));
	--min-fs-0: var(--min-font-size);
	--min-fs-1: calc(var(--min-fs-0) * var(--min-font-size-scale));

	/* max breakpoint config */
	--max-resolution: 1280; /* arbitrary value */
	--max-font-size: var(--min-font-size);
	--max-font-size-scale: calc(var(--min-font-size-scale) + 0.26); /* arbitrary value */

	/* max type scale */
	--max-fs--2: calc(var(--max-fs--1) / var(--max-font-size-scale));
	--max-fs--1: calc(var(--max-fs-0) / var(--max-font-size-scale));
	--max-fs-0: var(--max-font-size);
	--max-fs-1: calc(var(--max-fs-0) * var(--max-font-size-scale));

	/* interpolation variables */
	--resolution-range: calc(var(--max-resolution) - var(--min-resolution));
	--resolution: 100vw;
	--resolution-progress: calc(var(--resolution) - (var(--min-resolution) * 1px));
	--interpolate-by: calc(var(--resolution-progress) / var(--resolution-range));
	--range-fs--2: calc(var(--max-fs--2) - var(--min-fs--2));
	--range-fs--1: calc(var(--max-fs--1) - var(--min-fs--1));
	--range-fs-0: calc(var(--max-fs-0) - var(--min-fs-0));
	--range-fs-1: calc(var(--max-fs-1) - var(--min-fs-1));

	/* fluid type scale */
	--fs--2: max(12px, calc(var(--min-fs--2) * 1px + var(--range-fs--2) * var(--interpolate-by)));
	--fs--1: max(14px, calc(var(--min-fs--1) * 1px + var(--range-fs--1) * var(--interpolate-by)));
	--fs-0: calc(var(--min-fs-0) * 1px + var(--range-fs-0) * var(--interpolate-by));
	--fs-1: calc(var(--min-fs-1) * 1px + var(--range-fs-1) * var(--interpolate-by));

	/* line height config */
	--line-height: 1.5;
	--line-height-scale: 0.95;

	/* line height scale */
	--lh--2: calc(var(--lh--1) / var(--line-height-scale));
	--lh--1: calc(var(--lh-0) / var(--line-height-scale));
	--lh-0: var(--line-height);
	--lh-1: calc(var(--lh-0) * var(--line-height-scale));
}

@media (min-width: 1200px) {
	.Paragraph {
		--resolution: 1200px;
	}
}

.Paragraph.size_minus-2 {
	font-size: var(--fs--2);
	line-height: var(--lh--2);
}

.Paragraph.size_minus-1 {
	font-size: var(--fs--1);
	line-height: var(--lh--1);
}

.Paragraph.size_0 {
	font-size: var(--fs-0);
	line-height: var(--lh-0);
}

.Paragraph.size_1 {
	font-size: var(--fs-1);
	line-height: var(--lh-1);
}
</style>
