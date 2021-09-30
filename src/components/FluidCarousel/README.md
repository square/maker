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
import { MFluidCarousel, CAROUSEL_BACK_EVENT } from '@square/maker/components/FluidCarousel';

export default {
	components: {
		MFluidCarousel,
	},
	mounted() {
		console.log(CAROUSEL_BACK_EVENT);
	},
};
</script>
<style scoped>
.container {
	max-width: 600px;
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

## With Controls
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
	max-width: 600px;
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
				<m-fluid-carousel-controls is-vertical />
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
	max-height: 600px;
}

.carousel-item {
	width: 180px;
	height: 180px;
	background-color: rgba(0, 0, 0, 0.1);
	margin-bottom: 10px;
	user-select: none;
	-webkit-user-select: none;
  -ms-user-select: none;
}
</style>

```

<!-- api-tables:start -->
## FluidCarousel Props

| Prop             | Type      | Default | Possible values | Description |
| ---------------- | --------- | ------- | --------------- | ----------- |
| is-draggable     | `boolean` | `false` | —               | —           |
| item-count       | `number`  | `0`     | —               | —           |
| is-vertical      | `boolean` | `false` | —               | —           |
| pixels-to-scroll | `number`  | `0`     | —               | —           |
| snap-scroll      | `boolean` | `false` | —               | —           |


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

| Prop       | Type      | Default | Possible values | Description |
| ---------- | --------- | ------- | --------------- | ----------- |
| is-enabled | `boolean` | `true`  | —               | —           |
<!-- api-tables:end -->
