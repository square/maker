<template>
	<m-modal-container :class="$s.Container">
		<div
			ref="modal"
			:class="$s.Modal"
			v-on="listeners"
		>
			<!-- @slot Modal content -->
			<slot />
		</div>
	</m-modal-container>
</template>

<script>
import modalApi from './modal-api';
import MModalContainer from './ModalContainer.vue';

export default {
	components: {
		MModalContainer,
	},

	inject: {
		modalApi,
	},

	props: {
		disablePanDownClose: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			touchStartFrom: undefined,
			isMobile: false,
		};
	},

	computed: {
		listeners() {
			if (this.disablePanDownClose) {
				return {};
			}
			return {
				touchstart: this.onTouchstart,
			};
		},
	},

	methods: {
		onTouchstart(event) {
			const [touch] = event.touches;
			const { clientX, clientY } = touch;

			// Attempt to prevent swipe-right navigation gesture to navigate back history
			if (clientX < 10 || clientX > window.innerWidth - 10) {
				event.preventDefault();
				return;
			}

			if (this.$refs.modal.scrollTop === 0) {
				this.touchStartFrom = clientY;
				this.onPanDown();
			}
		},

		onTouchmove({ touches }) {
			let deltaY = touches[0].clientY - this.touchStartFrom;
			const { modal } = this.$refs;

			if (deltaY < 0) {
				modal.style.transform = '';
				modal.style.overflow = '';
			} else {
				// Exponentially make it harder to pull down, like iOS
				deltaY **= 0.9;
				modal.style.transform = `translateY(${deltaY}px)`;

				// Prevents the iOS Safari elastic stretch when dragging down
				modal.style.overflow = 'hidden';
			}
		},

		onPanDown() {
			const { modal } = this.$refs;

			modal.addEventListener('touchmove', this.onTouchmove, { passive: true });

			document.addEventListener('touchend', ({ changedTouches }) => {
				modal.removeEventListener('touchmove', this.onTouchmove);

				const deltaY = changedTouches[0].clientY - this.touchStartFrom;
				if (deltaY > 200) {
					this.modalApi.close();
				} else {
					modal.style.transform = '';
					modal.style.overflow = '';
				}
			}, { once: true });
		},
	},
};
</script>

<style module="$s">
.Container {
	position: relative;
	overflow: hidden;
}

.Modal {
	height: 100%;
	overflow: scroll;
	background: #f5f6f7;
}

@media screen and (min-width: 1200px) {
	.Container {
		border-radius: 8px;
		box-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);
	}

	.Modal {
		width: 600px;
		max-height: calc(100vh - 48px);
	}
}
</style>
