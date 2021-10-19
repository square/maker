import { resolve, getPath } from './utils';

export default function defaultTheme() {
	return {
		colors: {
			background: '#ffffff',
			primary: '#000000',
			'color-100': '#f1f1f1',
			'color-300': '#d7d7d7',
			'color-700': '#9e9e9e',
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
		textbutton: {
			color: undefined,
			size: 'medium',
		},
		actionbarbutton: {
			color: '@colors.primary',
			shape: 'pill',
			textColor: undefined,
			fullWidth: false,
			align: 'center',
		},
		text: {
			fontFamily: 'inherit',
			size: 0,
		},
		heading: {
			fontFamily: 'inherit',
			size: 2,
		},
		choice: {
			selectedColor: undefined,
		},
		stepper: {
			color: '@colors["color-100"]',
			textColor: '@colors["color-900"]',
		},
		notice: {
			color: undefined,
		},
		modal: {
			color: undefined,
			textColor: undefined,
		},
		container: {
			color: undefined,
			textColor: undefined,
		},
		resolve,
		getPath,
	};
}
