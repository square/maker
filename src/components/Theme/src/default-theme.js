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
		resolve,
		getPath,
	};
}
