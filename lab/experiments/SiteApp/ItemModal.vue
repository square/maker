<template>
	<m-modal>
		<div class="cover-photo">
			<m-image
				:src="item.photo"
			/>
		</div>

		<m-container
			:label="item.name"
			size="large"
			class="section"
		>
			<m-text
				:size="-1"
				style="margin: 0 0 16px 0;"
			>
				{{ item.description }}
			</m-text>
		</m-container>

		raw unwrapped text in modal

		<m-container
			v-for="oneOf in item.oneOf"
			:key="oneOf.name"
			:label="oneOf.name"
			class="section has-options"
		>
			<template #requirement-label>
				Pick one
			</template>
			<div
				v-for="(option, i) in oneOf.options"
				:key="option.name"
				style="padding-top: 16px;"
			>
				<div class="option-cost">
					<m-radio
						v-model="oneOf.selected"
						:value="option.name"
						class="option-control"
					>
						{{ option.name }}
					</m-radio>
					<m-text
						v-if="option.cost"
						:size="-1"
						class="option-cost-label"
					>
						{{ formatCost(option.cost) }}
					</m-text>
				</div>
				<m-divider v-if="i+1 !== oneOf.options.length" />
			</div>
		</m-container>

		<m-container
			v-for="anyOf in item.anyOf"
			:key="anyOf.name"
			:label="anyOf.name"
			class="section has-options"
		>
			<template #requirement-label>
				Pick any
			</template>
			<div
				v-for="(option, i) in anyOf.options"
				:key="option.name"
				style="padding-top: 16px;"
			>
				<div class="option-cost">
					<m-checkbox
						v-model="anyOf.selected"
						:value="option.name"
						class="option-control"
					>
						{{ option.name }}
					</m-checkbox>
					<m-text
						v-if="option.cost"
						:size="-1"
						class="option-cost-label"
					>
						{{ formatCost(option.cost) }}
					</m-text>
				</div>
				<m-divider v-if="i+1 !== anyOf.options.length" />
			</div>
		</m-container>

		<m-container
			label="Special requests"
			class="section"
			style="margin-bottom: 120px;"
		>
			<m-input
				placeholder="allergies, extra sauce, no onions, etc"
			/>
			<m-stepper
				v-model="item.quantity"
				style="margin-top: 16px;"
				:min="1"
			/>
		</m-container>

		<m-inline-action-bar>
			<m-action-bar-button
				key="close"
				@click="modalApi.close()"
			>
				<x-icon class="icon" />
			</m-action-bar-button>
			<m-action-bar-button
				key="primary"
				align="center"
				full-width
				@click="modalApi.close()"
			>
				Add to order
				<template #information>
					{{ formatCost(addAmount) }}
				</template>
			</m-action-bar-button>
		</m-inline-action-bar>
	</m-modal>
</template>

<script>
/* eslint vue/no-mutating-props: 0, max-len: 0, unicorn/no-reduce: 0 */
import { MContainer } from '@square/maker/components/Container';
import { MModal, modalApi } from '@square/maker/components/Modal';
import { MImage } from '@square/maker/components/Image';
import { MText } from '@square/maker/components/Text';
import { MRadio } from '@square/maker/components/Radio';
import { MDivider } from '@square/maker/components/Divider';
import { MInput } from '@square/maker/components/Input';
import { MStepper } from '@square/maker/components/Stepper';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import { MCheckbox } from '@square/maker/components/Checkbox';
import XIcon from '@square/maker-icons/X';

export default {
	components: {
		MModal,
		MImage,
		MContainer,
		MText,
		MRadio,
		MDivider,
		MInput,
		MStepper,
		MInlineActionBar,
		MActionBarButton,
		MCheckbox,
		XIcon,
	},

	inject: {
		modalApi,
	},

	props: {
		item: {
			type: Object,
			required: true,
		},
	},

	computed: {
		addAmount() {
			let baseCost = Number.NaN;
			if (this.item.cost) {
				baseCost = this.item.cost;
			}

			if (!baseCost && this.item.oneOf) {
				const oneOf = this.item.oneOf[0];
				const { selected } = oneOf;
				if (selected) {
					baseCost = oneOf.options.find((option) => option.name === selected).cost;
				}
			}

			if (!this.item.anyOf) {
				return this.item.quantity * baseCost;
			}

			const startCost = 0;
			let additiveCost = startCost;
			const incrementBy = 1;
			const startIndex = 0;
			for (let i = startIndex; i < this.item.anyOf.length; i += incrementBy) {
				const anyOf = this.item.anyOf[i];
				const { selected } = anyOf;
				additiveCost += anyOf.options.map((option) => {
					if (selected.includes(option.name)) {
						return option.cost;
					}
					const notSelectedCost = 0;
					return notSelectedCost;
				}).reduce((sum, current) => sum + current, startCost);
			}
			return this.item.quantity * (baseCost + additiveCost);
		},
		canPlaceOrder() {
			if (!this.item.oneOf) {
				return true;
			}
			if (this.item.oneOf.every((oneOf) => !!oneOf.selected)) {
				return true;
			}
			return false;
		},
	},

	methods: {
		formatCost(integer) {
			const zero = 0;
			if (Number.isNaN(integer) || (!integer && integer !== zero)) {
				return '';
			}
			const centsInDollar = 100;
			const centsDigits = 2;
			const float = integer / centsInDollar;
			const string = float.toFixed(centsDigits);
			return `$${string}`;
		},
	},
};
</script>

<style scoped>
.modal {
	background-color: inherit;
}

.section {
	margin-bottom: 16px;
}

.option-cost {
	display: flex;
	align-items: center;
	margin-bottom: 16px;
}

.option-control {
	flex: 1 0 auto;
}

.option-cost-label {
	flex: 0 0 auto;
	margin: 0;
}

.has-options {
	padding-bottom: 16px;
}

.icon {
	width: 24px;
	height: 24px;
}

.cover-photo {
	width: 100%;
	height: 280px;
}
</style>
