<template>
	<div
		:style="{ backgroundColor }"
	>
		<m-theme
			:theme="theme"
		>
			<div :class="$s.Surface">
				<div
					:class="$s.Scale"
				>
					<m-heading
						:size="1"
						style="margin-bottom: 20px;"
					>
						Maker Theme
					</m-heading>
					<m-heading
						:size="0"
					>
						Colors
					</m-heading>
					<div :class="$s.Profile">
						<label>
							<input
								v-model="backgroundColor"
								type="color"
							>
							Background
						</label>
						<label>
							<input
								v-model="primaryColor"
								type="color"
							>
							Primary
						</label>
						<label>
							<input
								v-model="headingColor"
								type="color"
							>
							Heading
						</label>
						<label>
							<input
								v-model="textColor"
								type="color"
							>
							Text
						</label>
						<m-divider />
						<div :class="$s.palette">
							<div :class="$s.color">
								<span :style="{ backgroundColor : 'var(--neutral-0)' }" /> Neutral 0
							</div>
							<div :class="$s.color">
								<span :style="{ backgroundColor : 'var(--neutral-10)' }" /> Neutral 10
							</div>
							<div :class="$s.color">
								<span :style="{ backgroundColor : 'var(--neutral-20)' }" /> Neutral 20
							</div>
							<div :class="$s.color">
								<span :style="{ backgroundColor : 'var(--neutral-80)' }" /> Neutral 80
							</div>
							<div :class="$s.color">
								<span :style="{ backgroundColor : 'var(--neutral-90)' }" /> Neutral 90
							</div>
							<div :class="$s.color">
								<span :style="{ backgroundColor : 'var(--neutral-100)' }" /> Neutral 100
							</div>
						</div>
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
						<m-segmented-control
							v-model="selected"
							size="small"
						>
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
							variant="outline"
							placeholder="Delivery address"
						/>
						<m-input
							placeholder="Disabled text input"
							disabled
						/>
						<m-notice type="error">
							There has been error notice
						</m-notice>
						<m-notice type="warning">
							Warning please take note
						</m-notice>
						<m-notice type="success">
							Action has been successfully completed
						</m-notice>
					</div>
					<m-divider />
					<div>
						<m-button
							full-width
							@click="openItemModal(item)"
						>
							Open modal
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
							House special wings
						</m-heading>
						<m-radio value="1">
							Buffalo
						</m-radio>
						<br>
						<m-radio
							value="2"
							disabled
						>
							Ginger soy
						</m-radio>
						<br>
						<m-radio
							value="2"
							selected="2"
							disabled
						>
							Disabled and selected
						</m-radio>
						<m-select
							placeholder="Select dip"
							:options="options"
						/>
						<m-select
							placeholder="Select dip"
							:options="options"
							variant="outline"
						/>
						<m-select
							placeholder="Disabled select"
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
						<br>
						<m-checkbox
							disabled
							checked
						>
							Disabled and selected
						</m-checkbox>
						<m-textarea placeholder="Additional requests" />
						<m-textarea
							placeholder="Additional requests"
							variant="outline"
						/>
						<m-textarea
							placeholder="Disabled textbox"
							disabled
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
					<m-divider />
					<div>
						<m-text-button>
							<info :class="$s.Icon" />  Learn more
						</m-text-button>
						<m-image-uploader
							@image-uploader:change="setImages"
						/>
					</div>
				</div>
			</div>
			<m-modal-layer />
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
import { MModalLayer } from '@square/maker/components/Modal';

import CheckCircle from '@square/maker-icons/CheckCircle';
import Info from '@square/maker-icons/Info';

import {
	addDays,
	addMonths,
	formatISO,
} from 'date-fns';

import ItemModal from './SiteApp/ItemModal.vue';
import storeData from './SiteApp/data';

// Below will be supplied by website-springboard
const IS_LIGHT_THRESHOLD = 0.32;
const RATIOS = {
	light: {
		10: 0.05,
		20: 0.155,
		80: 0.527,
		90: 0.9,
	},
	dark: {
		10: 0.1,
		20: 0.255,
		80: 0.55,
		90: 0.95,
	},
};
function isNoticeContrastColor(bgHex) {
	const lowerBound = 0.15;
	const upperBound = 0.85;
	return chroma(bgHex).hsl()[2] > lowerBound && chroma(bgHex).hsl()[2] < upperBound;
}

function contrastColors(bgHex) {
	const isLight = chroma(bgHex).luminance() > IS_LIGHT_THRESHOLD;
	const contrastColor = isLight ? '#000000' : '#ffffff';
	const levels = isLight ? RATIOS.light : RATIOS.dark;
	const colors = {
		'neutral-0': isLight ? '#ffffff' : '#000000',
		'neutral-100': !isLight ? '#ffffff' : '#000000',
	};

	// if (isLight) {
	// 	colors['neutral-90'] = 'rgb(142, 142, 147)';
	// 	colors['neutral-80'] = 'rgb(174, 174, 178)';
	// 	colors['neutral-20'] = 'rgb(229, 229, 234)';
	// 	colors['neutral-10'] = 'rgb(242, 242, 247)';
	// } else {
	// 	colors['neutral-10'] = 'rgb(44, 44, 46)';
	// 	colors['neutral-20'] = 'rgb(58, 58, 60)';
	// 	colors['neutral-80'] = 'rgb(99, 99, 102)';
	// 	colors['neutral-90'] = 'rgb(142, 142, 147)';
	// }

	Object.entries(levels).forEach(([name, level]) => {
		colors[`neutral-${name}`] = chroma.mix(bgHex, contrastColor, level, 'lab').hex();
	});

	return {
		...colors,
		'color-elevation': isLight ? '#ffffff' : colors['neutral-20'],
		'color-overlay': isLight ? 'rgba(0, 0, 0, 0.32)' : 'rgba(255, 255, 255, 0.32)',
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
		MModalLayer,
	},

	mixins: [
		MModalLayer.apiMixin,
	],

	data() {
		return {
			backgroundColor: '#fffbeb',
			primaryColor: '#14433d',
			headingColor: '#000000',
			textColor: '#000000',
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
			item: storeData.items[0],
		};
	},

	computed: {
		theme() {
			const colors = contrastColors(this.backgroundColor);
			return {
				colors: {
					primary: this.primaryColor,
					background: this.backgroundColor,
					heading: this.headingColor,
					text: this.textColor,
					...colors,
				},
				notice: {
					color: isNoticeContrastColor(this.backgroundColor) ? colors['neutral-90'] : '',
				},
				modal: {
					bgColor: this.backgroundColor,
				},
				actionbarbutton: {
					shape: 'rounded',
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
	color: var(--neutral-90);
	font-family: Arial, Helvetica, sans-serif;

	& > div {
		flex: 1;

		&:not(:first-child) {
			flex: 2;
			max-width: 460px;
		}
	}
}

.Profile {
	display: flex;
	flex-direction: column;

	& label {
		margin-bottom: 8px;
	}

	& input {
		margin-right: 16px;
	}
}

.palette {
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-top: 16px;
}

.palette > .color {
	display: flex;
	align-items: center;
}

.palette > .color span {
	display: inline-block;
	width: 50px;
	height: 24px;
	margin-right: 16px;
}

.Preview {
	border: 1px solid var(--neutral-20);

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
