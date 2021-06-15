# Button

## Themeable Buttons


```vue
<template>
	<div>
		<m-button>
			no theme default button
		</m-button>

		<h2>customize theme</h2>

		pick theme primary color
		<br>
		<input
			v-model="theme.primaryColor"
			type="color"
		>
		<br>

		pick theme default button style
		<br>
		<select v-model="theme.button.style">
			<option value="fill">fill</option>
			<option value="outline">outline</option>
			<option value="ghost">ghost</option>
		</select>
		<br>

		pick theme default button shape
		<br>
		<select v-model="theme.button.shape">
			<option value="square">square</option>
			<option value="rounded">rounded</option>
			<option value="pill">pill</option>
		</select>
		<br>

		pick primary button style
		<br>
		<select v-model="theme.button.mixins.primary.style">
			<option value="fill">fill</option>
			<option value="outline">outline</option>
			<option value="ghost">ghost</option>
		</select>
		<br>

		pick secondary button style
		<br>
		<select v-model="theme.button.mixins.secondary.style">
			<option value="fill">fill</option>
			<option value="outline">outline</option>
			<option value="ghost">ghost</option>
		</select>
		<br>

		pick tertiary button style
		<br>
		<select v-model="theme.button.mixins.tertiary.style">
			<option value="fill">fill</option>
			<option value="outline">outline</option>
			<option value="ghost">ghost</option>
		</select>
		<br>

		<m-theme :theme="theme">
			<h3>default</h3>
			<m-button>
				themed default button
			</m-button>

			<h3>heirarchy</h3>
			<m-button :mixins="['primary']">
				themed primary button
			</m-button>
			<m-button :mixins="['secondary']">
				themed secondary button
			</m-button>
			<m-button :mixins="['tertiary']">
				themed tertiary button
			</m-button>

			<h3>size</h3>
			<m-button :mixins="['small']">
				themed small button
			</m-button>
			<m-button :mixins="['medium']">
				themed medium button
			</m-button>
			<m-button :mixins="['large']">
				themed large button
			</m-button>

			<h3>shape</h3>
			<m-button :mixins="['square']">
				themed square button
			</m-button>
			<m-button :mixins="['rounded']">
				themed rounded button
			</m-button>
			<m-button :mixins="['pill']">
				themed pill button
			</m-button>

			<h3>combined mixins</h3>
			<m-button :mixins="['small', 'square', 'secondary']">
				themed small square secondary button
			</m-button>
			<m-button :mixins="['large', 'pill', 'tertiary']">
				themed large pill tertiary button
			</m-button>

			<h3>combined mixins w/regular props</h3>
			<m-button full-width :mixins="['large', 'square', 'secondary']">
				full-width themed large square secondary button
			</m-button>
			<m-button loading :mixins="['small', 'pill', 'tertiary']">
				loading themed small pill tertiary button
			</m-button>
			<m-button disabled :mixins="['medium', 'rounded', 'primary']">
				disabled themed medium rounded primary button
			</m-button>

			<h3>local button with some custom overrides</h3>
			pick local button color
			<br>
			<input
				v-model="localButtonTheme.color"
				type="color"
			>
			<br>

			<m-button :theme="localButtonTheme">
				button with local custom theme
			</m-button>

		</m-theme>
	</div>
</template>

<script>
import X from '@square/maker-icons/X';
import Plus from '@square/maker-icons/Plus';
import { MButton } from '@square/maker/components/Button';
import { MTheme } from '@square/maker/components/Theme';

export default {
	components: {
		MButton,
		MTheme,
		Plus,
		X,
	},
	data() {
		return {
			theme: {
				primaryColor: '#8d01e9',
				button: {
					color: '@primaryColor',
					size: 'medium',
					style: 'fill',
					shape: 'rounded',

					mixins: {
						small: {
							size: 'small',
						},
						medium: {
							size: 'medium',
						},
						large: {
							size: 'large',
						},
						square: {
							shape: 'square',
						},
						rounded: {
							shape: 'rounded',
						},
						pill: {
							shape: 'pill',
						},
						primary: {
							style: 'fill',
						},
						secondary: {
							style: 'outline',
						},
						tertiary: {
							style: 'ghost',
						},
					},
				},
			},
			localButtonTheme: {
				color: '#209301',
			},
		};
	},
};
</script>
```


<!-- api-tables:start -->
## Props

Supports attributes from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).

| Prop       | Type      | Default     | Possible values                    | Description                           |
| ---------- | --------- | ----------- | ---------------------------------- | ------------------------------------- |
| type       | `string`  | `'button'`  | —                                  | Type of the button                    |
| size       | `string`  | `'medium'`  | `small`, `medium`, `large`         | Size of the button                    |
| full-width | `boolean` | `false`     | —                                  | Whether to make the button full-width |
| color      | `string`  | `'#000'`    | —                                  | Background color of button            |
| text-color | `string`  | —           | —                                  | Text color of button                  |
| variant    | `string`  | `'primary'` | `primary`, `secondary`, `tertiary` | Semantic variant                      |
| shape      | `string`  | `'rounded'` | `squared`, `rounded`, `pill`       | Shape of button                       |
| disabled   | `boolean` | `false`     | —                                  | Toggles button disabled state         |
| align      | `string`  | `'center'`  | `center`, `stack`, `space-between` | How to align button's contents        |
| loading    | `boolean` | `false`     | —                                  | Toggles button loading state          |


## Slots

| Slot        | Description       |
| ----------- | ----------------- |
| default     | Button label      |
| information | Information label |


## Events

Supports events from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).
<!-- api-tables:end -->
