# Button

For a simplified text-only button with no padding or focus/active/hover states, see: [TextButton](#/TextButton).

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
							pattern="primary"
							size="large"
						>
							Button
						</m-button>
						<m-button
							pattern="primary"
							size="large"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							pattern="primary"
							size="large"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							pattern="primary"
							size="large"
						>
							<x class="icon" />
						</m-button>
						<m-button
							pattern="primary"
							size="large"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							pattern="primary"
							size="large"
							loading
						>
							Loading
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							size="large"
						>
							Button
						</m-button>
						<m-button
							pattern="secondary"
							size="large"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							pattern="secondary"
							size="large"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							pattern="secondary"
							size="large"
						>
							<x class="icon" />
						</m-button>
						<m-button
							pattern="secondary"
							size="large"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							pattern="secondary"
							size="large"
							loading
						>
							Loading
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							size="large"
						>
							Button
						</m-button>
						<m-button
							pattern="tertiary"
							size="large"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							pattern="tertiary"
							size="large"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							pattern="tertiary"
							size="large"
						>
							<x class="icon" />
						</m-button>
						<m-button
							pattern="tertiary"
							size="large"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							pattern="tertiary"
							size="large"
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
							pattern="primary"
							size="medium"
						>
							Button
						</m-button>
						<m-button
							pattern="primary"
							size="medium"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							pattern="primary"
							size="medium"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							pattern="primary"
							size="medium"
						>
							<x class="icon" />
						</m-button>
						<m-button
							pattern="primary"
							size="medium"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							pattern="primary"
							size="medium"
							loading
						>
							Loading
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							size="medium"
						>
							Button
						</m-button>
						<m-button
							pattern="secondary"
							size="medium"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							pattern="secondary"
							size="medium"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							pattern="secondary"
							size="medium"
						>
							<x class="icon" />
						</m-button>
						<m-button
							pattern="secondary"
							size="medium"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							pattern="secondary"
							size="medium"
							loading
						>
							Loading
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							size="medium"
						>
							Button
						</m-button>
						<m-button
							pattern="tertiary"
							size="medium"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							pattern="tertiary"
							size="medium"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							pattern="tertiary"
							size="medium"
						>
							<x class="icon" />
						</m-button>
						<m-button
							pattern="tertiary"
							size="medium"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							pattern="tertiary"
							size="medium"
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
							pattern="primary"
							size="small"
						>
							Button
						</m-button>
						<m-button
							pattern="primary"
							size="small"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							pattern="primary"
							size="small"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							pattern="primary"
							size="small"
						>
							<plus class="icon" />
						</m-button>
						<m-button
							pattern="primary"
							size="small"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							pattern="primary"
							size="small"
							loading
						>
							Loading
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							size="small"
						>
							Button
						</m-button>
						<m-button
							pattern="secondary"
							size="small"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							pattern="secondary"
							size="small"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							pattern="secondary"
							size="small"
						>
							<plus class="icon" />
						</m-button>
						<m-button
							pattern="secondary"
							size="small"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							pattern="secondary"
							size="small"
							loading
						>
							Loading
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							size="small"
						>
							Button
						</m-button>
						<m-button
							pattern="tertiary"
							size="small"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							pattern="tertiary"
							size="small"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							pattern="tertiary"
							size="small"
						>
							<plus class="icon" />
						</m-button>
						<m-button
							pattern="tertiary"
							size="small"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							pattern="tertiary"
							size="small"
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

<!-- api-tables:start -->
## Props

Supports attributes from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).

| Prop       | Type      | Default    | Possible values                    | Description                             |
| ---------- | --------- | ---------- | ---------------------------------- | --------------------------------------- |
| pattern    | `string`  | —          | `pattern defined in theme`         | patterns are defined at the theme level |
| type       | `string`  | `'button'` | —                                  | Type of the button                      |
| size       | `string`  | —          | `small`, `medium`, `large`         | Size of the button                      |
| full-width | `boolean` | —          | —                                  | Whether to make the button full-width   |
| color      | `string`  | —          | —                                  | Background color of button              |
| text-color | `string`  | —          | —                                  | Text color of button                    |
| variant    | `string`  | —          | `primary`, `secondary`, `tertiary` | Variant                                 |
| shape      | `string`  | —          | `squared`, `rounded`, `pill`       | Shape of button                         |
| disabled   | `boolean` | `false`    | —                                  | Toggles button disabled state           |
| align      | `string`  | —          | `center`, `stack`, `space-between` | How to align button's contents          |
| loading    | `boolean` | `false`    | —                                  | Toggles button loading state            |


## Slots

| Slot        | Description       |
| ----------- | ----------------- |
| default     | Button label      |
| information | Information label |


## Events

Supports events from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).
<!-- api-tables:end -->
