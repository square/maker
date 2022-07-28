<template>
	<m-theme
		class="demo"
		:theme="discountTheme"
		:style="inlineStyles"
	>
		<div class="theme-controls">
			<label>
				<m-text pattern="title">
					background color
				</m-text>
				<input
					v-model="backgroundColor"
					type="color"
				>
			</label>
			<label>
				<m-text pattern="title">
					primary color
				</m-text>
				<input
					v-model="primaryColor"
					type="color"
				>
			</label>
			<m-text pattern="title">
				discounts theme
			</m-text>
			<pre>{{ JSON.stringify(discountTheme, null, 2) }}</pre>
		</div>
		<div class="theme-preview">
			<m-text pattern="title">
				discount icons
			</m-text>
			<div class="icons">
				<m-icon
					class="inline-discount-icon"
					name="discount"
				/>
				<div class="blocky-discount-icon">
					<m-icon name="discount" />
				</div>
				<m-icon
					class="inline-discount-icon"
					name="discountTag"
				/>
				<div class="blocky-discount-icon">
					<m-icon name="discountTag" />
				</div>
			</div>
			<m-text pattern="title">
				discount pills
			</m-text>
			<div class="pills">
				<m-pill pattern="discount">
					BUY 1, GET 10% OFF
				</m-pill>
				<m-pill pattern="discount">
					BUY 3, GET 50% OFF
				</m-pill>
				<m-pill pattern="discountOutline">
					BUY 1, GET 10% OFF
				</m-pill>
				<m-pill pattern="discountOutline">
					BUY 3, GET 50% OFF
				</m-pill>
				<m-pill pattern="discountSubtle">
					BUY 1, GET 10% OFF
				</m-pill>
				<m-pill pattern="discountSubtle">
					BUY 3, GET 50% OFF
				</m-pill>
				<m-text pattern="title">
					regular pills
				</m-text>
				<m-pill
					v-for="pattern in defaultPillPatterns"
					:key="pattern"
					:pattern="pattern"
				>
					{{ pattern }} pill
				</m-pill>
			</div>
			<m-text pattern="title">
				discount notices
			</m-text>
			<div class="notices">
				<m-notice
					pattern="discount"
					variant="inline"
				>
					BUY 1, GET 10% OFF
					<template #actions>
						<m-text-button pattern="discount">
							Redeem
						</m-text-button>
					</template>
				</m-notice>
				<m-notice
					pattern="discount"
					icon-name="discountTag"
					variant="block"
				>
					BUY 3, GET 50% OFF
					<template #actions>
						<m-text-button pattern="discount">
							Redeem
						</m-text-button>
					</template>
				</m-notice>
			</div>
			<m-text pattern="title">
				discount cards
			</m-text>
			<div class="cards">
				<m-card class="discount-card">
					<div class="discount-details">
						<m-text
							pattern="title"
							font-weight="600"
							:size="-1"
						>
							30% off Wood Incense Burners
						</m-text>
						<m-text
							:size="-2"
						>
							Expires Tomorrow
						</m-text>
					</div>
					<div
						class="blocky-discount-icon justify-end-self"
					>
						<m-icon name="discount" />
					</div>
					<m-text-button
						class="align-end-self"
						pattern="discount"
						style="padding: 0;"
					>
						View item
					</m-text-button>
					<m-text-button
						class="align-end-self justify-end-self"
						pattern="discount"
						style="padding: 0;"
					>
						View info
					</m-text-button>
				</m-card>
				<m-card class="discount-card">
					<div class="discount-details">
						<m-text
							pattern="title"
							font-weight="600"
							:size="-1"
						>
							20% off select Bouquets with purchase of 1 Vase
						</m-text>
						<m-text
							:size="-2"
						>
							Discount display in cart
						</m-text>
					</div>
					<div
						class="blocky-discount-icon justify-end-self"
					>
						<m-icon name="discountTag" />
					</div>
					<m-text-button
						class="align-end-self"
						pattern="discount"
						style="padding: 0;"
					>
						View items
					</m-text-button>
					<m-text-button
						class="align-end-self justify-end-self"
						pattern="discount"
						style="padding: 0;"
					>
						View info
					</m-text-button>
				</m-card>
			</div>
		</div>
	</m-theme>
</template>

<script>
import { MTheme, defaultTheme } from '@square/maker/components/Theme';
import { MPill } from '@square/maker/components/Pill';
import { MNotice } from '@square/maker/components/Notice';
import { MCard } from '@square/maker/components/Card';
import { MText } from '@square/maker/components/Text';
import { MIcon } from '@square/maker/components/Icon';
import { MTextButton } from '@square/maker/components/TextButton';
import ZapIcon from '@square/maker-icons/Zap';
import TagIcon from '@square/maker-icons/Tag';
import makerColors from '@square/maker/utils/maker-colors';

export default {
	components: {
		MTheme,
		MPill,
		MNotice,
		MText,
		MTextButton,
		MCard,
		MIcon,
	},
	data() {
		return {
			primaryColor: '#cd2026', // critical
			backgroundColor: '#ffffff', // white
			defaultPillPatterns: Object.keys(defaultTheme().pill.patterns),
		};
	},
	computed: {
		inlineStyles() {
			const colors = this.discountTheme.colors.contextualPrimary;
			return {
				'--color-primary-subtle': colors.subtle,
				'--color-primary-fill': colors.fill,
				'--color-primary-on-fill': colors.onFill,
				'--color-primary-text': colors.text,
			};
		},
		discountTheme() {
			return {
				colors: makerColors(this.backgroundColor, this.primaryColor),
				icons: {
					discount: ZapIcon,
					discountTag: TagIcon,
				},
				pill: {
					patterns: {
						discount: {
							textColor: '@colors.contextualPrimary.onFill',
							bgColor: '@colors.contextualPrimary.fill',
						},
						discountOutline: {
							textColor: '@colors.contextualPrimary.text',
							bgColor: 'transparent',
						},
						discountSubtle: {
							textColor: '@colors.contextualPrimary.text',
							bgColor: '@colors.contextualPrimary.subtle',
						},
					},
				},
				notice: {
					patterns: {
						discount: {
							iconName: 'discount',
							iconColor: '@colors.contextualPrimary.fill',
							color: '@colors.contextualPrimary.text',
							bgColor: '@colors.contextualPrimary.subtle',
						},
					},
				},
				textbutton: {
					patterns: {
						discount: {
							color: '@colors.contextualPrimary.text',
						},
					},
				},
			};
		},
	},
};
</script>

<style scoped>
.demo {
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	padding: 16px;
	font-family: arial, sans-serif;
}

.theme-controls,
.theme-preview {
	display: block;
	width: 400px;
}

.inline-discount-icon {
	color: var(--color-primary-text);
}

.blocky-discount-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	color: var(--color-primary-text);
	background-color: var(--color-primary-subtle);
	border-radius: var(--maker-shape-default-border-radius);
}

.discount-card {
	display: grid;
	grid-template-rows: 1fr auto;
	grid-template-columns: 1fr auto;
	row-gap: 8px;
	column-gap: 8px;
}

.justify-end-self {
	justify-self: end;
}

.align-end-self {
	align-self: end;
}

label {
	cursor: pointer;
}

input {
	cursor: pointer;
}

.icons {
	color: var(--maker-color-primary);
}

.icons > *,
.pills > *,
.notices > *,
.cards > * {
	margin: 0 8px 8px 0;
}
</style>
