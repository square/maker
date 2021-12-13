<template>
	<m-touch-capture
		ref="modal"
		:class="$s.Modal"
		:style="modalStyles"
		:prevent-default="preventDefault"
		@scroll.native="onScroll"
		@on-drag-down="onDragDown"
		@on-drag-end="onDragEnd"
		@on-swipe-down="onSwipeDown"
	>
		<slot />
	</m-touch-capture>
</template>

<script>
import { throttle } from 'lodash';
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
		const scrollCheckDelay = 800;
		return {
			modalStyles: {},
			isScrolledToTop: true,
			onScroll: throttle(this.setScrollTop, scrollCheckDelay),
			preventDefault: false,
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
		setScrollTop() {
			if (this.$refs.modal.$el) {
				this.isScrolledToTop = this.$refs.modal.$el.scrollTop <= 0;
			}
		},

		onSwipeDown() {
			if (this.isScrolledToTop) {
				this.preventDefault = true;
				this.modalApi.close();
			}
		},

		onDragDown(gesture) {
			if (this.isScrolledToTop) {
				this.preventDefault = true;
				const transform = `translateY(${gesture.changeY}px)`;
				this.modalStyles = {
					transform,
					'backface-visibility': 'hidden',
					overflow: 'hidden',
					transition: 'none',
				};
			}
		},

		onDragEnd(gesture) {
			// percent of window height modal must be dragged to close on release
			const minDragCloseDistance = 0.3;
			const minDragThreshold = window.innerHeight * minDragCloseDistance;
			if (this.isScrolledToTop
			&& gesture.changeY > minDragThreshold) {
				this.modalApi.close();
			} else {
				this.preventDefault = false;
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

@media screen and (min-width: 840px) {
	.Modal {
		width: 600px;
		min-height: 180px;
		max-height: calc(100vh - 64px);
	}
}
</style>
