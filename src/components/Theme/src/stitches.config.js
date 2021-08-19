import { createCss } from '@stitches/core';

export const { css, theme } = createCss({
	prefix: 'maker',
	theme: {
		colors: {
			background: '#fff',
			text: '#000',
			primary: '#e5d7cc',
			modes: {
				profile1: {
					background: '#fff',
					text: '#000',
					heading: '#000',
					primary: '#000',
					secondary: '#000',
				},
				profile2: {
					background: '#fff',
					text: '#000',
					heading: '#000',
					primary: '#e5d7cc',
					secondary: '#000',
				},
				profile3: {
					background: '#e5d7cc',
					text: '#000',
					primary: '#000',
					secondary: '#000',
				},
				profile4: {
					background: '#f7eee3',
					text: '#000',
					heading: '#000',
					primary: '#000',
					secondary: '#000',
				},
				profile5: {
					background: '#fcee71',
					text: '#000',
					heading: '#000',
					primary: '#000',
					secondary: '#000',
				},
				profile6: {
					background: '#464e4e',
					text: '#fff',
					heading: '#e5d7cc',
					primary: '#e5d7cc',
					secondary: '#fff',
				},
			},
		},
	},
});
