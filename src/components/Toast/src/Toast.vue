<template>
	<m-bread
		:class="$s.Toast"
		:persistent="persistent"
		:dismiss-after="dismissAfter"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<div :class="$s.ToastContent">
			<m-icon
				:class="$s.Icon"
				:name="iconName"
			/>
			<div :class="$s.TextAndActions">
				<m-text
					element="span"
					:class="$s.Text"
				>
					{{ text }}
				</m-text>
				<div :class="$s.Actions">
					<m-text-button
						v-for="action in actions"
						:key="action.text"
						size="large"
						@click="action.click"
					>
						{{ action.text }}
					</m-text-button>
				</div>
			</div>
			<div
				:class="$s.ToastClose"
				@click="toastApi.closeSelf"
			>
				<m-icon
					:class="$s.Icon"
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
	},

	inject: {
		toastApi,
	},

	inheritAttrs: false,

	props: {
		/**
		 * make toast persistent (no auto-dismiss)
		 */
		persistent: {
			type: Boolean,
			default: false,
		},
		/**
		 * auto-dismiss after x milliseconds (ignored if persistent)
		 */
		dismissAfter: {
			type: Number,
			default: 5000,
		},
		/**
		 * name of icon to show
		 */
		iconName: {
			type: String,
			default: 'info',
		},
		/**
		 * toast text content
		 */
		text: {
			type: String,
			default: 'default text',
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
		 * toast text, icon, & button color
		 */
		color: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid(),
		},
		/**
		 * toast background color
		 */
		bgColor: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid(),
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
		hasProgress() {
			return this.progress || this.progress === 0;
		},
	},

	methods: {
		yell() {
			console.log("FOR THE LOVE OF GOD!!");
		},
	},
};
</script>

<style module="$s">
.Toast {
	width: 100%;
	max-width: 600px;
}

.ToastContent {
	padding: 16px;
	display: flex;
	gap: 16px;
	align-items: flex-start;
}

.ToastBody {

}

.Icon {
	height: 24px;
	flex-shrink: 0;
}

.ToastClose {
	cursor: pointer;
	height: 24px;
	flex-shrink: 0;
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

}
</style>
