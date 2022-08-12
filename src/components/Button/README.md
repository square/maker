# Button

You should almost always use this component for standalone buttons in your app. If you very specifically need a visually lightweight button to be used inside of a [Notice](#/Notice) or [Card](#/Card) that has no padding and no focus, hover, or active states then use [TextButton](#/TextButton). If you need a button that navigates the user to another page that's not a button, that's a link, so use [Link](#/Link).

## Styles & Sizes

```vue
<template>
	<m-theme :theme="theme">
		<label>
			primary color picker
			<input
				v-model="primaryColor"
				type="color"
			>
		</label><br>
		<label>
			background color picker
			<input
				v-model="bgColor"
				type="color"
			>
		</label><br>
		<table class="ButtonTable">
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
							Large
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							size="large"
						>
							Large
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							size="large"
						>
							Large
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
							Medium
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							size="medium"
						>
							Medium
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							size="medium"
						>
							Medium
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
							Small
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							size="small"
						>
							Small
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							size="small"
						>
							Small
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Disabled
					</th>
					<td>
						<m-button
							pattern="primary"
							disabled
						>
							Disabled
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							disabled
						>
							Disabled
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							disabled
						>
							Disabled
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Loading
					</th>
					<td>
						<m-button
							pattern="primary"
							loading
						>
							Loading
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							loading
						>
							Loading
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							loading
						>
							Loading
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Icon
					</th>
					<td>
						<m-button
							pattern="primary"
						>
							<x class="icon" />
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
						>
							<x class="icon" />
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
						>
							<x class="icon" />
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Icon + Text
					</th>
					<td>
						<m-button
							pattern="primary"
						>
							<plus class="icon" />
							Button
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
						>
							<plus class="icon" />
							Button
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
						>
							<plus class="icon" />
							Button
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Info slot
					</th>
					<td>
						<m-button
							pattern="primary"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Info slot (stacked)
					</th>
					<td>
						<m-button
							pattern="primary"
							align="stack"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							align="stack"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							align="stack"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Info slot (reversed)
					</th>
					<td>
						<m-button
							pattern="primary"
							align="space-between"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							align="space-between"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							align="space-between"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Squared
					</th>
					<td>
						<m-button
							pattern="primary"
							shape="squared"
						>
							Squared
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							shape="squared"
						>
							Squared
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							shape="squared"
						>
							Squared
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Rounded
					</th>
					<td>
						<m-button
							pattern="primary"
							shape="rounded"
						>
							Rounded
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							shape="rounded"
						>
							Rounded
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							shape="rounded"
						>
							Rounded
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Pill
					</th>
					<td>
						<m-button
							pattern="primary"
							shape="pill"
						>
							Pill
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							shape="pill"
						>
							Pill
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							shape="pill"
						>
							Pill
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Full width
					</th>
					<td>
						<m-button
							pattern="primary"
							full-width
						>
							Full width
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							full-width
						>
							Full width
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							full-width
						>
							Full width
						</m-button>
					</td>
				</tr>
			</tbody>
		</table>
	</m-theme>
</template>

<script>
import X from '@square/maker-icons/X';
import Plus from '@square/maker-icons/Plus';
import { MButton } from '@square/maker/components/Button';
import { MTheme } from '@square/maker/components/Theme';
import makerColors from '@square/maker/utils/maker-colors';

export default {
	components: {
		MTheme,
		MButton,
		Plus,
		X,
	},
	data() {
		return {
			primaryColor: '#000000',
			bgColor: '#ffffff',
		};
	},
	computed: {
		theme() {
			return {
				colors: {
					primary: this.primaryColor,
					background: this.bgColor,
					...makerColors(this.bgColor, this.primaryColor),
				},
			};
		},
	},
};
</script>

<style scoped>
.ButtonTable {
	border-spacing: 16px;
	border-collapse: separate;
}
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
