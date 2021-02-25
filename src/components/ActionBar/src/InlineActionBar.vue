<template>
	<div
		v-if="!flush"
		:class="$s.ActionBarWrapper"
	>
		<transition-action-bar-items
			:class="[
				$s.ActionBar,
				$s[`position_${position}`],
				$s[`hide-on_${hideOn}`],
			]"
			tag="div"
		>
			<vnode-syringe :class&="$s.Action">
				<slot />
			</vnode-syringe>
		</transition-action-bar-items>
	</div>
	<transition-action-bar-items
		v-else
		:class="[
			$s.ActionBar,
			$s[`position_${position}`],
			$s[`hide-on_${hideOn}`],
		]"
		tag="div"
	>
		<vnode-syringe :class&="$s.Action">
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
			default: 'static',
			validator: (position) => ['static', 'relative', 'absolute', 'fixed'].includes(position),
		},
		hideOn: {
			type: String,
			default: 'none',
			validator: (hideOn) => ['none', 'mobile', 'desktop'].includes(hideOn),
		},
		flush: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style module="$s">
.ActionBar {
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 24px 24px 32px;
	background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
}

.ActionBarWrapper {
	padding-bottom: 106px;
}

@media screen and (min-width: 1200px) {
	.ActionBarWrapper {
		padding-bottom: 76px;
	}
}

@media screen and (min-width: 1200px) {
	.hide-on_desktop {
		display: none;
	}
}

@media screen and (max-width: 1199px) {
	.hide-on_mobile {
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
	filter: drop-shadow(0 15px 10px rgb(0 0 0 / 20%));

	&:last-child {
		margin-right: 0;
	}
}
</style>
