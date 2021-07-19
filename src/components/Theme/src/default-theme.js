import { resolve, getPath } from './utils';

export default function defaultTheme() {
	return {
		colors: {
			primary: '#000000',
		},
		button: {
			size: 'medium',
			variant: 'primary',
			shape: 'rounded',
			color: '@colors.primary',
		},
		actionbarbutton: {
			color: '@colors.primary',
			shape: 'pill',
		},
		resolve,
		getPath,
	};
}
