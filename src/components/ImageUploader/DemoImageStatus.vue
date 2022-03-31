<template>
	<m-card :class="$s.ImagesCard">
		<m-text
			v-if="header"
			variant="title"
			:size="1"
		>
			{{ header }}
		</m-text>
		<div
			v-if="images.length"
			:class="$s.Images"
		>
			<pre
				v-for="image of images"
				:key="image.id"
				:class="$s.Image"
			>{{ image }}</pre>
		</div>
		<template v-else>
			No Images Yet
		</template>
	</m-card>
</template>

<script>
import { MCard } from '@square/maker/components/Card';
import { MText } from '@square/maker/components/Text';

export default {
	name: 'DemoImageStatus',

	components: {
		MCard,
		MText,
	},

	props: {
		header: {
			type: String,
			default: '',
		},
		images: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style module="$s">
.ImagesCard {
	margin: 16px 0;
}

.Images {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.Image {
	padding: 4px;
	font-size: 12px;
	background-color: lightgrey;
	border-radius: 4px;
}
</style>
