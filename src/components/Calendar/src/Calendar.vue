<template>
	<div
		:class="$s.Calendar"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<div :class="$s.CalendarHeader">
			<m-button
				:disabled="shouldDisableHeaderButton(-1)"
				:color="headerButtonColor"
				size="small"
				variant="primary"
				tabindex="-1"
				@click="incMonth(-1)"
			>
				<chevron-left
					:class="$s.CalendarHeaderButtonIcon"
				/>
			</m-button>

			<span :class="$s.CalendarHeaderTitle">
				{{ monthName }}
			</span>

			<m-button
				:disabled="shouldDisableHeaderButton(1)"
				size="small"
				variant="primary"
				tabindex="-1"
				color="#f2f2f2"
				@click="incMonth(1)"
			>
				<chevron-right
					:class="$s.CalendarHeaderButtonIcon"
				/>
			</m-button>
		</div>
		<table :class="$s.CalendarTable">
			<thead>
				<tr>
					<th
						v-for="day in weekdays"
						:key="`day-${day}`"
						:class="$s.DateHeaderCell"
					>
						{{ day }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(week, wi) in weeks"
					:key="`week-${wi}`"
				>
					<td
						v-for="(date, di) in week"
						:key="`date-${wi-di}`"
						:class="$s.DateCell"
						@click.prevent="emitDate(date)"
					>
						<button
							v-if="date"
							:class="[$s.DateCellButton, {
								[$s.selected]: isDateSelected(date),
								[$s.disabled]: isDateDisabled(date),
								[$s.today]: isToday(date)
							}]"
							type="button"
							tabindex="-1"
						>
							{{ date }}
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import {
	startOfWeek,
	startOfMonth,
	eachDayOfInterval,
	getDay,
	lastDayOfMonth,
	addDays,
	format,
	isToday,
	isAfter,
	isSameDay,
	isSameMonth,
	isSameYear,
	addMonths,
	parse,
} from 'date-fns';
import * as dateFnsLocale from 'date-fns/locale';
import { MButton } from '@square/maker/components/Button';
import ChevronLeft from '@square/maker-icons/ChevronLeft';
import ChevronRight from '@square/maker-icons/ChevronRight';

const localeOptions = Object.keys(dateFnsLocale);
const DATE_STRING_FORMAT = 'yyyy-MM-dd';
const isDateFormat = (string) => !string || /^\d{4}-\d{2}-\d{2}$/.test(string); // YYYY-MM-DD

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	components: {
		MButton,
		ChevronLeft,
		ChevronRight,
	},

	inheritAttrs: false,

	model: {
		prop: 'selectedDate',
		event: 'calendar:update',
	},

	props: {
		/**
		 * Language specific format to use
		 */
		locale: {
			type: String,
			default: 'enUS',
			validator: (locale) => localeOptions.includes(locale),
		},
		/**
		 * Selected date value (YYYY-MM-DD)
		 */
		selectedDate: {
			type: String,
			default: '',
			validator: isDateFormat,
		},
		/**
		 * Disable the dates before the min-date
		 */
		minDate: {
			type: String,
			default: '',
			validator: isDateFormat,
		},
		/**
		 * Disable the dates after the max-date
		 */
		maxDate: {
			type: String,
			default: '',
			validator: isDateFormat,
		},
		/**
		 * List of disabled dates
		 */
		disabledDates: {
			type: Array,
			default: () => ([]),
			validator: (v) => v.every((date) => isDateFormat(date)),
		},
	},

	data() {
		return {
			headerButtonColor: '#f2f2f2',
			viewingDate: this.selectedDateObj() || new Date(),
		};
	},

	computed: {
		localeModule() {
			return dateFnsLocale[this.locale] || dateFnsLocale.enUS;
		},

		monthName() {
			return format(this.viewingDate, 'MMMM yyyy', { locale: this.localeModule });
		},

		weekdays() {
			const date = new Date();
			const firstDOW = startOfWeek(date);
			return [...new Array(7)].map((_, i) => format(addDays(firstDOW, i), 'E', { locale: this.localeModule }));
		},

		weeks() {
			const start = startOfMonth(this.viewingDate);
			const end = lastDayOfMonth(this.viewingDate);
			const eachDay = eachDayOfInterval({ start, end });
			const emptyDays = [...new Array(getDay(eachDay[0]))];
			const weeks = [];

			[...emptyDays, ...eachDay].forEach((date, index) => {
				const key = Math.floor(index / 7);
				if (!weeks[key]) {
					weeks[key] = [];
				}
				const day = date ? format(date, 'd') : '';
				weeks[key].push(day);
			});

			return weeks;
		},
	},

	watch: {
		selectedDate() {
			const newViewingDate = this.selectedDateObj();
			if (newViewingDate) {
				this.viewingDate = newViewingDate;
			}
		},
	},

	methods: {
		/**
		 * Returns a Date object of the selected date
		 * @return {Date}
		 */
		selectedDateObj() {
			return this.selectedDate
				? this.getDateObj(this.selectedDate)
				: undefined;
		},

		/**
		 * Returns a Date object of the given date
		 * @return {Date}
		 */
		getDateObj(dateString) {
			if (!dateString) {
				return new Date();
			}
			return parse(dateString, DATE_STRING_FORMAT, new Date());
		},

		/**
		 * Returns a Date object of the given day
		 * @return {Date}
		 */
		getDeriveViewingDateObj(day) {
			return new Date(
				this.viewingDate.getFullYear(),
				this.viewingDate.getMonth(),
				day,
			);
		},

		/**
		 * Converts the Date obj into a date string
		 * @param {Date} [_day]
		 * @return {(undefined|String)}
		 */
		deriveViewingDate(_day) {
			if (!_day) {
				return undefined;
			}
			return format(this.getDeriveViewingDateObj(_day), DATE_STRING_FORMAT);
		},

		/**
		 * Determines if the previous/next buttons should be disabled
		 * @param {Number} [n]
		 * @return {Boolean}
		 */
		shouldDisableHeaderButton(n) {
			if (n > 0 && this.maxDate) {
				const maxDate = this.getDateObj(this.maxDate);
				return isSameMonth(maxDate, this.viewingDate);
			} if (n < 0 && this.minDate) {
				const minDate = this.getDateObj(this.minDate);
				return isSameMonth(minDate, this.viewingDate);
			}
			return false;
		},

		/**
		 * Changes the calendar month
		 * @param {Number} [n]
		 */
		incMonth(n) {
			this.viewingDate = addMonths(this.viewingDate, n);
		},

		/**
		 * Determines if the date is selected
		 * @param {String} [day]
		 * @return {Boolean}
		 */
		isDateSelected(day) {
			const selectedDateObject = this.getDateObj(this.selectedDate);
			const viewingDateObject = this.getDeriveViewingDateObj(day);
			return isSameDay(selectedDateObject, viewingDateObject)
				&& isSameMonth(selectedDateObject, viewingDateObject)
				&& isSameYear(selectedDateObject, viewingDateObject);
		},

		/**
		 * Determines if the date is disabled
		 * @param {String} [day]
		 * @return {Boolean}
		 */
		isDateDisabled(day) {
			let isDisabledDate = false;
			const date = this.deriveViewingDate(day);
			const viewingDateObject = this.getDeriveViewingDateObj(day);

			if (this.minDate && date) {
				const minDateObject = parse(this.minDate, DATE_STRING_FORMAT, new Date());
				isDisabledDate = isAfter(minDateObject, viewingDateObject);
			}
			if (this.maxDate && date && !isDisabledDate) {
				const maxDateObject = parse(this.maxDate, DATE_STRING_FORMAT, new Date());
				isDisabledDate = isAfter(viewingDateObject, maxDateObject);
			}

			return this.disabledDates.includes(date) || isDisabledDate;
		},

		/**
		 * Determines if the date is today
		 * @param {String} [day]
		 * @return {Boolean}
		 */
		isToday(day) {
			return isToday(this.getDeriveViewingDateObj(day));
		},

		/**
		 * Emits the new date
		 * @param {String} [day]
		 */
		emitDate(day) {
			if (!this.isDateDisabled(day)) {
				this.$emit('calendar:update', this.deriveViewingDate(day));
			}
		},
	},
};
</script>

<style module="$s">
.Calendar {
	--color-white: #fff;
	--color-white-40: rgba(255, 255, 255, 0.4);
	--color-white-95: rgba(255, 255, 255, 0.95);
	--color-black: #000;
	--color-black-10: rgba(0, 0, 0, 0.1);
	--color-black-20: rgba(0, 0, 0, 0.2);
	--color-black-40: rgba(0, 0, 0, 0.4);
	--color-black-50: rgba(0, 0, 0, 0.5);
	--font-size: 16px;
	--font-size-minus-1: 12px;
	--line-height: 24px;
	--line-height-minus-1: 16px;
	--chevron-size: 32px;
	--cell-size: 40px;
	--cell-padding: 4px;

	min-width: min-content;
	padding: 16px;
	font-size: var(--font-size);
	font-family: inherit;
	line-height: var(--line-height);
	background-color: var(--color-white);
	border-radius: 4px;
}

.CalendarHeader {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 8px;
}

.CalendarHeaderTitle {
	color: var(--color-black);
	font-weight: bold;
}

.CalendarHeaderButtonIcon {
	width: var(--chevron-size);
	height: var(--chevron-size);
}

.CalendarTable {
	width: 100%;
	border-collapse: separate;
	border-spacing: 0;
}

.DateHeaderCell {
	width: var(--cell-size);
	height: var(--cell-size);
	padding: var(--cell-padding);
	color: var(--color-black-50);
	font-weight: normal;
	font-size: var(--font-size-minus-1);
	line-height: var(--line-height-minus-1);
	text-transform: uppercase;
	cursor: initial;
}

.DateCell {
	padding: var(--cell-padding);
	overflow: hidden;
	color: var(--color-black);
	text-align: center;
	cursor: pointer;
}

.DateCellButton {
	width: var(--cell-size);
	height: var(--cell-size);
	padding: 0;
	font-size: inherit;
	background-color: inherit;
	border: none;
	border-radius: 8px;
	outline: none;
	cursor: inherit;
	transition: background-color 0.2s ease-in;
	user-select: none;
	touch-action: manipulation;

	&.selected {
		color: var(--color-white-95);
		background-color: var(--color-black);
	}

	&.today {
		border: 1px solid var(--color-black);
	}

	&.disabled {
		color: var(--color-black-40);
		cursor: not-allowed;

		&.today {
			color: var(--color-black-20);
		}

		&.selected {
			color: var(--color-white-40);
		}
	}
}

.DateCell:hover .DateCellButton:not(.selected):not(.disabled) {
	background-color: var(--color-black-10);
}
</style>
