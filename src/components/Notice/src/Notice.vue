<template>
	<div
		:class="[
			$s.Notice,
			$s[`type_${type}`],
			$s[`variant_${variant}`],
		]"
		:style="style"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<div :class="$s.IconContentWrapper">
			<div :class="$s.IconAligner">
				<component
					:is="iconComponent"
					:class="$s.Icon"
					inline
				/>
			</div>
			<div>
				<!-- @slot notice content -->
				<slot />
			</div>
		</div>
		<div
			v-if="showActions"
			:class="$s.ActionsWrapper"
		>
			<!-- @slot put text buttons here -->
			<slot name="actions" />
		</div>
	</div>
</template>

<script>
import chroma from 'chroma-js';
import AlertTriangle from '@square/maker-icons/AlertTriangle';
import AlertCircle from '@square/maker-icons/AlertCircle';
import CheckCircle from '@square/maker-icons/CheckCircle';
import Info from '@square/maker-icons/Info';
import assert from '@square/maker/utils/assert';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	components: {
		AlertTriangle,
		AlertCircle,
		CheckCircle,
		Info,
	},

	inject: {
		theme: {
			default: defaultTheme(),
			from: MThemeKey,
		},
	},

	inheritAttrs: false,

	props: {
		/**
		 * type of notice
		 */
		type: {
			type: String,
			default: 'info',
			validator: (type) => ['error', 'success', 'warning', 'info'].includes(type),
		},
		/**
		 * notice variant
		 */
		variant: {
			type: String,
			default: 'inline',
			validator: (variant) => ['inline', 'block'].includes(variant),
		},
		/**
		 * notice color
		 */
		color: {
			type: String,
			default: undefined,
			validator: (color) => chroma.valid(color),
		},
	},

	computed: {
		...resolveThemeableProps('notice', ['color']),
		iconComponent() {
			if (this.type === 'error') {
				return AlertCircle;
			}
			if (this.type === 'success') {
				return CheckCircle;
			}
			if (this.type === 'warning') {
				return AlertTriangle;
			}
			return Info;
		},
		showActions() {
			return this.$slots.actions && this.variant === 'block';
		},
		style() {
			return {
				'--color': this.resolvedColor,
				'--color-icon': this.resolvedColor,
			};
		},
	},

	created() {
		assert.warn(!(this.variant === 'inline' && this.$slots.actions), 'inline Notices cannot have an actions slot');
	},
};
</script>

<style module="$s">
.Notice {
	color: var(--color);
	font-size: 14px;
	line-height: 24px;
	border-radius: 8px;
}

.IconContentWrapper {
	display: flex;
}

.ActionsWrapper {
	display: flex;
	justify-content: flex-end;
}

.ActionsWrapper > * {
	margin-right: 24px;
}

.ActionsWrapper > *:last-child {
	margin-right: 0;
}

.type_error {
	--color: #a12712;
	--color-icon: #d83e3b;
}

.type_warning {
	--color: #584400;
	--color-icon: #f2bd0d;
}

.type_success {
	--color: #035203;
	--color-icon: #1fad1f;
}

.variant_block {
	padding: 16px;
	background-color: var(--neutral-10, rgba(238, 93, 93, 0.1));
}

.type_info {
	--color: var(--neutral-80, rgba(24, 24, 24, 1));
	--color-icon: var(--neutral-90, rgba(24, 24, 24, 1));
}

.IconAligner {
	display: flex;
	align-items: center;
	height: 24px;
	margin-right: 8px;
}

.Icon {
	width: 16px;
	height: 16px;
	fill: transparent;
	stroke: var(--color-icon);
}
</style>
