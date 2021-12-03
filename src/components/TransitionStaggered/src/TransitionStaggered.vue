<template>
	<transition
		v-bind="$attrs"
		@enter="handleEnter"
		@leave="handleLeave"
	>
		<slot />
	</transition>
</template>

<script>
import { staggeredFloatUpFn, floatDownFn, tabletMinWidth } from '@square/maker/utils/transitions';

const singleItem = 1;

export default {
	props: {
		itemsPerRowMobile: {
			type: Number,
			default: 1,
		},
		itemsPerRowTablet: {
			type: Number,
			default: 1,
		},
		itemIndex: {
			type: Number,
			default: 1,
		},
	},

	data() {
		return {
			viewportWidth: 0,
		};
	},

	computed: {
		loadIndex() {
			const { itemIndex } = this;
			const { itemsPerRowMobile, itemsPerRowTablet, viewportWidth } = this;
			const items = viewportWidth < tabletMinWidth ? itemsPerRowMobile : itemsPerRowTablet;

			if (items === singleItem) {
				return itemIndex;
			}

			const row = Math.ceil(itemIndex / items);
			const rowIndex = itemIndex % items > 0 ? itemIndex % items : items;
			return row * rowIndex;
		},
	},

	mounted() {
		this.viewportWidth = window.innerWidth;
	},

	methods: {
		handleEnter(element, onComplete) {
			element.dataset.loadIndex = this.loadIndex;
			staggeredFloatUpFn({ element, onComplete });
		},

		handleLeave(element, onComplete) {
			floatDownFn({ element, onComplete });
		},
	},
};
</script>
