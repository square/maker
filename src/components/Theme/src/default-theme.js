import { resolve, getPath } from './utils';

export default function defaultTheme() {
	return {
		colors: {
			'neutral-0': '#ffffff',
			'neutral-10': '#f1f1f1',
			'neutral-20': '#d3d3d3',
			'neutral-80': '#707070',
			'neutral-90': '#1b1b1b',
			'neutral-100': '#000000',
			background: '#ffffff',
			heading: '#000000',
			text: '#000000',
			elevation: '#ffffff',
			overlay: 'rgba(0, 0, 0, 0.3)',
			primary: '#000000',
		},
		fonts: {
			baseSize: 16,
			sizeScale: 1.15,
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
			color: '@colors.primary',
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
			textColor: '@colors.text',
			weight: 400,
		},
		heading: {
			fontFamily: 'inherit',
			size: 2,
			textColor: '@colors.heading',
			weight: 700,
		},
		choice: {
			selectedColor: undefined,
		},
		stepper: {
			color: '@colors["neutral-10"]',
			textColor: '@colors["neutral-90"]',
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
