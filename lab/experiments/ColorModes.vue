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

				<m-divider />
				<br>

				<m-checkbox
					v-model="hasCustomPrimaryColor"
				>
					Custom primary color
				</m-checkbox>

				<input
					v-if="hasCustomPrimaryColor"
					v-model="primaryColor"
					type="color"
				>
				<m-heading
					:size="1"
				>
					Choose a background color
				</m-heading>
				<input
					v-model="backgroundColor"
					type="color"
				>
				<m-heading
					:size="1"
				>
					Generated contrast colors
				</m-heading>
				<m-text :size="-1">
					color-100, color-300, color-700, color-800, color-900
				</m-text>
				<div>
					<span :style="{ backgroundColor : 'var(--color-100)' }" />
					<span :style="{ backgroundColor : 'var(--color-300)' }" />
					<span :style="{ backgroundColor : 'var(--color-700)' }" />
					<span :style="{ backgroundColor : 'var(--color-800)' }" />
					<span :style="{ backgroundColor : 'var(--color-900)' }" />
				</div>
			</div>
			<div
				:class="$s.Preview"
			>
				<div>
					<m-heading
						:size="0"
					>
						Enter delivery address
					</m-heading>
					<m-segmented-control v-model="selected">
						<m-segment value="short">
							Pickup
						</m-segment>
						<m-segment value="medium">
							Delivery
						</m-segment>
						<m-segment value="long">
							Shipping
						</m-segment>
					</m-segmented-control>
					<div>
						<m-choice
							v-model="choice"
						>
							<m-choice-option value="10am">
								10 AM
							</m-choice-option>
							<m-choice-option value="1pm">
								1 PM
							</m-choice-option>
							<m-choice-option
								value="2pm"
								disabled
							>
								2 PM
							</m-choice-option>
						</m-choice>
					</div>
					<m-heading
						:size="-1"
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
						disabled
					/>
				</div>
				<m-divider />
				<div>
					<m-button
						full-width
					>
						Checkout
					</m-button>
					<m-text-button>
						<info :class="$s.Icon" />  Learn more
					</m-text-button>
					<m-image-uploader
						@image-uploader:change="setImages"
					/>
				</div>
			</div>
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
						placeholder="Select dip"
						:options="options"
					/>
					<m-select
						placeholder="Select quantity"
						:options="options"
						disabled
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
					<m-checkbox disabled>
						Provide compostable utensils
					</m-checkbox>
					<m-textarea placeholder="Additional requests" />
					<m-textarea
						placeholder="Additional requests"
						disabled
					/>
				</div>
				<m-divider :class="$s.Divider" />
				<div>
					<m-button
						full-width
					>
						Button
					</m-button>
					<m-button
						full-width
						disabled
					>
						Schedule for later
					</m-button>
				</div>
			</div>
			<div
				:class="$s.Preview"
			>
				<div>
					<m-heading
						:size="0"
					>
						Schedule order
					</m-heading>
					<m-text :size="-1">
						<check-circle :class="$s.Icon" /> No minimum
					</m-text>
					<m-text :size="-1">
						<check-circle :class="$s.Icon" /> No fees
					</m-text>
				</div>
				<m-divider />
				<div>
					<m-heading
						:size="0"
					>
						Select date and time
					</m-heading>
					<m-text :size="-1">
						Choose from the availble timeslots for your order
					</m-text>
					<m-calendar
						v-model="selectedDate"
						:locale="locale"
						:min-date="minDate"
						:max-date="maxDate"
						:disabled-dates="disabledDates"
					/>
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
import { MButton, MTextButton } from '@square/maker/components/Button';
import { MCalendar } from '@square/maker/components/Calendar';
import { MImageUploader } from '@square/maker/components/ImageUploader';
import { MSegmentedControl, MSegment } from '@square/maker/components/SegmentedControl';

import CheckCircle from '@square/maker-icons/CheckCircle';
import Info from '@square/maker-icons/Info';

import {
	addDays,
	addMonths,
	formatISO,
} from 'date-fns';

// Below will be supplied by website-springboard
const IS_LIGHT_THRESHOLD = 0.32;
const RATIOS = {
	light: {
		100: 0.05,
		300: 0.14,
		700: 0.35,
		800: 0.58,
		900: 0.8,
	},
	dark: {
		100: 0.1,
		300: 0.3,
		700: 0.5,
		800: 0.8,
		900: 0.9,
	},
};

function contrastColors(bgHex) {
	const isLight = chroma(bgHex).luminance() > IS_LIGHT_THRESHOLD;
	const contrastColor = isLight ? '#000000' : '#ffffff';
	const levels = isLight ? RATIOS.light : RATIOS.dark;
	const colors = {};

	Object.entries(levels).forEach(([name, level]) => {
		colors[`color-${name}`] = chroma.mix(bgHex, contrastColor, level, 'lab').hex();
	});

	return {
		...colors,
		'color-elevation': isLight ? '#ffffff' : colors['color-300'],
	};
}
// Above will be supplied by website-springboard

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
		Info,
		MCalendar,
		MImageUploader,
		MSegmentedControl,
		MSegment,
		MTextButton,
	},

	data() {
		return {
			backgroundColor: '#ffffff',
			choice: '10am',
			number: 0,
			options: [
				{
					value: 'island',
					label: 'Thousand Island',
				},
				{
					value: 'ranch',
					label: 'Ranch',
				},
			],
			selectedDate: '',
			minDate: '',
			maxDate: '',
			disabledDates: [],
			locale: undefined,
			localeSelection: [
				'en-US',
				'da',
				'de',
				'es',
				'fr',
				'it',
				'ja',
				'nl',
				'nb',
				'pl',
				'pt',
				'ru',
				'sv',
				'tr',
				'zh-CN',
				'zh-TW',
				'ko',
			],
			selected: 'medium',
			images: [],
		};
	},

	computed: {
		theme() {
			const contrastingColors = contrastColors(this.backgroundColor);
			return {
				colors: {
					primary: this.hasCustomPrimaryColor ? this.primaryColor : undefined,
					background: this.backgroundColor,
					heading: contrastingColors['color-900'],
					text: contrastingColors['color-800'],
					...contrastingColors,
				},
			};
		},

		contrastColor() {
			return chroma(this.backgroundColor).luminance() > IS_LIGHT_THRESHOLD
				? '#000000' : '#ffffff';
		},
	},

	mounted() {
		const today = new Date();
		const arbitraryAddMonths = 4;
		const maxDate = formatISO(addMonths(today, arbitraryAddMonths), {
			representation: 'date',
		});
		const arbitraryAddDays = -1;
		const minDate = formatISO(addDays(today, arbitraryAddDays), {
			representation: 'date',
		});
		const arbitraryRelativeDisabledDate = 5;
		const disabledDate = formatISO(addDays(today, arbitraryRelativeDisabledDate), {
			representation: 'date',
		});

		this.minDate = minDate;
		this.maxDate = maxDate;
		this.disabledDates.push(disabledDate);
	},

	methods: {
		setImages(images) {
			this.images = images;
		},
	},
};
</script>

<style module="$s">
.Surface {
	display: flex;
	gap: 25px;
	justify-content: center;
	box-sizing: border-box;
	width: 100%;
	min-height: 100vh;
	margin: auto;
	padding: 25px 50px;
	color: var(--color-900);
	font-family: Arial, Helvetica, sans-serif;

	& > div {
		flex: 1;

		&:not(:first-child) {
			flex: 2;
			max-width: 460px;
		}
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

	/* stylelint-disable-next-line no-descending-specificity */
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
