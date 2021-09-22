<template>
	<div class="page">
		<m-theme
			:theme="theme"
			class="theme"
		>
			<h1 class="heading">
				Default Heading
			</h1>
			<p class="text">
				Default text. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Consequatur debitis excepturi quibusdam modi necessitatibus accusamus, pariatur ut
				aliquam nihil dolores assumenda quam non maxime voluptatum doloremque. Quaerat
				dolores fugit consequuntur!
			</p>

			<h1 class="heading">
				Profiles / Modes / Color Styles
			</h1>
			<div class="profiles">
				<div
					v-for="(set, index) in profiles"
					:key="index"
					:class="[
						'profile',
						set,
					]"
					@click="changeMode(set)"
				>
					<div class="profile-content">
						<div class="heading profile-title profile-subtitle">
							Subtitle
						</div>
						<div class="heading profile-title">
							Title
						</div>
						<p class="text profile-text">
							Example paragraph text
						</p>
						<div class="controls">
							<m-button>
								Button
							</m-button>
							<m-button variant="secondary">
								Button
							</m-button>
						</div>
					</div>
				</div>
			</div>
			<h1 class="heading">
				Local Overrides
			</h1>
			<m-button color="#2a9d8f">
				Green button
			</m-button>
			<m-button
				color="#e9c46a"
				variant="secondary"
				border-radius="60px"
			>
				Secondary Round
			</m-button>
			<m-button
				color="#f4a261"
				variant="tertiary"
			>
				Tertiary
			</m-button>

			<h1 class="heading">
				Component Test
			</h1>
			<div class="profiles">
				<div class="demo">
					<div class="mobile-preview">
						<m-container>
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
						</m-container>
						<m-container>
							<m-heading
								:size="0"
							>
								Enter delivery address
							</m-heading>
							<m-text :size="-1">
								<check-circle class="Icon" /> Pickup until 10:00 pm
							</m-text>
							<m-text :size="-1">
								<check-circle class="Icon" /> Estimated prep time: 15 minutes
							</m-text>
							<m-notice
								type="info"
								variant="block"
							>
								Switching to shipping will change the scheduled time you selected
							</m-notice>
						</m-container>

						<m-divider />

						<m-container>
							<m-input
								placeholder="Delivery address"
								style="margin-bottom: 16px;"
							/>
							<m-select
								placeholder="Select options"
								:options="options"
							/>
						</m-container>
						<m-divider />
						<m-inline-action-bar>
							<m-action-bar-button
								key="confirm"
								full-width
							>
								Start Order
							</m-action-bar-button>
						</m-inline-action-bar>
					</div>
				</div>
				<div class="demo">
					<div class="mobile-preview">
						<m-container>
							<m-heading
								:size="0"
							>
								Schedule Order
							</m-heading>
							<m-text :size="-1">
								<check-circle class="Icon" /> No minimum
							</m-text>
							<m-text :size="-1">
								<check-circle class="Icon" /> No fees
							</m-text>
						</m-container>
						<m-divider />
						<m-container style="overflow-y: scroll;">
							<m-heading
								:size="0"
								style="margin-bottom: 0;"
							>
								Select date and time
							</m-heading>
							<m-text :size="-1">
								Choose from the available timeslots for your order
							</m-text>
							<m-choice v-model="choice">
								<m-choice-option value="choice-1">
									Choice
								</m-choice-option>
								<m-choice-option value="choice-2">
									Choice
								</m-choice-option>
								<m-choice-option value="choice-3">
									Choice
								</m-choice-option>
								<m-choice-option
									:disabled="true"
									value="choice-4"
								>
									Choice
								</m-choice-option>
							</m-choice>
						</m-container>
						<m-calendar
							v-model="selectedDate"
							:locale="locale"
							:min-date="minDate"
							:max-date="maxDate"
							:disabled-dates="disabledDates"
						/>
						<m-divider />
						<m-container>
							<div
								v-for="(time) in times"
								:key="time.name"
							>
								<m-radio
									v-model="selectedTime"
									:value="time.name"
									class="option"
								>
									{{ time.name }}
								</m-radio>

								<m-divider />
							</div>
						</m-container>
						<m-inline-action-bar>
							<m-action-bar-button
								key="close"
								color="#f6f6f6"
							>
								<x-icon class="action-icon" />
							</m-action-bar-button>
							<m-action-bar-button
								key="confirm"
								full-width
							>
								Schedule
							</m-action-bar-button>
						</m-inline-action-bar>
					</div>
				</div>
				<div class="demo">
					<div class="mobile-preview">
						<m-container>
							<m-heading
								:size="0"
							>
								How to get it
							</m-heading>
							<m-button
								variant="secondary"
								full-width
								style="margin-bottom: 16px;"
							>
								Delivery: 82 Peter St
							</m-button>
							<m-button
								variant="secondary"
								full-width
							>
								As soon as possible
							</m-button>
						</m-container>
						<m-divider />
						<m-container>
							<div class="order">
								<div class="order-item">
									<m-image
										src="https://source.unsplash.com/64x64/?food"
										class="order-image"
										width="64"
									/>
									<div style="flex-grow: 2; margin-left: 16px;">
										<m-heading
											:size="-1"
										>
											Food item
										</m-heading>
										<div class="item-controls">
											<m-stepper
												v-model="smallNumber"
												min="0"
												max="10"
												size="small"
											/>
											<m-button
												variant="secondary"
												size="small"
											>
												Remove
											</m-button>
										</div>
									</div>
								</div>
								<m-divider />
								<div class="order-item">
									<m-image
										src="https://source.unsplash.com/64x64/?food"
										class="order-image"
										width="64"
									/>
									<div style="flex-grow: 2; margin-left: 16px;">
										<m-heading
											:size="-1"
										>
											Food item
										</m-heading>
										<div class="item-controls">
											<m-stepper
												v-model="smallNumber"
												min="0"
												max="10"
												size="small"
											/>
											<m-button
												variant="secondary"
												size="small"
											>
												Remove
											</m-button>
										</div>
									</div>
									<m-divider />
								</div>
							</div>
						</m-container>
						<m-divider />
						<m-container>
							<m-button
								variant="secondary"
								full-width
							>
								Add more items
							</m-button>
						</m-container>
						<m-inline-action-bar>
							<m-action-bar-button
								key="close"
								color="#f6f6f6"
							>
								<x-icon class="action-icon" />
							</m-action-bar-button>
							<m-action-bar-button
								key="confirm"
								full-width
							>
								Order
							</m-action-bar-button>
						</m-inline-action-bar>
					</div>
				</div>
			</div>
		</m-theme>
	</div>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import { MButton } from '@square/maker/components/Button';
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import { MContainer } from '@square/maker/components/Container';
import { MInput } from '@square/maker/components/Input';
import { MSelect } from '@square/maker/components/Select';
import { MRadio } from '@square/maker/components/Radio';
import { MDivider } from '@square/maker/components/Divider';
import CheckCircle from '@square/maker-icons/CheckCircle';
import XIcon from '@square/maker-icons/X';
import { MNotice } from '@square/maker/components/Notice';
import { MSegmentedControl, MSegment } from '@square/maker/components/SegmentedControl';
import { MChoice, MChoiceOption } from '@square/maker/components/Choice';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import { MCalendar } from '@square/maker/components/Calendar';
import { MImage } from '@square/maker/components/Image';
import { MStepper } from '@square/maker/components/Stepper';
import {
	addDays,
	addMonths,
	formatISO,
} from 'date-fns';
import { theme1 } from './themes'; // this should probably be a json request, but enough for testing

export default {
	components: {
		MTheme,
		MButton,
		MHeading,
		MContainer,
		MInput,
		MText,
		MSelect,
		MRadio,
		MDivider,
		CheckCircle,
		XIcon,
		MNotice,
		MSegmentedControl,
		MSegment,
		MChoice,
		MChoiceOption,
		MInlineActionBar,
		MActionBarButton,
		MCalendar,
		MImage,
		MStepper,
	},
	data() {
		return {
			theme: theme1,
			profiles: [
				'profile1',
				'profile2',
				'profile3',
				'profile4',
				'profile5',
				'profile6',
			],
			options: [
				{
					value: '1',
					label: 'Short Option 1',
				},
				{
					value: '2',
					label: 'Longer Option 2',
				},
				{
					value: '3',
					label: 'Even Longer Option 3',
				},
				{
					value: '4',
					disabled: true,
					label: 'Really Long Disabled Option 4',
				},
			],
			selected: 'short',
			choice: 'choice-1',
			selectedTime: '12:00pm',
			times: [
				{
					name: '12:00pm',
					selected: true,
				},
				{
					name: '12:15pm',
				},
				{
					name: '12:30pm',
				},
				{
					name: '12:45pm',
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
			smallNumber: 0,
		};
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
		changeMode(mode) {
			// very rudimentary "default profile switcher"
			// console.log(mode);
			document.body.className = '';
			document.body.classList.add(mode);
		},
	},
};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Open+Sans&display=swap');
</style>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
	margin-bottom: 1em;
}

p {
	margin-top: 0;
}

.theme {
	height: 100%;
	margin: 0;
	padding: 60px;
	font-family: -apple-system, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

/* DEMO
 * Theme component is currently setting default background and text color
 * Color defaults with property fallbacks on what would be the component CSS
 */
.heading {
	color: var(--maker-colors-heading, var(--maker-colors-text, #000));
	font-family: var(--maker-fonts-heading);
}

.text {
	color: var(--maker-colors-text, #000);
	font-family: var(--maker-fonts-text);
}

.button--primary {
	color: #fff;
	background: var(--maker-colors-primary, #000);
	border: 1px solid var(--maker-colors-primary, #000);
}

.button--secondary {
	color: var(--maker-colors-secondary, var(--maker-colors-primary, #000));
	background: transparent;
	border: 1px solid var(--maker-colors-secondary, var(--maker-colors-primary, #000));
}

.profiles {
	display: grid;
	grid-gap: 24px;
	grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
}

.profile {
	display: flex;
	justify-content: center;
	padding: 32px;
	color: var(--maker-colors-text, #000);
	text-align: left;
	background: var(--maker-colors-background, #fff);
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 10px;
}

.profile-content {
	width: 100%;
}

.profile-title {
	margin: 0 0 0.6rem;
	font-weight: bold;
	font-size: 22px;
	line-height: 1;
}

.profile-subtitle {
	margin: 0;
	font-size: 16px;
	line-height: 1.3;
}

.profile-text {
	margin: 0.2rem 0 1rem;
	font-weight: 500;
	font-size: 16px;
	line-height: 1;
}

.controls {
	display: flex;
	gap: 8px;
}

.profile-button,
.profile-button-secondary {
	width: 90px;
	height: 32px;
	border-radius: 24px;
}

.Icon {
	width: 16px;
	margin-right: 8px;
	vertical-align: middle;
}

.action-icon {
	width: 24px;
	height: 24px;
}

.demo {
	position: relative;
	height: 650px;
}

.mobile-preview {
	height: 100%;
	padding: 16px 0 0;
	overflow: scroll;
	border: 1px solid gray;
	border-radius: 20px;
}

.option {
	display: flex;
	align-items: center;
	padding: 16px 0;
}

.order-item {
	display: flex;
	margin-bottom: 16px;
}

.order-image {
	width: 64px;
	height: 64px;
}

.item-controls {
	display: flex;
	justify-content: space-between;
}
</style>
