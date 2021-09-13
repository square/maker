# Notice

Use Notice to notify users of things.



## Examples



### Error

```vue
<template>
	<div class="spaceout">
		<m-notice type="error">
			I am a error notice
		</m-notice>

		<m-notice type="error">
			I am a long error notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
		</m-notice>

		<m-notice
			type="error"
			variant="block"
		>
			I am a long error notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
		</m-notice>

		<m-notice
			type="error"
			variant="block"
		>
			I am a long error notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
			<template #actions>
				<m-text-button>button</m-text-button>
				<m-text-button>dismiss</m-text-button>
			</template>
		</m-notice>
	</div>
</template>

<script>
import { MNotice } from '@square/maker/components/Notice';
import { MTextButton } from '@square/maker/components/Button';

export default {
	components: {
		MNotice,
		MTextButton,
	},
};
</script>

<style scoped>
.spaceout > * {
	margin-bottom: 16px;
}
.spaceout > *:last-child {
	margin-bottom: 0;
}
</style>
```


### Success

```vue
<template>
	<div class="spaceout">
		<m-notice type="success">
			I am a success notice
		</m-notice>

		<m-notice type="success">
			I am a long success notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
		</m-notice>

		<m-notice
			type="success"
			variant="block"
		>
			I am a long success notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
		</m-notice>

		<m-notice
			type="success"
			variant="block"
		>
			I am a long success notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
			<template #actions>
				<m-text-button>button</m-text-button>
				<m-text-button>dismiss</m-text-button>
			</template>
		</m-notice>
	</div>
</template>

<script>
import { MNotice } from '@square/maker/components/Notice';
import { MTextButton } from '@square/maker/components/Button';

export default {
	components: {
		MNotice,
		MTextButton,
	},
};
</script>

<style scoped>
.spaceout > * {
	margin-bottom: 16px;
}
.spaceout > *:last-child {
	margin-bottom: 0;
}
</style>
```


### Warning

```vue
<template>
	<div class="spaceout">
		<m-notice type="warning">
			I am a warning notice
		</m-notice>

		<m-notice type="warning">
			I am a long warning notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
		</m-notice>

		<m-notice
			type="warning"
			variant="block"
		>
			I am a long warning notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
		</m-notice>

		<m-notice
			type="warning"
			variant="block"
		>
			I am a long warning notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
			<template #actions>
				<m-text-button>button</m-text-button>
				<m-text-button>dismiss</m-text-button>
			</template>
		</m-notice>
	</div>
</template>

<script>
import { MNotice } from '@square/maker/components/Notice';
import { MTextButton } from '@square/maker/components/Button';

export default {
	components: {
		MNotice,
		MTextButton,
	},
};
</script>

<style scoped>
.spaceout > * {
	margin-bottom: 16px;
}
.spaceout > *:last-child {
	margin-bottom: 0;
}
</style>
```



### Info

```vue
<template>
	<div class="spaceout">
		<m-notice type="info">
			I am a info notice
		</m-notice>

		<m-notice type="info">
			I am a long info notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
		</m-notice>

		<m-notice
			type="info"
			variant="block"
		>
			I am a long info notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
		</m-notice>

		<m-notice
			type="info"
			variant="block"
		>
			I am a long info notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
			<template #actions>
				<m-text-button>button</m-text-button>
				<m-text-button>dismiss</m-text-button>
			</template>
		</m-notice>
	</div>
</template>

<script>
import { MNotice } from '@square/maker/components/Notice';
import { MTextButton } from '@square/maker/components/Button';

export default {
	components: {
		MNotice,
		MTextButton,
	},
};
</script>

<style scoped>
.spaceout > * {
	margin-bottom: 16px;
}
.spaceout > *:last-child {
	margin-bottom: 0;
}
</style>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop    | Type     | Default    | Possible values                       | Description    |
| ------- | -------- | ---------- | ------------------------------------- | -------------- |
| type    | `string` | `'info'`   | `error`, `success`, `warning`, `info` | type of notice |
| variant | `string` | `'inline'` | `inline`, `block`                     | notice variant |


## Slots

| Slot    | Description          |
| ------- | -------------------- |
| default | notice content       |
| actions | put TextButtons here |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
