# Container

Container contains content.

```vue
<template>
	<m-container>
		container content
	</m-container>
</template>

<script>
import { MContainer } from '@square/maker/components/Container';

export default {
	components: {
		MContainer,
	},
};
</script>
```

## Labels

Labels can be set via props.

```vue
<template>
	<m-container
		label="container label"
		sublabel="container sublabel"
		requirement-label="container requirement label"
	>
		container content
	</m-container>
</template>

<script>
import { MContainer } from '@square/maker/components/Container';

export default {
	components: {
		MContainer,
	},
};
</script>
```

<br>
Labels can also be set via slots.

```vue
<template>
	<m-container>
		<template
			#label
		>
			<div
				class="icon-label-wrapper"
			>
				<user-icon class="icon" /> container label
			</div>
		</template>
		<template
			#sublabel
		>
			<div
				class="icon-label-wrapper"
			>
				<info-icon class="icon" /> container sublabel
			</div>
		</template>
		<template
			#requirement-label
		>
			<div
				class="icon-label-wrapper"
			>
				<alert-triangle-icon class="icon" /> container requirement label
			</div>
		</template>
		container content
	</m-container>
</template>

<script>
import { MContainer } from '@square/maker/components/Container';
import AlertTriangleIcon from '@square/maker-icons/AlertTriangle';
import InfoIcon from '@square/maker-icons/Info';
import UserIcon from '@square/maker-icons/User';

export default {
	components: {
		MContainer,
		UserIcon,
		InfoIcon,
		AlertTriangleIcon,
	},
};
</script>

<style scoped>
.icon {
	width: 16px;
	height: 16px;
	margin-right: 8px;
}

.icon-label-wrapper {
	display: flex;
	align-items: center;
}
</style>
```

## Sizes

Containers can be small, medium, or large, which affects the default typography styles within the container.

```vue
<template>
	<div>
		<m-container
			label="small container label"
			sublabel="small container sublabel"
			requirement-label="small container requirement label"
			size="small"
		>
			small container content
		</m-container>
		<m-container
			label="medium container label"
			sublabel="medium container sublabel"
			requirement-label="medium container requirement label"
			size="medium"
		>
			medium container content
		</m-container>
		<m-container
			label="large container label"
			sublabel="large container sublabel"
			requirement-label="large container requirement label"
			size="large"
		>
			large container content
		</m-container>
	</div>
</template>

<script>
import { MContainer } from '@square/maker/components/Container';

export default {
	components: {
		MContainer,
	},
};
</script>
```

## Other customizations

Containers can be customized further with: bg-color, color, padding.

```vue
<template>
	<div>
		<m-container
			label="background color customized label"
			size="small"
			bg-color="#ffe800"
		>
			background color customized
		</m-container>
		<m-container
			label="text color customized label"
			size="small"
			color="#ffe800"
		>
			text color customized
		</m-container>
		<m-container
			label="padding customized label"
			size="small"
			padding="50px"
		>
			padding customized
		</m-container>
	</div>
</template>

<script>
import { MContainer } from '@square/maker/components/Container';

export default {
	components: {
		MContainer,
	},
};
</script>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section).

Themable props* can be configured via the [Theme](#/Theme) component using the key `container`.

| Prop              | Type     | Default       | Possible values                  | Description                   |
| ----------------- | -------- | ------------- | -------------------------------- | ----------------------------- |
| bg-color*         | `string` | —             | -                                | Background color of container |
| color*            | `string` | —             | -                                | Text color of container       |
| label             | `string` | —             | -                                | Container label               |
| padding           | `string` | `'16px 24px'` | -                                | Padding of the container      |
| requirement-label | `string` | —             | -                                | Container requirement label   |
| size              | `string` | `'medium'`    | `'small'`, `'medium'`, `'large'` | Container size                |
| sublabel          | `string` | —             | -                                | Container sublabel            |


## Slots

| Slot              | Description                 |
| ----------------- | --------------------------- |
| label             | container label             |
| sublabel          | container sublabel          |
| requirement-label | container requirement label |
| default           | container content           |


## Events

Supports events from [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section).
<!-- api-tables:end -->
