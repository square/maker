<template>
	<div :class="$s.ProductLoad">
		<div
			:class="$s.ProductGrid"
		>
			<div
				v-for="index in 16"
				:key="index"
				:class="$s.Product"
			>
				<template
					v-if="!reveal"
				>
					<m-skeleton-block :class="$s.ProductImage" />
					<m-skeleton-text />
				</template>
				<m-transition-staggered
					:items-per-row-mobile="1"
					:items-per-row-tablet="4"
					:item-index="index"
				>
					<div
						v-show="reveal"
					>
						<img
							:class="$s.ProductImage"
							:src="`https://picsum.photos/600/300?${index}`"
							height="200px"
						>
						<div>This is item number {{ index }}</div>
					</div>
				</m-transition-staggered>
			</div>
		</div>
	</div>
</template>

<script>
import { MSkeletonBlock, MSkeletonText } from '@square/maker/components/Skeleton';
import { MTransitionStaggered } from '@square/maker/components/TransitionStaggered';

export default {
	components: {
		MSkeletonBlock,
		MSkeletonText,
		MTransitionStaggered,
	},

	data() {
		return {
			reveal: false,
			itemsPerRow: [
				{
					minWidth: 0,
					itemCount: 1,
				},
				{
					minWidth: 840,
					itemCount: 4,
				},
			],
		};
	},

	mounted() {
		const loadDelay = 1000;
		setTimeout(() => {
			this.reveal = true;
		}, loadDelay);
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
