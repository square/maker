# Image


## Examples

### Shape
```vue
<template>
	<div>
		<m-image
			class="image"
			src="https://source.unsplash.com/random/400x600"
			:shape="shape"
			@image:visible="imageVisible"
		/>
		<m-image
			class="image image-tall"
			src="https://source.unsplash.com/random/400x600"
			:shape="shape"
		/>
		<m-image
			class="image image-wide"
			src="https://source.unsplash.com/random/400x600"
			:shape="shape"
		/>
		<br>
		{{ fadedInComplete }}
		<br>
		<label>
			Shape
			<select
				v-model="shape"
			>
				<option
					v-for="(value, index) in shapeOptions"
					:key="index"
					:value="value"
				>
					{{ value }}
				</option>
			</select>
		</label>
	</div>
</template>

<script>
import { MImage } from '@square/maker/components/Image';

export default {
	components: {
		MImage,
	},

	data() {
		return {
			shape: 'square',
			shapeOptions: [
				'square',
				'circle',
				'arch',
				'hexagon',
			],
			fadedInComplete: 'Fade in not completed',
		};
	},

	methods: {
		imageVisible() {
			this.fadedInComplete = 'Fade in completed';
		},
	},
};
</script>

<style scoped>
.image {
	display: inline-block;
	width: 400px;
	height: 400px;
	margin-right: 25px;
}

.image-tall {
	display: inline-block;
	width: 400px;
	height: 500px;
}

.image-wide {
	display: inline-block;
	width: 600px;
	height: 400px;
}
</style>
```

### Object Fit

object-fit: `contain` works best when shape: `original`

```vue
<template>
	<div>
		<m-image
			class="image"
			src="https://source.unsplash.com/random/400x600"
			:object-fit="objectFit"
		/>
		<m-image
			class="image image-tall"
			src="https://source.unsplash.com/random/400x600"
			:object-fit="objectFit"
		/>
		<m-image
			class="image image-wide"
			src="https://source.unsplash.com/random/400x600"
			:object-fit="objectFit"
		/>
		<br>
		<label>
			Object Fit
			<select
				v-model="objectFit"
			>
				<option
					v-for="(value, index) in objectFitOptions"
					:key="index"
					:value="value"
				>
					{{ value }}
				</option>
			</select>
		</label>
	</div>
</template>

<script>
import { MImage } from '@square/maker/components/Image';

export default {
	components: {
		MImage,
	},

	data() {
		return {
			objectFit: 'cover',
			objectFitOptions: [
				'cover',
				'contain',
				'scale-down',
			],
		};
	},
};
</script>

<style scoped>
.image {
	display: inline-block;
	width: 400px;
	height: 400px;
	margin-right: 25px;
}

.image-tall {
	display: inline-block;
	width: 400px;
	height: 500px;
}

.image-wide {
	display: inline-block;
	width: 600px;
	height: 400px;
}
</style>
```

### Object Position

```vue
<template>
	<div>
		<m-image
			class="image"
			src="https://source.unsplash.com/random/400x400"
			:object-fit="objectFit"
			:object-position="objectPosition"
		/>
		<br>
		<label>
			Object Position
			<select
				v-model="objectPosition"
			>
				<option
					v-for="(value, index) in objectPositionOptions"
					:key="index"
					:value="value"
				>
					{{ value }}
				</option>
			</select>
		</label>
	</div>
</template>

<script>
import { MImage } from '@square/maker/components/Image';

export default {
	components: {
		MImage,
	},

	data() {
		return {
			objectFit: 'contain',
			objectPosition: 'center',
			objectPositionOptions: [
				'center',
				'top',
				'bottom',
			],
		};
	},
};
</script>

<style scoped>
.image {
	display: inline-block;
	width: 400px;
	height: 600px;
}
</style>
```

## Props
Supports all `<img>` attributes

<!-- api-tables:start -->
## Props

Supports attributes from [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img).

Themable props* can be configured via the [Theme](#/Theme) component using the key `image`.

| Prop                          | Type      | Default    | Possible values                                             | Description                                                                         |
| ----------------------------- | --------- | ---------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| src                           | `string`  | —          | -                                                           | -                                                                                   |
| srcset                        | `string`  | —          | -                                                           | -                                                                                   |
| sizes                         | `string`  | —          | -                                                           | -                                                                                   |
| shape*                        | `string`  | —          | `'original'`, `'square'`, `'circle'`, `'arch'`, `'hexagon'` | Original applies theme's border radius, square applies border radius of 0           |
| lazyload                      | `boolean` | `false`    | -                                                           | -                                                                                   |
| object-fit                    | `string`  | `'cover'`  | -                                                           | [Object fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)           |
| object-position               | `string`  | `'center'` | -                                                           | [Object position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position) |
| should-disable-transition     | `boolean` | `false`    | -                                                           | -                                                                                   |
| should-use-static-size-styles | `boolean` | `false`    | -                                                           | -                                                                                   |


## Events

Supports events from [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img).

| Event         | Type | Description |
| ------------- | ---- | ----------- |
| image:visible | -    | —           |
<!-- api-tables:end -->
