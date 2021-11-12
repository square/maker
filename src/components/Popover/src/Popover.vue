<template>
	<div style="display: contents;">
		<!-- @slot Element that the popover is tied or 'tethered' to. Must be a single node. -->
		<slot
			name="tether"
			v-bind="actionAPI"
		/>

		<portal
			:selector="popoverApi.targetSelector"
		>
			<div>
				<m-transition-fade-in @after-leave="destroyPopper">
					<popover-instance
						v-if="isOpen"
						:tether-el="tetherEl"
						:popper-config="popperConfig"
						@popover-instance:new-popper="setPopper"
					>
						<!-- @slot Content that will appear in the floating popover -->
						<slot name="content" />
					</popover-instance>
				</m-transition-fade-in>
			</div>
		</portal>
	</div>
</template>

<script>
import { throwError } from '@square/maker/utils/debug';
import { MTransitionFadeIn } from '@square/maker/components/TransitionFadeIn';
import { Portal } from '@linusborg/vue-simple-portal';
import { v4 as uuid } from 'uuid';
import { PopoverConfigKey, PopoverAPIKey } from './keys';
import PopoverInstance from './PopoverInstance.vue';

const MAX_TETHER_VNODE = 1;
const SKIDDING_OFFSET = 0;
const DISTANCE_OFFSET = 8;

const DEFAULT_MODIFIERS = [
	{
		name: 'offset',
		options: { offset: [SKIDDING_OFFSET, DISTANCE_OFFSET] },
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
		enabled: true,
		phase: 'beforeWrite',
		requires: ['computeStyles'],
		fn({ state: { styles, rects } }) {
			styles.popper.minWidth = `${rects.reference.offsetWidth}px`;
		},
		effect({ state: { elements } }) {
			elements.popper.style.minWidth = `${elements.reference.offsetWidth}px`;
		},
	},
];

export default {
	name: 'Popover',

	components: {
		Portal,
		PopoverInstance,
		MTransitionFadeIn,
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
		 * Popper.js modifier list. Overrides default configuration if present.
		 */
		modifiers: {
			type: Array,
			default: () => DEFAULT_MODIFIERS,
		},
	},

	data() {
		const vm = this;

		return {
			/**
			 * This is used to track which popover is open. When opening, this
			 * will be pushed into the popoverApi state as the opened popover.
			 */
			id: uuid(),
			currentPopper: undefined,
			popperToDestroy: undefined,
			actionAPI: {
				open(...ignoreElements) {
					if (vm.isOpen) {
						return;
					}

					vm.popoverApi.setPopover({
						tetherEl: vm.tetherEl,
						ignoreEls: ignoreElements,
						id: vm.id,
					});
				},

				close() {
					this.popperToDestroy = this.currentPopper;
					this.currentPopper = undefined;
					vm.popoverApi.closePopover();
				},

				toggle(...ignoreElements) {
					if (vm.isOpen) {
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

		popperConfig() {
			return {
				placement: this.placement,
				modifiers: this.modifiers,
			};
		},

		isOpen() {
			return this.popoverApi.currentInstance === this.id;
		},
	},

	watch: {
		isOpen(isOpen) {
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

	methods: {
		open(...ignoreElements) {
			this.actionAPI.open(...ignoreElements);
		},

		close() {
			this.actionAPI.close();
		},

		toggle(...ignoreElements) {
			this.actionAPI.toggle(...ignoreElements);
		},

		setPopper(popper) {
			this.currentPopper = popper;
		},

		destroyPopper() {
			this.popperToDestroy?.destroy();
			this.popperToDestroy = undefined;
		},
	},
};
</script>

<style>
/* Keep */
</style>
