# TextButton

TextButton was made to be used inside the `#actions` slots of other components such as [Notice](#/Notice) or [Card](#/Card).

**DO NOT** use this component if you need a visually lightweight standalone button. It has no padding. It also does not have an active state. Use a tertiary [Button](#/Button).

**DO NOT** use this component if you need to navigate the user to another page, for that use [Link](#/Link).

## States & Sizes

```vue
<template>
	<div>
		<table>
			<thead>
				<tr>
					<td />
					<th>Normal</th>
					<th>Disabled</th>
					<th>Loading</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>
						Large
					</th>
					<td>
						<m-text-button
							size="large"
						>
							Button
						</m-text-button>
					</td>
					<td>
						<m-text-button
							size="large"
							disabled
						>
							Disabled
						</m-text-button>
					</td>
					<td>
						<m-text-button
							size="large"
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
						>
							Button
						</m-text-button>
					</td>
					<td>
						<m-text-button
							size="medium"
							disabled
						>
							Disabled
						</m-text-button>
					</td>
					<td>
						<m-text-button
							size="medium"
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
import { MTextButton } from '@square/maker/components/TextButton';

export default {
	components: {
		MTextButton,
	},
};
</script>

<style scoped>
th, td {
	padding: 8px;
}
</style>
```

## Patterns

```vue
<template>
	<div>
		<table>
			<thead>
				<tr>
					<th>Pattern</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<m-text-button
							pattern="primary"
						>
							Primary
						</m-text-button>
					</td>
				</tr>
				<tr>
					<td>
						<m-text-button
							pattern="error"
						>
							Error
						</m-text-button>
					</td>
				</tr>
				<tr>
					<td>
						<m-text-button
							pattern="success"
						>
							Success
						</m-text-button>
					</td>
				</tr>
				<tr>
					<td>
						<m-text-button
							pattern="warning"
						>
							Warning
						</m-text-button>
					</td>
				</tr>
				<tr>
					<td>
						<m-text-button
							pattern="info"
						>
							Info
						</m-text-button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { MTextButton } from '@square/maker/components/TextButton';

export default {
	components: {
		MTextButton,
	},
};
</script>

<style scoped>
th, td {
	padding: 8px;
}
</style>
```
<!-- api-tables:start -->
## Props

Supports attributes from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).

| Prop          | Type      | Default    | Possible values   | Description                             |
| ------------- | --------- | ---------- | ----------------- | --------------------------------------- |
| pattern       | `string`  | —          | —                 | pattern defined at theme level          |
| type          | `string`  | `'button'` | —                 | Type of the button                      |
| size          | `string`  | —          | `medium`, `large` | Size of the button label text           |
| color         | `string`  | —          | —                 | Text color of button                    |
| disabled      | `boolean` | `false`    | —                 | Toggles button disabled state           |
| loading       | `boolean` | `false`    | —                 | Toggles button loading state            |
| truncate-text | `boolean` | `false`    | —                 | Truncate text if it overflows container |


## Slots

| Slot    | Description  |
| ------- | ------------ |
| default | Button label |


## Events

Supports events from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).
<!-- api-tables:end -->
