<script>
import chroma from 'chroma-js';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

const MAX_SIZE = 7;
const MIN_SIZE = -2;

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
	},

	computed: {
		...resolveThemeableProps('heading', ['size', 'textColor']),
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
			return {
				color: this.resolvedTextColor,
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
	color: var(--color-heading);
	font-weight: var(--font-weights-heading, bold);
	font-family: var(--font-heading, inherit);
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
</style>
