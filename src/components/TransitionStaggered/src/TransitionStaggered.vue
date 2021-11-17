<template>
	<transition-group
		v-bind="$attrs"
		tag="div"
		@enter="handleEnter"
		@leave="handleLeave"
	>
		<slot
			:data-load-index="loadIndex"
		/>
	</transition-group>
</template>

<script>
import { staggeredFloatUpFn, floatDownFn } from '@square/maker/utils/transitions';

const defaultItemCount = [
	{
		minWidth: 0,
		itemCount: 1,
	},
];

export default {
	props: {
		// Number of items to stagger at a time for a viewport
		// E.g. [
		// 	{
		// 		minWidth: 0,
		// 		staggerItemCount: 1,
		// 	},
		// 	{
		// 		minWidth: 840,
		// 		staggerItemCount: 4,
		// 	},
		// ]
		staggerItemCount: {
			type: Array,
			default: () => defaultItemCount,
			validator: (staggerItemCount) => {
				// cannot be empty
				if (staggerItemCount.length === 0) {
					return false;
				}
				// must have default catch-all count
				if (staggerItemCount[0].minWidth !== 0) {
					return false;
				}
				return staggerItemCount.every((itemCount) => (itemCount.minWidth
					|| itemCount.minWidth === 0)
					&& itemCount.itemCount);
			},
		},
	},

	data() {
		return {
			viewportWidth: 0,
		};
	},

	mounted() {
		this.viewportWidth = window.innerWidth;
	},

	methods: {
		handleEnter(element, onComplete) {
			staggeredFloatUpFn({ element, onComplete });
		},

		handleLeave(element, onComplete) {
			floatDownFn({ element, onComplete });
		},

		loadIndex(index) {
			const { staggerItemCount, viewportWidth } = this;
			let items;
			staggerItemCount.forEach((count) => {
				if (count.minWidth < viewportWidth) {
					items = count.itemCount;
				}
			});
			if (items === defaultItemCount[0].itemCount) {
				return index;
			}
			const remainder = index % items;
			return remainder > 0 ? remainder : items;
		},
	},
};
</script>
