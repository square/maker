import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
	state: () => ({
		theme: {
			colors: {
				background: '#ffffff',
				text: '#000000',
				heading: '#000000',
				primary: '#000000',
			},
			fonts: {},
			shape: {},
		},
	}),
	actions: {
		async init(themeData) {
			this.theme = themeData;
		},
	},
});
