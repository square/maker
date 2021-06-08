<template>
	<div
		:class="[
			$s.ActionBarLayer,
			{ [$s.NoActionBar]: !hasActionBar },
			{ [$s.safariAdjustment]: hasSafariAdjustment },
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
import { isMobileSafari } from '@square/maker/utils/browser';
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
		hasSafariAdjustment() {
			return isMobileSafari();
		},
	},

	created() {
		const waitTimeMs = 50;
		this.setActionbar = throttle(this.setActionbar, waitTimeMs, { leading: false });
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
	/*
	* The action bar layer injects space in the dom
	* to ensure the content behind the actions remain visible
	*/
	--action-bar-height: 96px; /* button + padding */
	--safari-padding: 116px; /* action bar height + safari offset */

	padding-bottom: var(--action-bar-height);

	&.NoActionBar {
		padding-bottom: 0;
	}

	&.safariAdjustment {
		padding-bottom: var(--safari-padding);
	}
}
</style>
