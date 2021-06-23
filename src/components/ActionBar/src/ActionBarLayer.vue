<template>
	<div
		:class="[
			$s.ActionBarLayer,
			{ [$s.NoActionBar]: !hasActionBar },
		]"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<slot />

		<m-transition-spring-up>
			<atomic-action-bar
				v-if="actionBarVnodes"
				hide-on="tablet"
				position="fixed"
			>
				<v :nodes="actionBarVnodes" />
			</atomic-action-bar>
		</m-transition-spring-up>
	</div>
</template>

<script>
import { throttle } from 'lodash';
import V from 'vue-v';
import { MTransitionSpringUp } from '@square/maker/components/TransitionSpringUp';
import AtomicActionBar from './AtomicActionBar.vue';

export default {
	components: {
		V,
		MTransitionSpringUp,
		AtomicActionBar,
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

	computed: {
		hasActionBar() {
			return !!this.actionBarVnodes;
		},
	},

	created() {
		const shortDelayMs = 50;
		this.setActionbar = throttle(this.setActionbar, shortDelayMs, { leading: false });
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
	--action-bar-bottom-padding: 64px;

	padding-bottom: calc(88px + var(--action-bar-bottom-padding));

	&.NoActionBar {
		padding-bottom: 0;
	}
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
	padding: 24px 24px var(--action-bar-bottom-padding) 24px;
}

@media screen and (min-width: 840px) {
	.ActionBar {
		display: none;
	}

	.ActionBarLayer {
		padding-bottom: 0;
	}
}

.Action {
	margin-right: 8px;
	-webkit-transform: translate3d(0, 0, 0); /* Fixes buttons flickering on mobile devices */
	filter: drop-shadow(0 15px 10px rgb(0 0 0 / 20%));

	&:last-child {
		margin-right: 0;
	}
}
</style>
