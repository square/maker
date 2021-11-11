<template>
	<div :class="$s.ProductLoad">
		<div :class="$s.ProductGrid">
			<div
				v-for="i in 12"
				v-show="!reveal"
				:key="i"
				:class="$s.Product"
			>
				<m-skeleton-block :class="$s.ProductImage" />
				<m-skeleton-text />
			</div>
		</div>
		<transition-group
			:class="$s.ProductGrid"
			v-bind="$attrs"
			tag="div"
			@enter="handleEnter"
			@leave="handleLeave"
		>
			<div
				v-for="i in 12"
				v-show="reveal"
				:key="i"
				:data-load-index="[i % columns > 0 ? i % columns : columns]"
				:class="$s.Product"
			>
				<img
					:class="$s.ProductImage"
					:src="`https://picsum.photos/600/300?${i}`"
					height="200px"
				>
				<div>This is item number {{ Math.random() }}</div>
			</div>
		</transition-group>
	</div>
</template>

<script>
import { MSkeletonBlock, MSkeletonText } from '@square/maker/components/Skeleton';
import { staggeredFloatUpFn, floatDownFn } from '@square/maker/utils/transitions';

export default {
	components: {
		MSkeletonBlock,
		MSkeletonText,
	},

	data() {
		return {
			columns: 4,
			reveal: false,
		};
	},

	mounted() {
		const loadDelay = 1000;
		setTimeout(() => {
			this.reveal = true;
		}, loadDelay);
	},

	methods: {
		handleEnter(element, onComplete) {
			staggeredFloatUpFn({ element, onComplete });
		},

		handleLeave(element, onComplete) {
			floatDownFn({ element, onComplete });
		},
	},
};
</script>

<style module="$s">
.ProductLoad {
	margin: 0 auto;
	padding: 24px;

	@media screen and (min-width: 840px) {
		padding: 48px;
	}
}

.ProductGrid {
	display: flex;
	flex-wrap: wrap;
}

.Product {
	width: 100%;
	margin: 0 auto 24px;

	@media screen and (min-width: 840px) {
		width: calc(25% - 24px);
		margin: 0 12px 24px;
	}
}

.ProductImage {
	width: 100%;
	height: 200px;
	margin-bottom: 12px;
}
</style>
