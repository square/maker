<template>
	<div :class="$s.Preview">
		<div :class="$s.Canvas">
			<div :class="$s.Notch" />
			<div :class="$s.Page">
				<div :class="$s.Section">
					<div class="header">
						<menu-icon class="icon" />
						<span class="logo">Kafo</span>
						<shopping-bag-icon class="icon" />
					</div>
				</div>
				<div
					:class="$s.Section"
					class="banner"
				/>
				<div
					v-for="category in categories"
					:key="category"
					:class="$s.Section"
				>
					<m-heading :size="1">
						{{ category }}
					</m-heading>
					<template v-for="item in categoryItems(category)">
						<div
							:key="item.name"
							class="item"
						>
							<div class="item-details">
								<m-heading
									:size="0"
									class="item-title"
								>
									{{ item.name }}
								</m-heading>
								<m-text
									:size="-1"
									class="item-description"
								>
									{{ item.description }}
								</m-text>
							</div>
							<m-image
								:src="item.photo"
								class="item-preview"
							/>
						</div>
						<m-divider :key="item.id" />
					</template>
				</div>
				<m-inline-action-bar>
					<m-action-bar-button
						key="confirm"
						full-width
					>
						Menu
					</m-action-bar-button>
				</m-inline-action-bar>
			</div>
		</div>
		<div :class="$s.Canvas">
			<div :class="$s.Notch" />
			<div :class="$s.Page">
				<m-image
					src="https://source.unsplash.com/random/400x400"
					class="detail-image"
				/>
				<div :class="$s.Section">
					<m-heading
						:size="1"
						class="item-title"
					>
						Cappuccino
					</m-heading>
					<m-text
						:size="0"
						class="item-description"
					>
						The essence of handcrafting. Our rich espresso is artfully
						marbled with freshly micro-foamed milk.
					</m-text>
				</div>
				<m-inline-action-bar>
					<m-action-bar-button
						key="close"
						color="#f6f6f6"
					>
						<x-icon class="icon" />
					</m-action-bar-button>
					<m-action-bar-button
						key="confirm"
						full-width
					>
						Add to Order
					</m-action-bar-button>
				</m-inline-action-bar>
			</div>
		</div>
		<div :class="$s.Canvas">
			<div :class="$s.Notch" />
			<div :class="$s.Page">
				<div :class="$s.Section">
					<div class="header">
						<menu-icon class="icon" />
						<span class="logo">Kafo</span>
						<shopping-bag-icon class="icon" />
					</div>
				</div>
				<m-inline-action-bar>
					<m-action-bar-button
						key="confirm"
						full-width
					>
						Checkout
					</m-action-bar-button>
				</m-inline-action-bar>
			</div>
		</div>
	</div>
</template>
<script>
import MenuIcon from '@square/maker-icons/Menu';
import ShoppingBagIcon from '@square/maker-icons/ShoppingBag';
import XIcon from '@square/maker-icons/X';
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import { MDivider } from '@square/maker/components/Divider';
import { MImage } from '@square/maker/components/Image';
// import { MButton } from '@square/maker/components/Button';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';

export default {
	components: {
		MenuIcon,
		ShoppingBagIcon,
		XIcon,
		MHeading,
		MText,
		MDivider,
		MImage,
		MInlineActionBar,
		MActionBarButton,
	},

	data() {
		return {
			categories: [
				'Coffee',
				'Tea',
				'Pastries',
			],
			items: [
				{
					id: 1,
					name: 'Americano',
					description: 'Italian espresso gets the American treatment; hot water fills the cup for a rich alternative to drip coffee.',
					photo: 'https://source.unsplash.com/900x600/?coffee',
					categories: [
						'Coffee',
					],
				},
				{
					id: 2,
					name: 'Holiday Spice Latte',
					description: 'A returning favorite, our Holiday Spice Latte mingles holiday baking spices like cinnamon, ginger, cloves, and nutmeg with hand-pulled espresso and freshly steamed milk.',
					photo: 'https://source.unsplash.com/900x600/?latte',
					categories: [
						'Coffee',
					],
				},
				{
					id: 3,
					name: 'Cappuccino',
					description: 'The essence of handcrafting. Our rich espresso is artfully marbled with freshly micro-foamed milk.',
					photo: 'https://source.unsplash.com/900x600/?cappuccino',
					categories: [
						'Coffee',
					],
				},
			],
		};
	},

	methods: {
		categoryItems(category) {
			return this.items.filter((item) => item.categories.includes(category));
		},
	},
};
</script>
<style>
.header {
	display: grid;
	grid-template-columns: 40px 3fr 40px;
	align-items: center;
	justify-items: center;
	min-height: 44px;
}

.logo {
	font-weight: bold;
	font-size: 32px;
	font-family: "Palatino Linotype", Palatino, Palladio, "Century Schoolbook L", Georgia, serif;
	text-align: center;
}

.icon {
	width: 24px;
	height: 24px;
}

.banner {
	min-height: 200px;
	background-image: url(https://source.unsplash.com/Kwdp-0pok-I/400x250);
	background-repeat: no-repeat;
	background-size: cover;
}

.item {
	display: flex;
	gap: 20px;
	padding: 20px 0;
}

.item-title {
	margin-bottom: 8px;
}

.item-description {
	display: -webkit-box;
	margin: 0;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
}

.item-preview {
	flex: 0 0 auto;
	width: 96px;
	height: 96px;
	overflow: hidden;
	border-radius: 16px;
}

.detail-image {
	height: 250px;
}
</style>
<style module="$s">
.Preview {
	display: grid;
	grid-template-columns: repeat(3, minmax(360px, 1fr));
	gap: 40px;
	max-height: calc(100vh - 80px);
	padding: 40px;
	background-color: #f8f8f8;
	box-shadow:
		inset 0.6px 0.6px 2.2px rgba(0, 0, 0, 0.07),
		inset 1.3px 1.3px 5.3px rgba(0, 0, 0, 0.05),
		inset 2.5px 2.5px 10px rgba(0, 0, 0, 0.042),
		inset 4.5px 4.5px 17.9px rgba(0, 0, 0, 0.035),
		inset 8.4px 8.4px 33.4px rgba(0, 0, 0, 0.028),
		inset 20px 20px 80px rgba(0, 0, 0, 0.02);
}

.Canvas {
	position: relative;
	height: calc(100% - 40px);
	max-height: calc(100% - 40px);
	padding: 20px 10px;
	overflow: hidden;
	background-color: var(--color-background);
	border-radius: 30px;
	box-shadow:
		4.8px 6.4px 10.8px -40px rgba(0, 0, 0, 0.34),
		12.2px 16.4px 18.2px -40px rgba(0, 0, 0, 0.213),
		23.7px 31.8px 26.4px -40px rgba(0, 0, 0, 0.159),
		38px 51px 54px -40px rgba(0, 0, 0, 0.098);
}

.Notch {
	width: 40%;
	height: 20px;
	margin: -20px auto 0;
	background-color: black;
	border-radius: 0 0 30px 30px;
}

.Page {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow: scroll;
}

.Section {
	padding: 2vh 1vw;
}
</style>
