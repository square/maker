<template>
	<m-touch-capture
		ref="dialog"
		:class="$s.Dialog"
		:style="style"
		:prevent-default="preventDefault"
		@on-drag-down="onDragDown"
		@on-drag-end="onDragEnd"
		@on-swipe-down="onSwipeDown"
	>
		<!-- @slot Dialog content -->
		<slot />
	</m-touch-capture>
</template>

<script>
import { colord } from 'colord';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import { MTouchCapture } from '@square/maker/components/TouchCapture';
import dialogApi from './dialog-api';

export default {
	name: 'Dialog',

	components: {
		MTouchCapture,
	},

	inject: {
		dialogApi,
		theme: {
			default: defaultTheme(),
			from: MThemeKey,
		},
	},

	props: {
		/**
		 * Background color of container
		 */
		bgColor: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid(),
		},
		/**
		 * Text color of container
		 */
		color: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid(),
		},
	},

	data() {
		return {
			dialogStyles: {},
			preventDefault: false,
		};
	},

	computed: {
		...resolveThemeableProps('dialog', ['bgColor', 'color']),

		style() {
			return {
				'--bg-color': this.resolvedBgColor,
				'--color': this.resolvedColor,
				...this.dialogStyles,
			};
		},
	},

	methods: {
		onSwipeDown() {
			this.preventDefault = true;
			this.dialogApi.close();
		},

		onDragDown(gesture) {
			this.preventDefault = true;
			this.dialogStyles = {
				transform: `translateY(${gesture.changeY}px)`,
				'backface-visibility': 'hidden',
				overflow: 'hidden',
				transition: 'none',
			};
		},

		onDragEnd(gesture) {
			// Pixels dialog must be dragged to close on release
			const minDragCloseDistance = 50;
			if (gesture.changeY > minDragCloseDistance) {
				this.dialogApi.close();
			} else {
				this.preventDefault = false;
				this.dialogStyles = {};
			}
		},
	},
};
</script>

<style module="$s">
.Dialog {
	overflow: auto;
	color: var(--color, inherit);
	background: var(--bg-color, #f5f6f7);
}

@media screen and (--for-tablet-landscape-up) {
	.Dialog {
		width: 400px;
		min-height: 180px;
		max-height: calc(100vh - 64px);
	}
}
</style>
