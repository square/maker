<template>
	<div style="display: contents;">
		<!-- eslint-disable-next-line max-len -->
		<!-- @slot Element that the popover is tied to, usually the trigger for the popover. Must be a single node. -->
		<slot
			name="action"
			v-bind="actionAPI"
		/>

		<portal
			:selector="popoverApi.targetSelector"
		>
			<div>
				<m-transition-fade-in @after-leave="destroyPopper">
					<popover-instance
						v-if="isOpen"
						:action-el="actionEl"
						:popper-config="popperConfig"
						@popover-instance:new-popper="setPopperToDestroy"
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
import { PopoverConfigKey, PopoverAPIKey } from './keys';
import PopoverInstance from './PopoverInstance.vue';
import { getPopoverId } from './utils';

const MAX_ACTION_VNODE = 1;
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
			padding: 0,
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
			id: getPopoverId(),
			popperToDestroy: undefined,
			actionAPI: {
				open(...ignoreElements) {
					if (vm.isOpen) {
						return;
					}

					vm.popoverApi.setPopover({
						actionEl: vm.actionEl,
						ignoreEls: ignoreElements,
						id: vm.id,
					});
				},

				close() {
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
		actionEl() {
			if (this.$el.children.length !== MAX_ACTION_VNODE) {
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
		/**
		 * opens popover, use from external element
		 * @public
		 */
		open(...ignoreElements) {
			this.actionAPI.open(...ignoreElements);
		},

		/**
		 * closes popover
		 * @public
		 */
		close() {
			this.actionAPI.close();
		},

		/**
		 * toggles popover, use from external element
		 * @public
		 */
		toggle(...ignoreElements) {
			this.actionAPI.toggle(...ignoreElements);
		},

		setPopperToDestroy(popper) {
			this.popperToDestroy = popper;
		},

		destroyPopper() {
			this.popperToDestroy?.destroy();
			this.popperToDestroy = undefined;
		},
	},
};
</script>
