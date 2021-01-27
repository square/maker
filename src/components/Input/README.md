# Input

```vue
<template>
	<div>
		<h4>normal state</h4>
		<m-input placeholder="Placeholder" />

		<h4>disabled state</h4>
		<m-input
			placeholder="Placeholder"
			disabled
		/>

		<h4>invalid state</h4>
		<m-input
			placeholder="Placeholder"
			invalid
		/>

		<h4>align right</h4>
		<m-input
			placeholder="Placeholder"
			align="right"
		/>

		<h4>prefix</h4>
		<m-input placeholder="Placeholder">
			<template #prefix>
				$
			</template>
		</m-input>

		<h4>suffix + align right</h4>
		<m-input
			placeholder="Placeholder"
			align="right"
		>
			<template #suffix>
				pounds
			</template>
		</m-input>

		<h4>prefix icon</h4>
		<m-input placeholder="Placeholder">
			<template #prefix>
				<plus class="icon" />
			</template>
		</m-input>

		<h4>suffix icon + align right</h4>
		<m-input
			placeholder="Placeholder"
			align="right"
		>
			<template #suffix>
				<x class="icon" />
			</template>
		</m-input>

		<h4>prefix icon + disabled</h4>
		<m-input
			placeholder="Placeholder"
			disabled
		>
			<template #prefix>
				<plus class="icon" />
			</template>
		</m-input>

		<h4>prefix icon + invalid</h4>
		<m-input
			placeholder="Placeholder"
			invalid
		>
			<template #prefix>
				<plus class="icon" />
			</template>
		</m-input>

		<h4>with error slot</h4>
		<m-input placeholder="Placeholder">
			<template #error>
				<m-notice type="error">
					error message here
				</m-notice>
			</template>
		</m-input>
	</div>
</template>

<script>
import { MInput } from '@square/maker/components/Input';
import { MNotice } from '@square/maker/components/Notice';
import X from '@square/maker-icons/X';
import Plus from '@square/maker-icons/Plus';

export default {
	components: {
		MInput,
		MNotice,
		Plus,
		X,
	},
};
</script>

<style scoped>
.icon {
	width: 16px;
	height: 16px;
}
</style>
```

## Props
Supports all `<input>` attributes

<!-- api-tables:start -->
## Props

Supports attributes from [`<input type="text">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text).

| Prop     | Type      | Default  | Possible values | Description                  |
| -------- | --------- | -------- | --------------- | ---------------------------- |
| variant  | `string`  | `'fill'` | `fill`          | Input variant                |
| disabled | `boolean` | `false`  | —               | Toggles input disabled state |
| invalid  | `boolean` | `false`  | —               | Toggles input invalid state  |
| align    | `string`  | `'left'` | `left`, `right` | Aligns text within input     |


## Slots

| Slot    | Description      |
| ------- | ---------------- |
| prefix  | Input prefix     |
| suffix  | Input suffix     |
| default | —                |
| error   | Input error slot |


## Events

Supports events from [`<input type="text">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text).

| Event        | Type | Description |
| ------------ | ---- | ----------- |
| input:update | -    | —           |
<!-- api-tables:end -->
