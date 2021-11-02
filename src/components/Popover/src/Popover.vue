<script>
import chroma from 'chroma-js';
import { throwError } from '@square/maker/utils/debug';
import assert from '@square/maker/utils/assert';
import { PopoverConfigKey, PopoverAPIKey } from './keys';

const MAX_ACTION_VNODE = 1;

const createPopperConfig = (placement, offset) => ({
	placement,
	modifiers: {
		offset: {
			offset,
		},
		preventOverflow: {
			boundariesElement: 'viewport',
		},
	},
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
		textColor: {
			type: String,
			default: '#000',
			validator: (color) => chroma.valid(color),
		},
		bgColor: {
			type: String,
			default: '#fff',
			validator: (color) => chroma.valid(color),
		},

		tetherElement: {
			type: Object,
			default: undefined,
		},
	},

	data() {
		const vm = this;

		return {
			popoverData: {
				contentSlot: undefined,
				on: this.$listeners,
				props: {
					tetherEl: undefined,
					flush: this.flush,
					popperConfig:
						this.popoverConfig.config || createPopperConfig(this.placement, this.offset),
				},
			},

			actionAPI: {
				isOpen: false,

				open() {
					if (vm.actionAPI.isOpen) {
						return;
					}

					vm.popoverData.props.tetherEl = vm.tetherElement || vm.$el;

					const whenClosed = vm.popoverAPI.setPopover(vm.popoverData);
					vm.actionAPI.isOpen = true;
					whenClosed.then(() => {
						vm.actionAPI.isOpen = false;
					});
				},

				close() {
					vm.popoverAPI.closePopover();
				},

				toggle() {
					if (vm.actionAPI.isOpen) {
						vm.actionAPI.close();
					} else {
						vm.actionAPI.open();
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

	methods: {
		getActionVnode(actionSlot) {
			let actionVnode = actionSlot(this.actionAPI);

			if (!Array.isArray(actionVnode)) {
				return actionVnode;
			}

			actionVnode = actionVnode.flat(Infinity).filter((vnode) => vnode.tag);

			assert.error(actionVnode.length === MAX_ACTION_VNODE, 'Popover', 'You must only pass in one element into the `action` scoped-slot');

			return actionVnode[0];
		},

		open() {
			this.actionAPI.open();
		},

		close() {
			this.actionAPI.close();
		},

		toggle() {
			this.actionAPI.toggle();
		},
	},

	render() {
		const { content: contentSlot } = this.$slots;
		const {
			content: contentSlotScoped,
			action: actionSlot,
		} = this.$scopedSlots;

		// TODO: Remove this check
		assert.error(actionSlot, 'You must pass in an element into the `action` scoped-slot to trigger the Popover with', 'Popover');

		this.popoverData.contentSlot = contentSlotScoped || contentSlot;

		return this.getActionVnode(actionSlot);
	},
};
</script>

<style>
/* Keep */
</style>
