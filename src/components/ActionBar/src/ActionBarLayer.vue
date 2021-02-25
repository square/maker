<template>
	<div
		:class="$s.ActionBarLayer"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<slot />

		<transition-action-bar>
			<inline-action-bar
				v-if="actionBarVnodes"
				hide-on="desktop"
				position="fixed"
				flush
			>
				<v :nodes="actionBarVnodes" />
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
