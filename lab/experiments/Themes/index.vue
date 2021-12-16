<template>
	<m-theme
		:theme="theme"
		:class="$s.App"
	>
		<div :class="$s.Editor">
			<m-heading
				:size="2"
			>
				Maker Theme
			</m-heading>
			<m-heading
				:size="1"
			>
				Colors
			</m-heading>
			<div :class="$s.Profile">
				<label>
					<input
						v-model="theme.colors.background"
						type="color"
					>
					Background
				</label>
				<label>
					<input
						v-model="theme.colors.primary"
						type="color"
					>
					Primary
				</label>
				<label>
					<input
						v-model="theme.colors.heading"
						type="color"
					>
					Heading
				</label>
				<label>
					<input
						v-model="theme.colors.text"
						type="color"
					>
					Text
				</label>
				<m-heading
					:size="0"
					style="color: gray;"
				>
					Neutrals
				</m-heading>
				<div :class="$s.palette">
					<div :class="$s.color">
						<span :style="{ backgroundColor : theme.colors['neutral-0'] }" />
					</div>
					<div :class="$s.color">
						<span :style="{ backgroundColor : 'var(--neutral-10)' }" />
					</div>
					<div :class="$s.color">
						<span :style="{ backgroundColor : 'var(--neutral-20)' }" />
					</div>
					<div :class="$s.color">
						<span :style="{ backgroundColor : 'var(--neutral-80)' }" />
					</div>
					<div :class="$s.color">
						<span :style="{ backgroundColor : 'var(--neutral-90)' }" />
					</div>
					<div :class="$s.color">
						<span :style="{ backgroundColor : 'var(--neutral-100)' }" />
					</div>
				</div>
				<!-- <div :class="$s.Profiles">
					<div
						v-for="(value, name, index) in surfaces"
						:key="index"
						:class="[
							$s.ProfileSet,
							name,
						]"
						@click="changeMode(name)"
					>
						<div>
							<div
								:class="$s.previewTitle"
							>
								Aa
							</div> <div
								:class="$s.previewButton"
							/>
						</div>
					</div>
				</div> -->
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
				<div :class="$s.fontChoice">
					<select
						v-model="headingFont"
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
						v-model="headingWeight"
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
				<m-heading
					:size="0"
				>
					Text
				</m-heading>
				<div :class="$s.fontChoice">
					<select
						v-model="bodyFont"
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
						v-model="bodyWeight"
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
						v-model="baseFontSize"
						type="range"
						min="16"
						max="22"
						step="1"
					>
					Base font size
				</label>
				<label>
					<input
						v-model="theme.fonts.scaleRatio"
						type="range"
						min="1"
						max="2"
						step="0.01"
					>
					Contrast
				</label>
			</div>
		</div>
		<preview :style="fontStyle" />
	</m-theme>
</template>

<script>
import chroma from 'chroma-js';
import { mapStores, mapState } from 'pinia';
import { MTheme } from '@square/maker/components/Theme';
import { MHeading } from '@square/maker/components/Heading';
import Preview from './preview.vue';
import { theme1 } from './themes'; // this should probably be a json request, but enough for testing
import { useThemeStore } from './stores/theme';
import { generateNeutralColors } from './utils/colors';
import { fontOptions } from './utils/fonts';

const themeStore = useThemeStore();

const WebFont = require('webfontloader');

export default {
	components: {
		MTheme,
		Preview,
		MHeading,
	},

	data() {
		return {
			fontOptions,
			headingFont: 'Open Sans',
			headingWeight: 400,
			bodyFont: 'Open Sans',
			bodyWeight: 400,
			defaultWeights: ['200', '300', '400', '500', '600', '700', '800'],
			baseFontSize: 16,
		};
	},

	computed: {
		...mapStores(useThemeStore),
		...mapState(useThemeStore, ['theme']),
		surfaces: (store) => store.theme.colors.surfaces,
		background: (store) => store.theme.colors.background,
		fontLoad() {
			const fonts = [];
			fonts.push(`${this.headingFont}:${this.headingWeight}`);

			if (this.bodyFont !== this.headingFont) {
				fonts.push(`${this.bodyFont}:${this.bodyWeight}`);
			}
			return fonts;
		},
		fontStyle() {
			const styles = {
				'--font-heading': `${this.headingFont}, sans-serif`,
				'--font-text': `${this.bodyFont}, sans-serif`,
				'--font-weights-heading': `${this.headingWeight}`,
				'--font-weights-text': `${this.bodyWeight}`,
				'--font-base-size': `${this.baseFontSize}px`,
				'--font-scale-ratio': themeStore.$state.theme.fonts.scaleRatio,
			};
			return styles;
		},
	},

	watch: {
		background(newValue) {
			const neutrals = generateNeutralColors(newValue);
			const headingColor = themeStore.$state.theme.colors.heading;
			const textColor = themeStore.$state.theme.colors.text;
			const contrastRatio = 4.5;

			themeStore.$state.theme.colors = Object.assign(themeStore.$state.theme.colors, neutrals);

			if (chroma.contrast(newValue, headingColor) < contrastRatio) {
				themeStore.$state.theme.colors.heading = neutrals['neutral-100'];
			}

			if (chroma.contrast(newValue, textColor) < contrastRatio) {
				themeStore.$state.theme.colors.text = neutrals['neutral-100'];
			}
		},
	},

	created: () => {
		themeStore.theme = theme1;
	},

	mounted() {
		this.updateFont();
	},

	methods: {
		loadWebFont(fonts) {
			// eslint-disable-next-line no-console
			console.log(fonts);
			WebFont.load({
				google: {
					families: fonts,
				},
			});
		},
		updateFont() {
			this.loadWebFont(this.fontLoad);
		},
		updateFontStyles() {

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
	color: #000;
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

.previewTitle {
	margin-bottom: 6px;
	color: var(--preview-title, #000);
	font-weight: 700;
	font-size: 14px;
}

.previewButton {
	width: 24px;
	height: 8px;
	background: var(--preview-button, #000);
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
</style>
