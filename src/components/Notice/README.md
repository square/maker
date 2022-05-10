# Notice

Use Notice to notify users of things.



## Examples

```vue
<template>
	<div class="spaceout">
		<m-notice pattern="error">
			Error inline message
		</m-notice>
		<m-notice pattern="success">
			Success inline message
		</m-notice>
		<m-notice pattern="warning">
			Warning inline message
		</m-notice>
		<m-notice pattern="info">
			Info inline message
		</m-notice>

		<m-notice
			pattern="error"
			variant="block"
		>
			Error block message
			<template #actions>
				<m-text-button pattern="error">
					Button
				</m-text-button>
				<m-text-button pattern="error">
					Dismiss
				</m-text-button>
			</template>
		</m-notice>
		<m-notice
			pattern="success"
			variant="block"
		>
			Success block message
			<template #actions>
				<m-text-button pattern="success">
					Button
				</m-text-button>
				<m-text-button pattern="success">
					Dismiss
				</m-text-button>
			</template>
		</m-notice>
		<m-notice
			pattern="warning"
			variant="block"
		>
			Warning block message
			<template #actions>
				<m-text-button pattern="warning">
					Button
				</m-text-button>
				<m-text-button pattern="warning">
					Dismiss
				</m-text-button>
			</template>
		</m-notice>
		<m-notice
			pattern="info"
			variant="block"
		>
			Info block message
			<template #actions>
				<m-text-button pattern="info">
					Button
				</m-text-button>
				<m-text-button pattern="info">
					Dismiss
				</m-text-button>
			</template>
		</m-notice>
	</div>
</template>

<script>
import { MNotice } from '@square/maker/components/Notice';
import { MTextButton } from '@square/maker/components/TextButton';

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
.spaceout {
	max-width: 400px;
}
</style>
```


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
import { MTextButton } from '@square/maker/components/TextButton';

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
import { MTextButton } from '@square/maker/components/TextButton';

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
import { MTextButton } from '@square/maker/components/TextButton';

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
import { MTextButton } from '@square/maker/components/TextButton';

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
| color   | `string` | —          | —                                     | notice color   |


## Slots

| Slot    | Description           |
| ------- | --------------------- |
| default | notice content        |
| actions | put text buttons here |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
