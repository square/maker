<template>
	<m-touch-capture
		ref="dialog"
		:class="$s.Dialog"
		:style="style"
		:prevent-default="preventDefault"
		@scroll.native="onScroll"
		@on-drag-down="onDragDown"
		@on-drag-end="onDragEnd"
		@on-swipe-down="onSwipeDown"
	>
		<!-- @slot Dialog content -->
		<slot />
	</m-touch-capture>
</template>

<script>
import cssValidator from '@square/maker/utils/css-validator';
import { throttle } from 'lodash';
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
		 * Background color of dialog
		 */
		bgColor: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
		/**
		 * Text color of dialog
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
	},

	data() {
		const scrollCheckDelay = 800;
		return {
			dialogStyles: {},
			isScrolledToTop: true,
			onScroll: throttle(this.setScrollTop, scrollCheckDelay),
			preventDefault: false,
		};
	},

	computed: {
		...resolveThemeableProps('dialog', [
			'bgColor',
			'color',
		]),

		style() {
			return {
				'--bg-color': this.resolvedBgColor,
				'--color': this.resolvedColor,
				...this.dialogStyles,
			};
		},
	},

	methods: {
		setScrollTop() {
			if (!this.closeOnSwipeDown) {
				return;
			}

			const scrollTop = this.$refs?.dialog?.$el?.scrollTop || 0;
			this.isScrolledToTop = scrollTop <= 0;
		},

		onSwipeDown() {
			if (!this.closeOnSwipeDown) {
				return;
			}

			if (this.isScrolledToTop) {
				this.preventDefault = true;
				this.dialogApi.close();
			}
		},

		onDragDown(gesture) {
			if (!this.closeOnSwipeDown) {
				return;
			}

			if (this.isScrolledToTop) {
				this.preventDefault = true;
				this.dialogStyles = {
					transform: `translateY(${gesture.changeY}px)`,
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

			// Pixels dialog must be dragged to close on release
			const minDragCloseDistance = 50;
			if (this.isScrolledToTop
			&& gesture.changeY > minDragCloseDistance) {
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
	max-height: calc(100vh - 48px);
	overflow: auto;
	color: var(--color, $maker-color-body);
	background: var(--bg-color, $maker-color-background);
	border-radius:
		$maker-shape-default-border-radius
		$maker-shape-default-border-radius
		0 0;
	transition: transform 0.2s linear;
}

@media screen and (--for-tablet-landscape-up) {
	.Dialog {
		width: 400px;
		min-height: 180px;
		max-height: calc(100vh - 64px);
	}
}
</style>
