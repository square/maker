<template>
	<div
		:class="$s.Modal"
		:style="modalStyles"
	>
		<template v-if="$slots.dismiss">
			<m-touch-capture
				:class="$s.DismissMobile"
				@on-drag-down="onDragDown"
				@on-drag-end="onDragEnd"
				@on-swipe-down="onSwipeDown"
			>
				<slot name="dismiss" />
			</m-touch-capture>
			<div :class="$s.DismissDesktop">
				<slot name="dismiss" />
			</div>
		</template>
		<!-- @slot Modal content -->
		<slot />
		<m-touch-capture
			v-if="!$slots.dismiss"
			:class="$s.Dismiss"
			@on-drag-down="onDragDown"
			@on-drag-end="onDragEnd"
			@on-swipe-down="onSwipeDown"
		/>
	</div>
</template>

<script>
import { MTouchCapture } from '@square/maker/components/TouchCapture';
import modalApi from './modal-api';

export default {
	name: 'Modal',

	components: {
		MTouchCapture,
	},

	inject: {
		modalApi,
	},

	props: {
		/**
		 * Before close hook, can block closing
		 */
		beforeClose: {
			type: Function,
			required: false,
			default: undefined,
		},
	},

	data() {
		return {
			modalStyles: {},
		};
	},

	watch: {
		beforeClose: {
			immediate: true,
			handler(hook) {
				this.modalApi.state.options.beforeCloseHook = hook;
			},
		},
	},

	methods: {
		onSwipeDown() {
			this.modalApi.close();
		},

		onDragDown(gesture) {
			const transform = `translateY(${gesture.changeY}px)`;
			this.modalStyles = {
				transform,
				'backface-visibility': 'hidden',
				overflow: 'hidden',
			};
		},

		onDragEnd(gesture) {
			const minDragCloseDistance = 100;
			if (gesture.changeY > minDragCloseDistance) {
				this.modalApi.close();
			} else {
				this.modalStyles = {};
			}
		},
	},
};
</script>

<style module="$s">
.Modal {
	height: 100%;
	overflow: scroll;
	background: #f5f6f7;
	transition: transform 0.2s linear;
}

@media screen and (max-width: 839px) {
	.Dismiss {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100px;
	}

	.DismissDesktop {
		display: none;
	}
}

@media screen and (min-width: 840px) {
	.Modal {
		width: 600px;
		min-height: 180px;
		max-height: calc(100vh - 64px);
	}

	.DismissMobile {
		display: none;
	}
}
</style>
