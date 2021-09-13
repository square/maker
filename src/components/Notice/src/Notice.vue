<template>
	<div
		:class="[
			$s.Notice,
			$s[`type_${type}`],
			$s[`variant_${variant}`],
		]"
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
	},

	computed: {
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
	font-family: inherit;
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
	--color: rgba(161, 39, 18, 1);
	--color-icon: rgba(206, 51, 22, 1);
	--color-bg: rgba(252, 235, 232, 1);
}

.type_warning {
	--color: rgba(77, 59, 0, 1);
	--color-icon: rgba(242, 189, 13, 1);
	--color-bg: rgba(252, 242, 207, 1);
}

.type_success {
	--color: rgba(8, 69, 8, 1);
	--color-icon: rgba(33, 172, 30, 1);
	--color-bg: rgba(233, 251, 233, 1);
}

.type_info {
	--color: rgba(24, 24, 24, 1);
	--color-icon: rgba(169, 169, 169, 1);
	--color-bg: rgba(241, 241, 241, 1);
}

.variant_block {
	padding: 16px;
	background-color: var(--color-bg);
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
	fill: var(--color-icon);
	stroke: white;
}
</style>
