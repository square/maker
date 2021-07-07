# Theme

Add the Theme component _anywhere_ top-level to encapsulate all library components. In this example, the Theme component wraps the entire App.

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

## Theming Buttons

The `size`, `variant`, `shape`, `color`, and `textColor` are theme-able props in Button. If you set values for any of these props at a theme level then all Buttons within your App will inherit those values. You can still customize any individual buttons at a local level by setting prop values directly on that Button.

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
				},
			},
		};
	},
};
</script>
```

## Theming ActionBarButtons

The `color` prop is theme-able in ActionBarButtons. If you set a value for the `color` prop at a theme level then all ActionBarButtons within your App will inherit those values. You can still customize any individual buttons at a local level by setting prop values directly on that ActionBarButton.

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


<!-- api-tables:start -->
## Props

| Prop   | Type     | Default | Possible values | Description |
| ------ | -------- | ------- | --------------- | ----------- |
| theme* | `object` | —       | —               | —           |


## Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |
<!-- api-tables:end -->
