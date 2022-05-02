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
				<m-theme
					:class="$s.Section"
					:profile="nestedThemeProfile"
				>
					Testing nested themes, this is using a defined profile called "primary-bold".
				</m-theme>
				<div
					v-for="category in categories"
					:key="category"
					:class="$s.Section"
				>
					<m-text
						pattern="title"
						:size="1"
					>
						{{ category }}
					</m-text>
					<template v-for="item in categoryItems(category)">
						<div
							:key="item.name"
							class="item"
						>
							<div class="item-details">
								<m-text
									pattern="title"
									:size="0"
									class="item-title"
								>
									{{ item.name }}
								</m-text>
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
					src="https://source.unsplash.com/900x600/?cappuccino"
					class="detail-image"
				/>
				<div :class="$s.Section">
					<m-text
						pattern="title"
						:size="2"
						class="item-title"
					>
						Cappuccino
					</m-text>
					<m-text
						pattern="title"
						:size="1"
						class="item-price"
					>
						$4.00
					</m-text>
					<m-text
						:size="0"
						class="item-description"
					>
						The essence of handcrafting. Our rich espresso is artfully
						marbled with freshly micro-foamed milk.
					</m-text>
					<m-stepper
						v-model="quantity"
						min="1"
						max="10"
					/>
				</div>
				<m-container>
					<template
						#label
					>
						<m-text
							pattern="title"
							:size="-1"
						>
							Size
						</m-text>
					</template>
					<div class="option">
						<m-radio
							v-model="size"
							value="sm"
						>
							Small
						</m-radio>
						<m-text
							:size="-1"
						>
							$3.00
						</m-text>
					</div>
					<m-divider />
					<div class="option">
						<m-radio
							v-model="size"
							value="md"
						>
							Medium
						</m-radio>
						<m-text
							:size="-1"
						>
							$3.50
						</m-text>
					</div>
					<m-divider />
					<div class="option">
						<m-radio
							v-model="size"
							value="lg"
						>
							Large
						</m-radio>
						<m-text
							:size="-1"
						>
							$4.00
						</m-text>
					</div>
				</m-container>
				<m-container>
					<template
						#label
					>
						<m-text
							pattern="title"
							:size="-1"
						>
							Modifiers
						</m-text>
					</template>
					<template #required-label>
						Optional
					</template>
					<div class="option">
						<m-checkbox>
							Add Cream
						</m-checkbox>
					</div>
					<m-divider />
					<div class="option">
						<m-checkbox>
							Add Sugar
						</m-checkbox>
					</div>
					<m-divider />
					<div class="option">
						<m-checkbox>
							Add Cinnamon
						</m-checkbox>
					</div>
				</m-container>
				<m-container>
					<template
						#label
					>
						<m-text
							pattern="title"
							:size="-1"
						>
							Notes
						</m-text>
					</template>
					<template #required-label>
						Optional
					</template>
					<m-input
						variant="outline"
						placeholder="Details"
					/>
				</m-container>
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
				<div :class="[$s.Section, $s.Cart]">
					<m-text
						pattern="title"
						:size="1"
					>
						Shopping Cart
					</m-text>
					<div
						class="cart-item"
					>
						<div class="cart-content">
							<div class="cart-text">
								<m-text
									pattern="title"
									:size="-1"
									class="item-title"
								>
									Holiday Spice Latte
								</m-text>
								<m-text
									:size="-1"
									class="cart-price"
									element="span"
								>
									$6.00
								</m-text>
							</div>
							<div class="cart-controls">
								<m-stepper
									v-model="quantity"
									min="1"
									max="10"
								/>
								<m-text-button>
									<trash class="icon-sm" />
								</m-text-button>
							</div>
						</div>
						<m-image
							src="https://source.unsplash.com/900x600/?latte"
							class="cart-media"
						/>
					</div>
					<m-divider />
					<div
						class="cart-item"
					>
						<div class="cart-content">
							<div class="cart-text">
								<m-text
									pattern="title"
									:size="-1"
									class="item-title"
								>
									Blonde Latte
								</m-text>
								<m-text
									:size="-1"
									class="cart-price"
									element="span"
								>
									$5.00
								</m-text>
							</div>
							<div class="cart-controls">
								<m-stepper
									v-model="quantity"
									min="1"
									max="10"
								/>
								<m-text-button>
									<trash class="icon-sm" />
								</m-text-button>
							</div>
						</div>
						<m-image
							src="https://source.unsplash.com/900x600/?latte"
							class="cart-media"
						/>
					</div>
					<m-button
						variant="secondary"
						full-width
					>
						Add more items
					</m-button>
					<m-divider style="margin: 24px 0;" />
					<m-text
						pattern="title"
						:size="0"
					>
						Add a tip
					</m-text>
					<m-text :size="-1">
						100% of the tip goes to the kitchen
					</m-text>
					<m-choice
						v-model="selected"
						style="font-size: 12px; line-height: 1.2;"
					>
						<m-choice-option value="choice-1">
							<strong>10%</strong><br>
							$1.00
						</m-choice-option>
						<m-choice-option value="choice-2">
							<strong>15%</strong><br>
							$3.00
						</m-choice-option>
						<m-choice-option value="choice-3">
							<strong>20%</strong><br>
							$5.00
						</m-choice-option>
						<m-choice-option
							value="choice-4"
						>
							Other
						</m-choice-option>
					</m-choice>
					<m-divider style="margin: 24px 0;" />
					<m-input
						placeholder="Add gift card or coupon"
						variant="outline"
					/>
					<m-divider style="margin: 24px 0;" />
					<div class="row">
						<strong>Subtotal (2 items)</strong>
						<span class="side-label"><strong>$14.00</strong></span>
					</div>
					<div class="row">
						Taxes
						<span class="side-label">$1.56</span>
					</div>
					<div class="row">
						Tip (10%)
						<span class="side-label">$1.36</span>
					</div>
					<m-text :size="-1">
						Total will be calculated at checkout
					</m-text>
					<m-divider style="margin: 24px 0;" />
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
import Trash from '@square/maker-icons/Trash';
import { MTheme } from '@square/maker/components/Theme';
import { MText } from '@square/maker/components/Text';
import { MDivider } from '@square/maker/components/Divider';
import { MImage } from '@square/maker/components/Image';
import { MStepper } from '@square/maker/components/Stepper';
import { MContainer } from '@square/maker/components/Container';
import { MRadio } from '@square/maker/components/Radio';
import { MCheckbox } from '@square/maker/components/Checkbox';
import { MInput } from '@square/maker/components/Input';
import { MButton } from '@square/maker/components/Button';
import { MTextButton } from '@square/maker/components/TextButton';
import { MChoice, MChoiceOption } from '@square/maker/components/Choice';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';

export default {
	components: {
		MenuIcon,
		ShoppingBagIcon,
		XIcon,
		Trash,
		MTheme,
		MText,
		MDivider,
		MImage,
		MStepper,
		MContainer,
		MRadio,
		MCheckbox,
		MInput,
		MButton,
		MTextButton,
		MChoice,
		MChoiceOption,
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
			size: 'sm',
			selected: 'choice-1',
			quantity: 1,
			nestedThemeProfile: 'primary-bold',
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

.icon-sm {
	width: 16px;
	height: 16px;
}

.banner {
	min-height: 200px;
	background-image: url(https://source.unsplash.com/Kwdp-0pok-I/400x250);
	background-repeat: no-repeat;
	background-size: cover;
}

.item,
.cart-item {
	display: flex;
	gap: 20px;
	padding: 20px 0;
}

.item-title,
.item-price,
.item-description {
	margin-bottom: 16px;
}

.item .item-description {
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
	border-radius: var(--radii-default, 16px);
}

.detail-image {
	height: 250px;
}

.option {
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 44px;
}

.cart-item {
	display: flex;
	flex-direction: row-reverse;
	gap: 20px;
	justify-content: space-between;
	padding: 20px 0;
}

.cart-item .item-title {
	margin: 0;
}

.cart-content {
	display: flex;
	flex-direction: column;
	flex-grow: 3;
	gap: 30px;
	align-content: space-between;
	height: 84px;
}

.cart-text,
.cart-controls {
	display: flex;
	justify-content: space-between;
}

.cart-text {
	align-items: center;
}

.cart-media {
	order: 1;
	width: 84px;
	height: 84px;
	overflow: hidden;
	border-radius: var(--radii-default, 16px);
}

.row {
	display: flex;
	justify-content: space-between;
	line-height: 1.5;
}

.row .side-label {
	text-align: right;
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
	color: var(--maker-color-body);
	font-weight: var(--font-weights-text, normal);
	font-size: var(--font-base-size);
	font-family: var(--maker-font-body-font-family, inherit);
	background-color: var(--maker-color-background);
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
