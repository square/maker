# Card

Use Card to provide a stylized container of information.



## Examples
```vue
<template>
	<div class="spaceout">
		<m-card>
			here is my card content
		</m-card>
		<div class="container">
			<m-card>
				this is my card inside of a 300px wide container.
				the card fits the width of the container, but there is no padding on the outside.
			</m-card>
		</div>
		<div style="width:400px;">
			<m-card>
				here is my card content. there is a fixed width of 400px applied directly to the card.
			</m-card>
		</div>
		<m-theme
			class="glass-demo"
			:theme="themeDark"
		>
			<m-image
				class="image"
				src="https://source.unsplash.com/600x400/?night+sky"
			/>
			<m-card
				variant="glass"
				style="width:400px;"
			>
				here is my card content. there is a fixed width of 400px applied directly to the card.
			</m-card>
		</m-theme>
		<m-theme
			class="glass-demo"
			:theme="themeLight"
		>
			<m-image
				class="image"
				src="https://source.unsplash.com/600x400/?snow+blind"
			/>
			<m-card
				variant="glass"
				style="width:400px;"
			>
				here is my card content. there is a fixed width of 400px applied directly to the card.
			</m-card>
		</m-theme>
	</div>
</template>

<script>
import { MCard } from '@square/maker/components/Card';
import { MImage } from '@square/maker/components/Image';
import { MTheme } from '@square/maker/components/Theme';
import makerColors from '@square/maker/utils/maker-colors';

export default {
	components: {
		MCard,
		MImage,
		MTheme,
	},

	data() {
		return {
			themeLight: {
				colors: makerColors('#ffffff', '#000000'),
			},
			themeDark: {
				colors: makerColors('#000000', '#ffffff'),
			},
		};
	},
};
</script>
<style scoped>
.spaceout > * {
	margin-bottom: 16px;
}
.spaceout > *:last-child {
	margin-bottom: 0;
}
.container {
	width: 300px;
}

.glass-demo {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 600px;
	height: 400px;
}

.image {
	position: absolute;
}
</style>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

Themable props* can be configured via the [Theme](#/Theme) component using the key `card`.

| Prop     | Type     | Default     | Possible values                    | Description  |
| -------- | -------- | ----------- | ---------------------------------- | ------------ |
| shape*   | `string` | —           | `'squared'`, `'rounded'`, `'pill'` | card shape   |
| variant* | `string` | `'outline'` | `'outline'`, `'glass'`             | card variant |
| aria-labelledby | `string` | — | - | The ID of the element that labels the card. |


## Slots

| Slot    | Description  |
| ------- | ------------ |
| default | card content |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
