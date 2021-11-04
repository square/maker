import { resolve, getPath } from './utils';

export default function defaultTheme() {
	return {
		colors: {
			'neutral-0': '#ffffff',
			'neutral-10': '#f1f1f1',
			'neutral-20': '#d3d3d3',
			'neutral-80': '#1b1b1b',
			'neutral-90': '#000000',
			'neutral-100': '#000000',
			background: '@colors.neutral-100',
			text: '@colors.neutral-100',
			elevation: '#ffffff',
			overlay: 'rgba(0, 0, 0, 0.3)',
			primary: '#000000',
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
			textColor: '@colors.neutral-100',
		},
		heading: {
			fontFamily: 'inherit',
			size: 2,
			textColor: '@colors.neutral-100',
		},
		choice: {
			selectedColor: undefined,
		},
		stepper: {
			color: '@colors["neutral-0"]',
			textColor: '@colors["neutral-100"]',
			shape: 'pill',
		},
		notice: {
			color: undefined,
		},
		modal: {
			color: undefined,
			bgColor: undefined,
		},
		container: {
			color: undefined,
			bgColor: undefined,
		},
		resolve,
		getPath,
	};
}
