# Theme

You can add the Theme component anywhere to encapsulate a group of components you would like to theme. If you would like to theme all the components in your entire app then you would add the Theme component to the root level of your app, like so:

```vue
<template>
	<m-theme :theme="theme">
		<!-- <app /> -->
	</m-theme>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';

export default {
	components: {
		MTheme,
	},

	data() {
		return {
			theme: {
				/* theme config */
			},
		};
	},
};
</script>
```

Note: the Theme component is not required to be used with Maker, and all Maker components can be used standalone without a parent Theme component.

## Theming Buttons

`size`, `variant`, `shape`, `color`, `textColor`, `fullWidth`, and `align` are themeable props in Button. If you set values for any of these props at a theme level then all Buttons within your App will inherit those values. You can still customize any individual buttons at a local level by setting prop values directly on that Button.

```vue
<template>
	<div>
		<h3>no theme</h3>
		<m-button>theme-less button</m-button>
		<br>

		<h3>theme</h3>
		pick theme primary color
		<br>
		<input
			v-model="theme.colors.primary"
			type="color"
		>
		<br>

		pick theme default button text color
		<br>
		<input
			v-model="theme.button.textColor"
			type="color"
		>
		<br>

		pick theme default button size
		<br>
		<select v-model="theme.button.size">
			<option value="small">
				small
			</option>
			<option value="medium">
				medium
			</option>
			<option value="large">
				large
			</option>
		</select>
		<br>

		pick theme default button shape
		<br>
		<select v-model="theme.button.shape">
			<option value="squared">
				squared
			</option>
			<option value="rounded">
				rounded
			</option>
			<option value="pill">
				pill
			</option>
		</select>
		<br>

		pick theme default button align
		<br>
		<select v-model="theme.button.align">
			<option value="center">
				center
			</option>
			<option value="stack">
				stack
			</option>
			<option value="space-between">
				space between
			</option>
		</select>
		<br>

		pick theme default button fullWidth
		<br>
		<select v-model="theme.button.fullWidth">
			<option :value="true">
				true
			</option>
			<option :value="false">
				false
			</option>
		</select>
		<br>

		pick theme default button variant
		<br>
		<select v-model="theme.button.variant">
			<option value="primary">
				primary
			</option>
			<option value="secondary">
				secondary
			</option>
			<option value="tertiary">
				tertiary
			</option>
		</select>
		<br><br>

		<m-theme :theme="theme">
			<m-button>default themed button</m-button>
			<br>
			<m-button color="#000000">
				always black button
			</m-button>
			<br>
			<m-button size="medium">
				always medium button
			</m-button>
			<br>
			<m-button shape="rounded">
				always rounded button
			</m-button>
			<br>
			<m-button variant="primary">
				always primary button
			</m-button>
			<br>
			<m-button variant="secondary">
				always secondary button
			</m-button>
			<br>
			<m-button variant="tertiary">
				always tertiary button
			</m-button>
		</m-theme>
	</div>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import { MButton } from '@square/maker/components/Button';

export default {
	components: {
		MTheme,
		MButton,
	},
	data() {
		return {
			theme: {
				colors: {
					primary: '#000000',
				},
				button: {
					size: 'medium',
					variant: 'primary',
					shape: 'rounded',
					color: '@colors.primary',
					align: 'center',
					fullWidth: false,
					textColor: '#ffffff',
				},
			},
		};
	},
};
</script>
```

## Theming ActionBarButtons

`color`, `textColor`, `shape`, `align`, and `fullWidth` are themeable props in ActionBarButtons. If you set values for any of these props at a theme level then all Buttons within your App will inherit those values. You can still customize any individual buttons at a local level by setting prop values directly on that ActionBarButton.

```vue
<template>
	<div>
		<h3>no theme</h3>
		<div class="card">
			<div class="content">
				<ol>
					<li
						v-for="i in 20"
						:key="i"
					>
						content content content
					</li>
				</ol>
				<m-inline-action-bar>
					<m-action-bar-button
						key="close"
						color="#f6f6f6"
					>
						<x-icon class="icon" />
					</m-action-bar-button>
					<m-action-bar-button
						key="confirm"
						full-width
					>
						Confirm or whatever
					</m-action-bar-button>
				</m-inline-action-bar>
			</div>
		</div>
		<br>

		<h3>theme</h3>
		pick theme primary color
		<br>
		<input
			v-model="theme.colors.primary"
			type="color"
		>
		<br>

		pick theme default actionbarbutton text color
		<br>
		<input
			v-model="theme.actionbarbutton.textColor"
			type="color"
		>
		<br>

		pick theme default actionbarbutton align
		<br>
		<select v-model="theme.actionbarbutton.align">
			<option value="center">
				center
			</option>
			<option value="stack">
				stack
			</option>
			<option value="space-between">
				space between
			</option>
		</select>
		<br>

		pick theme default actionbarbutton fullWidth
		<br>
		<select v-model="theme.actionbarbutton.fullWidth">
			<option :value="true">
				true
			</option>
			<option :value="false">
				false
			</option>
		</select>
		<br>

		pick theme default actionbarbutton shape
		<br>
		<select v-model="theme.actionbarbutton.shape">
			<option value="squared">
				squared
			</option>
			<option value="rounded">
				rounded
			</option>
			<option value="pill">
				pill
			</option>
		</select>
		<br><br>

		<m-theme :theme="theme">
			<div class="card">
				<div class="content">
					<ol>
						<li
							v-for="i in 20"
							:key="i"
						>
							content content content
						</li>
					</ol>
					<m-inline-action-bar>
						<m-action-bar-button
							key="close"
							color="#f6f6f6"
						>
							<x-icon class="icon" />
						</m-action-bar-button>
						<m-action-bar-button
							key="confirm"
							full-width
						>
							Confirm or whatever
						</m-action-bar-button>
					</m-inline-action-bar>
				</div>
			</div>
		</m-theme>
	</div>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';

export default {
	components: {
		MTheme,
		MInlineActionBar,
		MActionBarButton,
		XIcon,
	},
	data() {
		return {
			theme: {
				colors: {
					primary: '#000000',
				},
				actionbarbutton: {
					color: '@colors.primary',
					textColor: undefined,
					shape: 'pill',
					align: 'center',
					fullWidth: false,
				},
			},
		};
	},
};
</script>

<style scoped>
.card {
	width: 600px;
	height: 400px;
	position: relative;
	overflow: hidden;
	border-radius: 16px;
	box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.2);
	padding: 16px;
}
.content {
	overflow: scroll;
	height: 100%;
}
.icon {
	width: 24px;
	height: 24px;
}
</style>
```

## Theming Headings & Texts

```vue
<template>
	<m-theme :theme="theme">
		pick default text color
		<br>
		<input
			v-model="theme.colors.text"
			type="color"
		>
		<br>

		pick default text font family
		<br>
		<select v-model="theme.text.fontFamily">
			<option value="inherit">
				inherit
			</option>
			<option value="arial">
				arial
			</option>
			<option value="serif">
				serif
			</option>
			<option value="sans-serif">
				sans-serif
			</option>
			<option value="monospace">
				monospace
			</option>
		</select>
		<br>

		pick default text size
		<br>
		<input
			v-model="theme.text.size"
			type="number"
			min="-1"
			max="1"
		>
		<br>

		<m-text>
			{{ JSON.stringify($data) }} text content
		</m-text>
	</m-theme>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import { MText } from '@square/maker/components/Text';

export default {
	components: {
		MTheme,
		MText,
	},
	data() {
		return {
			theme: {
				colors: {
					text: '#000000',
				},
				text: {
					fontFamily: 'inherit',
					size: 0,
				},
			},
		};
	},
};
</script>
```

## Customizing the theme within subsets of the app

Theme components can be nested, and when nested the child Theme can override its parent Theme in two ways:
1. Providing its own theme data, which will be merged with the theme data provided by the parent or
2. Selecting a profile from the parent theme, which will be merged with the theme data provided by the parent

A "profile" is, in itself, a theme.

### Option 1: Nested Themes example

```vue
<template>
	<m-theme :theme="parentTheme">
		pick parent theme primary color
		<br>
		<input
			v-model="parentTheme.colors.primary"
			type="color"
		>
		<br>

		<m-button>
			button in scope of parent theme
		</m-button>

		<m-theme :theme="childTheme">
			pick child theme primary color
			<br>
			<input
				v-model="childTheme.colors.primary"
				type="color"
			>
			<br>

			<m-button>
				button in scope of child theme
			</m-button>
		</m-theme>
	</m-theme>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import { MButton } from '@square/maker/components/Button';

export default {
	components: {
		MTheme,
		MButton,
	},
	data() {
		return {
			parentTheme: {
				colors: {
					primary: '#000000',
				},
			},
			childTheme: {
				colors: {
					primary: '#ff0000',
				},
			},
		};
	},
};
</script>
```

### Option 2: Theme profiles example

```vue
<template>
	<m-theme :theme="theme">
		pick theme primary color
		<br>
		<input
			v-model="theme.colors.primary"
			type="color"
		>
		<br>

		<m-button>
			button in scope of theme
		</m-button>

		<m-theme :profile="theme.profiles[0].id">
			pick {{ theme.profiles[0].id }} profile primary color
			<br>
			<input
				v-model="theme.profiles[0].colors.primary"
				type="color"
			>
			<br>

			<m-button>
				button in scope of theme with {{ theme.profiles[0].id }} profile selected
			</m-button>
		</m-theme>
	</m-theme>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import { MButton } from '@square/maker/components/Button';

export default {
	components: {
		MTheme,
		MButton,
	},
	data() {
		return {
			theme: {
				colors: {
					primary: '#000000',
				},
				profiles: [
					{
						id: 'exampleProfileId',
						colors: {
							primary: '#ff0000',
						},
					},
				],
			},
		};
	},
};
</script>
```

<!-- api-tables:start -->
## Props

| Prop    | Type     | Default            | Possible values | Description |
| ------- | -------- | ------------------ | --------------- | ----------- |
| theme*  | `object` | —                  | —               | —           |
| profile | `string` | `'defaultProfile'` | —               | —           |


## Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |
<!-- api-tables:end -->
