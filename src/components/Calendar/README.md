# Calendar

```vue
<template>
	<div>
		<div
			style="max-width: 600px; margin-bottom: 16px;"
		>
			<m-calendar
				v-model="selectedDate"
				:locale="locale"
				:min-date="minDate"
				:max-date="maxDate"
				:disabled-dates="disabledDates"
			/>
		</div>
		<label>
			Selected date:
			<input
				v-model="selectedDate"
				type="date"
			>
		</label><br><br>
		<label>
			Min date:
			<input
				v-model="minDate"
				type="date"
			>
		</label><br><br>
		<label>
			Max date:
			<input
				v-model="maxDate"
				type="date"
			>
		</label><br><br>
		<label>
			Locale:
			<select
				v-model="locale"
			>
				<option
					v-for="(option, index) in localeSelection"
					:key="index"
					:value="option"
				>
					{{ option }}
				</option>
			</select>
		</label>
	</div>
</template>

<script>
import { MCalendar } from '@square/maker/components/Calendar';
import {
	addDays,
	addMonths,
	formatISO,
} from 'date-fns';

export default {
	components: {
		MCalendar,
	},

	data() {
		return {
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
};
</script>
```

<!-- api-tables:start -->
## Props

| Prop           | Type     | Default | Possible values | Description                                          |
| -------------- | -------- | ------- | --------------- | ---------------------------------------------------- |
| disabled-dates | `array`  | `[]`    | -               | List of disabled dates in ISO format.                |
| locale         | `string` | —       | -               | Calendar locale. Defaults to browser locale.         |
| max-date       | `string` | —       | -               | Disable the dates after the max-date in ISO format.  |
| min-date       | `string` | —       | -               | Disable the dates before the min-date in ISO format. |
| v-model        | `string` | —       | -               | Selected date value in ISO format.                   |


## Events

| Event           | Type     | Description  |
| --------------- | -------- | ------------ |
| calendar:update | `string` | New ISO date |
<!-- api-tables:end -->
