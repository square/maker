# FluidCarousel

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
	<div class="container">
		<m-fluid-carousel
			is-draggable
			is-vertical
		>
			<template #header>
				<h2>Heading</h2>
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

export default {
	components: {
		MFluidCarousel,
		MFluidCarouselControls,
	},
};
</script>
<style scoped>
.container {
	--carousel-width: 250px;
	height: 600px;
	width: var(--carousel-width);
}

.carousel-item {
	width: var(--carousel-width);
	height: var(--carousel-width);
	background-color: rgba(0, 0, 0, 0.1);
	margin-bottom: 10px;
	user-select: none;
	-webkit-user-select: none;
  -ms-user-select: none;
}
.carousel-footer {
	display: flex;
	justify-content: flex-end;
	padding-top: 12px;
}
</style>

```

<!-- api-tables:start -->
## FluidCarousel Props

| Prop             | Type      | Default | Possible values | Description                                                        |
| ---------------- | --------- | ------- | --------------- | ------------------------------------------------------------------ |
| is-draggable     | `boolean` | `false` | —               | Whether the user can navigate the carousel by dragging             |
| item-count       | `number`  | `0`     | —               | —                                                                  |
| is-vertical      | `boolean` | `false` | —               | Whether the carousel has a vertical layout - default is horizontal |
| pixels-to-scroll | `number`  | `0`     | —               | —                                                                  |
| snap-scroll      | `boolean` | `false` | —               | —                                                                  |


## FluidCarousel Slots

| Slot    | Description |
| ------- | ----------- |
| header  | —           |
| default | —           |
| footer  | —           |


## FluidCarousel Events

| Event                      | Type | Description |
| -------------------------- | ---- | ----------- |
| overflowing                | -    | —           |
| carousel:mounted           | -    | —           |
| scroll:end                 | -    | —           |
| carousel:at-first-position | -    | —           |
| carousel:at-last-position  | -    | —           |


## FluidCarouselControls Props

| Prop       | Type      | Default | Possible values | Description                                 |
| ---------- | --------- | ------- | --------------- | ------------------------------------------- |
| is-enabled | `boolean` | `true`  | —               | Whether the navigation buttons are disabled |
<!-- api-tables:end -->
