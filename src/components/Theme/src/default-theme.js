import { resolve, getPath } from './utils';

export default function defaultTheme() {
	return {
		colors: {
			background: '#ffffff',
			primary: '#000000',
			text: '#636363',
			heading: '#303030',
			'color-100': '#f1f1f1',
			'color-300': '#d7d7d7',
			'color-800': '#636363',
			'color-900': '#303030',
		},
		profiles: [
			{
				id: 'defaultProfile',
			},
		],
		button: {
			size: 'medium',
			variant: 'primary',
			shape: 'rounded',
			color: '@colors.primary',
			textColor: undefined,
			fullWidth: false,
			align: 'center',
		},
		actionbarbutton: {
			color: '@colors.primary',
			shape: 'pill',
			textColor: undefined,
			fullWidth: false,
			align: 'center',
		},
		text: {
			textColor: '@colors.text',
			fontFamily: 'inherit',
			size: 0,
		},
		heading: {
			textColor: '@colors.heading',
			fontFamily: 'inherit',
			size: 2,
		},
		stepper: {
			color: '@colors["color-100"]',
			textColor: '@colors["color-900"]',
		},
		resolve,
		getPath,
	};
}
