<script>
import chroma from 'chroma-js';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

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
			type: String,
			default: undefined,
			validator: (size) => ['small', 'medium', 'large'].includes(size),
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
		inlineStyles() {
			const { fonts } = this.theme;
			return {
				fontFamily: this.resolvedFontFamily,
				color: this.resolvedTextColor,
				fontWeight: this.resolvedWeight,
				'--font-size': fonts.baseSize,
				'--font-size-scale': fonts.sizeScale,
			};
		},
	},

	render(createElement) {
		const {
			$s,
			resolvedSize,
			element,
			inlineStyles,
		} = this;
		/**
		 * @slot text content
		 */
		const defaultSlot = this.$slots.default;
		return createElement(element, {
			class: [$s.Paragraph, $s[`size_${resolvedSize}`]],
			attrs: this.$attrs,
			style: inlineStyles,
			on: this.$listeners,
		}, defaultSlot);
	},
};
</script>

<style module="$s">
.Paragraph {
	line-height: 1.5em;

	/* heading - small, text - small */
	--font-step-minus-1-size: max(12px, calc(var(--font-step-0-size) / var(--font-size-scale)));

	/* heading - medium, text - medium */
	--font-step-0-size: var(--font-size);

	/* text - large */
	--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));
}

.Paragraph.size_small {
	font-size: var(--font-step-minus-1-size);
}

.Paragraph.size_medium {
	font-size: var(--font-step-0-size);
}

.Paragraph.size_large {
	font-size: var(--font-step-1-size);
}
</style>
