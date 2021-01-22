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
</template>

<script>
import {
 ExclamationTriangleIcon, CheckIcon, AlertCircleIcon, CircleIcon,
} from '@square/orbit-icons';

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	components: {
		ExclamationTriangleIcon,
		CheckIcon,
		AlertCircleIcon,
		CircleIcon,
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
				return ExclamationTriangleIcon;
			}
			if (this.type === 'success') {
				return CheckIcon;
			}
			if (this.type === 'warning') {
				return AlertCircleIcon;
			}
			return CircleIcon;
		},
	},
};
</script>

<style module="$s">
.Notice {
	--font-family: "Square Market", system-ui;

	display: flex;
	color: var(--color);
	font-size: 14px;
	font-family: var(--font-family);
	line-height: 24px;
	border-radius: 8px;
}

.type_error {
	--color: rgba(255, 59, 48, 1);
	--color-bg: rgba(245, 239, 239, 1);
}

.type_warning {
	--color: rgba(255, 149, 0, 1);
	--color-bg: rgba(245, 243, 239, 1);
}

.type_success {
	--color: rgba(52, 199, 89, 1);
	--color-bg: rgba(239, 245, 241, 1);
}

.type_info {
	--color: hsl(0, 0%, 69%);
	--color-bg: hsl(0, 0%, 97%);
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
	fill: currentColor;
}
</style>
