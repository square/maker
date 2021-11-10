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
	padding: 24px 24px calc(24px + env(safe-area-inset-bottom)) 24px;
}
</style>
