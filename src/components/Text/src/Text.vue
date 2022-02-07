<script>
import chroma from 'chroma-js';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

const MIN_SIZE = -1;
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
		...resolveThemeableProps('text', ['size', 'fontFamily', 'textColor', 'weight']),
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
				'--mobile-base-font-size': fonts.baseSize,
				'--mobile-font-size-scale': fonts.sizeScale,
				'--mobile-base-line-height': fonts.baseLineHeight,
				'--mobile-line-height-scale': fonts.lineHeightScale,
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
	--font-size: var(--mobile-base-font-size);
	--font-size-scale: var(--mobile-font-size-scale);
	--line-height: var(--mobile-base-line-height);
	--line-height-scale: var(--mobile-line-height-scale);

	/* derived minus sizes */
	--font-step-minus-1-size: max(14px, calc(var(--font-step-0-size) / var(--font-size-scale)));
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
}

@media (min-width: 600px) {
	.Paragraph {
		--font-size-scale: calc(var(--mobile-font-size-scale) + 0.13);
	}
}

.Paragraph.size_minus-1 {
	font-size: var(--font-step-minus-1-size);
	line-height: var(--font-ste-minus-1-line-height);
}

.Paragraph.size_0 {
	font-size: var(--font-step-0-size);
	line-height: var(--font-step-0-line-height);
}

.Paragraph.size_1 {
	font-size: var(--font-step-1-size);
	line-height: var(--font-step-1-line-height);
}
</style>
