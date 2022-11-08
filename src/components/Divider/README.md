# Divider

Use Divider to horizontally separate similar content.

```vue
<template>
	<div>
		<h4>divider 👇</h4>
		<m-divider />
		<h4>divider ☝️</h4>
	</div>
</template>

<script>
import { MDivider } from '@square/maker/components/Divider';

export default {
	components: {
		MDivider,
	},
};
</script>
```

## Examples

Sometimes you may want to visually separate a list of containers, you can do so using the built-in `gap-8` and `gap-16` patterns like so:

```vue
<template>
	<div>
		<m-button
			size="small"
			pattern="primaryOutline"
			@click="toggleSize"
		>
			toggle gap size ({{ gapSize }}px)
		</m-button>
		<m-container
			label="Container one"
			sublabel="Some sublabel"
			requirement-label="Also do X"
		>
			Content inside the container.
		</m-container>
		<m-divider :pattern="gapPattern" />
		<m-container
			label="Container two"
			sublabel="Other sublabel"
			requirement-label="Also do Y"
		>
			Content inside another container.
		</m-container>
		<m-divider :pattern="gapPattern" />
		<m-container
			label="Container three"
			sublabel="Another sublabel"
			requirement-label="Also do Z"
		>
			Content inside the last container.
		</m-container>
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MContainer } from '@square/maker/components/Container';
import { MDivider } from '@square/maker/components/Divider';

const STEP = 8;
const MAX = 16;

export default {
	components: {
		MContainer,
		MDivider,
		MButton,
	},
	data() {
		return {
			size: 0,
		};
	},
	computed: {
		gapSize() {
			return (this.size % MAX) + STEP;
		},
		gapPattern() {
			return `gap-${this.gapSize}`;
		},
	},
	methods: {
		toggleSize() {
			this.size += STEP;
		},
	},
};
</script>

<style scoped>
.mobile {
	overflow: hidden;
	border-radius: 30px;
	padding: 32px 16px;
	width: 400px;
	border: 2px solid $maker-color-neutral-10;
	box-shadow:
		4.8px 6.4px 10.8px -40px rgba(0, 0, 0, 0.34),
		12.2px 16.4px 18.2px -40px rgba(0, 0, 0, 0.213),
		23.7px 31.8px 26.4px -40px rgba(0, 0, 0, 0.159),
		38px 51px 54px -40px rgba(0, 0, 0, 0.098);
}

.mobile-scroll {
	border: 2px solid $maker-color-neutral-10;
}
</style>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

Themable props* can be configured via the [Theme](#/Theme) component using the key `divider`.

| Prop     | Type     | Default     | Possible values                                                    | Description                    |
| -------- | -------- | ----------- | ------------------------------------------------------------------ | ------------------------------ |
| pattern* | `string` | —           | `'gap-8'`, `'gap-16'`, any custom pattern defined within the theme | pattern defined at theme level |
| size*    | `string` | `'1px'`     | -                                                                  | Size (height) of the divider   |
| color*   | `string` | `'#d3d3d3'` | -                                                                  | Color of the divider           |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
