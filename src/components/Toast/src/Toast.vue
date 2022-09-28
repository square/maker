<template>
	<m-bread
		:class="[
			$s.Toast,
			{
				[$s.EnhanceContrast]: enhanceContrast,
			},
		]"
		:persistent="resolvedPersistent"
		:dismiss-after="resolvedDismissAfter"
		:style="style"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<div :class="$s.ToastContent">
			<div
				v-if="resolvedShowIcon"
				:class="$s.IconContainer"
			>
				<!-- @slot icon slot, prefer using iconName prop tho -->
				<slot name="icon">
					<m-icon
						:name="resolvedIconName"
					/>
				</slot>
			</div>
			<div :class="$s.TextAndActions">
				<m-text
					element="span"
					:class="$s.Text"
					:color="resolvedColor"
				>
					{{ text }}
				</m-text>
				<div :class="$s.Actions">
					<template
						v-for="(action, index) in actions"
					>
						<m-text-button
							:key="action.text + 'button'"
							size="large"
							:color="resolvedColor"
							@click="action.click"
						>
							{{ action.text }}
						</m-text-button>
						<m-vertical-divider
							v-if="index !== actions.length - 1"
							:key="action.text + 'divider'"
							:class="$s.ActionDivider"
							:style="dividerStyle"
						/>
					</template>
				</div>
			</div>
			<div
				:class="$s.ToastClose"
				@click="toastApi.closeSelf"
			>
				<m-icon
					:class="$s.CloseIcon"
					name="close"
				/>
			</div>
		</div>
		<m-progress-bar
			v-if="hasProgress"
			shape="squared"
			size="xsmall"
			:class="$s.ToastProgressBar"
			:color="resolvedAccentColor"
			:progress="progress"
		/>
	</m-bread>
</template>

<script>
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import { MVerticalDivider } from '@square/maker/components/VerticalDivider';
import { MProgressBar } from '@square/maker/components/ProgressBar';
import { MTextButton } from '@square/maker/components/TextButton';
import { MIcon } from '@square/maker/components/Icon';
import { MText } from '@square/maker/components/Text';
import cssValidator from '@square/maker/utils/css-validator';
import MBread from './Bread.vue';
import toastApi from './toast-api';

const MIN_PROGRESS = 0;
const MAX_PROGRESS = 100;

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	components: {
		MBread,
		MIcon,
		MProgressBar,
		MTextButton,
		MText,
		MVerticalDivider,
	},

	inject: {
		toastApi,
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
		 * make toast persistent (no auto-dismiss)
		 */
		persistent: {
			type: Boolean,
			default: undefined,
		},
		/**
		 * auto-dismiss after x milliseconds (ignored if persistent)
		 */
		dismissAfter: {
			type: Number,
			default: undefined,
		},
		/**
		 * name of icon to show
		 */
		iconName: {
			type: String,
			default: undefined,
		},
		/**
		 * shows icon
		 */
		showIcon: {
			type: Boolean,
			default: undefined,
		},
		/**
		 * toast text content
		 */
		text: {
			type: String,
			default: '',
		},
		/**
		 * optional toast progress (0 - 100)
		 */
		progress: {
			type: Number,
			default: undefined,
			validator: (progress) => progress >= MIN_PROGRESS && progress <= MAX_PROGRESS,
		},
		/**
		 * toast text & button color
		 */
		color: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
		/**
		 * toast icon & progress color
		 */
		accentColor: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
		/**
		 * toast background color
		 */
		bgColor: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
		/**
		 * toast actions
		 */
		actions: {
			type: Array,
			default: () => [],
			validator(actions) {
				for (const action of actions) {
					if (!action.text || !action.click) {
						return false;
					}
				}
				return true;
			},
		},
	},

	computed: {
		...resolveThemeableProps('toast', [
			'pattern',
			'persistent',
			'dismissAfter',
			'color',
			'bgColor',
			'accentColor',
			'iconName',
			'showIcon',
		]),
		/**
		 * if the toast bg color is the same as the page bg color
		 * it's easy for the toast to get lost or blend into the
		 * page too much so we check for this condition and if it's
		 * true we enhance contrast by adding a subtle border to
		 * the toast
		 */
		enhanceContrast() {
			return this.resolvedBgColor === this.theme.colors.background;
		},
		hasProgress() {
			return this.progress || this.progress === 0;
		},
		style() {
			const styles = {};
			if (this.resolvedAccentColor) {
				styles['--toast-accent-color'] = this.resolvedAccentColor;
			}
			if (this.resolvedBgColor) {
				styles['--toast-bg-color'] = this.resolvedBgColor;
			}
			if (this.resolvedColor) {
				styles['--toast-color'] = this.resolvedColor;
			}
			return styles;
		},
		dividerStyle() {
			const styles = {};
			if (this.resolvedColor) {
				styles.backgroundColor = this.resolvedColor;
				styles.opacity = '0.4';
			}
			return styles;
		},
	},
};
</script>

<style module="$s">
/* toasts are full-width on mobile */
.Toast {
	box-sizing: border-box;
	width: 100%;
	background-color: var(--toast-bg-color);
}

/* toasts are 600px width on desktop */
@media screen and (--for-tablet-landscape-up) {
	.Toast {
		max-width: 600px;
	}
}

.EnhanceContrast {
	border: 1px solid var(--maker-color-neutral-10, #f1f1f1);
}

.ToastContent {
	display: flex;
	gap: 16px;
	align-items: flex-start;
	padding: 16px;
}

.IconContainer,
.CloseIcon {
	flex-shrink: 0;
	height: 24px;
}

.IconContainer {
	display: flex;
	align-items: center;
	color: var(--toast-accent-color);
}

.ToastClose {
	flex-shrink: 0;
	height: 24px;
	color: var(--toast-color);
	cursor: pointer;
}

.TextAndActions {
	display: flex;
	flex-grow: 1;
	flex-wrap: wrap;
	gap: 8px;
}

.Text {
	flex-grow: 1;
}

.Actions {
	display: flex;
	gap: 4px;
}

.ActionDivider {
	margin: 0 4px;
}

.ToastProgressBar {
	background-color: var(--toast-bg-color);
}
</style>
