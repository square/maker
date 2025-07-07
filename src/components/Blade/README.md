<!-- eslint-disable vue/no-unregistered-components -->
# Blade

Use the Blade component to open a blade.

```vue
<template>
	<div>
		<m-button
			size="small"
			pattern="primaryOutline"
			@click="openBlade"
		>
			Open blade
		</m-button>
		<m-blade-layer />
	</div>
</template>

<script>
import { MBladeLayer } from '@square/maker/components/Blade';
import DemoBlade from 'doc/DemoBlade.vue';
import { MButton } from '@square/maker/components/Button';

export default {
	components: {
		MButton,
		MBladeLayer,
	},

	mixins: [
		MBladeLayer.apiMixin,
	],

	methods: {
		openBlade() {
			this.bladeApi.open(() => <DemoBlade />);
		},
	},
};
</script>
```

_DemoBlade.vue_

```vue
<template>
	<m-blade>
		<img
			class="cover-photo"
			src="https://picsum.photos/400/300"
		>
		<m-blade-content>
			<m-text pattern="title">
				Blade heading
			</m-text>
			<m-text>
				Blade content
			</m-text>
			<m-button
				size="small"
				pattern="primaryOutline"
				@click="bladeApi.close()"
			>
				Close
			</m-button>
		</m-blade-content>
	</m-blade>
</template>

<script>
import { MBlade, MBladeContent, bladeApi } from '@square/maker/components/Blade';
import { MButton } from '@square/maker/components/Button';
import { MText } from '@square/maker/components/Text';

export default {
	components: {
		MBlade,
		MBladeContent,
		MButton,
		MText,
	},

	inject: {
		bladeApi,
	},
};
</script>

<style scoped>
.cover-photo {
	width: 100%;
	height: 300px;
	object-fit: cover;
	object-position: center;
}
</style>
```

## Examples

### Blade + ActionBar

```vue
<template>
	<div>
		<m-button
			size="small"
			pattern="primaryOutline"
			@click="openBlade"
		>
			Open blade
		</m-button>
		<m-blade-layer />
	</div>
</template>

<script>
import { MBladeLayer } from '@square/maker/components/Blade';
import ActionBarDemoBlade from 'doc/ActionBarDemoBlade.vue';
import { MButton } from '@square/maker/components/Button';

export default {
	components: {
		MButton,
		MBladeLayer,
	},

	mixins: [
		MBladeLayer.apiMixin,
	],

	methods: {
		openBlade() {
			this.bladeApi.open(() => <ActionBarDemoBlade />);
		},
	},
};
</script>
```

_ActionBarDemoBlade.vue_

```vue
<template>
	<m-blade>
		<img
			class="cover-photo"
			src="https://picsum.photos/400/300"
		>
		<m-blade-content>
			<m-text pattern="title">
				Blade heading
			</m-text>
			<m-text>
				Blade content
			</m-text>
			<m-inline-action-bar>
				<m-action-bar-button
					key="close"
					color="#f6f6f6"
					@click="bladeApi.close()"
				>
					<x-icon class="icon" />
				</m-action-bar-button>
				<m-action-bar-button
					key="confirm"
					full-width
					@click="bladeApi.close()"
				>
					Confirm
				</m-action-bar-button>
			</m-inline-action-bar>
		</m-blade-content>
	</m-blade>
</template>

<script>
import { MBlade, MBladeContent, bladeApi } from '@square/maker/components/Blade';
import { MText } from '@square/maker/components/Text';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';

export default {
	components: {
		MBlade,
		MBladeContent,
		MText,
		MInlineActionBar,
		MActionBarButton,
		XIcon,
	},

	inject: {
		bladeApi,
	},
};
</script>

<style scoped>
.cover-photo {
	width: 100%;
	height: 300px;
	object-fit: cover;
	object-position: center;
}
.icon {
	width: 24px;
	height: 24px;
}
</style>
```

<!-- api-tables:start -->
## Blade Props

Themable props* can be configured via the [Theme](#/Theme) component using the key `blade`.

| Prop      | Type     | Default     | Possible values | Description               |
| --------- | -------- | ----------- | --------------- | ------------------------- |
| bg-color* | `string` | `'#ffffff'` | -               | Background color of blade |
| color*    | `string` | `'#000000'` | -               | Text color of blade       |


## Blade Slots

| Slot    | Description   |
| ------- | ------------- |
| default | Blade content |


## BladeContent Slots

| Slot    | Description                                  |
| ------- | -------------------------------------------- |
| default | Blade Content content (gets correct padding) |


## Accessibility

It is recommended to label your blades for assistive technologies. You can do this by adding an `id` to your blade's title element and passing that `id` to the `MBlade` component via the `aria-labelledby` prop.

```html
<template>
	<m-blade aria-labelledby="blade-title">
		<m-blade-content>
			<m-text
				id="blade-title"
				pattern="title"
			>
				Blade heading
			</m-text>
			...
		</m-blade-content>
	</m-blade>
</template>
```

## Props

| Prop | Type | Default | Possible values | Description |
| --- | --- | --- | --- | --- |
| aria-labelledby | `string` | — | - | The ID of the element that labels the blade. |
| bg-color* | `string` | `'#ffffff'` | - | Background color of blade |
| color* | `string` | `'#1b1b1b'` | - | Text color of blade |


<!-- api-tables:end -->
