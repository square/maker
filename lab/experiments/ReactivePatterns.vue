<template>
	<m-theme :theme="theme">
		<m-button
			size="small"
			pattern="primaryOutline"
			@click="toggleGlobalCustomColor"
		>
			toggle global custom color: {{ globalCustomColor || 'null' }}
		</m-button>
		<m-button
			size="small"
			pattern="primaryOutline"
			@click="toggleCustomPatternFontStyle"
		>
			toggle custom pattern font style: {{ customPatternFontStyle || 'null' }}
		</m-button>
		<m-button
			size="small"
			pattern="primaryOutline"
			@click="toggleCustomPatternColor"
		>
			toggle custom pattern color: {{ customPatternColor || 'null' }}
		</m-button>
		<m-text pattern="custom">
			custom pattern text
		</m-text>
	</m-theme>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import { MText } from '@square/maker/components/Text';
import { MButton } from '@square/maker/components/Button';

export default {
	components: {
		MTheme,
		MButton,
		MText,
	},

	data() {
		return {
			customPatternFontStyle: null,
			customPatternColor: null,
			globalCustomColor: 'red',
		};
	},

	methods: {
		toggleCustomPatternFontStyle() {
			if (this.customPatternFontStyle) {
				this.customPatternFontStyle = null;
			} else {
				this.customPatternFontStyle = 'italic';
			}
		},
		toggleCustomPatternColor() {
			if (this.customPatternColor) {
				this.customPatternColor = null;
			} else {
				this.customPatternColor = 'blue';
			}
		},
		toggleGlobalCustomColor() {
			if (this.globalCustomColor !== 'red') {
				this.globalCustomColor = 'red';
			} else {
				this.globalCustomColor = 'green';
			}
		}
	},

	computed: {
		theme() {
			return {
				colors: {
					custom: this.globalCustomColor,
				},
				text: {
					color: '@colors.custom',
					patterns: {
						custom: {
							fontStyle: this.customPatternFontStyle,
							color: this.customPatternColor,
						},
					},
				},
			};
		},
	},
};
</script>
