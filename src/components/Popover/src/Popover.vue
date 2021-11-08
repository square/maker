<template>
	<div style="display: contents;">
		<slot
			name="tether"
			v-bind="actionAPI"
		/>

		<portal
			v-if="actionAPI.isOpen"
			:selector="popoverApi.targetSelector"
		>
			<slot name="content" />
		</portal>
	</div>
</template>

<script>
import { throwError } from '@square/maker/utils/debug';
import assert from '@square/maker/utils/assert';
import { Portal } from '@linusborg/vue-simple-portal';
import { v4 as uuid } from 'uuid';
import { PopoverConfigKey, PopoverAPIKey } from './keys';

const MAX_TETHER_VNODE = 1;

const getMinWidth = (minWidth, tetherMinWidth, reference) => {
	if (!tetherMinWidth) {
		return minWidth;
	}

	return minWidth || reference.offsetWidth;
};

const createPopperConfig = ({
	placement,
	offset,
	tetherMinWidth,
	minWidth,
}) => ({
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
			enabled: tetherMinWidth || !!minWidth,
			phase: 'beforeWrite',
			requires: ['computeStyles'],
			fn({ state: { styles, rects } }) {
				const popoverMinWidth = getMinWidth(minWidth, tetherMinWidth, rects.reference);
				styles.popper.minWidth = `${popoverMinWidth}px`;
			},
			effect({ state: { elements } }) {
				const popoverMinWidth = getMinWidth(minWidth, tetherMinWidth, elements.reference);
				elements.popper.style.minWidth = `${popoverMinWidth}px`;
			},
		},
	],
});

export default {
	name: 'Popover',

	components: {
		Portal,
	},

	inject: {
		popoverApi: {
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
		/**
		 * Starting position of the popover. Not guaranteed if too close to overflow.
		 */
		placement: {
			type: String,
			default: 'bottom-start',
			validator: (placement) => [
				'auto', 'auto-start', 'auto-end',
				'top', 'top-start', 'top-end',
				'right', 'right-start', 'right-end',
				'bottom', 'bottom-start', 'bottom-end',
				'left', 'left-start', 'left-end',
			].includes(placement),
		},

		/**
		 * Distance from tether element
		 */
		distanceOffset: {
			type: Number,
			default: 8,
		},

		/**
		 * Offset from base position (Y for left/right placement, X for top/bottom placement)
		 */
		skiddingOffset: {
			type: Number,
			default: 0,
		},

		/**
		 * Absolute min width of popover, overrides tetherMinWidth
		 */
		minWidth: {
			type: Number,
			default: 0,
		},

		/**
		 * Set min width of popover to tether width, overridden by minWidth
		 */
		tetherMinWidth: {
			type: Boolean,
			default: true,
		},

		id: {
			type: String,
			default: () => uuid(),
		},
	},

	data() {
		const vm = this;

		return {
			actionAPI: {
				isOpen: false,

				open(...ignoreElements) {
					if (vm.actionAPI.isOpen) {
						return;
					}

					const popperConfig = vm.popoverConfig?.config || createPopperConfig({
						placement: vm.placement,
						offset: [vm.skiddingOffset, vm.distanceOffset],
						tetherMinWidth: vm.tetherMinWidth,
						minWidth: vm.minWidth,
					});

					const popoverData = {
						props: {
							tetherEl: vm.tetherEl,
							ignoreEls: ignoreElements,
							popperConfig,
						},
						popperId: vm.id,
						on: vm.$listeners,
					};

					const whenClosed = vm.popoverApi.setPopover(popoverData);
					vm.actionAPI.isOpen = true;
					whenClosed.then(() => {
						vm.actionAPI.isOpen = false;
					});
				},

				close() {
					vm.popoverApi.closePopover();
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

	computed: {
		tetherEl() {
			if (this.$el.children.length !== MAX_TETHER_VNODE) {
				return undefined;
			}

			return this.$el.children[0];
		},
	},

	watch: {
		'actionAPI.isOpen': function emitEvent(isOpen) {
			if (isOpen) {
				/**
				 * Popover has been opened
				 */
				this.$emit('open');
			} else {
				/**
				 * Popover has been closed
				 */
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

			assert.error(tetherVnode.length === MAX_TETHER_VNODE, 'Popover', 'You must only pass in one element into the `action` scoped-slot');

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
};
</script>

<style>
/* Keep */
</style>
