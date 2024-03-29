<template>
	<section
		:class="[
			$s.Container,
			$s[`size_${size}`],
		]"
		v-bind="$attrs"
		:style="style"
		v-on="$listeners"
	>
		<header
			v-if="hasHeaderContent"
			:class="$s.Header"
		>
			<div
				v-if="hasLabel"
				:class="$s.Label"
			>
				<!-- @slot container label -->
				<slot name="label">
					{{ label }}
				</slot>
				<div
					v-if="hasSublabel"
					:class="$s.Sublabel"
				>
					<!-- @slot container sublabel -->
					<slot name="sublabel">
						{{ sublabel }}
					</slot>
				</div>
			</div>

			<div
				v-if="hasRequirementLabel"
				:class="$s.RequirementLabel"
			>
				<!-- @slot container requirement label -->
				<slot name="requirement-label">
					{{ requirementLabel }}
				</slot>
			</div>
		</header>

		<!-- @slot container content -->
		<slot />
	</section>
</template>

<script>
import { colord } from 'colord';
import assert from '@square/maker/utils/assert';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import cssValidator from '@square/maker/utils/css-validator';

/**
 * @inheritAttrs section
 * @inheritListeners section
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
		 * Container label
		 */
		label: {
			type: String,
			default: undefined,
		},
		/**
		 * Container sublabel
		 */
		sublabel: {
			type: String,
			default: undefined,
		},
		/**
		 * Container requirement label
		 */
		requirementLabel: {
			type: String,
			default: undefined,
		},
		/**
		 * Container size
		 */
		size: {
			type: String,
			default: 'medium',
			validator: (size) => ['small', 'medium', 'large'].includes(size),
		},
		/**
		 * Background color of container
		 */
		bgColor: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid() || color === 'transparent',
		},
		/**
		 * Text color of container
		 */
		color: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid(),
		},
		/**
		 * Padding of the container
		 */
		padding: {
			type: String,
			default: '16px 24px',
			validator: cssValidator('padding'),
		},
	},

	computed: {
		...resolveThemeableProps('container', [
			'bgColor',
			'color',
		]),
		style() {
			return {
				'--bg-color': this.resolvedBgColor,
				'--color': this.resolvedColor,
				'--padding': this.padding,
			};
		},
		hasLabel() {
			return this.$slots.label || this.label;
		},
		hasSublabel() {
			return this.$slots.sublabel || this.sublabel;
		},
		hasRequirementLabel() {
			return this.$slots.requirementLabel || this.$slots['requirement-label'] || this.requirementLabel;
		},
		hasHeaderContent() {
			return this.hasLabel || this.hasSublabel || this.hasRequirementLabel;
		},
	},

	mounted() {
		assert.warn(!(this.$slots.label && this.label), 'Label slot cannot be used together with label prop, former overrides the latter.', 'Container');
		assert.warn(!(this.$slots.sublabel && this.sublabel), 'Sublabel slot cannot be used together with sublabel prop, former overrides the latter.', 'Container');
		assert.warn(!((this.$slots.requirementLabel || this.$slots['requirement-label']) && this.requirementLabel), 'Requirement Label slot cannot be used together with requirement label prop, former overrides the latter.', 'Container');
	},
};
</script>

<style module="$s">
.Container {
	padding: var(--padding);
	background-color: var(--bg-color, inherit);
}

.Label {
	margin-bottom: 16px;
	color: var(--color, $maker-color-heading);
	font-weight: $maker-font-heading-font-weight;
	font-size: 14px;
	font-family: $maker-font-heading-font-family;
	line-height: 20px;
}

.size_small {
	& .Label {
		font-size: 12px;
		line-height: 20px;
		letter-spacing: 0.5px;
		text-transform: uppercase;
	}
}

.size_medium {
	& .Label {
		font-size: 14px;
		line-height: 20px;
	}
}

.size_large {
	& .Label {
		font-size: 24px;
		line-height: 32px;
	}
}

.Sublabel {
	color: var(--color, $maker-color-body);
	font-weight: $maker-font-body-font-weight;
	font-size: 14px;
	font-family: $maker-font-body-font-family;
	line-height: 24px;
	letter-spacing: normal;
	text-transform: none;
}

.RequirementLabel {
	padding-left: 8px;
	color: var(--color, inherit);
	font-size: 14px;
	line-height: 24px;
	white-space: nowrap;
}

.Header {
	display: flex;
	justify-content: space-between;
	font-size: 14px;
}
</style>
