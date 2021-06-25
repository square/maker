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
	--regular-bottom-padding: 32px;
	--extra-bottom-padding-for-deadclick: 32px;
	--safe-area-inset-padding: env(safe-area-inset-bottom, 0);
	--actionbar-bottom-padding:
		calc(
			var(--regular-bottom-padding)
			+ var(--extra-bottom-padding-for-deadclick)
			+ var(--safe-area-inset-padding)
		);
	--actionbar-size: 64px;
	--actionbar-top-padding: 32px;

	padding-bottom:
		calc(
			var(--actionbar-top-padding)
			+ var(--actionbar-size)
			+ var(--actionbar-bottom-padding)
		);

	&.NoActionBar {
		padding-bottom: 0;
	}
}

@media screen and (min-width: 840px) {
	.ActionBarLayer {
		padding-bottom: 0;
	}
}
</style>
