<template>
	<div :class="$s.ActionBarWrapper">
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
};
</script>

<style module="$s">
.ActionBarWrapper {
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
}

@media screen and (min-width: 840px) {
	.ActionBarWrapper {
		--actionbar-size: 48px;
		--actionbar-top-padding: 24px;

		/* no safe-area or deadclick issues on non-mobile resolutions */
		--actionbar-bottom-padding: var(--regular-bottom-padding);
	}
}
</style>
