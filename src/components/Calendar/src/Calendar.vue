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
					>
						<button
							v-if="date"
							:class="[$s.DateCellButton, {
								[$s.selected]: isDateSelected(date),
								[$s.disabled]: isDateDisabled(date),
								[$s.today]: isToday(date),
							}]"
							type="button"
							tabindex="-1"
							@click.prevent="emitDate(date)"
						>
							{{ date.getDate() }}
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
	addMonths,
	parseISO,
	formatISO,
} from 'date-fns';
import { MButton } from '@square/maker/components/Button';
import ChevronLeft from '@square/maker-icons/ChevronLeft';
import ChevronRight from '@square/maker-icons/ChevronRight';

const formatISOdate = (dateObject) => formatISO(dateObject, { representation: 'date' });
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
		/**
		 * Calendar locale. Defaults to browser locale.
		 */
		locale: {
			type: String,
			default: undefined,
		},
	},

	data() {
		return {
			showingMonth: this.selectedDateObj || new Date(),
		};
	},

	computed: {
		monthName() {
			return this.showingMonth.toLocaleString(this.locale, { month: 'long', year: 'numeric' });
		},

		weekdays() {
			const firstDayOfWeek = startOfWeek(new Date());
			const weekdays = Array.from({ length: 7 }, (_, i) => addDays(firstDayOfWeek, i));
			return weekdays.map((date) => date.toLocaleDateString(this.locale, { weekday: 'short' }));
		},

		weeks() {
			const month = this.showingMonth.getMonth();
			const dateOfMonth = startOfMonth(this.showingMonth);

			const weeks = [];
			let week = [];
			while (dateOfMonth.getMonth() === month) {
				const weekday = dateOfMonth.getDay();
				week[weekday] = new Date(dateOfMonth);

				if (weekday === 6) {
					weeks.push(week);
					week = [];
				}

				dateOfMonth.setDate(dateOfMonth.getDate() + 1);
			}

			weeks.push(week);

			return weeks;
		},

		selectedDateObject() {
			return this.selectedDate && parseISO(this.selectedDate);
		},

		maxDateObject() {
			return this.maxDate && parseISO(this.maxDate);
		},

		minDateObject() {
			return this.minDate && parseISO(this.minDate);
		},
	},

	watch: {
		selectedDate() {
			const newSelectedDate = this.selectedDateObject;
			if (newSelectedDate) {
				this.showingMonth = newSelectedDate;
			}
		},
	},

	methods: {
		/**
		 * Determines if the previous/next month buttons should be disabled
		 * @param {(-1|1)} direction
		 * @return {boolean}
		 */
		isCalendarNavDisabled(direction) {
			const projectedDate = addMonths(this.showingMonth, direction);

			if (direction === -1 && this.minDateObject) {
				return startOfMonth(this.minDateObject) > startOfMonth(projectedDate);
			}

			if (direction === 1 && this.maxDateObject) {
				return endOfMonth(this.maxDateObject) < endOfMonth(projectedDate);
			}

			return false;
		},

		/**
		 * Increment/decrement the calendar month
		 * @param {number} incrementBy
		 */
		incrementMonth(incrementBy) {
			this.showingMonth = addMonths(this.showingMonth, incrementBy);
		},

		/**
		 * Determines if the date is selected
		 * @param {Date} date
		 * @return {boolean}
		 */
		isDateSelected(date) {
			return this.selectedDate === formatISOdate(date);
		},

		/**
		 * Determines if the date is disabled
		 * @param {Date} date
		 * @return {boolean}
		 */
		isDateDisabled(date) {
			if (this.minDateObject && this.minDateObject > date) {
				return true;
			}

			if (this.maxDateObject && this.maxDateObject < date) {
				return true;
			}

			return this.disabledDates.includes(formatISOdate(date));
		},

		/**
		 * Determines if the date is today
		 * @param {Date} date
		 * @return {boolean}
		 */
		isToday,

		/**
		 * Emits a new Date ISO string with a new date value
		 * @param {Date} date
		 */
		emitDate(date) {
			if (!this.isDateDisabled(date)) {
				/**
				 * New ISO date
				 * @property {string}
				 */
				this.$emit('calendar:update', formatISOdate(date));
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
	cursor: pointer;
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
