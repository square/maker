# StarRating

Use Star Rating to display an item's rating in stars.

## Examples

You can pass a number between 0.0 and 5.0 to the `rating` prop and Star Rating will render it rounded to the nearest number of half-stars:

```vue
<template>
	<div>
		<div>
			Rating ({{ rating }} stars):
			<br>
			<input
				v-model="rating"
				type="range"
				min="0"
				max="5"
				step="0.1"
			>
		</div>

		<div
			v-for="size in ['small', 'medium', 'large']"
			:key="size"
		>
			{{ size }}
			<m-star-rating
				:rating="rating"
				:size="size"
				:color="color"
			/>
		</div>
	</div>
</template>

<script>
import { MStarRating } from '@square/maker/components/StarRating';

export default {
	components: {
		MStarRating,
	},
	data() {
		return {
			rating: 2.5,
		};
	},
};
</script>
```

Star Rating can be made interactive and editable by adding the `is-editable` prop and then listening to state changes via `@star-click` event:

```vue
<template>
	<div>
		<div>
			Rating: ({{ rating }} Stars)
		</div>

		<div
			v-for="size in ['small', 'medium', 'large']"
			:key="size"
		>
			{{ size }}
			<m-star-rating
				:rating="rating"
				:size="size"
				is-editable
				@star-click="rating = $event"
			/>
		</div>
	</div>
</template>

<script>
import { MStarRating } from '@square/maker/components/StarRating';

export default {
	components: {
		MStarRating,
	},
	data() {
		return {
			rating: 0,
		};
	},
};
</script>
```

Although Star Rating has a `color` prop, it's better to leave it omitted and let Maker's theming system the best color for the rating given contrast requirements against the background.


```vue
<template>
	<m-theme :theme="theme">
		<label>
			background color
			<input
				v-model="bgColor"
				type="color"
			>
		</label>
		<m-star-rating
			v-for="rating in [1, 2, 3, 4, 5]"
			:key="rating"
			:rating="rating"
		/>
	</m-theme>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import makerColors from '@square/maker/utils/maker-colors';
import { MStarRating } from '@square/maker/components/StarRating';

export default {
	components: {
		MTheme,
		MStarRating,
	},
	data() {
		return {
			bgColor: '#ffffff',
		};
	},
	computed: {
		theme() {
			return {
				colors: {
					background: this.bgColor,
					...makerColors(this.bgColor),
				},
			};
		},
	},
};
</script>
```

<!-- api-tables:start -->
## Star Props

Supports attributes from [`<svg>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg).

| Prop  | Type     | Default     | Possible values         | Description                           |
| ----- | -------- | ----------- | ----------------------- | ------------------------------------- |
| fill  | `string` | `'full'`    | `full`, `half`, `empty` | Determines the fill style of the star |
| color | `string` | `'#ffbf00'` | —                       | Color of the star                     |


## Star Events

Supports events from [`<svg>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg).


## StarRating Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop        | Type      | Default    | Possible values            | Description                                                                |
| ----------- | --------- | ---------- | -------------------------- | -------------------------------------------------------------------------- |
| rating      | `number`  | `0`        | —                          | Rating value from 0-5, determines fill state of stars                      |
| size        | `string`  | `'medium'` | `small`, `medium`, `large` | Size of rating component                                                   |
| color       | `string`  | —          | —                          | Color of the star                                                          |
| is-editable | `boolean` | `false`    | —                          | Determines whether to bubble up click/hover events and show pointer cursor |


## StarRating Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Event        | Type | Description |
| ------------ | ---- | ----------- |
| star-click   | -    | —           |
| star-hover   | -    | —           |
| star-unhover | -    | —           |
<!-- api-tables:end -->
