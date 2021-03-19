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
import { MButton } from '@square/maker/components/Button';
import ChevronLeft from '@square/maker-icons/ChevronLeft';
import ChevronRight from '@square/maker-icons/ChevronRight';

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
			default: 'en-US',
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
		monthName() {
			return this.viewingDate.toLocaleString(this.locale, { month: 'long', year: 'numeric' });
		},

		weekdays() {
			const weekdays = [];
			const date = new Date();
			for (let i = 0; i < 7; i += 1) {
				weekdays[date.getDay()] = new Date(date);
				date.setDate(date.getDate() + 1);
			}

			const localizedDays = weekdays.map((d) => d.toLocaleDateString(this.locale, { weekday: 'short' }));
			if (localizedDays.toString() === 'Sun,Mon,Tue,Wed,Thu,Fri,Sat') {
				return localizedDays;
			}

			return weekdays.map((d) => d.toLocaleDateString(this.locale, { weekday: 'narrow' }));
		},

		weeks() {
			const month = this.viewingDate.getMonth();
			const date = new Date(
				this.viewingDate.getFullYear(),
				month,
				1,
			);

			const weeks = [];
			let week = [];
			while (date.getMonth() === month) {
				const weekday = date.getDay();
				week[weekday] = date.getDate();

				if (weekday === 6) {
					weeks.push(week);
					week = [];
				}

				date.setDate(date.getDate() + 1);
			}

			weeks.push(week);

			return weeks;
		},

		formattedToday() {
			const today = new Date();
			const year = today.getFullYear();
			const month = `0${today.getMonth() + 1}`.slice(-2);
			const day = `0${today.getDate()}`.slice(-2);
			return `${year}-${month}-${day}`;
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
			const [year, month, day] = dateString.split('-');
			return new Date(year, month - 1, day);
		},

		/**
		 * Determines if the previous/next buttons should be disabled
		 * @param {Number} [n]
		 * @return {Boolean}
		 */
		shouldDisableHeaderButton(n) {
			if (n > 0 && this.maxDate) {
				const maxDate = this.getDateObj(this.maxDate);
				return this.viewingDate.getMonth() === maxDate.getMonth();
			} if (n < 0 && this.minDate) {
				const minDate = this.getDateObj(this.minDate);
				return this.viewingDate.getMonth() === minDate.getMonth();
			}
			return false;
		},

		/**
		 * Changes the calendar month
		 * @param {Number} [n]
		 */
		incMonth(n) {
			const nextMonth = new Date(this.viewingDate);
			nextMonth.setDate(1);
			nextMonth.setMonth(nextMonth.getMonth() + n);
			this.viewingDate = nextMonth;
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
			const year = this.viewingDate.getFullYear();
			const month = `0${this.viewingDate.getMonth() + 1}`.slice(-2);
			const day = `0${_day}`.slice(-2);
			return `${year}-${month}-${day}`;
		},

		/**
		 * Determines if the date is selected
		 * @param {String} [day]
		 * @return {Boolean}
		 */
		isDateSelected(day) {
			return this.selectedDate === this.deriveViewingDate(day);
		},

		/**
		 * Determines if the date is disabled
		 * @param {String} [day]
		 * @return {Boolean}
		 */
		isDateDisabled(day) {
			let isDisabledDate = false;
			const date = this.deriveViewingDate(day);
			const deriveViewingDate = date ? this.getDateObj(date).getTime() : undefined;

			if (this.minDate && deriveViewingDate) {
				const minDate = this.getDateObj(this.minDate).getTime();
				isDisabledDate = minDate > deriveViewingDate;
			}
			if (this.maxDate && deriveViewingDate && !isDisabledDate) {
				const maxDate = this.getDateObj(this.maxDate).getTime();
				isDisabledDate = maxDate < deriveViewingDate;
			}

			return this.disabledDates.includes(date) || isDisabledDate;
		},

		/**
		 * Determines if the date is today
		 * @param {String} [day]
		 * @return {Boolean}
		 */
		isToday(day) {
			return this.formattedToday === this.deriveViewingDate(day);
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
