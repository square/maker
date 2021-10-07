<template>
	<div
		:style="{ backgroundColor }"
	>
		<m-theme
			:class="$s.Surface"
			:theme="theme"
		>
			<div
				:class="$s.Scale"
			>
				<m-heading
					:size="1"
				>
					Color modes
				</m-heading>
				<m-text :size="-1">
					Creating a consistent UI experience against any background color
				</m-text>
				<m-heading
					:size="0"
				>
					Select a primary color
				</m-heading>
				<input
					v-model="primaryColor"
					type="color"
				>
				<m-heading
					:size="0"
				>
					Select a background color
				</m-heading>
				<input
					v-model="backgroundColor"
					type="color"
				>
				<m-heading
					:size="0"
				>
					Generated contrast colors
				</m-heading>
				<m-text :size="-1">
					--color-100, --color-300, --color-800, --color-900
				</m-text>
				<div>
					<span :style="{ backgroundColor : 'var(--color-100)' }" />
					<span :style="{ backgroundColor : 'var(--color-300)' }" />
					<span :style="{ backgroundColor : 'var(--color-800)' }" />
					<span :style="{ backgroundColor : 'var(--color-900)' }" />
				</div>
			</div>
			<div>
				<div
					:class="$s.Preview"
				>
					<div>
						<m-heading
							:size="0"
						>
							Enter delivery address
						</m-heading>
						<m-text :size="-1">
							<check-circle :class="$s.Icon" /> Pickup until 10:00 pm
						</m-text>
						<m-text :size="-1">
							<check-circle :class="$s.Icon" /> Estimated prep time: 15 minutes
						</m-text>
						<m-notice
							type="info"
							variant="block"
						>
							Switching to shipping will change the scheduled time you selected
						</m-notice>
					</div>
					<m-divider />
					<div>
						<m-input
							placeholder="Delivery address"
						/>
						<m-input
							placeholder="Apt, floor, Suite, etc. (Optional)"
						/>
					</div>
					<m-divider />
					<div>
						<m-choice
							v-model="choice"
						>
							<m-choice-option value="choice-1">
								Choice 1
							</m-choice-option>
							<m-choice-option value="choice-2">
								Choice 2
							</m-choice-option>
							<m-choice-option value="choice-3">
								Choice 3
							</m-choice-option>
						</m-choice>
					</div>
					<div>
						<m-choice
							v-model="choice"
							:selected-color="primaryColor"
						>
							<m-choice-option value="choice-1">
								Choice 1
							</m-choice-option>
							<m-choice-option value="choice-2">
								Choice 2
							</m-choice-option>
							<m-choice-option value="choice-3">
								Choice 3
							</m-choice-option>
						</m-choice>
					</div>

					<m-divider />
					<div>
						<m-button
							full-width
							variant="primary"
							:color="contrastColor"
						>
							Primary
						</m-button>
					</div>
				</div>
			</div>
			<div>
				<div
					:class="$s.Preview"
				>
					<div>
						<m-heading
							:size="0"
						>
							House special wings
						</m-heading>
						<m-radio value="1">
							Buffalo
						</m-radio>
						<br>
						<m-radio value="2">
							Ginger soy
						</m-radio>
						<m-select
							placeholder="Select quantity"
							:options="options"
						/>
						<m-stepper
							v-model="number"
							min="0"
							max="2"
							style="justify-content: flex-start;"
						/>
					</div>
					<m-divider />
					<div>
						<m-checkbox>
							Include cutlery and utensils
						</m-checkbox>
						<m-textarea placeholder="Additional requests" />
					</div>
					<m-divider :class="$s.Divider" />
					<div>
						<m-button
							full-width
							:color="contrastColor"
						>
							Button
						</m-button>
					</div>
				</div>
			</div>
		</m-theme>
	</div>
</template>

<script>
import chroma from 'chroma-js';

import { MTheme } from '@square/maker/components/Theme';
import { MChoice, MChoiceOption } from '@square/maker/components/Choice';
import { MDivider } from '@square/maker/components/Divider';
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import { MNotice } from '@square/maker/components/Notice';
import { MInput } from '@square/maker/components/Input';
import { MSelect } from '@square/maker/components/Select';
import { MTextarea } from '@square/maker/components/Textarea';
import { MStepper } from '@square/maker/components/Stepper';
import { MCheckbox } from '@square/maker/components/Checkbox';
import { MRadio } from '@square/maker/components/Radio';
import { MButton } from '@square/maker/components/Button';

import CheckCircle from '@square/maker-icons/CheckCircle';

const IS_LIGHT_THRESHOLD = 0.32;

export default {
	components: {
		MTheme,
		MChoice,
		MChoiceOption,
		MDivider,
		MHeading,
		MText,
		MNotice,
		MInput,
		MSelect,
		MTextarea,
		MStepper,
		MCheckbox,
		MRadio,
		MButton,
		CheckCircle,
	},

	data() {
		return {
			choice: 'choice-1',
			primaryColor: '#0073F9',
			backgroundColor: '#fff',
			number: 0,
			options: [
				{
					value: '6',
					label: '6 piece',
				},
				{
					value: '12',
					label: '12 piece',
				},
			],
		};
	},

	computed: {
		theme() {
			return {
				colors: {
					primary: this.primaryColor,
					background: this.backgroundColor,
				},
			};
		},

		contrastColor() {
			return chroma(this.backgroundColor).luminance() > IS_LIGHT_THRESHOLD
				? '#000000' : '#ffffff';
		},

		luminance() {
			return chroma(this.backgroundColor).luminance();
		},
	},
};
</script>

<style module="$s">
.Surface {
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	width: 100%;
	max-width: 1400px;
	min-height: 100vh;
	margin: auto;
	padding: 25px 50px;
	color: var(--color-900);
	font-family: Arial, Helvetica, sans-serif;

	& > div {
		width: 30%;
	}
}

.Scale {
	& > * {
		margin-bottom: 16px;
	}

	& span {
		display: inline-block;
		width: 40px;
		height: 32px;
	}
}

.Preview {
	border: 1px solid var(--color-300);

	& > div {
		padding: 24px 36px;
	}

	& > div > * {
		margin-bottom: 16px;
	}

	& > div > *:last-child {
		margin-bottom: 0;
	}
}

.Icon {
	width: 16px;
	margin-right: 8px;
	vertical-align: middle;
}
</style>
