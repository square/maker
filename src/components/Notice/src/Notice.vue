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
				<m-icon
					:name="finalIconName"
					:class="$s.Icon"
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
import assert from '@square/maker/utils/assert';
import cssValidator from '@square/maker/utils/css-validator';
import { MIcon } from '@square/maker/components/Icon';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	components: {
		MIcon,
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
		 * name of icon, defined in theme
		 */
		iconName: {
			type: String,
			default: undefined,
		},
		/**
		 * icon color
		 */
		iconColor: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
		/**
		 * text color for inline notices
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
			'iconName',
			'iconColor',
			'color',
			'bgColor',
		]),
		finalIconName() {
			if (this.resolvedIconName) {
				return this.resolvedIconName;
			}
			if (this.resolvedType === 'error') {
				return 'critical';
			}
			if (this.resolvedType === 'success') {
				return 'success';
			}
			if (this.resolvedType === 'warning') {
				return 'warning';
			}
			return 'info';
		},
		showActions() {
			return this.$slots.actions && this.variant === 'block';
		},
		style() {
			const textColor = this.variant === 'inline'
				? this.resolvedColor
				: 'var(--maker-color-neutral-90, #1b1b1b)';
			return {
				'--color': textColor,
				'--color-icon': this.resolvedIconColor,
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
	color: var(--color-icon);
}

.ActionsWrapper > *:last-child {
	margin-right: 0;
}

.type_error {
	--color: #a82826;
	--color-icon: #cd2026;
	--color-bg: #f6eceb;
}

.type_warning {
	--color: #7e662a;
	--color-icon: #ffbf00;
	--color-bg: #f9eecf;
}

.type_success {
	--color: #0a7a06;
	--color-icon: #008000;
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
