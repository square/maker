# Row

```vue
<template>
	<div class="wrapper">
		<m-card class="card">
			<m-row>
				Default
				<template #icon>
					<settings class="icon" />
				</template>
				<template #secondary>
					Secondary
				</template>
				<template #side>
					Side
				</template>
				<template #side-secondary>
					Side secondary
				</template>
				<template #side-icon>
					<m-checkbox />
				</template>
			</m-row>
		</m-card>
		<m-card class="card">
			<m-row>
				Default
				<template #secondary>
					Secondary
				</template>
				<template #side>
					Side
				</template>
				<template #side-secondary>
					Side secondary
				</template>
			</m-row>
		</m-card>
		<m-card class="card">
			<m-row>
				Default
				<template #icon>
					<settings class="icon" />
				</template>
				<template #side>
					Side
				</template>
			</m-row>
		</m-card>
		<m-card class="card">
			<m-row>
				Default
				<template #secondary>
					Secondary
				</template>
				<template #side>
					Side
				</template>
				<template #side-icon>
					<m-checkbox />
				</template>
			</m-row>
		</m-card>
	</div>
</template>

<script>
import { MRow } from '@square/maker/utils/Row';
import { MCard } from '@square/maker/components/Card';
import { MCheckbox } from '@square/maker/components/Checkbox';
import Settings from '@square/maker-icons/Settings';

export default {
	components: {
		MRow,
		MCard,
		MCheckbox,
		Settings,
	},
};
</script>

<style scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.card {
	max-width: 400px;
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


## Slots

| Slot           | Description |
| -------------- | ----------- |
| icon           | —           |
| default        | —           |
| secondary      | —           |
| side           | —           |
| side-secondary | —           |
| side-icon      | —           |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
