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
			return isMobileSafari;
		},
	},
};
</script>

<style module="$s">
.ActionBarWrapper {
	--action-bar-height: 96px; /* button + padding */
	--safari-padding: 44px;

	padding-bottom: var(--action-bar-height);

	&.hasSafariAdjustment {
		padding-bottom: calc(var(--action-bar-height) + var(--safari-padding));
	}
}
</style>
