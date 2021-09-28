# Button
## Styles & Sizes

```vue
<template>
	<div>
		<label>
			Color picker
			<input
				v-model="color"
				type="color"
			>
		</label><br><br>
		<table>
			<thead>
				<tr>
					<td />
					<th>
						Primary / Fill
					</th>
					<th>
						Secondary / Outline
					</th>
					<th>
						Tertiary / Ghost
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>
						Large
					</th>
					<td>
						<m-button
							variant="primary"
							size="large"
							:color="color"
						>
							Button
						</m-button>
						<m-button
							variant="primary"
							size="large"
							:color="color"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							variant="primary"
							size="large"
							:color="color"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							variant="primary"
							size="large"
							:color="color"
						>
							<x class="icon" />
						</m-button>
						<m-button
							variant="primary"
							size="large"
							:color="color"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							variant="primary"
							size="large"
							:color="color"
							loading
						>
							Loading
						</m-button>
					</td>
					<td>
						<m-button
							variant="secondary"
							size="large"
							:color="color"
						>
							Button
						</m-button>
						<m-button
							variant="secondary"
							size="large"
							:color="color"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							variant="secondary"
							size="large"
							:color="color"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							variant="secondary"
							size="large"
							:color="color"
						>
							<x class="icon" />
						</m-button>
						<m-button
							variant="secondary"
							size="large"
							:color="color"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							variant="secondary"
							size="large"
							:color="color"
							loading
						>
							Loading
						</m-button>
					</td>
					<td>
						<m-button
							variant="tertiary"
							size="large"
							:color="color"
						>
							Button
						</m-button>
						<m-button
							variant="tertiary"
							size="large"
							:color="color"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							variant="tertiary"
							size="large"
							:color="color"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							variant="tertiary"
							size="large"
							:color="color"
						>
							<x class="icon" />
						</m-button>
						<m-button
							variant="tertiary"
							size="large"
							:color="color"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							variant="tertiary"
							size="large"
							:color="color"
							loading
						>
							Loading
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Medium
					</th>
					<td>
						<m-button
							variant="primary"
							size="medium"
							:color="color"
						>
							Button
						</m-button>
						<m-button
							variant="primary"
							size="medium"
							:color="color"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							variant="primary"
							size="medium"
							:color="color"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							variant="primary"
							size="medium"
							:color="color"
						>
							<x class="icon" />
						</m-button>
						<m-button
							variant="primary"
							size="medium"
							:color="color"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							variant="primary"
							size="medium"
							:color="color"
							loading
						>
							Loading
						</m-button>
					</td>
					<td>
						<m-button
							variant="secondary"
							size="medium"
							:color="color"
						>
							Button
						</m-button>
						<m-button
							variant="secondary"
							size="medium"
							:color="color"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							variant="secondary"
							size="medium"
							:color="color"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							variant="secondary"
							size="medium"
							:color="color"
						>
							<x class="icon" />
						</m-button>
						<m-button
							variant="secondary"
							size="medium"
							:color="color"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							variant="secondary"
							size="medium"
							:color="color"
							loading
						>
							Loading
						</m-button>
					</td>
					<td>
						<m-button
							variant="tertiary"
							size="medium"
							:color="color"
						>
							Button
						</m-button>
						<m-button
							variant="tertiary"
							size="medium"
							:color="color"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							variant="tertiary"
							size="medium"
							:color="color"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							variant="tertiary"
							size="medium"
							:color="color"
						>
							<x class="icon" />
						</m-button>
						<m-button
							variant="tertiary"
							size="medium"
							:color="color"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							variant="tertiary"
							size="medium"
							:color="color"
							loading
						>
							Loading
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Small
					</th>
					<td>
						<m-button
							variant="primary"
							size="small"
							:color="color"
						>
							Button
						</m-button>
						<m-button
							variant="primary"
							size="small"
							:color="color"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							variant="primary"
							size="small"
							:color="color"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							variant="primary"
							size="small"
							:color="color"
						>
							<plus class="icon" />
						</m-button>
						<m-button
							variant="primary"
							size="small"
							:color="color"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							variant="primary"
							size="small"
							:color="color"
							loading
						>
							Loading
						</m-button>
					</td>
					<td>
						<m-button
							variant="secondary"
							size="small"
							:color="color"
						>
							Button
						</m-button>
						<m-button
							variant="secondary"
							size="small"
							:color="color"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							variant="secondary"
							size="small"
							:color="color"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							variant="secondary"
							size="small"
							:color="color"
						>
							<plus class="icon" />
						</m-button>
						<m-button
							variant="secondary"
							size="small"
							:color="color"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							variant="secondary"
							size="small"
							:color="color"
							loading
						>
							Loading
						</m-button>
					</td>
					<td>
						<m-button
							variant="tertiary"
							size="small"
							:color="color"
						>
							Button
						</m-button>
						<m-button
							variant="tertiary"
							size="small"
							:color="color"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							variant="tertiary"
							size="small"
							:color="color"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							variant="tertiary"
							size="small"
							:color="color"
						>
							<plus class="icon" />
						</m-button>
						<m-button
							variant="tertiary"
							size="small"
							:color="color"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							variant="tertiary"
							size="small"
							:color="color"
							loading
						>
							Loading
						</m-button>
					</td>
				</tr>
			</tbody>
		</table>
		<m-button
			color="#fff"
			:text-color="color"
		>
			One-Off Reversed Button
		</m-button>
	</div>
</template>

<script>
import X from '@square/maker-icons/X';
import Plus from '@square/maker-icons/Plus';
import { MButton } from '@square/maker/components/Button';

export default {
	components: {
		MButton,
		Plus,
		X,
	},
	data() {
		return {
			color: '#000',
		};
	},
};
</script>

<style>
body {
	background-color: #f9f9f9;
}
</style>

<style scoped>
.icon {
	width: 16px;
	height: 16px;
}
</style>
```

# TextButton
This button is just clickable text and was made to be used inside the #actions slots of other components such as Notice or Card.
There are no focus, active, or hover states.

## Styles & Sizes
```vue
<template>
	<div>
		<label>
			Color picker
			<input
				v-model="color"
				type="color"
			>
		</label><br><br>
		<table>
			<tbody>
				<tr>
					<th>
						Large
					</th>
					<td>
						<m-text-button
							variant="text"
							size="large"
							:color="color"
						>
							Button
						</m-text-button>
						<m-text-button
							variant="text"
							size="large"
							:color="color"
							disabled
						>
							Disabled button
						</m-text-button>
						<m-text-button
							variant="text"
							size="large"
							:color="color"
							loading
						>
							Loading
						</m-text-button>
					</td>
				</tr>

				<tr>
					<th>
						Medium
					</th>
					<td>
						<m-text-button
							size="medium"
							:color="color"
						>
							Button
						</m-text-button>
						<m-text-button
							size="medium"
							:color="color"
							disabled
						>
							Disabled button
						</m-text-button>
						<m-text-button
							size="medium"
							:color="color"
							loading
						>
							Loading
						</m-text-button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { MTextButton } from '@square/maker/components/Button';

export default {
	components: {
		MTextButton,
	},
	data() {
		return {
			color: '#000',
		};
	},
};
</script>

<style>
body {
	background-color: #f9f9f9;
}

th {
	padding-right: 32px;
}
</style>
```

<!-- api-tables:start -->
## Button Props

Supports attributes from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).

| Prop       | Type      | Default    | Possible values                    | Description                           |
| ---------- | --------- | ---------- | ---------------------------------- | ------------------------------------- |
| type       | `string`  | `'button'` | —                                  | Type of the button                    |
| size       | `string`  | —          | `small`, `medium`, `large`         | Size of the button                    |
| full-width | `boolean` | —          | —                                  | Whether to make the button full-width |
| color      | `string`  | —          | —                                  | Background color of button            |
| text-color | `string`  | —          | —                                  | Text color of button                  |
| variant    | `string`  | —          | `primary`, `secondary`, `tertiary` | Semantic variant                      |
| shape      | `string`  | —          | `squared`, `rounded`, `pill`       | Shape of button                       |
| disabled   | `boolean` | `false`    | —                                  | Toggles button disabled state         |
| align      | `string`  | —          | `center`, `stack`, `space-between` | How to align button's contents        |
| loading    | `boolean` | `false`    | —                                  | Toggles button loading state          |


## Button Slots

| Slot        | Description       |
| ----------- | ----------------- |
| default     | Button label      |
| information | Information label |


## Button Events

Supports events from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).


## TextButton Props

Supports attributes from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).

| Prop     | Type      | Default    | Possible values   | Description                   |
| -------- | --------- | ---------- | ----------------- | ----------------------------- |
| type     | `string`  | `'button'` | —                 | Type of the button            |
| size     | `string`  | `'medium'` | `medium`, `large` | Size of the button label text |
| color    | `string`  | —          | —                 | Text color of button          |
| disabled | `boolean` | `false`    | —                 | Toggles button disabled state |
| loading  | `boolean` | `false`    | —                 | Toggles button loading state  |


## TextButton Slots

| Slot    | Description  |
| ------- | ------------ |
| default | Button label |


## TextButton Events

Supports events from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).
<!-- api-tables:end -->
