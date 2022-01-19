<template>
	<div :class="$s.ActionBarWrapper">
		<m-transition
			:enter="springUpBounceFn"
			:leave="springDownBounceFn"
		>
			<atomic-action-bar
				v-if="loaded"
				v-bind="$attrs"
				v-on="$listeners"
			>
				<slot />
			</atomic-action-bar>
		</m-transition>
	</div>
</template>

<script>
import { MTransition } from '@square/maker/utils/Transition';
import { springUpBounceFn, springDownBounceFn } from '@square/maker/utils/transitions';
import AtomicActionBar from './AtomicActionBar.vue';

/**
 * InlineActionBar component
 * @inheritAttrs ./AtomicActionBar.vue
 * @inheritListeners ./AtomicActionBar.vue
 */
export default {
	components: {
		AtomicActionBar,
		MTransition,
	},

	inheritAttrs: false,

	data() {
		return {
			loaded: false,
			springUpBounceFn,
			springDownBounceFn,
		};
	},

	mounted() {
		const enterDelay = 600;
		setTimeout(() => {
			this.loaded = !!this.$slots.default;
		}, enterDelay);
	},
};
</script>

<style module="$s">
/* tempfix: chrome-bottom-offset - value set outside of maker */
/* stylelint-disable length-zero-no-unit */
.ActionBarWrapper {
	--actionbar-bottom-padding:
		calc(
			24px
			+ env(safe-area-inset-bottom, 24px)
			+ var(--chrome-bottom-offset, 0px)
		);

	padding: 24px 24px var(--actionbar-bottom-padding) 24px;
}
</style>
