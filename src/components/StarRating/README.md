# StarRating

```vue
<template>
	<div :class="$s.StarDemos">
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
					<m-star :fill="fill" />
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
				v-for="size in ['medium', 'large']"
				:key="size"
			>
				{{ size }}
				<m-star-rating
					:rating="avgRating"
					:size="size"
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
				v-for="size in ['medium', 'large']"
				:key="size"
			>
				{{ size }}
				<m-star-rating-selector
					:rating="formRating"
					:size="size"
					@star-click="setFormRating"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { MStar, MStarRating, MStarRatingSelector } from '@square/maker/components/StarRating';
import { MHeading } from '@square/maker/components/Heading';

export default {
	components: {
		MStar,
		MStarRating,
		MStarRatingSelector,
		MHeading,
	},
	data() {
		return {
			color: '#000',
			avgRating: 2.5,
			formRating: 0,
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

| Prop  | Type     | Default     | Possible values | Description                                |
| ----- | -------- | ----------- | --------------- | ------------------------------------------ |
| fill  | `string` | `'full'`    | —               | —                                          |
| color | `string` | `'#FFBF00'` | —               | Color of the progress bar (not background) |


## StarRating Props

| Prop   | Type     | Default    | Possible values | Description                                           |
| ------ | -------- | ---------- | --------------- | ----------------------------------------------------- |
| rating | `number` | `0`        | —               | Rating value from 0-5, determines fill state of stars |
| size   | `string` | `'medium'` | —               | Size of rating component                              |


## StarRating Props

| Prop   | Type     | Default    | Possible values | Description                                           |
| ------ | -------- | ---------- | --------------- | ----------------------------------------------------- |
| rating | `number` | `0`        | —               | Rating value from 0-5, determines fill state of stars |
| size   | `string` | `'medium'` | —               | Size of rating component                              |
<!-- api-tables:end -->
