<template>
	<div
		:class="[
			$s.Notice,
			$s[`type_${resolvedType}`],
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
import AlertTriangle from '@square/maker-icons/AlertTriangle';
import AlertCircle from '@square/maker-icons/AlertCircle';
import CheckCircle from '@square/maker-icons/CheckCircle';
import Info from '@square/maker-icons/Info';
import assert from '@square/maker/utils/assert';
import cssValidator from '@square/maker/utils/css-validator';
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
		 * pattern defined at theme level
		 */
		pattern: {
			type: String,
			default: undefined,
		},
		/**
		 * type of notice
		 */
		type: {
			type: String,
			default: undefined,
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
		 * icon color & text color for inline notices
		 */
		color: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
		/**
		 * background color for block notices
		 */
		bgColor: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
	},

	computed: {
		...resolveThemeableProps('notice', [
			'pattern',
			'type',
			'color',
			'bgColor',
		]),
		iconComponent() {
			if (this.resolvedType === 'error') {
				return AlertCircle;
			}
			if (this.resolvedType === 'success') {
				return CheckCircle;
			}
			if (this.resolvedType === 'warning') {
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
				'--color-bg': this.resolvedBgColor,
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
	border-radius: var(--maker-shape-default-border-radius, 8px);
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

.IconAligner {
	display: flex;
	align-items: center;
	height: 24px;
	margin-right: 8px;
}

.Icon {
	width: 16px;
	height: 16px;
	stroke: var(--color-icon);
}

.ActionsWrapper > *:last-child {
	margin-right: 0;
}

.type_error {
	--color: #a12712;
	--color-icon: #d83e3b;
	--color-bg: #f6eceb;
}

.type_warning {
	--color: #584400;
	--color-icon: #f2bd0d;
	--color-bg: #f9eecf;
}

.type_success {
	--color: #035203;
	--color-icon: #1fad1f;
	--color-bg: #ebf1eb;
}

.type_info {
	--color: var(--maker-color-neutral-90, #1b1b1b);
	--color-icon: var(--maker-color-neutral-80, #707070);
	--color-bg: var(--maker-color-neutral-10, #f1f1f1);
}

.variant_block {
	padding: 16px;
	background-color: var(--color-bg);
}
</style>
