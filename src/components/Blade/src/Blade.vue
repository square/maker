<script>
import assert from '@square/maker/utils/assert';
import bladeApi from './blade-api';

// @vue/component
const Blade = {
	inject: {
		bladeApi,
	},

	destroyed() {
		if (this.closeRoutedBlade) {
			this.closeRoutedBlade();
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
						&& contextInnerNodes.componentOptions.Ctor.extendOptions === Blade
					),
					'Blade must be the root element of the component',
				);
			}
		},

		close() {
			if (this.closeRoutedBlade) {
				this.bladeApi.closeRouted();
			} else {
				this.bladeApi.close();
			}
		},
	},

	render() {
		this.assertRootComponent();

		const vnode = (
			<div
				class={this.$s.Blade}
			>
				{
					/**
					 * @slot blade content
					 */
					this.$slots.default
				}
			</div>
		);

		// If opened with the API blade.open()
		if (this.$vnode.context.$vnode.componentOptions.bladeFunction) {
			return vnode;
		}

		// If opened as a component (eg. Router page)
		this.closeRoutedBlade = this.bladeApi.setBladeVnode(vnode);

		return undefined;
	},
};

export default Blade;

</script>

<style module="$s">
.Blade {
	height: 100%;
	overflow-y: auto;
	background: #f5f6f7;
}
</style>
