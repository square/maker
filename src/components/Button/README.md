# Button

You should almost always use this component for standalone buttons in your app. If you very specifically need a visually lightweight button to be used inside of a [Notice](#/Notice) or [Card](#/Card) that has no padding and no focus, hover, or active states then use [TextButton](#/TextButton). If you need a button that navigates the user to another page that's not a button, that's a link, so use [Link](#/Link).

## Styles & Sizes

```vue
<template>
	<div>
		Custom CSS Textarea<br>
		<label>
			Select custom CSS preset:
			<select
				v-model="selectedPreset"
				@change="autosizeTextarea"
			>
				<option value="commented">commented template</option>
				<option value="colorfulVomit">colorful vomit</option>
				<option value="purpleMaterial">purple material</option>
				<option value="psychedelic3d">psychedelic 3d</option>
				<option value="squishyBubblegum">squishy bubblegum</option>
			</select>
		</label>
		<textarea
			class="textarea"
			v-model="customCss"
			ref="textarea"
			onkeydown="if(event.keyCode===9){var v=this.value,s=this.selectionStart,e=this.selectionEnd;this.value=v.substring(0, s)+'\t'+v.substring(e);this.selectionStart=this.selectionEnd=s+1;return false;}"
		>
		</textarea>
		<style :key="customCss">{{ customCss }}</style>
		<label>
			Color picker
			<input
				v-model="color"
				type="color"
			>
		</label><br><br>
		<table class="ButtonTable">
			<thead>
				<tr>
					<td />
					<th>
						Primary / Fill
					</th>
					<th>
						Secondary / Outline
					</th>
					<th>
						Tertiary / Ghost
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>
						Large
					</th>
					<td>
						<m-button
							pattern="primary"
							size="large"
							:color="color"
						>
							Large
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							size="large"
							:color="color"
						>
							Large
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							size="large"
							:color="color"
						>
							Large
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Medium
					</th>
					<td>
						<m-button
							pattern="primary"
							size="medium"
							:color="color"
						>
							Medium
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							size="medium"
							:color="color"
						>
							Medium
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							size="medium"
							:color="color"
						>
							Medium
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Small
					</th>
					<td>
						<m-button
							pattern="primary"
							size="small"
							:color="color"
						>
							Small
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							size="small"
							:color="color"
						>
							Small
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							size="small"
							:color="color"
						>
							Small
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Disabled
					</th>
					<td>
						<m-button
							pattern="primary"
							:color="color"
							disabled
						>
							Disabled
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							:color="color"
							disabled
						>
							Disabled
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							:color="color"
							disabled
						>
							Disabled
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Loading
					</th>
					<td>
						<m-button
							pattern="primary"
							:color="color"
							loading
						>
							Loading
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							:color="color"
							loading
						>
							Loading
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							:color="color"
							loading
						>
							Loading
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Icon
					</th>
					<td>
						<m-button
							pattern="primary"
							:color="color"
						>
							<x class="icon" />
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							:color="color"
						>
							<x class="icon" />
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							:color="color"
						>
							<x class="icon" />
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Icon + Text
					</th>
					<td>
						<m-button
							pattern="primary"
							:color="color"
						>
							<plus class="icon" />
							Button
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							:color="color"
						>
							<plus class="icon" />
							Button
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							:color="color"
						>
							<plus class="icon" />
							Button
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Info slot
					</th>
					<td>
						<m-button
							pattern="primary"
							:color="color"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							:color="color"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							:color="color"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Info slot (stacked)
					</th>
					<td>
						<m-button
							pattern="primary"
							:color="color"
							align="stack"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							:color="color"
							align="stack"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							:color="color"
							align="stack"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Info slot (reversed)
					</th>
					<td>
						<m-button
							pattern="primary"
							:color="color"
							align="space-between"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							:color="color"
							align="space-between"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							:color="color"
							align="space-between"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Squared
					</th>
					<td>
						<m-button
							pattern="primary"
							shape="squared"
							:color="color"
						>
							Squared
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							shape="squared"
							:color="color"
						>
							Squared
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							shape="squared"
							:color="color"
						>
							Squared
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Rounded
					</th>
					<td>
						<m-button
							pattern="primary"
							shape="rounded"
							:color="color"
						>
							Rounded
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							shape="rounded"
							:color="color"
						>
							Rounded
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							shape="rounded"
							:color="color"
						>
							Rounded
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Pill
					</th>
					<td>
						<m-button
							pattern="primary"
							shape="pill"
							:color="color"
						>
							Pill
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							shape="pill"
							:color="color"
						>
							Pill
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							shape="pill"
							:color="color"
						>
							Pill
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Full width
					</th>
					<td>
						<m-button
							pattern="primary"
							full-width
							:color="color"
						>
							Full width
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							full-width
							:color="color"
						>
							Full width
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							full-width
							:color="color"
						>
							Full width
						</m-button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import X from '@square/maker-icons/X';
import Plus from '@square/maker-icons/Plus';
import { MButton } from '@square/maker/components/Button';

export default {
	components: {
		MButton,
		Plus,
		X,
	},
	data() {
		return {
			color: '#000',
			selectedPreset: 'commented',
			customCssPresets: {
				commented:
`
/* target all buttons */
.m-button {

}

/* hover styles for all buttons */
.m-button:hover:not(:disabled) {

}

/* active styles for all buttons */
.m-button:active:not(:disabled) {

}

/* disabled styles for all buttons */
.m-button:disabled {

}

/* loading styles for all buttons */
.m-button.s-loading {

}

/*
	add .p-\${pattern} to any of the above
	to target a specific pattern, basic
	examples below:
*/

/* target all primary buttons */
.m-button.p-primary {

}

/* target all secondary buttons */
.m-button.p-secondary {

}

/* target all tertiary buttons */
.m-button.p-tertiary {

}
`.trim(),
				colorfulVomit:
`
.m-button {
	background-color: green;
}

.m-button:hover:not(:disabled) {
	background-color: yellow;
}

.m-button:active:not(:disabled) {
	background-color: purple;
}

.m-button:disabled,
.m-button.p-secondary:disabled,
.m-button.p-tertiary:disabled {
	background-color: red;
}

.m-button.s-loading,
.m-button.p-secondary.s-loading,
.m-button.p-tertiary.s-loading {
	background-color: blue;
}

.m-button.p-primary {
	color: cyan;
	--color-main: cyan;
}

.m-button.p-secondary {
	color: green;
	--color-main: green;
	background-color: cyan;
}

.m-button.p-tertiary {
	background-color: red;
	color: white;
	--color-main: white;
}
`.trim(),
				purpleMaterial:
`
.m-button.p-primary {
	background-color: #6200ee;
	box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}

.m-button.p-primary:hover:not(:disabled) {
	background-color: #8229ff;
	box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
}

.m-button.primary:active:not(:disabled) {
	box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
}

.m-button.p-secondary {
	color: #6200ee;
	border: 1px solid #6200ee;
	box-shadow: none;
}

.m-button.p-secondary:hover:not(:disabled) {
	background-color: #6200ee1a;
}

.m-button.p-tertiary {
	color: #6200ee;
}

.m-button.p-tertiary:hover:not(:disabled) {
	background-color: #6200ee1a;
}
`.trim(),
				psychedelic3d: // adapted from https://codepen.io/firepenguin/pen/KoyLZg
`
.m-button {
	--slate-color: rgb(16, 24, 50);
	--invisible-slate-color: rgba(16, 24, 50, 0);
	--transparent-slate-color: rgba(16, 24, 50, 0.1);
	--blue-color: #00bcdd;
	--pink-color: #ff00ff;
	--light-blue-color: #42e3ff;
	--light-pink-color: #ff66ff;

	color: var(--slate-color);
	--color-main: var(--slate-color);
	background-color: inherit;
	cursor: pointer;
	display: inline-block;
	letter-spacing: 0.075em;
	padding: .8em 1em;

	position: relative;
	align-self: center;
	text-transform: uppercase;
	border: 3px var(--blue-color) solid;
	border-image: linear-gradient(45deg, var(--blue-color) 0%, var(--pink-color) 100%);
	border-image-slice: 1 1 0 0;
	z-index: 1;
	box-shadow: -0.5em .5em var(--invisible-slate-color);
	transform-origin: left bottom;
	transition: all 200ms ease-in-out;
	border-radius: 0;
}

.m-button::before,
.m-button::after {
	border: 3px var(--blue-color) solid;
	content: '';
	display: block;
	position: absolute;
	z-index: -1;
}

.m-button::before {
	border-image: linear-gradient(45deg, var(--blue-color) 0%, hue-rotate(var(--blue-color), 36deg) 100%);
	border-image-slice: 1 1 0 1;
	left: -0.59em; top: .15em;
	width: .31em;
	height: 100%;
	transform: skewY(-45deg);
}

.m-button::after {
	border-image: linear-gradient(45deg, var(--blue-color) 0%, var(--pink-color) 100%);
	border-image-slice: 1 1 1 0;
	bottom: -0.61em; right: 0.16em;
	width: 100%;
	height: .31em;
	transform: skewX(-45deg);
}

.m-button:hover:not(:disabled) {
	background-color: white;
	background-size: 90%;
	transform: translate(0.5em,-0.5em);
	box-shadow: -1em 1em .15em var(--transparent-slate-color);
}

.m-button:hover:not(:disabled)::before {
	background-image: linear-gradient(45deg, var(--blue-color) 0%, hue-rotate(var(--blue-color), 36deg) 100%);
	height: calc(100% - .13em);
	border-image-slice: 1;
}


.m-button:hover:not(:disabled)::after {
	background-image: linear-gradient(45deg, var(--blue-color) 0%, var(--pink-color) 100%);
	width: calc(100% - .13em);
	border-image-slice: 1;
}

.m-button.p-primary {
	background-color: var(--blue-color);
	background-image: linear-gradient(45deg, var(--blue-color) 0%, var(--pink-color) 100%);
	border-image: linear-gradient(45deg, var(--light-blue-color) 0%, var(--light-pink-color) 100%);
	border-image-slice: 1;
	color: white;
}

.m-button.p-primary::before {
	border-image-slice: 1;
	background-image: linear-gradient(45deg, var(--blue-color) 0%, hue-rotate(var(--blue-color), 36deg) 100%);
	left: -0.75em;
	top: .15em;
}

.m-button.p-primary::after {
	border-image-slice: 1;
	background-image: linear-gradient(45deg, var(--blue-color) 0%, var(--pink-color) 100%);
	bottom: -0.75em;
	right: .15em;
}

.m-button.p-primary:hover:not(:disabled) {
	background: white;
	border-image: linear-gradient(45deg, var(--blue-color) 0%, var(--pink-color) 100%);
	border-image-slice: 1;
	color: var(--slate-color);
}

.m-button.p-primary:hover:not(:disabled)::before {
	height: 100%;
}

.m-button.p-primary:hover:not(:disabled)::after {
	width: 100%;
}

.m-button.p-tertiary {
	background: none;
	border: 3px solid var(--slate-color);
	color: var(--slate-color);
}

.m-button.p-tertiary::before,
.m-button.p-tertiary::after {
	background: var(--slate-color);
	border: 3px solid var(--slate-color);
}

.m-button.p-tertiary:hover:not(:disabled) {
	border-image: none;
}

.m-button.p-tertiary:hover:not(:disabled)::before,
.m-button.p-tertiary:hover:not(:disabled)::after {
	background: var(--slate-color);
}
`.trim(),
				squishyBubblegum:
`
.m-button {
	--text: #382b22;
	--light-pink: #fff0f0;
	--pink: #ffe9e9;
	--light-pink: #fff5f5;
	--dark-pink: #f9c4d2;
	--pink-border: #b18597;
	--pink-shadow: #ffe3e2;

	position: relative;
	display: inline-block;
	letter-spacing: 0px;
	box-shadow: none;
	cursor: pointer;
	outline: none;
	border: 0;
	vertical-align: middle;
	text-decoration: none;
	font-weight: 700;
	color: var(--text);
	text-transform: uppercase;
	padding: 1.25em 2em;
	background: var(--light-pink);
	border: 2px solid var(--pink-border);
	border-radius: 0.75em;
	transform-style: preserve-3d;
	transition:
		transform 150ms cubic-bezier(0, 0, 0.58, 1),
		background 150ms cubic-bezier(0, 0, 0.58, 1),
		letter-spacing 150ms cubic-bezier(0, 0, 0.58, 1);
}

.m-button::before {
	position: absolute;
	content: '';
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: var(--dark-pink);
	border-radius: inherit;
	box-shadow: 0 0 0 2px var(--pink-border), 0 0.625em 0 0 var(--pink-shadow);
	transform: translate3d(0, 0.75em, -1em);
	transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
}

.m-button:hover:not(:disabled) {
	  background: var(--pink);
	  transform: translate(0, 0.25em);
}

.m-button:hover:not(:disabled)::before {
	box-shadow: 0 0 0 2px var(--pink-border), 0 0.5em 0 0 var(--pink-shadow);
	transform: translate3d(0, 0.5em, -1em);
}

.m-button:active:not(:disabled) {
	background: var(--pink);
	transform: translate(0em, 0.75em);
	letter-spacing: 2px;
}

.m-button:active:not(:disabled)::before {
	box-shadow: 0 0 0 2px var(--pink-border), 0 0 var(--pink-shadow);
	transform: translate3d(0, 0, -1em);
}

.m-button.p-secondary {
	color: var(--dark-pink);
	--color-main: white;
	border: none;
}

.m-button.p-secondary:hover:not(:disabled) {
	background-color: var(--light-pink);
}

.m-button.p-tertiary {
	background-color: white;
	color: var(--dark-pink);
	--color-main: white;
	font-weight: 900;
	border: none;
}

.m-button.p-tertiary:hover:not(:disabled) {
	background-color: var(--light-pink);
}
`.trim(),
			}
		};
	},
	computed: {
		customCss: {
			get() {
				return this.customCssPresets[this.selectedPreset];
			},
			set(updatedValue) {
				this.customCssPresets[this.selectedPreset] = updatedValue;
				this.autosizeTextarea();
			},
		},
	},
	methods: {
		autosizeTextarea() {
			this.$nextTick(() => {
				this.$refs.textarea.style.height = '';
				this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px';
			});
		},
	},
	mounted() {
		this.autosizeTextarea();
	},
};
</script>

<style scoped>
.ButtonTable {
	border-spacing: 16px;
	border-collapse: separate;
}
.icon {
	width: 16px;
	height: 16px;
}
.textarea {
	width: 100%;
	font-family: monospace;
	display: block;
	font-size: 16px;
	tab-size: 4ch;
	max-height: 20em;
	max-width: 100ch;
}
</style>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).

| Prop       | Type      | Default    | Possible values                    | Description                             |
| ---------- | --------- | ---------- | ---------------------------------- | --------------------------------------- |
| pattern    | `string`  | —          | `pattern defined in theme`         | patterns are defined at the theme level |
| type       | `string`  | `'button'` | —                                  | Type of the button                      |
| size       | `string`  | —          | `small`, `medium`, `large`         | Size of the button                      |
| full-width | `boolean` | —          | —                                  | Whether to make the button full-width   |
| color      | `string`  | —          | —                                  | Background color of button              |
| text-color | `string`  | —          | —                                  | Text color of button                    |
| variant    | `string`  | —          | `primary`, `secondary`, `tertiary` | Variant                                 |
| shape      | `string`  | —          | `squared`, `rounded`, `pill`       | Shape of button                         |
| disabled   | `boolean` | `false`    | —                                  | Toggles button disabled state           |
| align      | `string`  | —          | `center`, `stack`, `space-between` | How to align button's contents          |
| loading    | `boolean` | `false`    | —                                  | Toggles button loading state            |


## Slots

| Slot        | Description       |
| ----------- | ----------------- |
| default     | Button label      |
| information | Information label |


## Events

Supports events from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).
<!-- api-tables:end -->
