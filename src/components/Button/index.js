import { MThemeable } from '@square/maker/components/Theme';
import Button from './src/Button.vue';
import createButtonTheme from './src/create-button-theme';

const MButton = MThemeable(Button, createButtonTheme, 'button');
export { MButton };
