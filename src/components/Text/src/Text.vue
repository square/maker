<script>
import { MThemeKey, defaultTheme } from '@square/maker/components/Theme';

const MIN_SIZE = -2;
const MAX_SIZE = 7;
const MIN_WEIGHT = 100;
const MAX_WEIGHT = 900;

/**
 * @inheritAttrs p
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
		 * HTML Element wrapper
		 */
		element: {
			type: String,
			default: 'p',
			validator: (element) => ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div', 'li'].includes(element),
		},
		/**
		 * Size of text
		 * @values 7, 6, 5, 4, 3, 2, 1, 0, -1, -2
		 */
		size: {
			type: Number,
			default: undefined,
			validator: (size) => size >= MIN_SIZE && size <= MAX_SIZE,
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
			validator: (fontWeight) => fontWeight >= MIN_WEIGHT && fontWeight <= MAX_WEIGHT,
		},
		/**
		 * Font size, as a valid CSS value. This overrides the 'size' prop, and disables type scaling.
		 */
		fontSize: {
			type: String,
			default: undefined,
		},
		/**
		 * Line Height, as a valid CSS value. This overrides the internally calculated line-height.
		 */
		lineHeight: {
			type: Number,
			default: undefined,
		},
		/**
		 * Color
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color}
		 */
		color: {
			type: String,
			default: undefined,
			validator: (color) => {
				// CSS not defined when rendering server-side
				if (global.CSS) {
					return global.CSS.supports('color', color);
				}
				return true;
			},
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
		/**
		 * text align
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-align}
		 */
		textAlign: {
			type: String,
			default: 'inherit',
			validator: (textAlign) => ['inherit', 'left', 'right', 'center'].includes(textAlign),
		},
		/**
		 * Variant - allows four custom font styles through the Theme component
		 * @values body, title, headline, label
		 */
		variant: {
			type: String,
			default: 'body',
			validator: (variant) => ['body', 'title', 'headline', 'label'].includes(variant),
		},
	},

	computed: {
		sizeClass() {
			const minNonNegativeSize = 0;
			if (this.size >= minNonNegativeSize) {
				return `maker-step-${this.size.toString()}`;
			}
			return `maker-step-minus${this.size}`;
		},
		inlineStyles() {
			return {
				fontFamily: this.fontFamily,
				fontWeight: this.fontWeight,
				color: this.color,
				fontSize: this.fontSize,
				lineHeight: this.lineHeight,
			};
		},
	},

	render(createElement) {
		const {
			$s,
			variant,
			sizeClass,
			inlineStyles,
			fontStyle,
			textTransform,
			textAlign,
		} = this;
		/**
		 * @slot text content
		 */
		const defaultSlot = this.$slots.default;
		const element = this.element || 'p';

		return createElement(element, {
			class: [
				$s[`text_${variant}`],
				sizeClass,
				{
					[$s[`fontstyle_${fontStyle}`]]: fontStyle !== 'inherit',
					[$s[`texttransform_${textTransform}`]]: textTransform !== 'inherit',
					[$s[`textalign_${textAlign}`]]: textAlign !== 'inherit',
				},
			],
			attrs: this.$attrs,
			style: inlineStyles,
			on: this.$listeners,
		}, defaultSlot);
	},
};
</script>

<style module="$s">
/* Variant defaults */
.text_body,
.text_label {
	font-weight: var(--maker-fontWeights-body, 400);
	font-family: var(--maker-fonts-body, --system-font);
}

.text_title {
	margin: 0;
	color: var(--maker-colors-heading, #000);
	font-weight: var(--maker-fontWeights-heading, 600);
	font-family: var(--maker-fonts-heading, --system-font);
}

.text_headline {
	margin: 0;
	color: var(--maker-colors-heading, #000);
	font-weight: var(--maker-fontWeights-heading, 600);
	font-family: var(--maker-fonts-heading, --system-font);
}

.text_label {
	font-weight: var(--maker-fontWeights-label, var(--maker-fontWeights-body, 400));
	font-family: var(--maker-fonts-label, var(--maker-fonts-body, --system-font));
}

.fontstyle_normal {
	font-style: normal;
}

.fontstyle_italic {
	font-style: italic;
}

.texttransform_none {
	text-transform: none;
}

.texttransform_uppercase {
	text-transform: uppercase;
}

.textalign_left {
	text-align: left;
}

.textalign_right {
	text-align: right;
}

.textalign_center {
	text-align: center;
}

</style>
