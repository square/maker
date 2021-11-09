<template>
	<div :class="$s.ActionBarWrapper">
		<m-transition
			:enter="enterAnimation"
			:leave="leaveAnimation"
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

	props: {
		enterAnimation: {
			type: Function,
			default: springUpBounceFn,
		},
		leaveAnimation: {
			type: Function,
			default: springDownBounceFn,
		},
		enterDelay: {
			type: Number,
			default: 800,
		},
	},

	data() {
		return {
			loaded: false,
		};
	},

	mounted() {
		setTimeout(() => {
			this.loaded = !!this.$slots.default;
		}, this.enterDelay);
	},
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
