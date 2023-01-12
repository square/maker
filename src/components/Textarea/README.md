# Textarea

## Examples

### Default State

Filled variant.

```vue
<template>
	<m-textarea placeholder="Placeholder" />
</template>

<script>
import { MTextarea } from '@square/maker/components/Textarea';

export default {
	components: {
		MTextarea,
	},
};
</script>
```

### Disabled State

```vue
<template>
	<m-textarea
		disabled
		placeholder="Placeholder"
	/>
</template>

<script>
import { MTextarea } from '@square/maker/components/Textarea';

export default {
	components: {
		MTextarea,
	},
};
</script>
```

### Invalid State

```vue
<template>
	<m-textarea
		invalid
		placeholder="Placeholder"
	/>
</template>

<script>
import { MTextarea } from '@square/maker/components/Textarea';

export default {
	components: {
		MTextarea,
	},
};
</script>
```

### With Error Slot

```vue
<template>
	<m-textarea placeholder="Placeholder">
		<template #error>
			<m-notice pattern="error">
				error message here
			</m-notice>
		</template>
	</m-textarea>
</template>

<script>
import { MTextarea } from '@square/maker/components/Textarea';
import { MNotice } from '@square/maker/components/Notice';

export default {
	components: {
		MNotice,
		MTextarea,
	},
};
</script>
```

### Resizeable

```vue
<template>
	<m-textarea
		resizable
		placeholder="Placeholder"
	/>
</template>

<script>
import { MTextarea } from '@square/maker/components/Textarea';

export default {
	components: {
		MTextarea,
	},
};
</script>
```

### Outline Variant

```vue
<template>
	<m-textarea
		variant="outline"
		placeholder="Placeholder"
	/>
</template>

<script>
import { MTextarea } from '@square/maker/components/Textarea';

export default {
	components: {
		MTextarea,
	},
};
</script>
```

### Outline Variant Disabled State

```vue
<template>
	<m-textarea
		variant="outline"
		disabled
		placeholder="Placeholder"
	/>
</template>

<script>
import { MTextarea } from '@square/maker/components/Textarea';

export default {
	components: {
		MTextarea,
	},
};
</script>
```

### Outline Variant Invalid State

```vue
<template>
	<m-textarea
		variant="outline"
		invalid
		placeholder="Placeholder"
	/>
</template>

<script>
import { MTextarea } from '@square/maker/components/Textarea';

export default {
	components: {
		MTextarea,
	},
};
</script>
```



<!-- api-tables:start -->
## Props

Supports attributes from [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).

| Prop      | Type      | Default  | Possible values       | Description                           |
| --------- | --------- | -------- | --------------------- | ------------------------------------- |
| variant   | `string`  | `'fill'` | `'fill'`, `'outline'` | textarea variant                      |
| v-model   | `string`  | `''`     | -                     | textarea's current value              |
| disabled  | `boolean` | `false`  | -                     | Toggles textarea's disabled state     |
| invalid   | `boolean` | `false`  | -                     | Toggle textarea's invalid state       |
| resizable | `boolean` | `false`  | -                     | Toggles whether textarea is resizable |


## Slots

| Slot  | Description             |
| ----- | ----------------------- |
| error | slot for error messages |


## Events

Supports events from [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).

| Event           | Type     | Description            |
| --------------- | -------- | ---------------------- |
| textarea:update | `string` | updated textarea value |
<!-- api-tables:end -->
