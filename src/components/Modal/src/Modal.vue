<template>
	<m-touch-capture
		ref="modal"
		:class="$s.Modal"
		:style="style"
		:prevent-default="preventDefault"
		@scroll.native="onScroll"
		@on-drag-down="onDragDown"
		@on-drag-end="onDragEnd"
		@on-swipe-down="onSwipeDown"
	>
		<!-- @slot Modal content -->
		<slot />
	</m-touch-capture>
</template>

<script>
import { colord } from 'colord';
import { throttle } from 'lodash';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import { MTouchCapture } from '@square/maker/utils/TouchCapture';
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

	props: {
		/**
		 * Before close hook, can block closing
		 */
		beforeClose: {
			type: Function,
			required: false,
			default: undefined,
		},
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
		const scrollCheckDelay = 800;
		return {
			modalStyles: {},
			isScrolledToTop: true,
			onScroll: throttle(this.setScrollTop, scrollCheckDelay),
			preventDefault: false,
		};
	},

	computed: {
		...resolveThemeableProps('modal', ['bgColor', 'color']),

		style() {
			return {
				'--bg-color': this.resolvedBgColor,
				'--color': this.resolvedColor,
				...this.modalStyles,
			};
		},

		scrollTop() {
			return this.$refs.modal && this.$refs.modal.$el
				? this.$refs.modal.$el.scrollTop : 0;
		},
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
			this.isScrolledToTop = this.scrollTop <= 0;
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
	overflow: auto;
	color: var(--color, inherit);
	background: var(--bg-color, #f5f6f7);
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
