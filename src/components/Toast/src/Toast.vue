<template>
	<m-bread
		:class="$s.Toast"
		:persistent="resolvedPersistent"
		:dismiss-after="resolvedDismissAfter"
		:style="style"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<div :class="$s.ToastContent">
			<m-icon
				:class="$s.Icon"
				:name="resolvedIconName"
			/>
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
import { colord } from 'colord';
import { MBread } from '@square/maker/components/Toast';
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
			validator: (color) => colord(color).isValid(),
		},
		/**
		 * toast icon color
		 */
		iconColor: {
			type: String,
			default: undefined,
			validator: (iconColor) => colord(iconColor).isValid(),
		},
		/**
		 * toast background color
		 */
		bgColor: {
			type: String,
			default: undefined,
			validator: (bgColor) => colord(bgColor).isValid(),
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
			'iconColor',
			'iconName',
		]),
		hasProgress() {
			return this.progress || this.progress === 0;
		},
		style() {
			const styles = {};
			if (this.resolvedIconColor) {
				styles['--toast-icon-color'] = this.resolvedIconColor;
			}
			if (this.resolvedBgColor) {
				styles['--toast-bg-color'] = this.resolvedBgColor;
			}
			if (this.resolvedColor) {
				styles['--toast-color'] = this.resolvedColor;
			}
			return styles;
		},
	},

	methods: {

	},
};
</script>

<style module="$s">
.Toast {
	width: 100%;
	max-width: 600px;
	background-color: var(--toast-bg-color);
}

.ToastContent {
	display: flex;
	gap: 16px;
	align-items: flex-start;
	padding: 16px;
}

.Icon,
.CloseIcon {
	flex-shrink: 0;
	height: 24px;
}

.Icon {
	color: var(--toast-icon-color);
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
</style>
