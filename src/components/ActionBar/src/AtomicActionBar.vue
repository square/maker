<template>
	<transition-action-bar-items
		:class="[
			$s.ActionBar,
			$s[`position_${position}`],
			$s[`hide-on_${hideOn}`],
		]"
		tag="div"
	>
		<vnode-syringe :class&="$s.Action">
			<!-- @slot ActionBar items -->
			<slot />
		</vnode-syringe>
	</transition-action-bar-items>
</template>

<script>
import vnodeSyringe from 'vue-vnode-syringe';
import TransitionActionBarItems from './TransitionActionBarItems.vue';

export default {
	components: {
		vnodeSyringe,
		TransitionActionBarItems,
	},

	props: {
		position: {
			type: String,
			default: 'absolute',
			validator: (position) => ['static', 'relative', 'absolute', 'fixed'].includes(position),
		},
		hideOn: {
			type: String,
			default: 'none',
			validator: (hideOn) => ['none', 'mobile', 'tablet', 'desktop'].includes(hideOn),
		},
	},
};
</script>

<style module="$s">
/* tempfix: chrome-bottom-offset - value set outside of maker */
/* stylelint-disable length-zero-no-unit */
.ActionBar {
	--actionbar-bottom-padding:
		calc(
			24px
			+ env(safe-area-inset-bottom, 24px)
			+ var(--chrome-bottom-offset, 0px)
		);

	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 24px 24px var(--actionbar-bottom-padding) 24px;
	pointer-events: none;
}

@media screen and (--for-tablet-landscape-down) {
	.hide-on_mobile {
		display: none;
	}
}

@media screen and (--for-tablet-landscape-up) {
	.hide-on_tablet {
		display: none;
	}
}

@media screen and (--for-desktop-up) {
	.hide-on_desktop {
		display: none;
	}
}

.position_static {
	width: 100%;
}

.position_relative {
	position: relative;
	z-index: 1;
	width: 100%;
}

.position_absolute {
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1;
}

.position_fixed {
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1;
}

.Action {
	margin-right: 8px;
	transform: translate3d(0, 0, 0);  /* Fixes buttons flickering on mobile devices */
	filter: drop-shadow(0 15px 10px rgb(0 0 0 / 20%));
	pointer-events: auto;

	&:last-child {
		margin-right: 0;
	}
}
</style>
