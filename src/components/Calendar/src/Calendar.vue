<template>
	<div
		:class="$s.Calendar"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<div :class="$s.CalendarHeader">
			<m-button
				:disabled="isCalendarNavDisabled(-1)"
				color="#f2f2f2"
				size="small"
				variant="primary"
				@click="incrementMonth(-1)"
			>
				<chevron-left
					:class="$s.CalendarHeaderButtonIcon"
				/>
			</m-button>

			<span :class="$s.CalendarHeaderTitle">
				{{ monthName }}
			</span>

			<m-button
				:disabled="isCalendarNavDisabled(1)"
				size="small"
				variant="primary"
				color="#f2f2f2"
				@click="incrementMonth(1)"
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
	endOfMonth,
	addDays,
	isToday,
	isSameDay,
	isSameMonth,
	isSameYear,
	addMonths,
	parseISO,
	formatISO,
} from 'date-fns';
import { MButton } from '@square/maker/components/Button';
import ChevronLeft from '@square/maker-icons/ChevronLeft';
import ChevronRight from '@square/maker-icons/ChevronRight';

const isIsoFormat = (string) => !string || /^\d{4}-\d{2}-\d{2}$/.test(string); // YYYY-MM-DD

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
		 * Calendar locale. Defaults to browser locale.
		 */
		locale: {
			type: String,
			default: undefined,
		},
		/**
		 * Selected date value in ISO format.
		 */
		selectedDate: {
			type: String,
			default: undefined,
			validator: isIsoFormat,
		},
		/**
		 * Disable the dates before the min-date in ISO format.
		 */
		minDate: {
			type: String,
			default: undefined,
			validator: isIsoFormat,
		},
		/**
		 * Disable the dates after the max-date in ISO format.
		 */
		maxDate: {
			type: String,
			default: undefined,
			validator: isIsoFormat,
		},
		/**
		 * List of disabled dates in ISO format.
		 */
		disabledDates: {
			type: Array,
			default: () => ([]),
			validator: (disabledDates) => disabledDates.every((date) => isIsoFormat(date)),
		},
	},

	data() {
		return {
			viewingDate: this.selectedDateObj() || new Date(),
		};
	},

	computed: {
		monthName() {
			return this.viewingDate.toLocaleString(this.locale, { month: 'long', year: 'numeric' });
		},

		weekdays() {
			const firstDayOfWeek = startOfWeek(new Date());
			const weekdays = Array.from({ length: 7 }, (_, i) => addDays(firstDayOfWeek, i));
			return weekdays.map((date) => date.toLocaleDateString(this.locale, { weekday: 'short' }));
		},

		weeks() {
			const month = this.viewingDate.getMonth();
			const dateOfMonth = startOfMonth(this.viewingDate);

			const weeks = [];
			let week = [];
			while (dateOfMonth.getMonth() === month) {
				const weekday = dateOfMonth.getDay();
				week[weekday] = dateOfMonth.getDate();

				if (weekday === 6) {
					weeks.push(week);
					week = [];
				}

				dateOfMonth.setDate(dateOfMonth.getDate() + 1);
			}

			weeks.push(week);

			return weeks;
		},

		maxDateObj() {
			return this.maxDate && parseISO(this.maxDate);
		},

		minDateObj() {
			return this.minDate && parseISO(this.minDate);
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
				? parseISO(this.selectedDate)
				: undefined;
		},

		/**
		 * Returns a Date object of the given date
		 * @param {number} date
		 * @return {Date}
		 */
		getDeriveViewingDateObj(date) {
			return new Date(
				this.viewingDate.getFullYear(),
				this.viewingDate.getMonth(),
				date,
			);
		},

		/**
		 * Converts the Date obj into a date string
		 * @param {number} [date]
		 * @return {(undefined|string)}
		 */
		deriveViewingDate(date) {
			return date && formatISO(
				this.getDeriveViewingDateObj(date),
				{ representation: 'date' },
			);
		},

		/**
		 * Determines if the previous/next month buttons should be disabled
		 * @param {number} direction
		 * @return {boolean}
		 */
		isCalendarNavDisabled(direction) {
			const projectedDate = addMonths(this.viewingDate, direction);

			if (direction === -1 && this.minDateObj) {
				return startOfMonth(this.minDateObj) > startOfMonth(projectedDate);
			}

			if (direction === 1 && this.maxDateObj) {
				return endOfMonth(this.maxDateObj) < endOfMonth(projectedDate);
			}

			return false;
		},

		/**
		 * Increment/decrement the calendar month
		 * @param {number} incrementBy
		 */
		incrementMonth(incrementBy) {
			this.viewingDate = addMonths(this.viewingDate, incrementBy);
		},

		/**
		 * Determines if the date is selected
		 * @param {number} date
		 * @return {boolean}
		 */
		isDateSelected(date) {
			const selectedDateObject = this.selectedDate ? parseISO(this.selectedDate) : new Date();
			const viewingDateObject = this.getDeriveViewingDateObj(date);
			return isSameDay(selectedDateObject, viewingDateObject)
				&& isSameMonth(selectedDateObject, viewingDateObject)
				&& isSameYear(selectedDateObject, viewingDateObject);
		},

		/**
		 * Determines if the date is disabled
		 * @param {number} date
		 * @return {boolean}
		 */
		isDateDisabled(date) {
			const viewingDateObject = this.getDeriveViewingDateObj(date);

			if (this.minDateObj && this.minDateObj > viewingDateObject) {
				return true;
			}

			if (this.maxDateObj && this.maxDateObj < viewingDateObject) {
				return true;
			}

			const isoDateString = this.deriveViewingDate(date);
			return this.disabledDates.includes(isoDateString);
		},

		/**
		 * Determines if the date is today
		 * @param {number} date
		 * @return {boolean}
		 */
		isToday(date) {
			return isToday(this.getDeriveViewingDateObj(date));
		},

		/**
		 * Emits a new Date ISO string with a new date value
		 * @param {number} day
		 */
		emitDate(day) {
			if (!this.isDateDisabled(day)) {
				/**
				 * New ISO date
				 * @property {string}
				 */
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
