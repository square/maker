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
	padding-bottom: 128px;
}

@media screen and (min-width: 840px) {
	.ActionBarWrapper {
		padding-bottom: 112px;
	}
}
</style>
