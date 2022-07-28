<template>
	<div
		:class="$s.App"
	>
		<div :class="$s.Editor">
			<h1>Advanced customization</h1>

			<div :class="$s.Options">
				<label>
					<input
						v-model="theme.colors.background"
						type="color"
						@input="updateColors"
					>
					Site Background
				</label>
				<label>
					<input
						v-model="theme.colors.heading"
						type="color"
						@input="updateColors"
					>
					Heading
				</label>
				<label>
					<input
						v-model="theme.colors.body"
						type="color"
						@input="updateColors"
					>
					Body
				</label>
				<h3
					:class="$s.subcomponentTitle"
				>
					Heading
				</h3>
				<div :class="$s.fontChoice">
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
				<h3
					:class="$s.subcomponentTitle"
				>
					Body
				</h3>
				<div :class="$s.fontChoice">
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
				<!-- eslint-disable vue/no-textarea-mustache -->
				<textarea rows="20">
{{ theme }}
				</textarea>
			</div>
		</div>
		<m-theme
			:theme="theme"
			:profile="themeProfile"
		>
			<preview />
		</m-theme>
	</div>
</template>

<script>
import { MTheme, defaultTheme } from '@square/maker/components/Theme';
import { WCAG_CONTRAST_TEXT, getContrast } from '@square/maker/utils/get-contrast';
import makerColors from '@square/maker/utils/maker-colors';

import Preview from './preview.vue';
import { fontOptions } from './utils/fonts';

const WebFont = require('webfontloader');

export default {
	components: {
		MTheme,
		Preview,
	},

	data() {
		return {
			fontOptions,
			defaultWeights: ['200', '300', '400', '500', '600', '700', '800'],
			theme: {
				...defaultTheme(),
				...{
					fonts: {
						heading: {
							fontFamily: 'Rubik',
							fontWeight: '700',
						},
						body: {
							fontFamily: 'Karla',
							fontWeight: '500',
						},
					},
				},
			},
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
			const { background, heading, body } = this.theme.colors;
			const colors = {
				...makerColors(background),
				heading: getContrast(background, heading),
				body: getContrast(background, body, WCAG_CONTRAST_TEXT),
			};
			this.theme.colors = colors;
		},
	},

};
</script>
<style module="$s">
.App {
	display: grid;
	grid-template-columns: minmax(300px, 1fr) 3fr;
	height: 100vh;
}

.Editor {
	padding: 15px;
	overflow-y: scroll;
	color: #000;
	font-size: 14px;
	font-family: -apple-system, 'Helvetica Neue', sans-serif;
	background-color: #fff;
}

.Options {
	display: flex;
	flex-direction: column;

	& label {
		margin-bottom: 8px;
	}

	& input {
		margin-right: 16px;
	}
}

.fontChoice {
	display: flex;
	gap: 8px;
	margin-bottom: 20px;
}

.familyChoice {
	flex-grow: 2;
}

.fontChoice > select {
	padding: 8px;
}

.componentTitle {
	margin: 0 0 1rem 0;
	font-size: 1rem;
}
</style>

<style>
.m-button {
	color: white !important;
	background-color: red !important;
	border-radius: 14px !important;
	box-shadow: 2px 2px 0 4px rgba(201, 40, 201, 1) !important;
}

.m-button:hover {
	color: white !important;
	background-color: rgba(201, 40, 201, 1) !important;
	border-radius: 14px !important;
	box-shadow: 2px 2px 0 4px rgba(255, 255, 255, 1) !important;
}
</style>
