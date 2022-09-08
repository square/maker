# Button

You should almost always use this component for standalone buttons in your app. If you very specifically need a visually lightweight button to be used inside of a [Notice](#/Notice) or [Card](#/Card) that has no padding and no focus, hover, or active states then use [TextButton](#/TextButton). If you need a button that navigates the user to another page that's not a button, that's a link, so use [Link](#/Link).

## Examples

```vue
<template>
	<m-theme :theme="theme">
		<label>
			primary color
			<input
				v-model="primaryColor"
				type="color"
			>
		</label>&nbsp;
		<label>
			background
			<input
				v-model="bgColor"
				type="color"
			>
		</label><br><br>
		<table class="ButtonTable">
			<thead>
				<tr>
					<th class="title">
						Sizes
					</th>
					<th>
						Primary (Fill)
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
					<td>
						Large
					</td>
					<td>
						<m-button
							pattern="primary"
							size="large"
						>
							<plus class="icon" />
							Large
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							size="large"
						>
							<plus class="icon" />
							Large
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							size="large"
						>
							<plus class="icon" />
							Large
						</m-button>
					</td>
				</tr>
				<tr>
					<td>
						Medium
					</td>
					<td>
						<m-button
							pattern="primary"
							size="medium"
						>
							<plus class="icon" />
							Medium
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							size="medium"
						>
							<plus class="icon" />
							Medium
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							size="medium"
						>
							<plus class="icon" />
							Medium
						</m-button>
					</td>
				</tr>
				<tr>
					<td>
						Small
					</td>
					<td>
						<m-button
							pattern="primary"
							size="small"
						>
							<plus class="icon" />
							Small
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							size="small"
						>
							<plus class="icon" />
							Small
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							size="small"
						>
							<plus class="icon" />
							Small
						</m-button>
					</td>
				</tr>
			</tbody>
			<tbody>
				<tr>
					<th class="title">
						States
					</th>
					<th />
					<th />
					<th />
				</tr>
				<tr>
					<td>
						Disabled
					</td>
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
					<td>
						Loading
					</td>
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
					<td>
						Full-width
					</td>
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
				<tr>
					<th class="title">
						Styles
					</th>
					<th />
					<th />
					<th />
				</tr>
				<tr>
					<td>
						Icon
					</td>
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
					<td>
						Information slot
					</td>
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
					<td>
						Information slot<br>
						Align stacked
					</td>
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
					<td>
						Information slot<br>
						Align space-between
					</td>
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
					<th class="title">
						Shapes
					</th>
					<th />
					<th />
					<th />
				</tr>

				<tr>
					<td>
						Squared
					</td>
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
					<td>
						Rounded
					</td>
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
					<td>
						Pill
					</td>
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
			</tbody>
		</table>
		<table class="ButtonTable">
			<thead>
				<tr>
					<th class="title">
						Patterns
					</th>
					<th>
						Fill
					</th>
					<th>
						Outline
					</th>
					<th>
						Subtle
					</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td>
						Primary
					</td>
					<td>
						<m-button
							pattern="primaryFilled"
						>
							primaryFilled
						</m-button>
					</td>
					<td>
						<m-button
							pattern="primaryOutline"
						>
							primaryOutline
						</m-button>
					</td>
					<td>
						<m-button
							pattern="primarySubtle"
						>
							primarySubtle
						</m-button>
					</td>
				</tr>
				<tr>
					<td>
						Error
					</td>
					<td>
						<m-button
							pattern="errorFilled"
						>
							errorFilled
						</m-button>
					</td>
					<td>
						<m-button
							pattern="errorOutline"
						>
							errorOutline
						</m-button>
					</td>
					<td>
						<m-button
							pattern="errorSubtle"
						>
							errorSubtle
						</m-button>
					</td>
				</tr>
				<tr>
					<td>
						Success
					</td>
					<td>
						<m-button
							pattern="successFilled"
						>
							successFilled
						</m-button>
					</td>
					<td>
						<m-button
							pattern="successOutline"
						>
							successOutline
						</m-button>
					</td>
					<td>
						<m-button
							pattern="successSubtle"
						>
							successSubtle
						</m-button>
					</td>
				</tr>
				<tr>
					<td>
						Warning
					</td>
					<td>
						<m-button
							pattern="warningFilled"
						>
							warningFilled
						</m-button>
					</td>
					<td>
						<m-button
							pattern="warningOutline"
						>
							warningOutline
						</m-button>
					</td>
					<td>
						<m-button
							pattern="warningSubtle"
						>
							warningSubtle
						</m-button>
					</td>
				</tr>
				<tr>
					<td>
						Info
					</td>
					<td>
						<m-button
							pattern="infoFilled"
						>
							infoFilled
						</m-button>
					</td>
					<td>
						<m-button
							pattern="infoOutline"
						>
							infoOutline
						</m-button>
					</td>
					<td>
						<m-button
							pattern="infoSubtle"
						>
							infoSubtle
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
			primaryColor: '#9142ff',
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
	min-width: 50%;
	border-collapse: separate;
	border-spacing: 0 16px;
	text-align: left;

	& td {
		padding: 0 8px;
	}

	& th {
		padding: 0 8px;
	}

	& th {
		background: var(--maker-color-neutral-10);
		color: var(--maker-color-neutral-90);
		font-weight: 500;
	}

	& .title {
		color: var(--maker-color-neutral-100);
		font-weight: 700;
		text-transform: uppercase;
	}
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
