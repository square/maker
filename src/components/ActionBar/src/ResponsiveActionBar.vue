<template>
	<div>
		<pseudo-window
			@resize.passive="handleResize"
		/>
		<action-bar v-if="isMobile">
			<slot />
		</action-bar>
		<inline-action-bar
			v-else
			position="absolute"
			hide-on="mobile"
		>
			<slot />
		</inline-action-bar>
	</div>
</template>

<script>
import PseudoWindow from 'vue-pseudo-window';
import ActionBar from './ActionBar.vue';
import InlineActionBar from './InlineActionBar.vue';

export default {
	components: {
		ActionBar,
		InlineActionBar,
		PseudoWindow,
	},

	data() {
		return {
			isMobile: false,
		};
	},

	mounted() {
		this.handleResize();
	},

	methods: {
		handleResize() {
			this.isMobile = window.innerWidth < 1200;
		},
	},
};
</script>
