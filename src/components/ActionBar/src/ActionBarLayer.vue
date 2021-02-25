<template>
	<div
		:class="$s.ActionBarLayer"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<slot />

		<transition-action-bar>
			<inline-action-bar
				v-if="actionBarStates"
				hide-on="desktop"
				position="fixed"
			>
				<v :nodes="currentActionBarVnodes" />
			</inline-action-bar>
		</transition-action-bar>
	</div>
</template>

<script>
import { throttle } from 'lodash';
import V from 'vue-v';
import TransitionActionBar from './TransitionActionBar.vue';
import InlineActionBar from './InlineActionBar.vue';

export default {
	components: {
		V,
		TransitionActionBar,
		InlineActionBar,
	},

	provide() {
		const vm = this;
		return {
			'action-bar': {
				register(uid, vnodes) {
					vm.actionBarSet({
						registeredBy: uid,
						vnodes,
					});
				},
				unregister(uid) {
					vm.actionBarSet({
						registeredBy: uid,
					});
				},
			},
		};
	},

	inheritAttrs: false,

	data() {
		return {
			actionBarStates: [],
		};
	},

	computed: {
		currentActionBarVnodes() {
			const actionBarState = this.actionBarStates[this.actionBarStates.length - 1];
			if (!actionBarState) {
				return undefined;
			}
			this.restoreListeners(actionBarState.vnodes);
			return actionBarState.vnodes;
		},
	},

	created() {
		this.actionBarStatesStaged = [];

		/* Throttling prevents infinite render loop from happening when
		 * slot child updates the actionBarStates, which re-renders slot child.
		 */
		this.applyStaged = throttle(this.applyStaged, 50, { leading: false });
	},

	methods: {
		/* These two methods address a Vue vNode patch bug where
		 * the original listener on the vNode gets overwritten by
		 * the next one (same key replacement) and doesn't get reverted
		 */
		backupListeners(vnodes) {
			vnodes.forEach((vnode) => {
				if (vnode.componentOptions) {
					vnode.componentOptions.originalListeners = {
						...vnode.componentOptions.listeners,
					};
				}
			});
		},

		restoreListeners(vnodes) {
			vnodes.forEach((vnode) => {
				if (vnode.componentOptions && vnode.componentOptions.originalListeners) {
					Object.assign(
						vnode.componentOptions.listeners,
						vnode.componentOptions.originalListeners,
					);
				}
			});
		},

		actionBarSet(actionBarState) {
			if (actionBarState.vnodes) {
				this.backupListeners(actionBarState.vnodes);
				this.actionBarStatesStaged.push(actionBarState);
			} else {
				const actionBarStateIdx = this.actionBarStatesStaged.findIndex(
					({ registeredBy }) => registeredBy === actionBarState.registeredBy,
				);
				if (actionBarStateIdx === -1) {
					throw new Error('Can\'t find Action Bar vNode');
				}
				this.actionBarStatesStaged.splice(actionBarStateIdx, 1);
			}
			this.applyStaged();
		},

		applyStaged() {
			this.actionBarStates = this.actionBarStatesStaged.slice();
		},
	},
};
</script>

<style module="$s">
.ActionBarLayer {
	padding-bottom: 116px;
}

.ActionBar {
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 10;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 24px 24px 32px;
	background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
}

@media screen and (min-width: 1200px) {
	.ActionBar {
		display: none;
	}

	.ActionBarLayer {
		padding-bottom: 0;
	}
}

.Action {
	margin-right: 8px;
	filter: drop-shadow(0 15px 10px rgb(0 0 0 / 20%));

	&:last-child {
		margin-right: 0;
	}
}
</style>
