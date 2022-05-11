# Notice

Use Notice to notify users of things.

## Examples

Notice has the following built-in patterns: error, warning, success, info.

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
	padding: 16px;
}
</style>
```

### Dark Theme

Suggested colors for dark theme.

```vue
<template>
	<m-theme
		:theme="darkTheme"
	>
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
	</m-theme>
</template>

<script>
import { MNotice } from '@square/maker/components/Notice';
import { MTextButton } from '@square/maker/components/TextButton';
import { MTheme } from '@square/maker/components/Theme';

export default {
	components: {
		MNotice,
		MTextButton,
		MTheme,
	},
	data() {
		return {
			darkTheme: {
				colors: {
					background: '#000000',
					'neutral-0': '#000000',
					'neutral-10': '#3c3c3c',
					'neutral-20': '#575757',
					'neutral-80': '#848484',
					'neutral-90': '#f1f1f1',
					'neutral-100': '#ffffff',
					critical: '#ff7566',
					criticalBg: '#3c3c3c',
					success: '#64cc52',
					successBg: '#3c3c3c',
					warning: '#ffbf00',
					warningBg: '#3c3c3c',
				},
			},
		};
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
</style>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop     | Type     | Default    | Possible values                       | Description                                |
| -------- | -------- | ---------- | ------------------------------------- | ------------------------------------------ |
| pattern  | `string` | —          | —                                     | pattern defined at theme level             |
| type     | `string` | —          | `error`, `success`, `warning`, `info` | type of notice                             |
| variant  | `string` | `'inline'` | `inline`, `block`                     | notice variant                             |
| color    | `string` | —          | —                                     | icon color & text color for inline notices |
| bg-color | `string` | —          | —                                     | background color for block notices         |


## Slots

| Slot    | Description           |
| ------- | --------------------- |
| default | notice content        |
| actions | put text buttons here |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
