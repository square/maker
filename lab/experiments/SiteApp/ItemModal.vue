<template>
	<m-modal>
		<div class="cover-photo">
			<m-image
				:src="item.photo"
			/>
		</div>

		<m-section
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
		</m-section>

		<m-section
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
				style="padding-top: 16px"
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
		</m-section>

		<m-section
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
				style="padding-top: 16px"
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
		</m-section>

		<m-section
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

				color="rgba(160, 121, 164, 0.3)"
			/>
		</m-section>

		<m-action-bar>
			<m-button
				key="close"
				size="large"
				shape="pill"
				:color="closeColor"
				@click="modalApi.close()"
			>
				<x-icon class="icon" />
			</m-button>
			<m-button
				key="primary"
				size="large"
				shape="pill"
				:color="addColor"
				:disabled="!canPlaceOrder"
				full-width
				@click="modalApi.close()"
			>
				Add to order
				<template #information>
					{{ formatCost(addAmount) }}
				</template>
			</m-button>
		</m-action-bar>
	</m-modal>
</template>

<script>
import { MSection } from '@square/maker/components/Section';
import { MHeading } from '@square/maker/components/Heading';
import { MModal, modalApi } from '@square/maker/components/Modal';
import { MImage } from '@square/maker/components/Image';
import { MText } from '@square/maker/components/Text';
import { MRadio } from '@square/maker/components/Radio';
import { MDivider } from '@square/maker/components/Divider';
import { MInput } from '@square/maker/components/Input';
import { MStepper } from '@square/maker/components/Stepper';
import { MActionBar } from '@square/maker/components/ActionBar';
import { MButton } from '@square/maker/components/Button';
import { MCheckbox } from '@square/maker/components/Checkbox';
import XIcon from '@square/maker-icons/X';

export default {
	components: {
		MHeading,
		MModal,
		MImage,
		MSection,
		MText,
		MRadio,
		MDivider,
		MInput,
		MStepper,
		MActionBar,
		MButton,
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
		closeColor() {
			if (this.canPlaceOrder) {
				return '#f6f6f6';
			}
			return 'rgb(160, 121, 164)';
		},
		addColor() {
			if (this.canPlaceOrder) {
				return 'rgb(160, 121, 164)';
			}
			return '#f6f6f6';
		},
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

			let additiveCost = 0;
			for (let i = 0; i < this.item.anyOf.length; i += 1) {
				const anyOf = this.item.anyOf[i];
				const { selected } = anyOf;
				additiveCost += anyOf.options.map((option) => {
					if (selected.includes(option.name)) {
						return option.cost;
					}
					return 0;
				}).reduce((sum, current) => sum + current, 0);
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
			if (Number.isNaN(integer) || (!integer && integer !== 0)) {
				return '';
			}
			const float = integer / 100;
			const string = float.toFixed(2);
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
