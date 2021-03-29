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
		const year = today.getFullYear();
		const month = `0${today.getMonth() + 1}`.slice(-2);
		const maxMonth = `0${today.getMonth() + 4}`.slice(-2);
		const selectedDay = `0${today.getDate() + 1}`.slice(-2);
		const minDay = `0${today.getDate() - 1}`.slice(-2);
		const disabledDay = `0${today.getDate() + 5}`.slice(-2);

		this.minDate = `${year}-${month}-${minDay}`;
		this.maxDate = `${year}-${maxMonth}-${selectedDay}`;
		this.disabledDates.push(`${year}-${month}-${disabledDay}`);
	},
};
</script>
```

<!-- api-tables:start -->
## Props

| Prop           | Type     | Default | Possible values | Description                                          |
| -------------- | -------- | ------- | --------------- | ---------------------------------------------------- |
| locale         | `string` | —       | —               | Calendar locale. Defaults to browser locale.         |
| v-model        | `string` | —       | —               | Selected date value in ISO format.                   |
| min-date       | `string` | —       | —               | Disable the dates before the min-date in ISO format. |
| max-date       | `string` | —       | —               | Disable the dates after the max-date in ISO format.  |
| disabled-dates | `array`  | `[]`    | —               | List of disabled dates in ISO format.                |


## Events

| Event           | Type     | Description  |
| --------------- | -------- | ------------ |
| calendar:update | `string` | New ISO date |
<!-- api-tables:end -->
