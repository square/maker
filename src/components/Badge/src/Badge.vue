<template>
	<span
		v-if="isInline"
		:class="classes"
		:style="styles"
	>
		{{ label }}
	</span>
	<vnode-syringe
		v-else
		:class&="classes"
		:style&="styles"
	>
		<!-- @slot content to position badge on -->
		<slot />
	</vnode-syringe>
</template>

<script>
import { colord } from 'colord';
import vnodeSyringe from 'vue-vnode-syringe';
import { getContrast } from '@square/maker/utils/get-contrast';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

export default {
	components: {
		vnodeSyringe,
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
		 * badge's label text
		 */
		label: {
			type: String,
			default: undefined,
		},
		/**
		 * badge's size
		 */
		size: {
			type: String,
			default: 'medium',
			validator: (size) => ['small', 'medium'].includes(size),
		},
		/**
		 * skip setting `position: relative` on default slot
		 */
		noRelative: {
			type: Boolean,
			default: false,
		},
		/**
		 * default slot's pseudo-element target
		 */
		pseudoTarget: {
			type: String,
			default: 'after',
			validator: (pseudo) => ['before', 'after'].includes(pseudo),
		},
		/**
		 * bg color, as a valid hex string
		 */
		bgColor: {
			type: String,
			default: undefined,
			// uses colord validator so that contrast can be checked
			validator: (color) => colord(color).isValid(),
		},
	},

	computed: {
		...resolveThemeableProps('badge', [
			'pattern',
			'bgColor',
		]),
		isNotificationDot() {
			return !this.label;
		},
		isInline() {
			return !this.$slots.default;
		},
		classes() {
			const classes = [];
			if (this.isNotificationDot) {
				classes.push(this.$s.NotificationDot);
			} else {
				classes.push(this.$s[`size_${this.size}`]);
			}
			if (this.isInline) {
				classes.push(this.$s.InlineBadge);
				return classes;
			}
			if (this.pseudoTarget === 'before') {
				classes.push(this.$s.BeforeBadge);
			} else {
				classes.push(this.$s.AfterBadge);
			}
			return classes;
		},
		styles() {
			const bgColor = this.resolvedBgColor || '#000';
			const textColor = getContrast(bgColor);
			const label = this.label || ' ';
			const quotedLabel = `'${label}'`;
			const styles = {
				'--badge-text-color': textColor,
				'--badge-bg-color': bgColor,
				'--badge-label': quotedLabel,
			};
			if (!this.isInline && !this.noRelative) {
				styles.position = 'relative';
			}
			return styles;
		},
	},
};
</script>

<style module="$s">
.InlineBadge,
.BeforeBadge::before,
.AfterBadge::after {
	display: inline-flex;
	align-items: center;
	color: var(--badge-text-color);
	font-weight: var(--maker-font-label-font-weight, 500);
	font-family: var(--maker-font-label-font-family, inherit);
	background-color: var(--badge-bg-color);
	border: 1px solid var(--maker-background-color, #fff);
	border-radius: 100px;
}

.size_medium.InlineBadge,
.size_medium.BeforeBadge::before,
.size_medium.AfterBadge::after {
	height: 24px;
	padding: 0 8px;
	font-size: 14px; /* TODO: refactor to font-size step -1 later? */
}

.size_small.InlineBadge,
.size_small.BeforeBadge::before,
.size_small.AfterBadge::after {
	height: 16px;
	padding: 0 4px;
	font-size: 12px; /* TODO: refactor to font-size step -2 later? */
}

.NotificationDot.InlineBadge,
.NotificationDot.BeforeBadge::before,
.NotificationDot.AfterBadge::after {
	width: 8px;
	height: 8px;
	padding: 0;
}

.BeforeBadge::before,
.AfterBadge::after {
	position: absolute;
	content: var(--badge-label);
}

.size_medium.BeforeBadge::before,
.size_medium.AfterBadge::after {
	top: -12px;
	right: 0;
	transform: translateX(50%);
}

.size_small.BeforeBadge::before,
.size_small.AfterBadge::after {
	top: -8px;
	right: 0;
	transform: translateX(50%);
}

.NotificationDot.BeforeBadge::before,
.NotificationDot.AfterBadge::after {
	top: -4px;
	right: -4px;
}
</style>
