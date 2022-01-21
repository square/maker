<script>
import chroma from 'chroma-js';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

const sizeToTag = Object.freeze({
	small: 'h6',
	medium: 'h5',
	large: 'h4',
	xlarge: 'h3',
	xxlarge: 'h2',
	headline: 'h1',
});

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
			type: String,
			default: undefined,
			validator: (size) => ['small', 'medium', 'large', 'xlarge', 'xxlarge', 'headline'].includes(size),
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
			return sizeToTag[this.resolvedSize];
		},
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
			tag,
			inlineStyles,
		} = this;
		/**
		 * @slot heading content
		 */
		const defaultSlot = this.$slots.default;
		return createElement(tag, {
			class: [$s.Heading, $s[`size_${resolvedSize}`]],
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
	line-height: 1.5em;

	/* heading - small, text - small */
	--font-step-minus-1-size: calc(var(--font-step-0-size) / var(--font-size-scale));

	/* heading - medium, text - medium */
	--font-step-0-size: var(--font-size);

	/* text - large */
	--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));

	/* heading - large */
	--font-step-2-size: calc(var(--font-step-1-size) * var(--font-size-scale));

	/* skipped step */
	--font-step-3-size: calc(var(--font-step-2-size) * var(--font-size-scale));

	/* heading - xlarge */
	--font-step-4-size: calc(var(--font-step-3-size) * var(--font-size-scale));

	/* skipped step */
	--font-step-5-size: calc(var(--font-step-4-size) * var(--font-size-scale));

	/* heading - xxlarge */
	--font-step-6-size: calc(var(--font-step-5-size) * var(--font-size-scale));

	/* skipped steps */
	--font-step-7-size: calc(var(--font-step-6-size) * var(--font-size-scale));
	--font-step-8-size: calc(var(--font-step-7-size) * var(--font-size-scale));

	/* heading - headline */
	--font-step-9-size: calc(var(--font-step-8-size) * var(--font-size-scale));
}

.Heading.size_small {
	font-size: var(--font-step-minus-1-size);
}

.Heading.size_medium {
	font-size: var(--font-step-0-size);
}

.Heading.size_large {
	font-size: var(--font-step-2-size);
}

.Heading.size_xlarge {
	font-size: var(--font-step-4-size);
}

.Heading.size_xxlarge {
	font-size: var(--font-step-6-size);
}

.Heading.size_headline {
	font-size: var(--font-step-9-size);
}
</style>
