<script>
import chroma from 'chroma-js';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

const MIN_SIZE = -1;
const MAX_SIZE = 1;

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
	},

	computed: {
		...resolveThemeableProps('text', ['size', 'fontFamily', 'textColor']),
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

	/* derived minus scales */
	--minus-font-size-scale: calc(2 - var(--font-size-scale));
	--minus-line-height-scale: calc(2 - var(--line-height-scale));

	/* derived minus sizes */
	--font-step-minus-2-size: calc(var(--font-step-minus-1-size) * var(--minus-font-size-scale));
	--font-step-minus-2-line-height:
		calc(
			var(--font-step-mins-1-line-height) * var(--minus-line-height-scale)
		);
	--font-step-minus-1-size: calc(var(--font-step-0-size) * var(--minus-font-size-scale));
	--font-step-minus-1-line-height:
		calc(
			var(--font-step-0-line-height) * var(--mins-line-height-scale)
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
}

@media (min-width: 600px) {
	.Paragraph {
		--font-size: var(--desktop-base-font-size);
		--font-size-scale: var(--desktop-font-size-scale);
		--line-height: var(--desktop-base-line-height);
		--line-height-scale: var(--desktop-line-height-scale);
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
