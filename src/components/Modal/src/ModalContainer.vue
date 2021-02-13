<script>
import assert from '@square/maker/utils/assert';

// @vue/component
const ModalContainer = {
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
	},

	render() {
		this.assertRootComponent();
		const vnode = (
			<div
				class={this.$s.ModalContainer}
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
	max-width: 100%;
	height: 100%;
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
