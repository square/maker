# Row

```vue
<template>
	<div class="wrapper">
		<m-card class="card">
			<m-row>
				Default
				<template #prefix>
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
				<template #suffix>
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
				<template #prefix>
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
				<template #suffix>
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

| Prop    | Type     | Default | Possible values | Description                                |
| ------- | -------- | ------- | --------------- | ------------------------------------------ |
| element | `string` | `'div'` | —               | topmost wrapper element around row content |


## Slots

| Slot           | Description |
| -------------- | ----------- |
| prefix         | —           |
| default        | —           |
| secondary      | —           |
| side           | —           |
| side-secondary | —           |
| suffix         | —           |
<!-- api-tables:end -->
