# FluidCarousel

Carousel that adjusts to the width of the parent container

## Example
```vue
<template>
	<div class="container">
		<m-fluid-carousel
			is-draggable
		>
			<div
				v-for="i in 25"
				:key="i"
				class="carousel-item"
			>
				{{ i }}
			</div>
		</m-fluid-carousel>
	</div>
</template>

<script>
import { MFluidCarousel } from '@square/maker/components/FluidCarousel';

export default {
	components: {
		MFluidCarousel,
	},
};
</script>
<style scoped>
.container {
	width: 400px;
}

.carousel-controls {
	display: flex;
	justify-content: flex-end;
	margin-bottom: 12px;
}

.carousel-item {
	width: 180px;
	height: 180px;
	background-color: rgba(0, 0, 0, 0.1);
	margin-right: 10px;
	user-select: none;
	-webkit-user-select: none;
  -ms-user-select: none;
}
</style>
```

## With FluidCarouselControls
```vue
<template>
	<div class="container">
		<m-fluid-carousel
			is-draggable
		>
			<template #header>
				<div
					class="carousel-controls"
				>
					<m-fluid-carousel-controls />
				</div>
			</template>

			<div
				v-for="i in 25"
				:key="i"
				class="carousel-item"
			>
				{{ i }}
			</div>
		</m-fluid-carousel>
	</div>
</template>

<script>
import { MFluidCarousel, MFluidCarouselControls } from '@square/maker/components/FluidCarousel';

export default {
	components: {
		MFluidCarousel,
		MFluidCarouselControls,
	},
};
</script>
<style scoped>
.container {
	width: 600px;
}

.carousel-controls {
	display: flex;
	justify-content: flex-end;
	margin-bottom: 12px;
}

.carousel-item {
	width: 180px;
	height: 180px;
	background-color: rgba(0, 0, 0, 0.1);
	margin-right: 10px;
	user-select: none;
	-webkit-user-select: none;
  -ms-user-select: none;
}
</style>
```

## Vertical FluidCarousel

```vue
<template>
	<div
		class="container"
		:style="containerStyles"
	>
		<m-fluid-carousel
			is-draggable
			is-vertical
			:pixels-to-scroll="pixelsToScroll"
		>
			<template #header>
				<h2>With pixelsToScroll</h2>
			</template>
			<div
				v-for="i in 25"
				:key="i"
				class="carousel-item"
			>
				{{ i }}
			</div>

			<template #footer>
				<div
					class="carousel-footer"
				>
					<m-fluid-carousel-controls is-vertical />
				</div>
			</template>
		</m-fluid-carousel>
	</div>
</template>

<script>
import { MFluidCarousel, MFluidCarouselControls } from '@square/maker/components/FluidCarousel';

const ITEM_SIZE = 250;
const ITEM_MARGIN_SIZE = 10;
const SCROLL_ITEMS = 2;

export default {
	components: {
		MFluidCarousel,
		MFluidCarouselControls,
	},

	computed: {

		containerStyles() {
			return {
				'--carousel-item-size': `${ITEM_SIZE}px`,
				'--carousel-item-margin-size': `${ITEM_MARGIN_SIZE}px`,
			};
		},

		pixelsToScroll() {
			return (ITEM_SIZE + ITEM_MARGIN_SIZE) * SCROLL_ITEMS;
		},
	},
};
</script>
<style scoped>
.container {
	height: 700px;
	width: var(--carousel-item-size);
}

.carousel-item {
	width: var(--carousel-item-size);
	height: var(--carousel-item-size);
	background-color: rgba(0, 0, 0, 0.1);
	margin-bottom: var(--carousel-item-margin-size);
	user-select: none;
	-webkit-user-select: none;
  -ms-user-select: none;
}
.carousel-footer {
	display: flex;
	justify-content: center;
	padding-top: 12px;
}
</style>

```

<!-- api-tables:start -->
## FluidCarousel Props

| Prop             | Type      | Default | Possible values | Description                                                                 |
| ---------------- | --------- | ------- | --------------- | --------------------------------------------------------------------------- |
| is-draggable     | `boolean` | `false` | —               | Whether the user can navigate the carousel by dragging                      |
| item-count       | `number`  | `0`     | —               | Number of items in the carousel. Re-enables scroll:end event when increased |
| is-vertical      | `boolean` | `false` | —               | Whether the carousel has a vertical layout - default is horizontal          |
| pixels-to-scroll | `number`  | `0`     | —               | Number of pixels to scroll when using navigating using controls             |
| snap-scroll      | `boolean` | `false` | —               | Whether scrolling snaps when navigating using touch controls                |


## FluidCarousel Slots

| Slot    | Description                |
| ------- | -------------------------- |
| header  | FluidCarousel header items |
| default | FluidCarousel items        |
| footer  | FluidCarousel footer items |


## FluidCarousel Events

| Event                      | Type      | Description                                             |
| -------------------------- | --------- | ------------------------------------------------------- |
| overflowing                | `boolean` | Event emitted when carousel content overflows container |
| carousel:mounted           | -         | Event emitted during mounted lifecycle hook             |
| scroll:end                 | -         | Emitted when the scroll position is near the end        |
| carousel:at-first-position | `boolean` | Emitted when carousel moves                             |
| carousel:at-last-position  | `boolean` | Emitted when carousel moves                             |


## FluidCarouselControls Props

| Prop       | Type      | Default | Possible values | Description                                 |
| ---------- | --------- | ------- | --------------- | ------------------------------------------- |
| is-enabled | `boolean` | `true`  | —               | Whether the navigation buttons are disabled |
<!-- api-tables:end -->
