# Input

## Examples

### Default State

Filled variant.

```vue
<template>
	<m-input placeholder="Placeholder" />
</template>

<script>
import { MInput } from '@square/maker/components/Input';

export default {
	components: {
		MInput,
	},
};
</script>
```

### Disabled State

```vue
<template>
	<m-input
		disabled
		placeholder="Placeholder"
	/>
</template>

<script>
import { MInput } from '@square/maker/components/Input';

export default {
	components: {
		MInput,
	},
};
</script>
```
### Invalid State

```vue
<template>
	<m-input
		invalid
		placeholder="Placeholder"
	/>
</template>

<script>
import { MInput } from '@square/maker/components/Input';

export default {
	components: {
		MInput,
	},
};
</script>
```

### With Error Slot

```vue
<template>
	<m-input placeholder="Placeholder">
		<template #error>
			<m-notice type="error">
				error message here
			</m-notice>
		</template>
	</m-input>
</template>

<script>
import { MInput } from '@square/maker/components/Input';
import { MNotice } from '@square/maker/components/Notice';

export default {
	components: {
		MInput,
		MNotice,
	},
};
</script>
```

### With Prefix Slot

The prefix slot can contain text or icons.

```vue
<template>
	<div>
		<m-input placeholder="Placeholder">
			<template #prefix>
				$
			</template>
		</m-input>
		<m-input placeholder="Placeholder">
			<template #prefix>
				<feather-icon class="icon" />
			</template>
		</m-input>
	</div>
</template>

<script>
import { MInput } from '@square/maker/components/Input';
import FeatherIcon from '@square/maker-icons/Feather';

export default {
	components: {
		MInput,
		FeatherIcon,
	},
};
</script>

<style scoped>
div > *:first-child {
	margin-bottom: 16px;
}
.icon {
	width: 16px;
	height: 16px;
}
</style>
```

### With Suffix Slot

The suffix slot can contain text or icons.

```vue
<template>
	<div>
		<m-input placeholder="Placeholder">
			<template #suffix>
				pounds
			</template>
		</m-input>
		<m-input placeholder="Placeholder">
			<template #suffix>
				<calendar-icon class="icon" />
			</template>
		</m-input>
	</div>
</template>

<script>
import { MInput } from '@square/maker/components/Input';
import CalendarIcon from '@square/maker-icons/Calendar';

export default {
	components: {
		MInput,
		CalendarIcon,
	},
};
</script>

<style scoped>
div > *:first-child {
	margin-bottom: 16px;
}
.icon {
	width: 16px;
	height: 16px;
}
</style>
```

### Outline Variant

```vue
<template>
	<m-input
		variant="outline"
		placeholder="Placeholder"
	/>
</template>

<script>
import { MInput } from '@square/maker/components/Input';

export default {
	components: {
		MInput,
	},
};
</script>
```

### Outline Variant Disabled State

```vue
<template>
	<m-input
		variant="outline"
		disabled
		placeholder="Placeholder"
	/>
</template>

<script>
import { MInput } from '@square/maker/components/Input';

export default {
	components: {
		MInput,
	},
};
</script>
```
### Outline Variant Invalid State

```vue
<template>
	<m-input
		variant="outline"
		invalid
		placeholder="Placeholder"
	/>
</template>

<script>
import { MInput } from '@square/maker/components/Input';

export default {
	components: {
		MInput,
	},
};
</script>
```
### External click to focus/blur

```vue
<template>
	<div>
		<m-input
			ref="input"
			variant="outline"
			placeholder="Placeholder"
		/>
		<br>
		<m-button
			size="small"
			pattern="primaryOutline"
			@click="handleClick"
		>
			Click to {{ focused ? 'blur' : 'focus' }}
		</m-button>
	</div>
</template>

<script>
import { MInput } from '@square/maker/components/Input';
import { MButton } from '@square/maker/components/Button';

export default {
	components: {
		MInput,
		MButton,
	},

	data() {
		return {
			focused: false,
		};
	},

	methods: {
		handleClick() {
			if (this.focused) {
				this.$refs.input.blur();
			} else {
				this.$refs.input.focus();
			}
			this.focused = !this.focused;
		},
	},
};
</script>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<input type="text">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text).

| Prop     | Type      | Default  | Possible values   | Description                  |
| -------- | --------- | -------- | ----------------- | ---------------------------- |
| variant  | `string`  | `'fill'` | `fill`, `outline` | Input variant                |
| disabled | `boolean` | `false`  | —                 | Toggles input disabled state |
| invalid  | `boolean` | `false`  | —                 | Toggles input invalid state  |
| align    | `string`  | `'left'` | `left`, `right`   | Aligns text within input     |


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


## Methods

| Method | Description   |
| ------ | ------------- |
| focus  | focuses input |
| blur   | blurs input   |
<!-- api-tables:end -->
