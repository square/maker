<template>
	<div
		:class="$s.ActionBarLayer"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<slot />

		<transition-action-bar>
			<inline-action-bar
				v-if="stack[stack.length-1].vnodes"
				hide-on="desktop"
				position="fixed"
			>
				<!--
				<v :nodes="actionBarVnodes" />
				-->
				<v :nodes="stack[stack.length-1].vnodes" />
			</inline-action-bar>
		</transition-action-bar>
	</div>
</template>

<script>
import { throttle, findIndex } from 'lodash';
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
					vm.setActionbar2(uid, vnodes);
					/*
					vm.registeredBy = uid;
					vm.setActionbar(vnodes);
					const stackItem = {
						uid,
						vnodes,
					};
					const index = findIndex(vm.stack, item => item.uid === uid);
					if (index === -1) {
						vm.stack.push(stackItem);
						return;
					}
					vm.$set(vm.stack, index, stackItem);
					*/
				},
				unregister(uid) {
					vm.setActionbar2(uid);
					/*
					const index = findIndex(vm.stack, item => item.uid === uid);
					if (index === -1) {
						return;
					}
					vm.stack.splice(index, 1);
					if (vm.registeredBy === uid) {
						vm.setActionbar();
					}
					*/
				},
			},
		};
	},

	inheritAttrs: false,

	data() {
		return {
			stack: [{
				uid: 'sentinel',
				vnodes: undefined,
			}],
			registeredBy: undefined,
			actionBarVnodes: undefined,
		};
	},

	computed: {
		currentVnodes() {
			/*
			if (this.stack.length === 0) {
				return undefined;
			}
			return this.stack[this.stack.length-1].vnodes;
			*/
			return this.stack[this.stack.length - 1].vnodes;
		},
	},

	created() {
		this.setActionbar = throttle(this.setActionbar, 50, { leading: false });
		this.setActionbar2 = throttle(this.setActionbar2, 50, { leading: false });
	},

	methods: {
		setActionbar(vnodes) {
			this.actionBarVnodes = vnodes;
		},
		setActionbar2(uid, vnodes) {
			// this.registeredBy = uid;
			// this.setActionbar(vnodes);

			// remove vnodes
			if (vnodes === undefined) {
				const index = findIndex(this.stack, (item) => item.uid === uid);
				if (index === -1) {
					return;
				}
				this.stack.splice(index, 1);
				return;
			}

			// add or update vnodes
			const stackItem = {
				uid,
				vnodes,
			};
			const index = findIndex(this.stack, (item) => item.uid === uid);
			if (index === -1) {
				this.stack.push(stackItem);
				return;
			}
			this.$set(this.stack, index, stackItem);
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
