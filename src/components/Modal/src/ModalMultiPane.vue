<template>
	<div>
		<div ref="activePane">
			<subslot
				:offset="activePaneIndex"
				element="div"
				limit="1"
			/>
		</div>
		<m-modal-arrow
			v-if="shouldShowLeftArrow"
			:class="$s.modalArrow"
			position="left"
			@click="handleClick(-1)"
		/>
		<m-modal-arrow
			v-if="shouldShowRightArrow"
			:class="$s.modalArrow"
			position="right"
			@click="handleClick(1)"
		/>
	</div>
</template>

<script>
import Subslot from 'vue-subslot';
import { delayedFadeInFn } from '@square/maker/utils/transitions';
import MModalArrow from './ModalArrow.vue';
import modalApi from './modal-api';

export default {
	components: {
		Subslot,
		MModalArrow,
	},

	inject: {
		modalApi,
	},

	props: {
		activeIndex: {
			type: Number,
			default: 0,
		},
	},

	data() {
		return {
			activePaneIndex: this.activeIndex,
		};
	},

	computed: {
		totalPane() {
			const { default: defaultSlots = [] } = this.$slots;
			return defaultSlots.filter((vnode) => vnode.tag).length;
		},

		shouldShowLeftArrow() {
			return this.activePaneIndex > 0;
		},

		shouldShowRightArrow() {
			return (this.activePaneIndex + 1) < this.totalPane;
		},
	},

	watch: {
		activeIndex(newIndex) {
			this.setActivePane(newIndex);
		},
	},

	methods: {
		setActivePane(newIndex) {
			this.activePaneIndex = newIndex;
			delayedFadeInFn({ element: this.$refs.activePane });
		},

		handleClick(index) {
			const newIndex = this.activePaneIndex + index;
			if ((newIndex > -1) && (newIndex < this.totalPane)) {
				this.setActivePane(newIndex);
			}
		},
	},
};
</script>

<style module="$s">
.modalArrow {
	display: none;
}

@media screen and (min-width: 840px) {
	.modalArrow {
		display: block;
	}
}
</style>
