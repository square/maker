<template>
	<section
		:class="[
			$s.Section,
			$s[`height_${height}`],
			$s[`horizontalAlign_${horizontalAlign}`],
		]"
		v-bind="$attrs"
		:style="style"
		v-on="$listeners"
	>
		<!-- @slot section content -->
		<div
			:class="[
				$s.ContentWrapper,
				$s[`contentWidth_${contentWidth}`],
			]"
		>
			<slot />
		</div>
	</section>
</template>

<script>
import chroma from 'chroma-js';

/**
 * @inheritAttrs section
 * @inheritListeners section
 */
export default {
	inheritAttrs: false,

	props: {
		/**
		 * Section height
		 */
		height: {
			type: String,
			default: 'medium',
			validator: (height) => ['small', 'medium', 'large'].includes(height),
		},
		/**
		 * Section custom height
		 */
		customHeight: {
			type: String,
			default: undefined,
		},
		/**
		 * Content Width
		 */
		contentWidth: {
			type: String,
			default: 'medium',
			validator: (contentWidth) => ['small', 'medium', 'large'].includes(contentWidth),
		},
		/**
		 * Horizontal content alignment
		 */
		horizontalAlign: {
			type: String,
			default: 'center',
			validator: (horizontalAlign) => ['left', 'center', 'right'].includes(horizontalAlign),
		},
		/**
		 * Vertical content alignment
		 */
		verticalAlign: {
			type: String,
			default: 'middle',
			validator: (verticalAlign) => ['top', 'middle', 'bottom'].includes(verticalAlign),
		},
		/**
		 * Background image for section
		 */
		backgroundImage: {
			type: String,
			default: undefined,
		},
		/**
		 * Background image width setting
		 */
		backgroundWidth: {
			type: String,
			default: 'full-bleed',
			validator: (backgroundWidth) => ['full-bleed', 'inset'].includes(backgroundWidth),
		},
		/**
		 * Background color of section
		 */
		color: {
			type: String,
			default: undefined,
			validator: (color) => chroma.valid(color),
		},
		/**
		 * Text color of section
		 */
		textColor: {
			type: String,
			default: undefined,
			validator: (color) => chroma.valid(color),
		},
	},

	computed: {
		style() {
			return {
				'--bg-color': this.color,
				'--text-color': this.textColor,
				backgroundImage: `url(${ this.backgroundImage })`,
				height: this.customHeight,
				minHeight: this.customHeight,
			};
		},
	},
};
</script>

<style module="$s">
.Section {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	align-items: center;
	padding: 3.5vh 6vh;
	color: var(--profile-color, var(--text-color, #000));
	background: var(--profile-bg, var(--bg-color, #fff));
	background-repeat: no-repeat;
	background-position: 50% 50%;
	background-size: cover;
}

.height_small {
	min-height: auto;
}

.height_medium {
	min-height: 35vh;
}

.height_large {
	min-height: 45vh;
}

.horizontalAlign_left {
	justify-items: start;
}

.horizontalAlign_center {
	justify-items: center;
}

.horizontalAlign_right {
	justify-items: end;
}

.ContentWrapper {
	max-width: 1000px;
}

.contentWidth_small {
	width: 50%;
}

.contentWidth_medium {
	width: 75%;
}

.contentWidth_large {
	width: 100%;
}
</style>
