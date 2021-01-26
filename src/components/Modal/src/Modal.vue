<script>
import assert from '@square/maker/utils/assert';
import modalApi from './modal-api';

// @vue/component
const Modal = {
	inject: {
		modalApi,
	},

	data() {
		return {
			touchStartFrom: undefined,
		};
	},

	destroyed() {
		if (this.closeRoutedModal) {
			this.closeRoutedModal();
		}
	},

	methods: {
		assertRootComponent() {
			// eslint-disable-next-line no-underscore-dangle
			const contextInnerNodes = this.$vnode.context._vnode;
			if (contextInnerNodes) { // doesn't exist in SSR
				assert.error(
					(
						contextInnerNodes.componentOptions
						&& contextInnerNodes.componentOptions.Ctor.extendOptions === Modal
					),
					'Modal must be the root element of the component',
				);
			}
		},

		close() {
			if (this.closeRoutedModal) {
				this.modalApi.closeRouted();
			} else {
				this.modalApi.close();
			}
		},

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
					this.close();
				} else {
					modal.style.transform = '';
					modal.style.overflow = '';
				}
			}, { once: true });
		},
	},

	render() {
		this.assertRootComponent();

		const vnode = (
			<div
				class={this.$s.Modal}
				ref="modal"
				onTouchstart={this.onTouchstart}
			>
				{
					/**
					 * @slot modal content
					 */
					this.$slots.default
				}
			</div>
		);

		// If opened with the API modal.open()
		if (this.$vnode.context.$vnode.componentOptions.modalFunction) {
			return vnode;
		}

		// If opened as a component (eg. Router page)
		this.closeRoutedModal = this.modalApi.setModalVnode(vnode);

		return undefined;
	},
};

export default Modal;

</script>

<style module="$s">
.Modal {
	height: 100%;
	overflow-y: auto;
	background: #f5f6f7;
}
</style>
