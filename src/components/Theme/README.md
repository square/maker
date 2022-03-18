# Theme

The theme component provides an optional way to globally customize the visual styles of all components in Maker. There are a library of Design Tokens available that apply to several components, as well as the ability to customize specific components.

Any components within the theme component will inherit the tokens provided. We recommend wrapping your application / site with this component to style all Maker components the same way.

```vue
<template>
	<div class="theme-demo">
		<div class="controls">
			<m-heading
				:size="1"
			>
				Colors
			</m-heading>
			<label class="color-option">
				<input
					v-model="theme.colors.background"
					type="color"
				>
				Background
			</label>
			<label class="color-option">
				<input
					v-model="theme.colors.primary"
					type="color"
				>
				Primary
			</label>
			<label class="color-option">
				<input
					v-model="theme.colors.heading"
					type="color"
				>
				Heading
			</label>
			<label class="color-option">
				<input
					v-model="theme.colors.text"
					type="color"
				>
				Text
			</label>
			<m-heading
				:size="0"
			>
				Neutrals
			</m-heading>
			<div class="color-option neutrals">
				<input
					v-model="theme.colors['neutral-0']"
					type="color"
				>
				<input
					v-model="theme.colors['neutral-10']"
					type="color"
				>
				<input
					v-model="theme.colors['neutral-20']"
					type="color"
				>
				<input
					v-model="theme.colors['neutral-80']"
					type="color"
				>
				<input
					v-model="theme.colors['neutral-90']"
					type="color"
				>
				<input
					v-model="theme.colors['neutral-100']"
					type="color"
				>
			</div>
			<m-heading
				:size="1"
			>
				Fonts
			</m-heading>
			<m-heading
				:size="0"
			>
				Heading
			</m-heading>
			<div class="font-choice">
				<m-select
					v-model="theme.heading.fontFamily"
					class="family-choice"
					:options="fontOptions"
					@change="updateFont"
				/>
				<m-select
					v-model="theme.heading.fontWeight"
					:options="defaultWeights"
					@change="updateFont"
				/>
			</div>
			<m-heading
				:size="0"
			>
				Text
			</m-heading>
			<div class="font-choice">
				<m-select
					v-model="theme.text.fontFamily"
					class="family-choice"
					:options="fontOptions"
					@change="updateFont"
				/>
				<m-select
					v-model="theme.text.fontWeight"
					:options="defaultWeights"
					@change="updateFont"
				/>
			</div>
			<label>
				<input
					v-model="theme.fonts.baseSize"
					type="range"
					min="16"
					max="22"
					step="1"
				>
				Base font size
			</label>
			<label>
				<input
					v-model="theme.fonts.sizeScale"
					type="range"
					min="1.067"
					max="1.618"
					step="0.01"
				>
				Contrast
			</label>
		</div>
		<div class="demo-container">
			<div class="demo-preview">
				<m-theme :theme="theme">
					<div class="section">
						<m-heading
							:size="2"
							class="item-title"
						>
							Cappuccino
						</m-heading>
						<m-heading
							:size="1"
							class="item-price"
						>
							$4.00
						</m-heading>
						<m-text
							:size="0"
							class="item-description"
						>
							The essence of handcrafting. Our rich espresso is artfully
							marbled with freshly micro-foamed milk.
						</m-text>
						<m-stepper
							v-model="quantity"
							min="1"
							max="10"
						/>
					</div>
					<m-container>
						<template
							#label
						>
							<m-heading
								:size="-1"
							>
								Size
							</m-heading>
						</template>
						<div class="option">
							<m-radio
								v-model="size"
								value="sm"
							>
								Small
							</m-radio>
							<m-text
								:size="-1"
							>
								$3.00
							</m-text>
						</div>
						<m-divider />
						<div class="option">
							<m-radio
								v-model="size"
								value="md"
							>
								Medium
							</m-radio>
							<m-text
								:size="-1"
							>
								$3.50
							</m-text>
						</div>
						<m-divider />
						<div class="option">
							<m-radio
								v-model="size"
								value="lg"
							>
								Large
							</m-radio>
							<m-text
								:size="-1"
							>
								$4.00
							</m-text>
						</div>
					</m-container>
					<m-container>
						<template
							#label
						>
							<m-heading
								:size="-1"
							>
								Modifiers
							</m-heading>
						</template>
						<template #required-label>
							Optional
						</template>
						<div class="option">
							<m-checkbox>
								Add Cream
							</m-checkbox>
						</div>
						<m-divider />
						<div class="option">
							<m-checkbox>
								Add Sugar
							</m-checkbox>
						</div>
						<m-divider />
						<div class="option">
							<m-checkbox>
								Add Cinnamon
							</m-checkbox>
						</div>
					</m-container>
					<m-container>
						<template
							#label
						>
							<m-heading
								:size="-1"
							>
								Notes
							</m-heading>
						</template>
						<template #required-label>
							Optional
						</template>
						<m-input
							variant="outline"
							placeholder="Details"
						/>
					</m-container>
					<m-inline-action-bar>
						<m-action-bar-button
							key="confirm"
							full-width
						>
							Add to Order
						</m-action-bar-button>
					</m-inline-action-bar>
				</m-theme>
			</div>
		</div>
	</div>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import { MDivider } from '@square/maker/components/Divider';
import { MStepper } from '@square/maker/components/Stepper';
import { MContainer } from '@square/maker/components/Container';
import { MRadio } from '@square/maker/components/Radio';
import { MCheckbox } from '@square/maker/components/Checkbox';
import { MInput } from '@square/maker/components/Input';
import { MSelect } from '@square/maker/components/Select';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';

export default {
	components: {
		MTheme,
		MHeading,
		MText,
		MDivider,
		MStepper,
		MContainer,
		MRadio,
		MCheckbox,
		MInput,
		MSelect,
		MInlineActionBar,
		MActionBarButton,
	},

	data() {
		return {
			defaultWeights: [{ label: '300', value: '300' }, { label: '400', value: '400' }, { label: '600', value: '600' }],
			fontOptions: [
				{
					label: 'Sans-serif',
					value: '-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif',
				},
				{
					label: 'Serif',
					value: 'Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
				},
				{
					label: 'Mono',
					value: 'Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace',
				},
			],
			theme: {
				colors: {
					background: '#ffffff',
					text: '#000000',
					heading: '#000000',
					primary: '#000000',
					'neutral-0': '#ffffff',
					'neutral-10': '#f1f1f1',
					'neutral-20': '#d3d3d3',
					'neutral-80': '#707070',
					'neutral-90': '#1b1b1b',
					'neutral-100': '#000000',
				},
				heading: {
					fontFamily: '-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif',
					fontWeight: '600',
				},
				text: {
					fontFamily: '-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif',
					fontWeight: '400',
				},
				fonts: {
					baseSize: 16,
					sizeScale: 1.15,
				},
			},
			size: 'sm',
			selected: 'choice-1',
			quantity: 1,
		};
	},

	methods: {
		updateFont() {

		},
	},
};
</script>
<style scoped>
.theme-demo {
	display: flex;
	justify-content: center;
	gap: 10vw;
	padding: 24px;
	background-color: #f1f1f1;
}
.controls {
	order: 1;
	width: 300px;
}
.color-option {
	display: flex;
	gap: 16px;
	margin-bottom: 8px;
}
.font-choice {
	display: flex;
	gap: 8px;
	margin-bottom: 20px;
}
.family-choice {
	flex-grow: 2;
}
.demo-container {
	order: 0;
	position: relative;
	height: 600px;
	width: 360px;
	overflow: hidden;
	border-radius: 30px;
	box-shadow:
		4.8px 6.4px 10.8px -40px rgba(0, 0, 0, 0.34),
		12.2px 16.4px 18.2px -40px rgba(0, 0, 0, 0.213),
		23.7px 31.8px 26.4px -40px rgba(0, 0, 0, 0.159),
		38px 51px 54px -40px rgba(0, 0, 0, 0.098);
}
.demo-preview {
	width: 100%;
	height: 100%;
	overflow: scroll;
}
.section {
	padding: 16px 24px;
}
.option {
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 44px;
}
.neutrals {
	gap: 8px;
	display: flex;
}
</style>
```

## Neutral colors
We have a preset scale of neutral colors that are used within most components. Depending on the background color of your site you may want to alter those colors. There are six neutrals and they can be overriden in the `colors` object. We recommend `neutral-0` to be the same or close to your background with each color getting progressively lighter or darker depending on your background.

```vue
<template>
	<div class="demos">
		<div class="swatch-demo light-background">
			<h3 class="demo-title">
				Default Neutrals
			</h3>
			<ul class="swatch">
				<li
					v-for="(value, key) in colors"
					:key="key"
					class="color"
					:style="{backgroundColor: value }"
				>
					<span class="label">{{ key }}: {{ value }}</span>
				</li>
			</ul>
		</div>
		<div class="swatch-demo dark-background">
			<h3 class="demo-title">
				Custom Neutrals for dark background
			</h3>
			<ul class="swatch">
				<li
					v-for="(value, key) in demoDarkColors"
					:key="key"
					class="color"
					:style="{backgroundColor: value }"
				>
					<span class="label">{{ key }}: {{ value }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			colors: {
				'neutral-0': '#ffffff',
				'neutral-10': '#f1f1f1',
				'neutral-20': '#d3d3d3',
				'neutral-80': '#707070',
				'neutral-90': '#1b1b1b',
				'neutral-100': '#000000',
			},
			demoDarkColors: {
				'neutral-0': '#000000',
				'neutral-10': '#60636b',
				'neutral-20': '#777981',
				'neutral-80': '#9c9ea3',
				'neutral-90': '#f4f4f4',
				'neutral-100': '#ffffff',
			},
		};
	},
};
</script>
<style scoped>
.demos {
	text-align: center;
}
.swatch-demo {
	padding: 24px;
	display: flex;
	flex-direction: column;
}
.swatch {
	display: flex;
	justify-content: center;
	gap: 10px;
	margin: 0;
	padding: 0;
	list-style: none;
}
.light-background {
	background-color: #fff;
}
.dark-background {
	color: #fff;
	background-color: #000;
}
.color {
	display: flex;
	align-items: center;
	width: 120px;
	height: 120px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	font-family: monospace;
}
.label {
	background: inherit;
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
	filter: invert(1) grayscale(1) contrast(9);
}
</style>
```

## Theme Profiles

Many websites will support multiple page or section output. For example, a hero section may leverage different styles from a proceeding content section. We've added the ability to preset these styles by defining each as a seperate profile. The way to implement this currently is by nesting theme components and passing a `profile` to the child theme.

```vue
<template>
	<m-theme :theme="theme">
		<section class="profile-demo">
			<m-heading>Global Default</m-heading>
			<m-text>
				This section is using the default data passed in the theme prop.
				Every component in a theme will inherit the properties set.
				In this case we're setting the default colors.
			</m-text>
			<m-button>
				Default Button
			</m-button>
		</section>

		<m-theme :profile="theme.profiles[0].id">
			<section class="profile-demo">
				<m-heading>Profile 1</m-heading>
				<m-text>
					This section has a specific profile set,
					which allows setting specific color overrides more easily.
					Each component in this section will reflect the colors in the profile.
				</m-text>
				<m-button>
					Profile 1 Button
				</m-button>
			</section>
		</m-theme>
		<m-theme :profile="theme.profiles[1].id">
			<section class="profile-demo">
				<m-heading>Profile 2</m-heading>
				<m-text>
					This section has a specific profile set,
					which allows setting specific color overrides more easily.
					Each component in this section will reflect the colors in the profile.
				</m-text>
				<m-button>
					Profile 2 Button
				</m-button>
			</section>
		</m-theme>
	</m-theme>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import { MButton } from '@square/maker/components/Button';

export default {
	components: {
		MTheme,
		MHeading,
		MText,
		MButton,
	},
	data() {
		return {
			theme: {
				colors: {
					background: '#484543',
					text: '#ffffff',
					heading: '#e5d7cc',
					primary: '#e5d7cc',
				},
				profiles: [
					{
						id: 'profile1',
						colors: {
							background: '#b05d54',
							text: '#e5d7cc',
							heading: '#e5d7cc',
							primary: '#e5d7cc',
						},
					},
					{
						id: 'profile2',
						colors: {
							background: '#e5d7cc',
							text: '#000000',
							heading: '#000000',
							primary: '#000000',
						},
					},
				],
			},
		};
	},
};
</script>
<style scoped>
.profile-demo {
	padding: 2vh 4vw;
}
</style>
```

<!-- api-tables:start -->
## Props

| Prop    | Type     | Default            | Possible values | Description |
| ------- | -------- | ------------------ | --------------- | ----------- |
| theme   | `object` | `{}`               | —               | —           |
| profile | `string` | `'defaultProfile'` | —               | —           |


## Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |
<!-- api-tables:end -->
