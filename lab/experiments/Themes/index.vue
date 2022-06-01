/* eslint-disable vue/no-textarea-mustache */
<template>
	<div
		:class="$s.App"
	>
		<div :class="$s.Editor">
			<div :class="$s.EditorHeader">
				<h1>Maker Theme</h1>
				<!-- <a @click="toggleThemes">Themes</a> -->
			</div>
			<div
				v-if="showThemes"
				:class="$s.ThemeList"
			>
				<div
					:class="[$s.Card, $s.ThemeModern]"
					@click="changeTheme('modern')"
				>
					<span>Modern</span>
				</div>
				<div
					:class="[$s.Card, $s.ThemeMidnight]"
					@click="changeTheme('midnight')"
				>
					Midnight
					<div :class="$s.Swatch">
						<span />
						<span />
					</div>
				</div>
				<div
					:class="[$s.Card, $s.ThemeSpaces]"
					@click="changeTheme('spaces')"
				>
					Spaces
					<div :class="$s.Swatch">
						<span />
						<span />
					</div>
				</div>
				<div
					:class="[$s.Card, $s.ThemeSanta]"
					@click="changeTheme('santa')"
				>
					Santa
					<div :class="$s.Swatch">
						<span />
						<span />
					</div>
				</div>
			</div>
			<h2 :class="$s.sectionTitle">
				Colors
			</h2>
			<div :class="$s.Profiles">
				<div
					v-for="(profile, index) in theme.profiles"
					:key="index"
					:class="[
						$s.ProfileSet,
						profile.id,
						{
							[$s.active]: profile.id === themeProfile,
						},
					]"
					:style="{
						backgroundColor : profile.colors['background'],
						color : profile.colors['body']
					}"
					@click="changeProfile(profile.id)"
				>
					<div>
						<div
							:class="$s.previewTitle"
						>
							Aa
						</div> <div
							:class="$s.previewButton"
							:style="{
								backgroundColor : profile.colors['primary']
							}"
						/>
					</div>
				</div>
			</div>
			<div :class="$s.Profile">
				<label>
					<input
						v-model="currentProfileColors.background"
						type="color"
						@input="updateProfileColors"
					>
					Background
				</label>
				<label>
					<input
						v-model="currentProfileColors.primary"
						type="color"
					>
					Primary
				</label>
				<label>
					<input
						v-model="currentProfileColors.heading"
						type="color"
					>
					Heading
				</label>
				<label>
					<input
						v-model="currentProfileColors.body"
						type="color"
					>
					Body
				</label>
				<h3
					:class="$s.subsectionTitle"
				>
					Neutrals
				</h3>
				<div :class="$s.palette">
					<div :class="$s.color">
						<span :style="{ backgroundColor : theme.colors['neutral-10'] }" />
					</div>
					<div :class="$s.color">
						<span :style="{ backgroundColor : theme.colors['neutral-20'] }" />
					</div>
					<div :class="$s.color">
						<span :style="{ backgroundColor : theme.colors['neutral-80'] }" />
					</div>
					<div :class="$s.color">
						<span :style="{ backgroundColor : theme.colors['neutral-90'] }" />
					</div>
					<div :class="$s.color">
						<span :style="{ backgroundColor : theme.colors['neutral-100'] }" />
					</div>
				</div>
				<h2 :class="$s.sectionTitle">
					Fonts
				</h2>
				<h3
					:class="$s.subsectionTitle"
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
					:class="$s.subsectionTitle"
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
import chroma from 'chroma-js';
import { mapStores, mapState } from 'pinia';
import { MTheme } from '@square/maker/components/Theme';
import Preview from './preview.vue';
import * as themes from './themes'; // this should probably be a json request, but enough for testing
import { useThemeStore } from './stores/theme';
import { generateNeutralColors } from './utils/colors';
import { fontOptions } from './utils/fonts';

const themeStore = useThemeStore();

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
			showThemes: false,
			themeProfile: 'custom-profile',
		};
	},

	computed: {
		...mapStores(useThemeStore),
		...mapState(useThemeStore, ['theme']),
		fontLoad() {
			const fonts = [];
			const fontHeading = themeStore.$state.theme.fonts.heading.fontFamily;
			const fontWeightsHeading = themeStore.$state.theme.fonts.heading.fontWeight;
			const fontText = themeStore.$state.theme.fonts.body.fontFamily;
			const fontWeightsText = themeStore.$state.theme.fonts.body.fontWeight;

			// Can optimize this later
			fonts.push(`${fontHeading}:${fontWeightsHeading}`);
			fonts.push(`${fontText}:${fontWeightsText}`);

			return fonts;
		},
		currentProfileColors() {
			return this.getProfile(this.themeProfile).colors;
		},
	},

	created: () => {
		themeStore.theme = themes.websiteTheme;
	},

	mounted() {
		this.updateFont();
	},

	methods: {
		loadWebFont(fonts) {
			WebFont.load({
				google: {
					families: fonts,
				},
			});
		},
		updateFont() {
			this.loadWebFont(this.fontLoad);
		},
		changeTheme(theme) {
			themeStore.theme = themes[theme];
			this.updateFont();
		},
		toggleThemes() {
			this.showThemes = !this.showThemes;
		},
		getProfile(id) {
			return themeStore.theme.profiles.find((profile) => profile.id === id);
		},
		changeProfile(id) {
			if (this.themeProfile !== id) {
				this.themeProfile = id;
				const { colors } = this.getProfile(id);
				// update the base colors based on the current profile
				themeStore.theme.colors = { ...themeStore.theme.colors, ...colors };
			}
		},
		updateProfileColors(event) {
			const { currentProfileColors } = this;
			const color = event.target.value;
			const neutrals = generateNeutralColors(color);
			const headingColor = currentProfileColors.heading;
			const textColor = currentProfileColors.body;
			const contrastRatio = 4.5;
			const colors = { ...currentProfileColors, ...neutrals };

			colors.background = color;

			if (chroma.contrast(color, headingColor) < contrastRatio) {
				colors.heading = neutrals['neutral-100'];
			}

			if (chroma.contrast(color, textColor) < contrastRatio) {
				colors.body = neutrals['neutral-100'];
			}

			this.getProfile(this.themeProfile).colors = colors;
			themeStore.theme.colors = colors;
		},
	},

};
</script>
<style module="$s">
.App {
	display: grid;
	grid-template-columns: minmax(300px, 1fr) 4fr;
	height: 100vh;
}

.Editor {
	padding: 20px;
	overflow-y: scroll;
	color: #000;
	font-size: 16px;
	font-family: -apple-system, 'Helvetica Neue', sans-serif;
	background-color: #fff;
}

.Editor h3,
.Editor h4,
.Editor h5 {
	margin-bottom: 20px;
	color: #000;
}

.Editor h5 { margin-bottom: 8px; }

.EditorHeader {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
}

.EditorHeader h1 {
	display: inline-block;
	font-size: 20px;
}

.EditorHeader a {
	color: #006aff;
	cursor: pointer;
}

.ThemeList {
	display: grid;
	gap: 8px;
	margin-bottom: 20px;
}

.Card {
	display: grid;
	grid-template-rows: 2fr 1fr;
	gap: 8px;
	align-items: flex-end;
	justify-items: center;
	width: 100%;
	height: 100px;
	font-size: 21px;
	background-color: white;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 4px;
	cursor: pointer;
	transition: box-shadow 0.2s ease-out;
}

.Card:hover {
	box-shadow: 0 6px 15px -10px rgba(0, 0, 0, 0.71);
}

.Swatch {
	align-self: flex-start;
	width: 50%;
	height: 10px;
}

.ThemeModern {
	grid-template-rows: 2fr;
	align-items: center;
	font-weight: 600;
}

.ThemeModern > *:first-child {
	padding: 10px 20px;
	border: 1px solid black;
}

.ThemeMidnight {
	color: #fff;
	font-weight: 200;
	background-color: #31353f;
}

.ThemeMidnight .Swatch {
	background-color: #d5e2fb;
}

.ThemeSpaces {
	position: relative;
	overflow: hidden;
	color: #0b474b;
	font-weight: 800;
	background-color: #fff9f2;
}

.ThemeSpaces .Swatch {
	position: absolute;
	bottom: -20px;
	width: 100%;
	padding: 10px;
	border: 2px solid #0b474b;
	border-radius: 100%;
}

.ThemeSanta {
	position: relative;
	overflow: hidden;
	color: #fff;
	font-weight: 800;
	background-color: #ef233c;
}

.ThemeSanta .Swatch {
	width: 80%;
	height: 0;
}

.ThemeSanta .Swatch::after {
	display: block;
	width: 100%;
	height: 200px;
	background-color: #003e1f;
	border-radius: 500px;
	content: '';
}

.Profile {
	display: flex;
	flex-direction: column;

	& label {
		margin-bottom: 8px;
	}

	& input {
		margin-right: 16px;
	}
}

.Profiles {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 8px;
	margin-bottom: 24px;
}

.ProfileSet {
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	width: 100%;
	height: 44px;
	line-height: 1;
	text-align: center;
	border-radius: 4px;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 10%);
	cursor: pointer;
}

.ProfileSet.active {
	outline: 2px solid blue;
}

/* colors for these preview styles are applied inline */
.previewTitle {
	margin-bottom: 6px;
	font-weight: 700;
	font-size: 14px;
}

.previewButton {
	width: 24px;
	height: 8px;
	border-radius: 8px;
}

.palette {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
	gap: 8px;
	margin-bottom: 20px;
}

.palette > .color span {
	display: inline-block;
	width: 30px;
	height: 30px;
	outline: 1px solid rgba(0, 0, 0, 0.2);
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

.sectionTitle,
.subsectionTitle {
	margin: 0 0 1rem 0;
}

.sectionTitle {
	font-size: 1.2rem;
}

.subsectionTitle {
	font-size: 1rem;
}
</style>
