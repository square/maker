<template>
	<m-touch-capture
		ref="modal"
		:class="$s.Modal"
		:style="style"
		:prevent-default="preventDefault"
		v-bind="$attrs"
		:aria-labelledby="ariaLabelledby"
		@scroll.native="onScroll"
		@on-drag-down="onDragDown"
		@on-drag-end="onDragEnd"
		@on-swipe-down="onSwipeDown"
		v-on="$listeners"
	>
		<!-- @slot Modal content -->
		<slot />
	</m-touch-capture>
</template>

<script>
import cssValidator from '@square/maker/utils/css-validator';
import { throttle } from 'lodash';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import { MTouchCapture } from '@square/maker/components/TouchCapture';
import modalApi from './modal-api';

export default {
	name: 'Modal',

	components: {
		MTouchCapture,
	},

	inject: {
		modalApi,
		theme: {
			default: defaultTheme(),
			from: MThemeKey,
		},
	},

	inheritAttrs: false,

	props: {
		/**
		 * Before close hook, can block closing
		 */
		beforeClose: {
			type: Function,
			default: undefined,
		},
		/**
		 * Background color of modal
		 */
		bgColor: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
		/**
		 * Text color of modal
		 */
		color: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},

		/**
		 * Toggle to allow swiping the dialog away
		 */
		closeOnSwipeDown: {
			type: Boolean,
			default: true,
		},

		/**
		 * The ID of the element that labels the modal.
		 */
		ariaLabelledby: {
			type: String,
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

	computed: {
		...resolveThemeableProps('modal', [
			'bgColor',
			'color',
		]),

		style() {
			return {
				'--bg-color': this.resolvedBgColor,
				'--color': this.resolvedColor,
				...this.modalStyles,
			};
		},
	},

	watch: {
		beforeClose: {
			immediate: true,
			handler(hook) {
				this.modalApi.registerBeforeCloseHook(hook);
			},
		},
	},

	methods: {
		setScrollTop() {
			if (!this.closeOnSwipeDown) {
				return;
			}

			const scrollTop = this.$refs?.modal?.$el?.scrollTop || 0;
			this.isScrolledToTop = scrollTop <= 0;
		},

		onSwipeDown() {
			if (!this.closeOnSwipeDown) {
				return;
			}

			if (this.isScrolledToTop) {
				this.preventDefault = true;
				this.modalApi.close();
			}
		},

		onDragDown(gesture) {
			if (!this.closeOnSwipeDown) {
				return;
			}

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
			if (!this.closeOnSwipeDown) {
				return;
			}

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
	overflow: auto;
	color: var(--color, $maker-color-body);
	background: var(--bg-color, $maker-color-background);
	transition: transform 0.2s linear;
}

@media screen and (--for-tablet-landscape-up) {
	.Modal {
		width: 600px;
		min-height: 180px;
		max-height: calc(100vh - 64px);
	}
}
</style>
