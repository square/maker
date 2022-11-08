# Button

You should almost always use this component for standalone buttons in your app. If you very specifically need a visually lightweight button to be used inside of a [Notice](#/Notice) or [Card](#/Card) that has no padding and no focus, hover, or active states then use [TextButton](#/TextButton). If you need a button that navigates the user to another page that's not a button, that's a link, so use [Link](#/Link).

## Examples

```vue
<template>
	<div>
		<table class="ButtonTable">
			<thead>
				<tr>
					<th class="title">
						Sizes
					</th>
					<th>
						Fill
					</th>
					<th>
						Outline
					</th>
					<th>
						Ghost
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
							variant="fill"
							size="large"
						>
							<plus class="icon" />
							Large
						</m-button>
					</td>
					<td>
						<m-button
							variant="outline"
							size="large"
						>
							<plus class="icon" />
							Large
						</m-button>
					</td>
					<td>
						<m-button
							variant="ghost"
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
							variant="fill"
							size="medium"
						>
							<plus class="icon" />
							Medium
						</m-button>
					</td>
					<td>
						<m-button
							variant="outline"
							size="medium"
						>
							<plus class="icon" />
							Medium
						</m-button>
					</td>
					<td>
						<m-button
							variant="ghost"
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
							variant="fill"
							size="small"
						>
							<plus class="icon" />
							Small
						</m-button>
					</td>
					<td>
						<m-button
							variant="outline"
							size="small"
						>
							<plus class="icon" />
							Small
						</m-button>
					</td>
					<td>
						<m-button
							variant="ghost"
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
							variant="fill"
							disabled
						>
							Disabled
						</m-button>
					</td>
					<td>
						<m-button
							variant="outline"
							disabled
						>
							Disabled
						</m-button>
					</td>
					<td>
						<m-button
							variant="ghost"
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
							variant="fill"
							loading
						>
							Loading
						</m-button>
					</td>
					<td>
						<m-button
							variant="outline"
							loading
						>
							Loading
						</m-button>
					</td>
					<td>
						<m-button
							variant="ghost"
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
							variant="fill"
							full-width
						>
							Full width
						</m-button>
					</td>
					<td>
						<m-button
							variant="outline"
							full-width
						>
							Full width
						</m-button>
					</td>
					<td>
						<m-button
							variant="ghost"
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
							variant="fill"
						>
							<x class="icon" />
						</m-button>
					</td>
					<td>
						<m-button
							variant="outline"
						>
							<x class="icon" />
						</m-button>
					</td>
					<td>
						<m-button
							variant="ghost"
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
							variant="fill"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							variant="outline"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							variant="ghost"
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
							variant="fill"
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
							variant="outline"
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
							variant="ghost"
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
							variant="fill"
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
							variant="outline"
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
							variant="ghost"
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
							variant="fill"
							shape="squared"
						>
							Squared
						</m-button>
					</td>
					<td>
						<m-button
							variant="outline"
							shape="squared"
						>
							Squared
						</m-button>
					</td>
					<td>
						<m-button
							variant="ghost"
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
							variant="fill"
							shape="rounded"
						>
							Rounded
						</m-button>
					</td>
					<td>
						<m-button
							variant="outline"
							shape="rounded"
						>
							Rounded
						</m-button>
					</td>
					<td>
						<m-button
							variant="ghost"
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
							variant="fill"
							shape="pill"
						>
							Pill
						</m-button>
					</td>
					<td>
						<m-button
							variant="outline"
							shape="pill"
						>
							Pill
						</m-button>
					</td>
					<td>
						<m-button
							variant="ghost"
							shape="pill"
						>
							Pill
						</m-button>
					</td>
				</tr>
			</tbody>
		</table>
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
};
</script>

<style scoped>
.ButtonTable {
	min-width: 50%;
	width: 100%;
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
		background: var(--maker-color-neutral-10, #f1f1f1);
		color: var(--maker-color-neutral-90, #1b1b1b);
		font-weight: 500;
	}

	& .title {
		color: var(--maker-color-neutral-100, #000000);
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

## Patterns

```vue
<template>
	<div>
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
					<th>
						Ghost
					</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td>
						Primary color
					</td>
					<td>
						<m-button
							pattern="primaryFill"
						>
							primaryFill
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
					<td>
						<m-button
							pattern="primaryGhost"
						>
							primaryGhost
						</m-button>
					</td>
				</tr>
				<tr>
					<td>
						Error
					</td>
					<td>
						<m-button
							pattern="errorFill"
						>
							errorFill
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
					<td>
						<m-button
							pattern="errorGhost"
						>
							errorGhost
						</m-button>
					</td>
				</tr>
				<tr>
					<td>
						Success
					</td>
					<td>
						<m-button
							pattern="successFill"
						>
							successFill
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
					<td>
						<m-button
							pattern="successGhost"
						>
							successGhost
						</m-button>
					</td>
				</tr>
				<tr>
					<td>
						Warning
					</td>
					<td>
						<m-button
							pattern="warningFill"
						>
							warningFill
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
					<td>
						<m-button
							pattern="warningGhost"
						>
							warningGhost
						</m-button>
					</td>
				</tr>
				<tr>
					<td>
						Info
					</td>
					<td>
						<m-button
							pattern="infoFill"
						>
							infoFill
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
					<td>
						<m-button
							pattern="infoGhost"
						>
							infoGhost
						</m-button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';

export default {
	components: {
		MButton,
	},
};
</script>

<style scoped>
.ButtonTable {
	min-width: 50%;
	width: 100%;
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
		background: var(--maker-color-neutral-10, #f1f1f1);
		color: var(--maker-color-neutral-90, #1b1b1b);
		font-weight: 500;
	}

	& .title {
		color: var(--maker-color-neutral-100, #000000);
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

Themable props* can be configured via the [Theme](#/Theme) component using the key `button`.

| Prop                | Type      | Default         | Possible values                                                                                                                                                                                                                                                                                                                                                                                           | Description                                                 |
| ------------------- | --------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| pattern*            | `string`  | —               | `'primaryFill'`, `'errorFill'`, `'successFill'`, `'warningFill'`, `'infoFill'`, `'primaryOutline'`, `'errorOutline'`, `'successOutline'`, `'warningOutline'`, `'infoOutline'`, `'primarySubtle'`, `'errorSubtle'`, `'successSubtle'`, `'warningSubtle'`, `'infoSubtle'`, `'primaryGhost'`, `'errorGhost'`, `'successGhost'`, `'warningGhost'`, `'infoGhost'`, any custom pattern defined within the theme | patterns are defined at the theme level                     |
| tag                 | `string`  | `'button'`      | `'button'`, `'a'`                                                                                                                                                                                                                                                                                                                                                                                         | Tag of button                                               |
| type                | `string`  | `'button'`      | -                                                                                                                                                                                                                                                                                                                                                                                                         | Type of the button                                          |
| size*               | `string`  | `'medium'`      | `'small'`, `'medium'`, `'large'`                                                                                                                                                                                                                                                                                                                                                                          | Size of the button                                          |
| full-width*         | `boolean` | —               | -                                                                                                                                                                                                                                                                                                                                                                                                         | Whether to make the button full-width                       |
| text-pattern*       | `string`  | `'buttonLabel'` | -                                                                                                                                                                                                                                                                                                                                                                                                         | MText pattern in button label                               |
| color*              | `string`  | `'#006aff'`     | -                                                                                                                                                                                                                                                                                                                                                                                                         | Main color of button                                        |
| color-hover         | `string`  | —               | -                                                                                                                                                                                                                                                                                                                                                                                                         | Main hover color of button                                  |
| text-color*         | `string`  | —               | -                                                                                                                                                                                                                                                                                                                                                                                                         | Text color of button (only applied on fill buttons)         |
| text-color-hover    | `string`  | —               | -                                                                                                                                                                                                                                                                                                                                                                                                         | Text hover color of button (only applied on fill buttons)   |
| variant*            | `string`  | `'fill'`        | `'fill'`, `'outline'`, `'ghost'`                                                                                                                                                                                                                                                                                                                                                                          | Variant                                                     |
| shape*              | `string`  | —               | `'squared'`, `'rounded'`, `'pill'`                                                                                                                                                                                                                                                                                                                                                                        | Shape of preset button (overridden by borderRadius prop)    |
| border-radius       | `string`  | —               | -                                                                                                                                                                                                                                                                                                                                                                                                         | button's border radius                                      |
| border-radius-hover | `string`  | —               | -                                                                                                                                                                                                                                                                                                                                                                                                         | button's border radius when hovered                         |
| border-width        | `string`  | —               | -                                                                                                                                                                                                                                                                                                                                                                                                         | Border width of button (e.g. '3px')                         |
| border-width-hover  | `string`  | —               | -                                                                                                                                                                                                                                                                                                                                                                                                         | Border hover width of button (e.g. '3px')                   |
| border-color        | `string`  | —               | -                                                                                                                                                                                                                                                                                                                                                                                                         | Border color of button (only applied on fill buttons)       |
| border-color-hover  | `string`  | —               | -                                                                                                                                                                                                                                                                                                                                                                                                         | Border hover color of button (only applied on fill buttons) |
| box-shadow          | `string`  | —               | -                                                                                                                                                                                                                                                                                                                                                                                                         | Box-shadow of button                                        |
| box-shadow-hover    | `string`  | —               | -                                                                                                                                                                                                                                                                                                                                                                                                         | Box-shadow hover of button                                  |
| disabled            | `boolean` | `false`         | -                                                                                                                                                                                                                                                                                                                                                                                                         | Toggles button disabled state                               |
| align*              | `string`  | `'center'`      | `'center'`, `'stack'`, `'space-between'`                                                                                                                                                                                                                                                                                                                                                                  | How to align button's contents                              |
| loading             | `boolean` | `false`         | -                                                                                                                                                                                                                                                                                                                                                                                                         | Toggles button loading state                                |


## Slots

| Slot        | Description       |
| ----------- | ----------------- |
| default     | Button label      |
| information | Information label |


## Events

Supports events from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).
<!-- api-tables:end -->
