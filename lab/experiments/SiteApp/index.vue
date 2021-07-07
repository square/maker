<template>
	<div>
		<div class="highlight">
			<m-heading
				:size="1"
				class="heading"
			>
				{{ storeName }} Online Store
			</m-heading>
		</div>

		<div class="notice-banner">
			<m-text class="banner-text">
				Order and check out directly from our menu and we’ll deliver straight to you
			</m-text>
			<m-text class="banner-subtext">
				Table 9
			</m-text>
		</div>

		<div
			v-for="category in categories"
			:key="category"
		>
			<m-heading class="heading">
				{{ category }}
			</m-heading>
			<div class="highlight">
				<template v-for="item in categoryItems(category)">
					<div
						:key="item.name"
						class="item"
						@click="openItemModal(item)"
					>
						<div class="item-details">
							<m-heading :size="-1">
								{{ item.name }}
							</m-heading>
							<m-text
								:size="-1"
								class="item-description"
							>
								{{ item.description }}
							</m-text>
							<m-text :size="-1">
								{{ formatItemCost(item) }}
							</m-text>
						</div>
						<m-image
							:src="item.photo"
							class="item-preview"
						/>
					</div>
					<m-divider :key="item.name" />
				</template>
			</div>
		</div>

		<m-action-bar>
			<m-button
				key="primary"
				size="large"
				shape="pill"
				color="rgb(160, 121, 164)"
				full-width
			>
				View order
				<template #information>
					{{ addedItemCount }} items added
				</template>
			</m-button>
		</m-action-bar>
	</div>
</template>

<script>
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import { MDivider } from '@square/maker/components/Divider';
import { MImage } from '@square/maker/components/Image';
import { modalApi } from '@square/maker/components/Modal';
import { MActionBar } from '@square/maker/components/ActionBar';
import { MButton } from '@square/maker/components/Button';
import ItemModal from './ItemModal.vue';
import storeData from './data';

export default {
	components: {
		MHeading,
		MText,
		MDivider,
		MImage,
		MActionBar,
		MButton,
	},
	inject: {
		modalApi,
	},
	data() {
		return storeData;
	},
	computed: {
		addedItemCount() {
			const startingSum = 0;
			return this.items.reduce((sum, item) => { // eslint-disable-line unicorn/no-reduce
				if (item.quantity) {
					return sum + item.quantity;
				}
				return sum;
			}, startingSum);
		},
	},
	methods: {
		openItemModal(item) {
			this.modalApi.open((h) => h(
				ItemModal,
				{
					props: {
						item,
					},
				},
			));
		},
		categoryItems(category) {
			return this.items.filter((item) => item.categories.includes(category));
		},
		formatItemCost(item) {
			// if item has base cost only show that
			if (item.cost) {
				return this.formatCost(item.cost);
			}
			// otherwise calculate cost range
			let minCost = Number.MAX_SAFE_INTEGER;
			const minimumMaximumCost = 0;
			let maxCost = minimumMaximumCost;
			const firstIndex = 0;
			item.oneOf[firstIndex].options.forEach((option) => {
				minCost = Math.min(minCost, option.cost);
				maxCost = Math.max(maxCost, option.cost);
			});
			const formattedMinCost = this.formatCost(minCost);
			const formattedMaxCost = this.formatCost(maxCost);
			return `${formattedMinCost} - ${formattedMaxCost}`;
		},
		formatCost(integer) {
			const centsPerDollar = 100;
			const float = integer / centsPerDollar;
			const centDigits = 2;
			const string = float.toFixed(centDigits);
			return `$${string}`;
		},
	},
};
</script>

<style scoped>
.heading {
	padding: 24px;
}

.item {
	display: flex;
	padding: 24px;
	cursor: pointer;
}

.item-details {
	flex: 1 0 auto;
}

.item-description {
	color: rgba(0, 0, 0, 0.7);
}

.item-preview {
	flex: 0 0 auto;
	width: 96px;
	height: 96px;
	overflow: hidden;
	border-radius: 16px;
}

.notice-banner {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 16px;
	background-color: rgb(160, 121, 164);
}

.banner-text {
	margin: 8px;
	color: white;
}

.banner-subtext {
	margin: 8px;
	color: rgba(255, 255, 255, 0.7);
}

.highlight {
	background-color: white;
}
</style>

<style>
html,
body {
	background: #f6f6f6;
}
</style>
