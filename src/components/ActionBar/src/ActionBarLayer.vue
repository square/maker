<template>
	<div
		:class="$s.ActionBarLayer"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<slot />

		<transition-action-bar>
			<transition-action-bar-items
				v-if="actionBarVnodes"
				:class="$s.ActionBar"
				tag="div"
			>
				<vnode-syringe :class&="$s.Action">
					<v :nodes="actionBarVnodes" />
				</vnode-syringe>
			</transition-action-bar-items>
		</transition-action-bar>
	</div>
</template>

<script>
import { throttle } from 'lodash';
import V from 'vue-v';
import vnodeSyringe from 'vue-vnode-syringe';
import TransitionActionBar from './TransitionActionBar.vue';
import TransitionActionBarItems from './TransitionActionBarItems.vue';

export default {
	components: {
		V,
		vnodeSyringe,
		TransitionActionBar,
		TransitionActionBarItems,
	},

	provide() {
		const vm = this;
		return {
			'action-bar': {
				register(uid, vnodes) {
					vm.registeredBy = uid;
					vm.setActionbar(vnodes);
				},
				unregister(uid) {
					if (vm.registeredBy === uid) {
						vm.setActionbar();
					}
				},
			},
		};
	},

	inheritAttrs: false,

	data() {
		return {
			registeredBy: undefined,
			actionBarVnodes: undefined,
		};
	},

	created() {
		this.setActionbar = throttle(this.setActionbar, 50, { leading: false });
	},

	methods: {
		setActionbar(vnodes) {
			this.actionBarVnodes = vnodes;
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
	bottom: 0;
	z-index: 10;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	width: 100%;
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
