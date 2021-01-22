# Skeleton

```vue
<template>
	<div>
		<h4>loading text</h4>
		<m-skeleton-text :lines="3" />

		<h4>loaded text</h4>
		<m-skeleton-text>
			some loaded text
		</m-skeleton-text>

		<h4>loading block</h4>
		<m-skeleton-block class="loadingBlock" />

		<h4>loaded block</h4>
		<m-skeleton-block>
			loaded content here
		</m-skeleton-block>
	</div>
</template>

<script>
import { MSkeletonText, MSkeletonBlock } from '@square/maker/components/Skeleton';

export default {
	components: {
		MSkeletonText,
		MSkeletonBlock,
	},
};
</script>

<style scoped>
.loadingBlock {
	height: 100px;
}
```

<!-- api-tables:start -->
## SkeletonBlock Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop   | Type      | Default | Possible values | Description          |
| ------ | --------- | ------- | --------------- | -------------------- |
| loaded | `boolean` | `false` | —               | Toggled loaded state |


## SkeletonBlock Slots

| Slot    | Description     |
| ------- | --------------- |
| default | loading content |


## SkeletonBlock Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).


## SkeletonText Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop   | Type            | Default | Possible values | Description                      |
| ------ | --------------- | ------- | --------------- | -------------------------------- |
| lines  | `string|number` | `1`     | —               | number of lines of skeleton text |
| loaded | `boolean`       | `false` | —               | Toggled loaded state             |


## SkeletonText Slots

| Slot    | Description |
| ------- | ----------- |
| default | loaded text |


## SkeletonText Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
