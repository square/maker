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
					<th>
						Text / Transparent *
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
					<td>
						<m-button
							variant="text"
							size="large"
							:color="color"
						>
							Button
						</m-button>
						<m-button
							variant="text"
							size="large"
							:color="color"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							variant="text"
							size="large"
							:color="color"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							variant="text"
							size="large"
							:color="color"
						>
							<x class="icon" />
						</m-button>
						<m-button
							variant="text"
							size="large"
							:color="color"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							variant="text"
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
					<td>
						<m-button
							variant="text"
							size="medium"
							:color="color"
						>
							Button
						</m-button>
						<m-button
							variant="text"
							size="medium"
							:color="color"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							variant="text"
							size="medium"
							:color="color"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							variant="text"
							size="medium"
							:color="color"
						>
							<x class="icon" />
						</m-button>
						<m-button
							variant="text"
							size="medium"
							:color="color"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							variant="text"
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
					<td>
						<m-button
							variant="text"
							size="small"
							:color="color"
						>
							Button
						</m-button>
						<m-button
							variant="text"
							size="small"
							:color="color"
						>
							<plus class="icon" />
							Button
						</m-button>
						<m-button
							variant="text"
							size="small"
							:color="color"
						>
							Button
							<plus class="icon" />
						</m-button>
						<m-button
							variant="text"
							size="small"
							:color="color"
						>
							<plus class="icon" />
						</m-button>
						<m-button
							variant="text"
							size="small"
							:color="color"
							disabled
						>
							Disabled button
						</m-button>
						<m-button
							variant="text"
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

<!-- api-tables:start -->
## Props

Supports attributes from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).

| Prop       | Type      | Default     | Possible values                    		| Description                           |
| ---------- | --------- | ----------- | ------------------------------------------ | ------------------------------------- |
| type       | `string`  | `'button'`  | —                                  		| Type of the button                    |
| size       | `string`  | `'medium'`  | `small`, `medium`, `large`         		| Size of the button                    |
| full-width | `boolean` | `false`     | —                                  		| Whether to make the button full-width |
| color      | `string`  | `'#000'`    | —                                  		| Background color of button            |
| text-color | `string`  | —           | —                                  		| Text color of button                  |
| variant    | `string`  | `'primary'` | `primary`, `secondary`, `tertiary`, `text` | Semantic variant                      |
| shape      | `string`  | `'rounded'` | `squared`, `rounded`, `pill`       		| Shape of button                       |
| disabled   | `boolean` | `false`     | —                                  		| Toggles button disabled state         |
| align      | `string`  | `'center'`  | `center`, `stack`, `space-between` 		| How to align button's contents        |
| loading    | `boolean` | `false`     | —                                  		| Toggles button loading state          |


## Slots

| Slot        | Description       |
| ----------- | ----------------- |
| default     | Button label      |
| information | Information label |


## Events

Supports events from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).
<!-- api-tables:end -->

## * Notes About `Text` Button Variant

This variant is made to be used inside of other wrapper components, such as the Notice and Card.
- No padding; the text is the only clickable area
- Not made to be used for Icon Buttons
- Only difference between `size` is text size
