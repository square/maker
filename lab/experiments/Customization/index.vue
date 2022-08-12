<template>
	<div
		:class="$s.App"
	>
		<div :class="$s.Editor">
			<h1>Advanced customization</h1>
			<div :class="$s.Presets">
				<div
					v-for="(preset, index) in presets"
					:key="index"
					@click="setPreset(preset)"
				>
					<strong>{{ index }}</strong>
				</div>
			</div>
			<div :class="$s.Options">
				<label>
					<input
						v-model="theme.colors.background"
						type="color"
						@input="updateColors"
					>
					Site Background
				</label>
				<m-accordion
					v-model="expandKey"
					expand-key="1"
				>
					<template #title>
						<h3
							:class="$s.ComponentTitle"
						>
							Heading
						</h3>
					</template>
					<div :class="$s.Choice">
						<input
							v-model="theme.colors.heading"
							type="color"
							@input="updateColors"
						>
						<select
							v-model="theme.fonts.heading.fontFamily"
							:class="$s.familyChoice"
							@change="updateFont"
						>
							<template v-for="(value, index) in fontOptions">
								<option
									:key="index"
									:value="value.name"
								>
									{{ value.name }}
								</option>
							</template>
						</select>
						<select
							v-model="theme.fonts.heading.fontWeight"
							@change="updateFont"
						>
							<template v-for="(value, index) in defaultWeights">
								<option
									:key="index"
									:value="value"
								>
									{{ value }}
								</option>
							</template>
						</select>
					</div>
				</m-accordion>
				<m-accordion
					v-model="expandKey"
					expand-key="2"
				>
					<template #title>
						<h3
							:class="$s.ComponentTitle"
						>
							Body
						</h3>
					</template>
					<div :class="$s.Choice">
						<input
							v-model="theme.colors.body"
							type="color"
							@input="updateColors"
						>
						<select
							v-model="theme.fonts.body.fontFamily"
							:class="$s.familyChoice"
							@change="updateFont"
						>
							<template v-for="(value, index) in fontOptions">
								<option
									:key="index"
									:value="value.name"
								>
									{{ value.name }}
								</option>
							</template>
						</select>
						<select
							v-model="theme.fonts.body.fontWeight"
							@change="updateFont"
						>
							<template v-for="(value, index) in defaultWeights">
								<option
									:key="index"
									:value="value"
								>
									{{ value }}
								</option>
							</template>
						</select>
					</div>
				</m-accordion>
				<m-accordion
					v-model="expandKey"
					expand-key="3"
				>
					<template #title>
						<h3
							:class="$s.ComponentTitle"
						>
							Button{{ buttonHover ? ':hover': '' }}
						</h3>
					</template>
					<template
						v-if="expandKey==='3'"
						#secondary
					>
						<label @click.stop>
							<input
								v-model="buttonHover"
								type="checkbox"
							>
							Edit hover state
						</label>
					</template>
					<div :class="$s.Choice">
						<div
							v-show="!buttonHover"
						>
							<div :class="$s.Choice">
								<label>
									<input
										v-model="theme.colors.primary"
										type="color"
										@input="updateColors"
									>
									Button
								</label>
								<label>
									<input
										v-model="theme.button.textColor"
										type="color"
										@input="updateColors"
									>
									Text
								</label>
								<select
									v-model="theme.button.custom.fontFamily"
									:class="$s.familyChoice"
									@change="updateFont"
								>
									<template
										v-for="(value, index) in [
											theme.fonts.heading.fontFamily,
											theme.fonts.body.fontFamily
										]"
									>
										<option
											:key="index"
											:value="value"
										>
											{{ value }}
										</option>
									</template>
								</select>
								<select
									v-model="theme.button.custom.fontWeight"
									@change="updateFont"
								>
									<template v-for="(value, index) in defaultWeights">
										<option
											:key="index"
											:value="value"
										>
											{{ value }}
										</option>
									</template>
								</select>
							</div>
							<p><strong>Border</strong></p>
							<div :class="$s.Choice">
								<label>
									<input
										v-model="theme.button.custom.borderRadius"
										type="number"
										min="0"
										max="32"
										step="2"
									>
									Radius
								</label>
								<label>
									<input
										v-model="theme.button.custom.borderWidth"
										type="number"
										min="1"
										max="10"
									>
									Thickness
								</label>
								<label>
									<input
										v-model="theme.button.custom.borderColor"
										type="color"
									>
									Color
								</label>
							</div>
							<p><strong>Box shadow</strong></p>
							<div :class="$s.Choice">
								<label>
									<input
										v-model="theme.button.custom.boxShadowHorizontal"
										type="number"
										min="0"
										max="20"
									>
									Horizontal
								</label>
								<label>
									<input
										v-model="theme.button.custom.boxShadowVertical"
										type="number"
										min="0"
										max="20"
									>
									Vertical
								</label>
								<label>
									<input
										v-model="theme.button.custom.boxShadowBlurRadius"
										type="number"
										min="0"
										max="20"
									>
									Blur
								</label>
								<label>
									<input
										v-model="theme.button.custom.boxShadowSpreadRadius"
										type="number"
										min="0"
										max="20"
									>
									Spread
								</label>
								<input
									v-model="theme.button.custom.boxShadowColor"
									type="color"
								>
							</div>
						</div>
						<div
							v-show="buttonHover"
						>
							<div :class="$s.Choice">
								<label>
									<input
										v-model="theme.button.custom.hoverColor"
										type="color"
										@input="updateColors"
									>
									Button
								</label>
								<label>
									<input
										v-model="theme.button.custom.hoverTextColor"
										type="color"
										@input="updateColors"
									>
									Text
								</label>
							</div>
							<p><strong>Border</strong></p>
							<div :class="$s.Choice">
								<label>
									<input
										v-model="theme.button.custom.hoverBorderWidth"
										type="number"
										min="1"
										max="10"
									>
									Thickness
								</label>
								<label>
									<input
										v-model="theme.button.custom.hoverBorderColor"
										type="color"
									>
									Color
								</label>
							</div>
							<p><strong>Box shadow</strong></p>
							<div :class="$s.Choice">
								<label>
									<input
										v-model="theme.button.custom.hoverBoxShadowHorizontal"
										type="number"
										min="0"
										max="20"
									>
									Horizontal
								</label>
								<label>
									<input
										v-model="theme.button.custom.hoverBoxShadowVertical"
										type="number"
										min="0"
										max="20"
									>
									Vertical
								</label>
								<label>
									<input
										v-model="theme.button.custom.hoverBoxShadowBlurRadius"
										type="number"
										min="0"
										max="20"
									>
									Blur
								</label>
								<label>
									<input
										v-model="theme.button.custom.hoverBoxShadowSpreadRadius"
										type="number"
										min="0"
										max="20"
									>
									Spread
								</label>
								<input
									v-model="theme.button.custom.hoverBoxShadowColor"
									type="color"
								>
							</div>
						</div>
					</div>
				</m-accordion>
				<m-accordion
					v-model="expandKey"
					expand-key="4"
				>
					<template #title>
						<h3
							:class="$s.ComponentTitle"
						>
							Card{{ cardHover ? ':hover': '' }}
						</h3>
					</template>
					<template
						v-if="expandKey==='4'"
						#secondary
					>
						<label @click.stop>
							<input
								v-model="cardHover"
								type="checkbox"
							>
							Edit hover state
						</label>
					</template>
					<div :class="$s.Choice">
						<div
							v-show="!cardHover"
						>
							<div :class="$s.Choice">
								<label>
									<input
										v-model="theme.card.custom.color"
										type="color"
										@input="updateColors"
									>
									Card
								</label>
								<label>
									<input
										v-model="theme.card.custom.titleColor"
										type="color"
										@input="updateColors"
									>
									Title
								</label>
								<label>
									<input
										v-model="theme.card.custom.textColor"
										type="color"
										@input="updateColors"
									>
									Text
								</label>
							</div>
							<p><strong>Border</strong></p>
							<div :class="$s.Choice">
								<label>
									<input
										v-model="theme.card.custom.borderRadius"
										type="number"
										min="0"
										max="32"
										step="2"
									>
									Radius
								</label>
								<label>
									<input
										v-model="theme.card.custom.borderWidth"
										type="number"
										min="1"
										max="10"
									>
									Thickness
								</label>
								<label>
									<input
										v-model="theme.card.custom.borderColor"
										type="color"
									>
									Color
								</label>
							</div>
							<p><strong>Box shadow</strong></p>
							<div :class="$s.Choice">
								<label>
									<input
										v-model="theme.card.custom.boxShadowHorizontal"
										type="number"
										min="0"
										max="20"
									>
									Horizontal
								</label>
								<label>
									<input
										v-model="theme.card.custom.boxShadowVertical"
										type="number"
										min="0"
										max="20"
									>
									Vertical
								</label>
								<label>
									<input
										v-model="theme.card.custom.boxShadowBlurRadius"
										type="number"
										min="0"
										max="20"
									>
									Blur
								</label>
								<label>
									<input
										v-model="theme.card.custom.boxShadowSpreadRadius"
										type="number"
										min="0"
										max="20"
									>
									Spread
								</label>
								<input
									v-model="theme.card.custom.boxShadowColor"
									type="color"
								>
							</div>
						</div>
						<div
							v-show="cardHover"
						>
							<div :class="$s.Choice">
								<label>
									<input
										v-model="theme.card.custom.hoverColor"
										type="color"
										@input="updateColors"
									>
									Card
								</label>
								<label>
									<input
										v-model="theme.card.custom.hoverTitleColor"
										type="color"
										@input="updateColors"
									>
									Title
								</label>
								<label>
									<input
										v-model="theme.card.custom.hoverTextColor"
										type="color"
										@input="updateColors"
									>
									Text
								</label>
							</div>
							<p><strong>Border</strong></p>
							<div :class="$s.Choice">
								<label>
									<input
										v-model="theme.card.custom.hoverBorderWidth"
										type="number"
										min="1"
										max="10"
									>
									Thickness
								</label>
								<label>
									<input
										v-model="theme.card.custom.hoverBorderColor"
										type="color"
									>
									Color
								</label>
							</div>
							<p><strong>Box shadow</strong></p>
							<div :class="$s.Choice">
								<label>
									<input
										v-model="theme.card.custom.hoverBoxShadowHorizontal"
										type="number"
										min="0"
										max="20"
									>
									Horizontal
								</label>
								<label>
									<input
										v-model="theme.card.custom.hoverBoxShadowVertical"
										type="number"
										min="0"
										max="20"
									>
									Vertical
								</label>
								<label>
									<input
										v-model="theme.card.custom.hoverBoxShadowBlurRadius"
										type="number"
										min="0"
										max="20"
									>
									Blur
								</label>
								<label>
									<input
										v-model="theme.card.custom.hoverBoxShadowSpreadRadius"
										type="number"
										min="0"
										max="20"
									>
									Spread
								</label>
								<input
									v-model="theme.card.custom.hoverBoxShadowColor"
									type="color"
								>
							</div>
						</div>
					</div>
				</m-accordion>
				<m-accordion
					v-model="expandKey"
					expand-key="5"
				>
					<template #title>
						<h3
							:class="$s.ComponentTitle"
						>
							Section width
						</h3>
					</template>
					<div :class="$s.Choice">
						<label>
							<input
								v-model="theme.section.custom.maxWidth"
								type="radio"
								value="5000px"
								name="width"
							>
							Full width
						</label>
						<label>
							<input
								v-model="theme.section.custom.maxWidth"
								type="radio"
								value="1000px"
								name="width"
							>
							1000px
						</label>
					</div>
				</m-accordion>
				<m-accordion
					v-model="expandKey"
					expand-key="6"
				>
					<template #title>
						<h3
							:class="$s.ComponentTitle"
						>
							Theme props
						</h3>
					</template>
					<!-- eslint-disable vue/no-textarea-mustache -->
					<textarea rows="20">
{{
{
	colors: theme.colors,
	fonts: {
		heading: theme.fonts.heading,
		body: theme.fonts.body,
	},
	button: {
		color: theme.button.color,
		textColor: theme.button.textColor,
		custom: theme.button.custom,
	},
	card: theme.card,
	section: theme.section,
}
}}
					</textarea>
				</m-accordion>
			</div>
		</div>
		<m-theme
			:theme="theme"
			:style="styles"
		>
			<preview
				:card-title-color="theme.card.custom.titleColor"
				:card-text-color="theme.card.custom.textColor"
			/>
		</m-theme>
	</div>
</template>

<script>
import { merge } from 'lodash';
import { MTheme, defaultTheme } from '@square/maker/components/Theme';
import { MAccordion } from '@square/maker/components/Accordion';
import { WCAG_CONTRAST_TEXT, getContrast } from '@square/maker/utils/get-contrast';
import makerColors from '@square/maker/utils/maker-colors';

import Preview from './preview.vue';
import { fontOptions } from './utils/fonts';
import { presets } from './utils/presets';

const WebFont = require('webfontloader');

function returnPixelValue(value) {
	// eslint-disable-next-line no-magic-numbers
	return !Number.isNaN(Number.parseInt(value, 10)) && Number.parseInt(value, 10) < 50 ? `${value}px` : value;
}

export default {
	components: {
		MAccordion,
		MTheme,
		Preview,
	},

	data() {
		return {
			expandKey: '1',
			presets,
			fontOptions,
			defaultWeights: ['200', '300', '400', '500', '600', '700', '800'],
			buttonHover: false,
			cardHover: false,
			theme: merge(defaultTheme(), presets.resetStyles),
		};
	},

	computed: {
		fontLoad() {
			const font = [];
			const { fonts } = this.theme;
			const fontHeading = fonts.heading.fontFamily;
			const fontWeightsHeading = fonts.heading.fontWeight;
			const fontText = fonts.body.fontFamily;
			const fontWeightsText = fonts.body.fontWeight;

			// Can optimize this later
			font.push(`${fontHeading}:${fontWeightsHeading}`);
			font.push(`${fontText}:${fontWeightsText}`);

			return font;
		},

		styles() {
			const customVars = {};
			Object.entries(this.theme).forEach(([component, props]) => {
				if (props.custom) {
					Object.entries(props.custom).forEach(([key, value]) => {
						customVars[`--m-${component}-${key.replace(/([\da-z]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()}`] = returnPixelValue(value);
					});
				}
			});
			return customVars;
		},
	},

	mounted() {
		this.updateFont();
	},

	methods: {
		updateFont() {
			WebFont.load({
				google: {
					families: this.fontLoad,
				},
			});
		},
		updateColors() {
			const {
				background,
				heading,
				body,
				primary,
			} = this.theme.colors;
			const colors = {
				...makerColors(background),
				heading: getContrast(background, heading),
				body: getContrast(background, body, WCAG_CONTRAST_TEXT),
				primary: getContrast(background, primary),
			};
			this.theme.colors = colors;
		},
		setPreset(preset) {
			this.theme = merge(defaultTheme(), preset);
			this.updateFont();
		},
	},

};
</script>
<style module="$s">
/* stylelint-disable no-descending-specificity */
.App {
	display: grid;
	grid-template-columns: minmax(450px, 1fr) 4fr;
	height: 100vh;
}

.Editor {
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 15px;
	overflow-y: scroll;
	color: #000;
	font-size: 12px;
	font-family: -apple-system, 'Helvetica Neue', sans-serif;
	background-color: #fff;
}

h1,
h2,
h3 {
	margin: 0;
}

.Presets {
	display: flex;
	gap: 8px;
}

.Options {
	display: flex;
	flex-direction: column;
	gap: 8px;

	& label {
		display: flex;
		align-items: center;

		& input {
			margin: 0 4px 0 0;
		}
	}

	& input[type="color"] {
		height: 36px;
	}

	& input[type="number"] {
		height: 28px;
	}

	& p {
		margin: 0.5em 0;
	}
}

.Choice {
	display: flex;
	flex-wrap: wrap;
	gap: 4px;
	margin: 0;
}

.familyChoice {
	flex-grow: 2;
}

.Choice > select {
	padding: 8px;
}

.ComponentTitle {
	display: flex;
	justify-content: space-between;
	font-size: 1.25em;

	& label {
		font-weight: normal;
		font-size: 0.85em;
	}
}

textarea {
	width: calc(100% - 8px);
}
</style>

<style>
.m-button {
	font-weight: var(--m-button-font-weight) !important;
	font-family: var(--m-button-font-family) !important;
	border-radius: var(--m-button-border-radius) !important;
}

.m-button-primary {
	border: solid var(--m-button-border-width) var(--m-button-border-color) !important;
	box-shadow:
		var(--m-button-box-shadow-horizontal)
		var(--m-button-box-shadow-vertical)
		var(--m-button-box-shadow-blur-radius)
		var(--m-button-box-shadow-spread-radius)
		var(--m-button-box-shadow-color) !important;
}

.m-button-secondary {
	--outline-border: inset 0 0 0 var(--m-button-border-width) var(--color-main) !important;
	--box-shadow-border:
		var(--m-button-box-shadow-horizontal)
		var(--m-button-box-shadow-vertical)
		var(--m-button-box-shadow-blur-radius)
		var(--m-button-box-shadow-spread-radius)
		var(--m-button-box-shadow-color);

	box-shadow: var(--outline-border), var(--box-shadow-border, var(--focus-border, 0 0)) !important;
}

.m-button-primary:hover {
	color: var(--m-button-hover-text-color, var(--color-contrast)) !important;
	background: var(--m-button-hover-color, var(--color-main)) !important;
	border: solid var(--m-button-hover-border-width) var(--m-button-hover-border-color) !important;
	box-shadow:
		var(--m-button-hover-box-shadow-horizontal)
		var(--m-button-hover-box-shadow-vertical)
		var(--m-button-hover-box-shadow-blur-radius)
		var(--m-button-hover-box-shadow-spread-radius)
		var(--m-button-hover-box-shadow-color) !important;
}

.m-button-secondary:hover {
	--outline-border:
		inset 0 0 0 var(--m-button-hover-border-width, var(--m-button-border-width))
		var(--m-button-hover-color, var(--color-main)) !important;
	--box-shadow-border:
		var(--m-button-hover-box-shadow-horizontal)
		var(--m-button-hover-box-shadow-vertical)
		var(--m-button-hover-box-shadow-blur-radius)
		var(--m-button-hover-box-shadow-spread-radius)
		var(--m-button-hover-box-shadow-color);

	color: var(--m-button-hover-color, var(--color-main)) !important;
	box-shadow: var(--outline-border), var(--box-shadow-border, var(--focus-border, 0 0)) !important;
}

.m-card {
	color: var(--m-card-text-color, var(--maker-color-body)) !important;
	font-weight: var(--m-card-font-weight) !important;
	font-family: var(--m-card-font-family) !important;
	background: var(--m-card-color, var(--maker-color-background)) !important;
	border: solid var(--m-card-border-width) var(--m-card-border-color) !important;
	border-radius: var(--m-card-border-radius) !important;
	box-shadow:
		var(--m-card-box-shadow-horizontal)
		var(--m-card-box-shadow-vertical)
		var(--m-card-box-shadow-blur-radius)
		var(--m-card-box-shadow-spread-radius)
		var(--m-card-box-shadow-color) !important;
	cursor: pointer;
	transition:
		color 0.2s ease-in,
		background-color 0.2s ease-in,
		filter 0.2s ease-in,
		box-shadow 0.2s ease-in;
}

.m-card:hover {
	color: var(--m-card-hover-text-color, var(--maker-color-body)) !important;
	background: var(--m-card-hover-color, var(--maker-color-background)) !important;
	border:
		solid var(--m-card-hover-border-width, var(--m-card-border-width))
		var(--m-card-hover-border-color, var(--m-card-border-color)) !important;
	box-shadow:
		var(--m-card-hover-box-shadow-horizontal)
		var(--m-card-hover-box-shadow-vertical)
		var(--m-card-hover-box-shadow-blur-radius)
		var(--m-card-hover-box-shadow-spread-radius)
		var(--m-card-hover-box-shadow-color) !important;
}

</style>
