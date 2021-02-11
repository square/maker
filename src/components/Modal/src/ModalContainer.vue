<script>
import assert from '@square/maker/utils/assert';
import modalApi from './modal-api';
import ModalLayer from './ModalLayer.vue';

// @vue/component
const ModalContainer = {
	components: {
		ModalLayer,
	},

	inject: {
		modalApi,
	},

	data() {
		return {
			touchStartFrom: undefined,
		};
	},

	methods: {
		assertRootComponent() {
			// eslint-disable-next-line no-underscore-dangle
			const contextInnerNodes = this.$vnode.context._vnode;
			if (contextInnerNodes) { // doesn't exist in SSR
				assert.error(
					(
						contextInnerNodes.componentOptions
						&& contextInnerNodes.componentOptions.Ctor.extendOptions === ModalContainer
					),
					'ModalContainer must be the root element of the component',
				);
			}
		},

		close() {
			this.modalApi.close();
		},

		onTouchstart(event) {
			const [touch] = event.touches;
			const { clientX, clientY } = touch;

			// Attempt to prevent swipe-right navigation gesture to navigate back history
			if (clientX < 10 || clientX > window.innerWidth - 10) {
				event.preventDefault();
				return;
			}

			if (this.$refs.modalContainer.scrollTop === 0) {
				this.touchStartFrom = clientY;
				this.onPanDown();
			}
		},

		onTouchmove({ touches }) {
			let deltaY = touches[0].clientY - this.touchStartFrom;
			const { modalContainer } = this.$refs;

			if (deltaY < 0) {
				modalContainer.style.transform = '';
				modalContainer.style.overflow = '';
			} else {
				// Exponentially make it harder to pull down, like iOS
				deltaY **= 0.9;
				modalContainer.style.transform = `translateY(${deltaY}px)`;

				// Prevents the iOS Safari elastic stretch when dragging down
				modalContainer.style.overflow = 'hidden';
			}
		},

		onPanDown() {
			const { modalContainer } = this.$refs;

			modalContainer.addEventListener('touchmove', this.onTouchmove, { passive: true });

			document.addEventListener('touchend', ({ changedTouches }) => {
				modalContainer.removeEventListener('touchmove', this.onTouchmove);

				const deltaY = changedTouches[0].clientY - this.touchStartFrom;
				if (deltaY > 200) {
					this.close();
				} else {
					modalContainer.style.transform = '';
					modalContainer.style.overflow = '';
				}
			}, { once: true });
		},
	},

	render() {
		this.assertRootComponent();

		const vnode = (
			<div
				class={this.$s.ModalContainer}
				ref="modalContainer"
				onTouchstart={this.onTouchstart}
			>
				{
					/**
					 * @slot modal container content
					 */
					this.$slots.default
				}

			</div>
		);

		return vnode;
	},
};

export default ModalContainer;
</script>

<style module="$s">
.ModalContainer {
	width: 100%;
	height: 100%;
	max-width: 100%;
	max-height: 100%;
}

@media screen and (min-width: 1200px) {
	.ModalContainer {
		display: inline-block;
		width: auto;
		height: auto;
	}
}
</style>
