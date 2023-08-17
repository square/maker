<script>
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import cssValidator from '@square/maker/utils/css-validator';

const MIN_SIZE = -2;
const MAX_SIZE = 7;

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
		 * patterns are defined at the theme level
		 */
		pattern: {
			type: String,
			default: undefined,
		},
		/**
		 * [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
		 */
		element: {
			type: String,
			default: undefined,
			validator: (element) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'li'].includes(element),
		},
		/**
		 * Size of text as step in fluid scale (-2 to 7)
		 */
		size: {
			type: Number,
			default: undefined,
			validator: (size) => size >= MIN_SIZE && size <= MAX_SIZE,
		},
		/**
		 * [Font family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
		 */
		fontFamily: {
			type: String,
			default: undefined,
			validator: cssValidator('font-family'),
		},
		/**
		 * [Font weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
		 */
		fontWeight: {
			type: String,
			default: undefined,
			validator: cssValidator('font-weight'),
		},
		/**
		 * [Font size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size). Overrides the `size` prop, and disables type scaling.
		 */
		fontSize: {
			type: String,
			default: undefined,
			validator: cssValidator('font-size'),
		},
		/**
		 * [Line height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height). Overrides the internally calculated line height.
		 */
		lineHeight: {
			type: String,
			default: undefined,
			validator: cssValidator('line-height'),
		},
		/**
		 * [Letter spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing). Overrides the internally calculated line height.
		 */
		letterSpacing: {
			type: String,
			default: undefined,
			validator: cssValidator('letter-spacing'),
		},
		/**
		 * [Color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
		 */
		color: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
		/**
		 * [Font style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
		 */
		fontStyle: {
			type: String,
			default: undefined,
			validator: cssValidator('font-style'),
		},
		/**
		 * [Text transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
		 */
		textTransform: {
			type: String,
			default: undefined,
			validator: cssValidator('text-transform'),
		},
		/**
		 * [Text decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
		 */
		textDecoration: {
			type: String,
			default: undefined,
			validator: cssValidator('text-decoration'),
		},
		/**
		 * [Text align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
		 */
		textAlign: {
			type: String,
			default: undefined,
			validator: cssValidator('text-align'),
		},
	},

	data() {
		return {
			isCentered: false,
		};
	},

	computed: {
		...resolveThemeableProps('text', [
			'pattern',
			'element',
			'size',
			'fontFamily',
			'fontWeight',
			'fontSize',
			'color',
			'fontStyle',
			'textTransform',
			'textDecoration',
			'textAlign',
			'lineHeight',
			'letterSpacing',
		]),
		tag() {
			if (this.resolvedElement) {
				return this.resolvedElement;
			}
			const h1Threshold = 4;
			const h2Threshold = 3;
			const h3Threshold = 2;
			if (this.resolvedSize >= h1Threshold) {
				return 'h1';
			}
			if (this.resolvedSize >= h2Threshold) {
				return 'h2';
			}
			if (this.resolvedSize >= h3Threshold) {
				return 'h3';
			}
			return 'p';
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
			const styles = {
				fontSize: this.resolvedFontSize,
				lineHeight: this.lineHeight,
				letterSpacing: this.letterSpacing,
				'--mobile-base-font-size': fonts.baseSize,
				'--mobile-font-size-scale': fonts.sizeScale,
			};
			if (this.resolvedFontFamily !== 'inherit') {
				styles.fontFamily = this.resolvedFontFamily;
			}
			if (this.resolvedFontWeight !== 'inherit') {
				styles.fontWeight = this.resolvedFontWeight;
			}
			if (this.resolvedColor !== 'inherit') {
				styles.color = this.resolvedColor;
			}
			if (this.resolvedFontStyle !== 'inherit') {
				styles.fontStyle = this.resolvedFontStyle;
			}
			if (this.resolvedTextTransform !== 'inherit') {
				styles.textTransform = this.resolvedTextTransform;
			}
			if (this.resolvedTextDecoration !== 'inherit') {
				styles.textDecoration = this.resolvedTextDecoration;
			}
			if (this.resolvedTextAlign !== 'inherit') {
				styles.textAlign = this.resolvedTextAlign;
			}
			if (this.resolvedLineHeight !== 'inherit') {
				styles.lineHeight = this.resolvedLineHeight;
			}
			if (this.resolvedLetterSpacing !== 'inherit') {
				styles.letterSpacing = this.resolvedLetterSpacing;
			}
			if (this.isCentered) {
				styles.paddingLeft = this.letterSpacing;
			}
			return styles;
		},
	},

	mounted() {
		this.detectAlignCenter();
	},

	updated() {
		this.detectAlignCenter();
	},

	methods: {
		/**
		 * Letter spacing is applied to the right-side of the letter
		 * so when the text is centered, it becomes misaligned
		 *
		 * Detect if the text is center aligned and add left padding
		 * to balance out the letter spacing
		 */
		detectAlignCenter() {
			const computedStyle = window.getComputedStyle(this.$el);
			const textAlign = computedStyle.getPropertyValue('text-align');
			this.isCentered = textAlign === 'center';
		},
	},

	render(createElement) {
		const {
			$s,
			tag,
			sizeClass,
			inlineStyles,
		} = this;
		/**
		 * @slot text content
		 */
		const defaultSlot = this.$slots.default;
		return createElement(tag, {
			class: [
				$s.Text,
				$s[`size_${sizeClass}`],
			],
			attrs: this.$attrs,
			style: inlineStyles,
			on: this.$listeners,
		}, defaultSlot);
	},
};
</script>

<style module="$s">
.Text {
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

@media (min-width: 1200px) {
	.Text {
		--resolution: 1200px;
	}
}

.Text.size_minus-2 {
	font-size: var(--fs--2);
	line-height: var(--lh--2);
}

.Text.size_minus-1 {
	font-size: var(--fs--1);
	line-height: var(--lh--1);
}

.Text.size_0 {
	font-size: var(--fs-0);
	line-height: var(--lh-0);
}

.Text.size_1 {
	font-size: var(--fs-1);
	line-height: var(--lh-1);
}

.Text.size_2 {
	font-size: var(--fs-2);
	line-height: var(--lh-2);
}

.Text.size_3 {
	font-size: var(--fs-3);
	line-height: var(--lh-3);
}

.Text.size_4 {
	font-size: var(--fs-4);
	line-height: var(--lh-4);
}

.Text.size_5 {
	font-size: var(--fs-5);
	line-height: var(--lh-5);
}

.Text.size_6 {
	font-size: var(--fs-6);
	line-height: var(--lh-6);
}

.Text.size_7 {
	font-size: var(--fs-7);
	line-height: var(--lh-7);
}
</style>
