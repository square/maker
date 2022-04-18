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
		 * @values headline, title, paragraph, label, pattern defined in theme
		 */
		pattern: {
			type: String,
			default: undefined,
		},
		/**
		 * [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
		 * @values h1, h2, h3, h4, h5, h6, p, span, div, li
		 */
		element: {
			type: String,
			default: undefined,
			validator: (element) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'li'].includes(element),
		},
		/**
		 * Size of text as step in fluid scale
		 * @values 7, 6, 5, 4, 3, 2, 1, 0, -1, -2
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
		 * [Color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
		 */
		color: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
		/**
		 * [Font style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
		 * @values inherit, normal, italic
		 */
		fontStyle: {
			type: String,
			default: undefined,
			validator: cssValidator('font-style'),
		},
		/**
		 * [Text transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
		 * @values inherit, none, uppercase, lowercase, capitalize
		 */
		textTransform: {
			type: String,
			default: undefined,
			validator: cssValidator('text-transform'),
		},
		/**
		 * [Text align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
		 * @values inherit, left, right, center, start, end
		 */
		textAlign: {
			type: String,
			default: undefined,
			validator: cssValidator('text-align'),
		},
	},

	computed: {
		...resolveThemeableProps('text', [
			'pattern',
			'element',
			'size',
			'fontFamily',
			'fontWeight',
			'color',
			'fontStyle',
			'textTransform',
			'textAlign',
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
			if (this.size >= minNonNegativeSize) {
				return `maker-step-${this.size.toString()}`;
			}
			return `maker-step-minus${this.size}`;
		},
		inlineStyles() {
			const styles = {
				fontSize: this.fontSize,
				lineHeight: this.lineHeight,
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
			if (this.resolvedTextAlign !== 'inherit') {
				styles.textAlign = this.resolvedTextAlign;
			}
			return styles;
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
				sizeClass,
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
}
</style>
