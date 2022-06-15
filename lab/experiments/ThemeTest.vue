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
					<m-text
						pattern="title"
						font-size="20px"
						style="margin-bottom: 16px;"
					>
						Maker Theme
					</m-text>
					<m-text
						pattern="title"
						font-size="16px"
					>
						Typography
					</m-text>
					<div :class="$s.Typography">
						base size
						<br>
						<input
							v-model="fontsBaseSize"
							type="range"
							min="16"
							max="24"
							step="1"
						>
						<br>
						{{ fontsBaseSize }}
						<br>
						type scale
						<br>
						<input
							v-model="fontsTypeScale"
							type="range"
							min="1.15"
							max="1.62"
							step="0.01"
						>
						<br>
						{{ fontsTypeScale }}
						<br>
						<m-divider :class="$s.Divider" />
						<m-text
							pattern="title"
							font-size="16px"
						>
							Patterns
						</m-text>
						<div
							v-for="textPattern in Object.keys(textPatterns)"
							:key="textPattern"
						>
							{{ textPattern }}
							<br>
							<select
								v-model="textPatterns[textPattern].fontFamily"
							>
								<option>
									serif
								</option>
								<option>
									sans-serif
								</option>
								<option>
									monospace
								</option>
								<option>
									inherit
								</option>
								<option>
									arial
								</option>
							</select>
							<br>
							<input
								v-model="textPatterns[textPattern].fontWeight"
								type="range"
								min="100"
								max="900"
								step="100"
							>
							<br>
							{{ textPatterns[textPattern].fontWeight }}
							<br>
							<br>
						</div>
					</div>
					<m-divider :class="$s.Divider" />
					<m-text
						pattern="title"
						font-size="16px"
					>
						Colors
					</m-text>
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
								v-model="bodyColor"
								type="color"
							>
							Body
						</label>
						<m-divider :class="$s.Divider" />
						<div :class="$s.palette">
							<div :class="$s.color">
								<span :style="{ backgroundColor : 'var(--maker-color-neutral-0)' }" /> Neutral 0
							</div>
							<div :class="$s.color">
								<span :style="{ backgroundColor : 'var(--maker-color-neutral-10)' }" /> Neutral 10
							</div>
							<div :class="$s.color">
								<span :style="{ backgroundColor : 'var(--maker-color-neutral-20)' }" /> Neutral 20
							</div>
							<div :class="$s.color">
								<span :style="{ backgroundColor : 'var(--maker-color-neutral-80)' }" /> Neutral 80
							</div>
							<div :class="$s.color">
								<span :style="{ backgroundColor : 'var(--maker-color-neutral-90)' }" /> Neutral 90
							</div>
							<div :class="$s.color">
								<span :style="{ backgroundColor : 'var(--maker-color-neutral-100)' }" /> Neutral 100
							</div>
						</div>
						<br>
						<m-divider />
						<m-text
							pattern="title"
							:size="0"
						>
							Default Shape
						</m-text>
						<select
							v-model="shape"
						>
							<option
								v-for="(value, index) in shapes"
								:key="index"
								:value="value"
							>
								{{ value.name }}
							</option>
						</select>
						<template
							v-if="shape.name === 'custom'"
						>
							<br>
							default radius:
							<select
								v-model="customShape.defaultBorderRadius"
							>
								<option
									v-for="(value, index) in borderRadiusOptions"
									:key="index"
									:value="value"
								>
									{{ value }}
								</option>
							</select>
							<br>
							card radius:
							<select
								v-model="customShape.cardBorderRadius"
							>
								<option
									v-for="(value, index) in borderRadiusOptions"
									:key="index"
									:value="value"
								>
									{{ value }}
								</option>
							</select>
							<br>
							button radius:
							<select
								v-model="customShape.buttonBorderRadius"
							>
								<option
									v-for="(value, index) in borderRadiusOptions"
									:key="index"
									:value="value"
								>
									{{ value }}
								</option>
							</select>
							<br>
							image radius:
							<select
								v-model="customShape.imageBorderRadius"
							>
								<option
									v-for="(value, index) in borderRadiusOptions"
									:key="index"
									:value="value"
								>
									{{ value }}
								</option>
							</select>
						</template>
						<br>
						<m-divider />
						<m-text
							pattern="title"
							:size="0"
						>
							Icon Style
						</m-text>
						<select
							v-model="iconStyle"
						>
							<option value="filled">
								filled
							</option>
							<option value="outline">
								outline
							</option>
						</select>
					</div>
				</div>
				<div
					:class="$s.Preview"
				>
					<div>
						<m-text
							pattern="title"
							:size="0"
						>
							Enter delivery address
						</m-text>
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
						<m-card>
							<m-text
								pattern="title"
								:size="-1"
							>
								Enter delivery address
							</m-text>
							<m-text :size="-1">
								<check-circle :class="$s.Icon" /> Pickup until 10:00 pm
							</m-text>
							<m-text :size="-1">
								<check-circle :class="$s.Icon" /> Estimated prep time: 15 minutes
							</m-text>
						</m-card>
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
							placeholder="Disabled text input"
							disabled
						/>
						<m-input
							variant="outline"
							placeholder="Delivery address"
						/>
						<m-input
							placeholder="Disabled text input"
							variant="outline"
							disabled
						/>
						<div :class="$s.pills">
							<m-pill
								v-for="pattern in pillPatterns"
								:key="pattern"
								:pattern="pattern"
							>
								{{ pattern }} pill
							</m-pill>
						</div>
						<m-notice pattern="info">
							Here's some info for you
						</m-notice>
						<m-notice pattern="error">
							There has been error notice
						</m-notice>
						<m-notice pattern="warning">
							Warning please take note
						</m-notice>
						<m-notice pattern="success">
							Action has been successfully completed
						</m-notice>
						<m-notice
							pattern="info"
							variant="block"
						>
							Here's some info for you
						</m-notice>
						<m-notice
							pattern="error"
							variant="block"
						>
							There has been error notice
						</m-notice>
						<m-notice
							pattern="warning"
							variant="block"
						>
							Warning please take note
						</m-notice>
						<m-notice
							pattern="success"
							variant="block"
						>
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
					<m-divider />
					<m-container
						label="label"
						sublabel="sublabel"
						requirement-label="requirement label"
					>
						container content
					</m-container>
					<m-divider />
					<m-pin-input :pin-length="3" />
				</div>
				<div
					:class="$s.Preview"
				>
					<div>
						<m-text
							pattern="title"
							:size="0"
						>
							House special wings
						</m-text>
						<m-radio value="1">
							Buffalo
							<template #sublabel>
								mildly spicy
							</template>
						</m-radio>
						<br>
						<m-radio
							value="2"
							disabled
						>
							Ginger soy
							<template #sublabel>
								very tasty
							</template>
						</m-radio>
						<br>
						<m-radio
							value="2"
							selected="2"
							disabled
						>
							Disabled and selected
							<template #sublabel>
								obligatory sublabel
							</template>
						</m-radio>
						<m-select
							placeholder="Select dip"
							:options="options"
						/>
						<m-select
							placeholder="Disabled select"
							:options="options"
							disabled
						/>
						<m-select
							placeholder="Select dip"
							:options="options"
							variant="outline"
						/>
						<m-select
							placeholder="Select dip"
							:options="options"
							variant="outline"
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
							<template #sublabel>
								they're so shiny
							</template>
						</m-checkbox>
						<m-checkbox disabled>
							Provide compostable utensils
							<template #sublabel>
								not as shiny
							</template>
						</m-checkbox>
						<br>
						<m-checkbox
							disabled
							checked
						>
							Disabled and checked
							<template #sublabel>
								obligatory sublabel
							</template>
						</m-checkbox>
						<m-textarea placeholder="Additional requests" />
						<m-textarea
							placeholder="Disabled textbox"
							disabled
						/>
						<m-textarea
							placeholder="Additional requests"
							variant="outline"
						/>
						<m-textarea
							placeholder="Disabled textbox"
							variant="outline"
							disabled
						/>
					</div>
					<m-divider />
					<div>
						Go to
						<m-link
							target="_blank"
							to="https://google.com"
						>
							Google
						</m-link>.
						<br>
						Go to
						<m-link
							:to="{ name: 'themes-index' }"
						>
							<m-icon name="success" />
							Themes lab
							<m-icon name="info" />
							suffix text
						</m-link>.
					</div>
				</div>
				<div
					:class="$s.Preview"
				>
					<div>
						<m-text
							pattern="title"
							:size="0"
						>
							Schedule order
						</m-text>
						<m-text :size="-1">
							<check-circle :class="$s.Icon" /> No minimum
						</m-text>
						<m-text :size="-1">
							<check-circle :class="$s.Icon" /> No fees
						</m-text>
						<m-text-button>
							<info :class="$s.Icon" />  Learn more
						</m-text-button>
						<m-image
							src="https://source.unsplash.com/900x600/?vacation"
						/>
						<m-image
							style="width: 120px;"
							src="https://source.unsplash.com/900x600/?vacation"
						/>
						<m-image-uploader
							@image-uploader:change="setImages"
						/>
					</div>
					<m-divider />
					<div>
						<m-text
							pattern="title"
							:size="0"
						>
							Select date and time
						</m-text>
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
						<m-toggle>label</m-toggle>
					</div>
					<m-divider />
					<div :class="$s.TypographyPreview">
						<m-text
							v-for="pattern in ['headline', 'title', 'paragraph', 'label']"
							:key="pattern"
							:pattern="pattern"
						>
							{{ pattern }}
						</m-text>
						<m-text
							v-for="size in [7, 6, 5, 4, 3, 2, 1, 0, -1, -2]"
							:key="size"
							:size="size"
						>
							Size {{ size }}
						</m-text>
					</div>
				</div>
			</div>
			<m-modal-layer />
		</m-theme>
	</div>
</template>

<script>
import chroma from 'chroma-js';

import { MTheme, defaultTheme } from '@square/maker/components/Theme';
import { MChoice, MChoiceOption } from '@square/maker/components/Choice';
import { MDivider } from '@square/maker/components/Divider';
import { MText } from '@square/maker/components/Text';
import { MNotice } from '@square/maker/components/Notice';
import { MInput } from '@square/maker/components/Input';
import { MSelect } from '@square/maker/components/Select';
import { MTextarea } from '@square/maker/components/Textarea';
import { MStepper } from '@square/maker/components/Stepper';
import { MCheckbox } from '@square/maker/components/Checkbox';
import { MRadio } from '@square/maker/components/Radio';
import { MButton } from '@square/maker/components/Button';
import { MTextButton } from '@square/maker/components/TextButton';
import { MCalendar } from '@square/maker/components/Calendar';
import { MImageUploader } from '@square/maker/components/ImageUploader';
import { MSegmentedControl, MSegment } from '@square/maker/components/SegmentedControl';
import { MCard } from '@square/maker/components/Card';
import { MImage } from '@square/maker/components/Image';
import { MModalLayer } from '@square/maker/components/Modal';
import { MContainer } from '@square/maker/components/Container';
import { MPinInput } from '@square/maker/components/PinInput';
import { MToggle } from '@square/maker/components/Toggle';
import { MPill } from '@square/maker/components/Pill';
import { MLink } from '@square/maker/components/Link';
import { MIcon } from '@square/maker/components/Icon';

import AlertTriangleFilled from '@square/maker-icons/AlertTriangleFilled';
import AlertCircleFilled from '@square/maker-icons/AlertCircleFilled';
import CheckCircleFilled from '@square/maker-icons/CheckCircleFilled';
import InfoFilled from '@square/maker-icons/InfoFilled';
import AlertTriangle from '@square/maker-icons/AlertTriangle';
import AlertCircle from '@square/maker-icons/AlertCircle';
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
const NOTICE_MIN_CONTRAST = 4;
const RATIOS = {
	light: {
		10: 0.05,
		20: 0.155,
		80: 0.527,
		90: 0.9,
	},
	dark: {
		10: 0.255,
		20: 0.37,
		80: 0.55,
		90: 0.95,
	},
};

// generates neutrals, elevation, overlay, & contextual colors
function contrastColors(bgHex) {
	const isLight = chroma(bgHex).luminance() > IS_LIGHT_THRESHOLD;
	const contrastColor = isLight ? '#000000' : '#ffffff';
	const levels = isLight ? RATIOS.light : RATIOS.dark;
	const colors = {
		background: bgHex,
		'neutral-0': isLight ? '#ffffff' : '#000000',
		'neutral-100': !isLight ? '#ffffff' : '#000000',
	};
	colors.body = colors['neutral-100'];

	Object.entries(levels).forEach(([name, level]) => {
		colors[`neutral-${name}`] = chroma.mix(
			bgHex,
			contrastColor,
			level,
			'lab',
		).hex();
	});

	if (isLight) {
		colors.critical = {
			fill: '#cd2026',
			onFill: '#ffffff',
			text: '#a82826',
			subtle: '#f6eceb',
		};
		colors.warning = {
			fill: '#ffbf00',
			onFill: '#000000',
			text: '#7e662a',
			subtle: '#f9eecf',
		};
		colors.success = {
			fill: '#008000',
			onFill: '#ffffff',
			text: '#0a7A06',
			subtle: '#ebf1eb',
		};
	} else {
		colors.critical = {
			fill: '#cd2026',
			onFill: '#ffffff',
			text: '#ff7566',
			subtle: colors['neutral-10'],
		};
		colors.warning = {
			fill: '#ffbf00',
			onFill: '#000000',
			text: '#ffbf00',
			subtle: colors['neutral-10'],
		};
		colors.success = {
			fill: '#008000',
			onFill: '#ffffff',
			text: '#64cc52',
			subtle: colors['neutral-10'],
		};
	}

	for (const colorType of ['critical', 'warning', 'success']) {
		if (chroma.contrast(colors[colorType].text, colors.background) < NOTICE_MIN_CONTRAST) {
			// next line assumes fill color has good contrast against white & black
			colors[colorType].onFill = colors[colorType].fill;
			colors[colorType].text = contrastColor;
			colors[colorType].fill = contrastColor;
		}
	}

	return {
		...colors,
		elevation: isLight ? '#ffffff' : colors['neutral-20'],
		overlay: isLight ? 'rgba(0, 0, 0, 0.32)' : 'rgba(255, 255, 255, 0.32)',
	};
}
// Above will be supplied by website-springboard

const filledIcons = {
	critical: AlertCircleFilled,
	warning: AlertTriangleFilled,
	success: CheckCircleFilled,
	info: InfoFilled,
};
const outlineIcons = {
	critical: AlertCircle,
	warning: AlertTriangle,
	success: CheckCircle,
	info: Info,
};

export default {
	components: {
		MTheme,
		MChoice,
		MChoiceOption,
		MContainer,
		MDivider,
		MText,
		MNotice,
		MInput,
		MSelect,
		MTextarea,
		MStepper,
		MCheckbox,
		MRadio,
		MButton,
		MCalendar,
		MImageUploader,
		MSegmentedControl,
		MSegment,
		MCard,
		MImage,
		MTextButton,
		MModalLayer,
		MPinInput,
		MToggle,
		MPill,
		CheckCircle,
		Info,
		MLink,
		MIcon,
	},

	mixins: [
		MModalLayer.apiMixin,
	],

	data() {
		return {
			backgroundColor: '#ffffff',
			primaryColor: '#14433d',
			headingColor: '#000000',
			bodyColor: '#000000',
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
			fontsBaseSize: '16',
			fontsTypeScale: '1.17',
			textPatterns: {
				headline: {
					fontFamily: 'arial',
					fontWeight: '700',
				},
				title: {
					fontFamily: 'serif',
					fontWeight: '500',
				},
				paragraph: {
					fontFamily: 'sans-serif',
					fontWeight: '400',
				},
				label: {
					fontFamily: 'monospace',
					fontWeight: '500',
				},
			},
			shape: {
				name: 'squared',
				defaultBorderRadius: '0px',
				cardBorderRadius: '0px',
				buttonBorderRadius: '0px',
				imageBorderRadius: '0px',
			},
			shapes: [
				{
					name: 'squared',
					defaultBorderRadius: '0px',
					cardBorderRadius: '0px',
					buttonBorderRadius: '0px',
					imageBorderRadius: '0px',
				},
				{
					name: 'rounded',
					defaultBorderRadius: '8px',
					cardBorderRadius: '4px',
					buttonBorderRadius: '8px',
					imageBorderRadius: '16px',
				},
				{
					name: 'pill',
					defaultBorderRadius: '4px',
					cardBorderRadius: '8px',
					buttonBorderRadius: '32px',
					imageBorderRadius: '16px',
				},
				{
					name: 'custom',
					defaultBorderRadius: '0px',
					cardBorderRadius: '0px',
					buttonBorderRadius: '0px',
					imageBorderRadius: '0px',
				},
			],
			customShape: {
				defaultBorderRadius: '0px',
				cardBorderRadius: '0px',
				buttonBorderRadius: '0px',
				imageBorderRadius: '0px',
			},
			borderRadiusOptions: [
				'0px',
				'4px',
				'8px',
				'12px',
				'16px',
				'20px',
				'24px',
				'32px',
			],
			pillPatterns: Object.keys(defaultTheme().pill.patterns),
			iconStyle: 'filled',
		};
	},

	computed: {
		theme() {
			const colors = contrastColors(this.backgroundColor);
			const baseTen = 10;
			const icons = this.iconStyle === 'filled' ? filledIcons : outlineIcons;
			const theme = {
				colors: {
					...colors,
					primary: this.primaryColor,
					background: this.backgroundColor,
					heading: this.headingColor,
					body: this.bodyColor,
				},
				fonts: {
					baseSize: Number.parseInt(this.fontsBaseSize, baseTen),
					sizeScale: Number.parseFloat(this.fontsTypeScale, baseTen),
					heading: {
						fontFamily: this.textPatterns.title.fontFamily,
						fontWeight: this.textPatterns.title.fontWeight,
					},
					body: {
						fontFamily: this.textPatterns.paragraph.fontFamily,
						fontWeight: this.textPatterns.paragraph.fontWeight,
					},
					label: {
						fontFamily: this.textPatterns.label.fontFamily,
						fontWeight: this.textPatterns.label.fontWeight,
					},
				},
				icons,
				modal: {
					bgColor: this.backgroundColor,
				},
				shapes: {
					...(this.shape.name === 'custom' ? this.customShape : this.shape),
				},
				text: {
					patterns: {
						...this.textPatterns,
					},
				},
			};
			return theme;
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
.pills > * {
	margin: 4px;
}

.Surface {
	display: flex;
	gap: 25px;
	justify-content: center;
	box-sizing: border-box;
	width: 100%;
	min-height: 100vh;
	margin: auto;
	padding: 25px 50px;

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
	gap: 8px;
	margin: 8px 0;

	& input {
		margin-right: 16px;
	}
}

hr.Divider {
	margin: 8px 0;
}

.palette {
	display: flex;
	flex-direction: column;
	gap: 16px;
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
	border: 1px solid var(--maker-color-neutral-20);

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

/* stylelint-disable-next-line no-descending-specificity */
.TypographyPreview > * {
	margin: 0 !important;
}

.Icon {
	width: 16px;
	margin-right: 8px;
	vertical-align: middle;
}
</style>
