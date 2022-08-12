<template>
	<div :class="$s.Preview">
		<div :class="$s.Canvas">
			<div :class="$s.Page">
				<div
					:class="$s.Section"
					class="header"
				>
					<menu-icon class="icon" />
					<m-text
						pattern="headline"
						:size="3"
					>
						Kafo
					</m-text>
					<shopping-bag-icon class="icon" />
				</div>
				<div
					:class="[
						$s.Section,
						$s.Row
					]"
					class="banner"
				>
					<m-image
						class="image"
						src="https://source.unsplash.com/800x600/?cake"
					/>
					<div :class="$s.Column">
						<m-text
							pattern="headline"
							:size="6"
						>
							Distinctive and bold
						</m-text>
						<m-text>
							Simple, affordable, memorable
						</m-text>
						<div :class="$s.Row">
							<m-button class="button">
								Shop now
							</m-button>
							<m-button
								class="button"
								pattern="secondary"
							>
								Learn more
							</m-button>
						</div>
					</div>
				</div>
				<div
					class="items"
					:class="[
						$s.Section,
						$s.Column
					]"
				>
					<m-text
						pattern="title"
						class="title"
					>
						Our featured items
					</m-text>
					<div :class="$s.Row">
						<m-card
							v-for="item in items"
							:key="item.name"
							:class="$s.Column"
							class="item"
						>
							<m-image
								:src="item.photo"
								class="image"
								shape="square"
							/>
							<m-text
								pattern="title"
								:size="0"
								:color="cardTitleColor"
								class="title"
							>
								{{ item.name }}
							</m-text>
							<m-text
								:size="0"
								class="price"
							>
								{{ item.price }}
							</m-text>
							<m-text
								:size="-1"
								:color="cardTextColor"
								class="description"
							>
								{{ item.description }}
							</m-text>
						</m-card>
					</div>
					<div :class="$s.Row">
						<m-card
							v-for="item in items"
							:key="item.name"
							:class="$s.Column"
							class="item"
						>
							<m-image
								:src="item.photoalt"
								class="image"
								shape="square"
							/>
							<m-text
								pattern="title"
								:size="0"
								:color="cardTitleColor"
								class="title"
							>
								{{ item.name }}
							</m-text>
							<m-text
								:size="0"
								class="price"
							>
								{{ item.price }}
							</m-text>
							<m-text
								:size="-1"
								:color="cardTextColor"
								class="description"
							>
								{{ item.description }}
							</m-text>
						</m-card>
					</div>
				</div>
				<div
					class="footer"
					:class="[
						$s.Section,
						$s.Row
					]"
				>
					<div :class="$s.Column">
						<m-text
							pattern="headline"
							:size="2"
						>
							Kafo
						</m-text>
						<m-text>
							&copy; 2022 Kafo roasters
						</m-text>
					</div>
					<div :class="$s.Row">
						<m-input placeholder="Sign up for news and updates" />
						<m-button>
							Sign up
						</m-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import MenuIcon from '@square/maker-icons/Menu';
import ShoppingBagIcon from '@square/maker-icons/ShoppingBag';
import { MText } from '@square/maker/components/Text';
import { MImage } from '@square/maker/components/Image';
import { MButton } from '@square/maker/components/Button';
import { MCard } from '@square/maker/components/Card';
import { MInput } from '@square/maker/components/Input';

export default {
	components: {
		MenuIcon,
		ShoppingBagIcon,
		MText,
		MImage,
		MButton,
		MCard,
		MInput,
	},

	props: {
		cardTitleColor: {
			type: String,
			default: undefined,
		},
		cardTextColor: {
			type: String,
			default: undefined,
		},
	},

	data() {
		return {
			items: [
				{
					id: 1,
					name: 'Americano',
					description: 'Italian espresso gets the American treatment; hot water fills the cup for a rich alternative to drip.',
					photo: 'https://source.unsplash.com/900x600/?coffee',
					photoalt: 'https://source.unsplash.com/900x600/?espresso',
					categories: [
						'Coffee',
					],
					price: '$8.00',
				},
				{
					id: 2,
					name: 'Holiday Spice Latte',
					description: 'Our Holiday Spice Latte mingles holiday baking spices with espresso and freshly steamed milk.',
					photo: 'https://source.unsplash.com/900x600/?latte',
					photoalt: 'https://source.unsplash.com/900x600/?hot+cocoa',
					categories: [
						'Coffee',
					],
					price: '$10.00',
				},
				{
					id: 3,
					name: 'Cappuccino',
					description: 'The essence of handcrafting. Our rich espresso is artfully marbled with freshly micro-foamed milk.',
					photo: 'https://source.unsplash.com/900x600/?cappuccino',
					photoalt: 'https://source.unsplash.com/900x600/?coffee+art',
					categories: [
						'Coffee',
					],
					price: '$9.50',
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

<style module="$s">
.Preview {
	display: grid;
	height: 100%;
	max-height: calc(100vh - 30px);
	padding: 30px 30px 0;
	background-color: #f7f7f7;
}

.Canvas {
	position: relative;
	max-height: 100%;
	padding: 15px 15px 0;
	overflow: hidden;
	color: var(--maker-color-body);
	font-weight: var(--font-weights-text, normal);
	font-size: var(--font-base-size);
	font-family: var(--maker-font-body-font-family, inherit);
	background-color: #fff;
	border-radius: 30px 30px 0 0;
	box-shadow: 0 0.900783px 1.80157px rgb(0 0 0 / 10%), 0 0 3.60313px rgb(0 0 0 / 10%);
}

.Page {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow: scroll;
	background-color: var(--maker-color-background);
	border: 1px solid #ebedef;
	border-radius: 4px 4px 0 0;
}

.Section {
	display: flex;
	gap: 40px;
	justify-content: space-between;
	box-sizing: border-box;
	width: 100%;
	max-width: var(--m-section-max-width, 1000px);
	margin: 0 auto;
	padding: 20px;

	& div {
		display: flex;
		gap: 20px;
	}
}

.Column {
	flex-direction: column;
}

.Row {
	flex-direction: row;
}
</style>

<style>
html,
body {
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.icon {
	width: 24px;
	height: 24px;
	fill: currentColor;
}

.banner {
	align-items: center;
}

.banner > .image {
	flex: 3;
}

.banner > div:last-child {
	flex: 2;
}

.items > .title {
	text-align: center;
}

.item {
	flex: 1;
	gap: 5px !important;
}

.item .image {
	position: relative;
	width: calc(100% + 48px);
	margin: -16px -24px 16px;
}

.footer {
	padding: 40px 20px !important;
}

/* stylelint-disable-next-line no-descending-specificity */
.footer div {
	flex: 1;
}
</style>
