<template>
	<div
		:class="[
			$s.ActionBarWrapper,
			{ [$s.safariAdjustment]: hasSafariAdjustment },
		]"
	>
		<atomic-action-bar
			v-bind="$attrs"
			v-on="$listeners"
		>
			<!-- @slot ActionBar items -->
			<slot />
		</atomic-action-bar>
	</div>
</template>

<script>
import { isMobileSafari } from '@square/maker/utils/browser';
import AtomicActionBar from './AtomicActionBar.vue';

/**
 * InlineActionBar component
 * @inheritAttrs ./AtomicActionBar.vue
 * @inheritListeners ./AtomicActionBar.vue
 */
export default {
	components: {
		AtomicActionBar,
	},

	inheritAttrs: false,

	computed: {
		hasSafariAdjustment() {
			return isMobileSafari();
		},
	},
};
</script>

<style module="$s">
.ActionBarWrapper {
	/*
	* The action bar wrapper injects space in the dom
	* to ensure the content behind the actions remain visible
	*/
	--action-bar-height: 96px; /* button + padding */
	--safari-padding: 116px; /* padding + button + safari offset + additional padding */

	padding-bottom: var(--action-bar-height);

	&.safariAdjustment {
		padding-bottom: var(--safari-padding);
	}
}
</style>
