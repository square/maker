<script>
import { throwError } from '@square/maker/utils/debug';
import assert from '@square/maker/utils/assert';
import { PopoverConfigKey, PopoverAPIKey } from './keys';
import { validatePlacement } from './utils';

const MAX_ACTION_VNODE = 1;

const createPopperConfig = ({ placement, offset, minWidth }) => ({
	placement,
	modifiers: [
		{
			name: 'offset',
			options: { offset },
		},
		{
			name: 'preventOverflow',
			options: {
				padding: 24,
				altBoundary: true,
			},
		},
		{
			name: 'minWidth',
			enabled: minWidth,
			phase: 'beforeWrite',
			requires: ['computeStyles'],
			fn({ state: { styles, rects } }) {
				styles.popper.minWidth = `${rects.reference.offsetWidth}px`;
			},
			effect({ state: { elements } }) {
				elements.popper.style.minWidth = `${elements.reference.offsetWidth}px`;
			},
		},
	],
});

export default {
	name: 'Popover',

	inject: {
		popoverAPI: {
			from: PopoverAPIKey,
			default: () => throwError('No popover layer detected', 'Popover'),
		},

		popoverConfig: {
			from: PopoverConfigKey,
			default: {
				config: undefined,
			},
		},
	},

	props: {
		ignoreElements: {
			type: Array,
			default: () => [],
		},

		placement: {
			type: String,
			default: 'bottom-start',
			validator: validatePlacement,
		},

		distanceOffset: {
			type: Number,
			default: 8,
		},

		skiddingOffset: {
			type: Number,
			default: 0,
		},

		minWidth: {
			type: Boolean,
			default: true,
		},
	},

	data() {
		const vm = this;

		const popperConfig = this.popoverConfig.config || createPopperConfig({
			placement: this.placement,
			offset: [this.skiddingOffset, this.distanceOffset],
			minWidth: this.minWidth,
		});

		return {
			popoverData: {
				contentSlot: undefined,
				on: this.$listeners,
				props: {
					tetherEl: undefined,
					ignoreEls: [],
					flush: this.flush,
					popperConfig,
				},
			},

			actionAPI: {
				isOpen: false,

				open(...ignoreElements) {
					if (vm.actionAPI.isOpen) {
						return;
					}

					vm.popoverData.props.tetherEl = vm.$el;
					vm.popoverData.props.ignoreEls = ignoreElements;

					const whenClosed = vm.popoverAPI.setPopover(vm.popoverData);
					vm.actionAPI.isOpen = true;
					whenClosed.then(() => {
						vm.actionAPI.isOpen = false;
					});
				},

				close() {
					vm.popoverAPI.closePopover();
				},

				toggle(...ignoreElements) {
					if (vm.actionAPI.isOpen) {
						vm.actionAPI.close();
					} else {
						vm.actionAPI.open(...ignoreElements);
					}
				},
			},
		};
	},

	watch: {
		'actionAPI.isOpen': function emitEvent(isOpen) {
			if (isOpen) {
				this.$emit('open');
			} else {
				this.$emit('close');
			}
		},
	},

	beforeDestroy() {
		this.close();
	},

	methods: {
		getTetherVNode(tetherSlot) {
			let tetherVnode = tetherSlot(this.actionAPI);

			if (!Array.isArray(tetherVnode)) {
				return tetherVnode;
			}

			tetherVnode = tetherVnode.flat(Infinity).filter((vnode) => vnode.tag);

			assert.error(tetherVnode.length === MAX_ACTION_VNODE, 'Popover', 'You must only pass in one element into the `action` scoped-slot');

			return tetherVnode[0];
		},

		open(...ignoreElements) {
			this.actionAPI.open(...ignoreElements);
		},

		close() {
			this.actionAPI.close();
		},

		toggle(...ignoreElements) {
			this.actionAPI.toggle(...ignoreElements);
		},
	},

	render() {
		const { content: contentSlot } = this.$slots;
		const {
			content: contentSlotScoped,
			tether: tetherSlot,
		} = this.$scopedSlots;

		assert.error(tetherSlot, 'Popover', 'You must provide an action slot');

		this.popoverData.contentSlot = (contentSlotScoped || contentSlot)?.(this.actionAPI);

		return tetherSlot && this.getTetherVNode(tetherSlot);
	},
};
</script>

<style>
/* Keep */
</style>
