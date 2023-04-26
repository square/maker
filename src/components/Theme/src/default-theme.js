import defaultIcons from './default-icons';
import { getPath, resolve } from './utils';
import defaultColors from './default-colors';
import defaultFonts from './default-fonts';
import defaultShapes from './default-shapes';
import defaultComponents from './default-components';

export default function defaultTheme() {
	return {
		// util functions which enable pointer values
		resolve,
		getPath,
		// "global" theme settings
		colors: defaultColors(),
		fonts: defaultFonts(),
		icons: defaultIcons(),
		shapes: defaultShapes(),
		// default profiles is empty
		profiles: {},
		// "local" component settings
		...defaultComponents(),
	};
}
