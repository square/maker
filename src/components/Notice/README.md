# Notice

Use Notice to notify users of things.

## Examples

Notice has the following built-in patterns: primary, error, warning, success, info.

```vue
<template>
	<m-theme
		:theme="theme"
		class="spaceout"
	>
		<label>
			<input
				v-model="primaryColor"
				type="color"
			>
			primary color picker
		</label><br>
		<label>
			<input
				v-model="bgColor"
				type="color"
			>
			background color picker
		</label><br><br>
		<m-notice pattern="primary">
			<template #icon>
				<plus class="icon" />
			</template>
			Primary inline message
		</m-notice>
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
			pattern="primary"
			display="block"
		>
			<template #icon>
				<plus class="icon" />
			</template>
			Primary block message
			<template #actions>
				<m-text-button pattern="primary">
					Button
				</m-text-button>
				<m-text-button pattern="primary">
					Dismiss
				</m-text-button>
			</template>
		</m-notice>
		<m-notice
			pattern="error"
			display="block"
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
			display="block"
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
			display="block"
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
			display="block"
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
	</m-theme>
</template>

<script>
import { MNotice } from '@square/maker/components/Notice';
import { MTextButton } from '@square/maker/components/TextButton';
import { MTheme } from '@square/maker/components/Theme';
import makerColors from '@square/maker/utils/maker-colors';
import Plus from '@square/maker-icons/Plus';

export default {
	components: {
		MNotice,
		MTextButton,
		Plus,
		MTheme,
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
					...makerColors(this.bgColor, this.primaryColor),
				},
			};
		},
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
	padding: 16px;
}
.icon {
	width: 16px;
	height: 16px;
}
</style>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop       | Type     | Default    | Possible values                       | Description                        |
| ---------- | -------- | ---------- | ------------------------------------- | ---------------------------------- |
| pattern    | `string` | —          | —                                     | pattern defined at theme level     |
| type       | `string` | —          | `error`, `success`, `warning`, `info` | type of notice                     |
| display    | `string` | `'inline'` | `inline`, `block`                     | notice display                     |
| icon-name  | `string` | —          | —                                     | name of icon, defined in theme     |
| icon-color | `string` | —          | —                                     | icon color                         |
| color      | `string` | —          | —                                     | text color for inline notices      |
| bg-color   | `string` | —          | —                                     | background color for block notices |


## Slots

| Slot    | Description           |
| ------- | --------------------- |
| icon    | icon in notice        |
| default | notice content        |
| actions | put text buttons here |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
