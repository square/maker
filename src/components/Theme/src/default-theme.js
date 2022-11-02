import defaultIcons from './default-icons';
import { resolve, getPath } from './utils';
import defaultColors from './default-colors.cjs';
import defaultFonts from './default-fonts.cjs';
import defaultShapes from './default-shapes.cjs';
import defaultComponents from './default-components.cjs';

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
