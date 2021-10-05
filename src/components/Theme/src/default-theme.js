import { resolve, getPath } from './utils';

export default function defaultTheme() {
	return {
		colors: {
			primary: '#000000',
			text: '#000000',
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
		resolve,
		getPath,
	};
}
