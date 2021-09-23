# StarRating

```vue
<template>
	<div :class="$s.StarDemos">
		<label>
			Color picker
			<input
				v-model="color"
				type="color"
			>
		</label>
		<div>
			<m-heading
				:class="$s.StarDemoHeader"
				:size="1"
			>
				Star States
			</m-heading>

			<div>
				<div
					v-for="fill in ['full', 'half', 'empty']"
					:key="fill"
					:class="$s.StarState"
				>
					{{ fill }}
					<m-star
						:fill="fill"
						:color="color"
					/>
				</div>
			</div>
		</div>

		<div>
			<m-heading
				:class="$s.StarDemoHeader"
				:size="1"
			>
				Star Rating
			</m-heading>

			<div>
				Rating ({{ avgRating }} Stars):
				<br>
				<input
					v-model="avgRating"
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
					:rating="avgRating"
					:size="size"
					:color="color"
				/>
			</div>
		</div>

		<div>
			<m-heading
				:class="$s.StarDemoHeader"
				:size="1"
			>
				Star Rating Selector
			</m-heading>

			<div>
				Rating: ({{ formRating }} Stars)
			</div>

			<div
				v-for="size in ['small', 'medium', 'large']"
				:key="size"
			>
				{{ size }}
				<m-star-rating
					:rating="formRating"
					:size="size"
					:is-editable="true"
					:color="color"
					@star-click="setFormRating"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { MStar, MStarRating } from '@square/maker/components/StarRating';
import { MHeading } from '@square/maker/components/Heading';

export default {
	components: {
		MStar,
		MStarRating,
		MHeading,
	},
	data() {
		return {
			avgRating: 2.5,
			formRating: 0,
			color: '#FFBF00',
		};
	},

	methods: {
		setFormRating(rating) {
			this.formRating = rating;
		},
	},
};
</script>

<style module="$s">
.StarDemos {
	display: flex;
	flex-direction: column;
	gap: 32px;
}

.StarDemoHeader {
	margin-bottom: 8px;
}

.StarState {
	display: inline-flex;
	align-items: center;
	margin-right: 8px;
}
</style>
```

<!-- api-tables:start -->
## Star Props

| Prop  | Type     | Default     | Possible values | Description                           |
| ----- | -------- | ----------- | --------------- | ------------------------------------- |
| fill  | `string` | `'full'`    | —               | Determines the fill style of the star |
| color | `string` | `'#FFBF00'` | —               | Color of the star                     |


## Star Events

| Event      | Type | Description |
| ---------- | ---- | ----------- |
| mouseenter | -    | —           |
| mouseleave | -    | —           |
| click      | -    | —           |


## StarRating Props

| Prop     | Type      | Default     | Possible values | Description                                                                |
| -------- | --------- | ----------- | --------------- | -------------------------------------------------------------------------- |
| rating   | `number`  | `0`         | —               | Rating value from 0-5, determines fill state of stars                      |
| size     | `string`  | `'medium'`  | —               | Size of rating component                                                   |
| color    | `string`  | `'#FFBF00'` | —               | Color of the star                                                          |
| editable | `boolean` | `false`     | —               | Determines whether to bubble up click/hover events and show pointer cursor |


## StarRating Events

| Event        | Type | Description |
| ------------ | ---- | ----------- |
| star-click   | -    | —           |
| star-hover   | -    | —           |
| star-unhover | -    | —           |
<!-- api-tables:end -->
