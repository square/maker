<script>
const DEFAULT_SIZE = 0;
const MAX_SIZE = 7;
const MIN_SIZE = -2;

/**
 * Heading
 * @inheritAttrs h1
 * @inheritListeners h1
 */
export default {
	inheritAttrs: false,

	props: {
		/**
		 * Size of heading. Influences which element is used.
		 */
		size: {
			type: Number,
			default: DEFAULT_SIZE,
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
	},

	computed: {
		tag() {
			if (this.element) {
				return this.element;
			}
			const h1Threshold = 4;
			const h2Threshold = 3;
			const h3Threshold = 2;
			const h4Threshold = 1;
			const h5Threshold = 0;
			if (this.size >= h1Threshold) {
				return 'h1';
			}
			if (this.size >= h2Threshold) {
				return 'h2';
			}
			if (this.size >= h3Threshold) {
				return 'h3';
			}
			if (this.size >= h4Threshold) {
				return 'h4';
			}
			if (this.size >= h5Threshold) {
				return 'h5';
			}
			return 'h6';
		},
		stringSize() {
			const minNonNegativeSize = 0;
			if (this.size >= minNonNegativeSize) {
				return this.size.toString();
			}
			return `minus-${Math.abs(this.size)}`;
		},
	},

	render(createElement) {
		const { $s, stringSize, tag } = this;
		return createElement(tag, {
			class: [$s.Heading, $s[`size_${stringSize}`]],
			attrs: this.$attrs,
			on: this.$listeners,
		}, this.$slots.default);
	},
};
</script>

<style module="$s">
:root {
	--font-size-scale: 1.17;
	--font-size: 16px;
	--line-height: 1.5em;
	--line-height-scale: 0.95;
}

@media (--for-tablet-portrait-up) {
	:root {
		--font-size-scale: 1.28;
		--font-size: 16px;
	}
}

/* stylelint-disable-next-line no-duplicate-selectors */
:root {
	--font-step-minus-2-size: 12px;
	--font-step-minus-2-line-height: var(--line-height);
	--font-step-minus-1-size: 14px;
	--font-step-minus-1-line-height: var(--line-height);
	--font-step-0-size: var(--font-size);
	--font-step-0-line-height: var(--line-height);
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
	--font-step-1-size: 19px; /* Override Step 1 - Calculated value was too large for body text */
}

.Heading {
	margin: 0;
	font-family: inherit;
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
