import chroma from 'chroma-js';

function getContrast(chromaBg, targetChromaFg) {
	if (!targetChromaFg || chroma.contrast(chromaBg, targetChromaFg) < 4.5) {
		const isLight = chromaBg.luminance() > 0.32;
		return chroma(isLight ? '#000' : '#fff');
	}
	return targetChromaFg;
}

function getFocus(chromaColor) {
	return chromaColor.alpha(0.3);
}

function getHover(chromaColor) {
	// mix color with 5% black
	return chroma.mix(chromaColor, '#000', 0.05);
}

function getActive(chromaColor) {
	// mix color with 10% black
	return chroma.mix(chromaColor, '#000', 0.1);
}

function fill(tokens) {
	const color = chroma(tokens.color);
	const colorHover = getHover(color);
	const colorActive = getActive(color);
	const textColor = tokens.textColor ? chroma(tokens.textColor) : undefined;
	const contrastColor = getContrast(color, textColor);
	const contrastColorHover = getHover(contrastColor);
	const contrastColorActive = getActive(contrastColor);
	const focusColor = getFocus(color);
	let padding = '';
	if (tokens.size == 'small') {
		padding = '8px 16px';
	} else if (tokens.size == 'medium') {
		padding = '12px 24px';
	} else if (tokens.size == 'large') {
		padding = '20px 32px';
	} else {
		throw new Error(`unrecognized size value for Button: ${tokens.size}`);
	}
	return {
		'--padding': padding,
		'--color-main': color.hex(),
		'--color-main-hover': colorHover.hex(),
		'--color-main-active': colorActive.hex(),
		'--color-contrast': contrastColor.hex(),
		'--color-contrast-hover': contrastColorHover.hex(),
		'--color-contrast-active': contrastColorActive.hex(),
		'--color-focus': focusColor.hex(),
	};
}

function outline(tokens) {
	const color = chroma(tokens.color);
	const colorHover = getHover(color);
	const colorActive = getActive(color);
	const focusColor = getFocus(color);
	let padding = '';
	if (tokens.size == 'small') {
		padding = '8px 16px';
	} else if (tokens.size == 'medium') {
		padding = '12px 24px';
	} else if (tokens.size == 'large') {
		padding = '20px 32px';
	} else {
		throw new Error(`unrecognized size value for Button: ${tokens.size}`);
	}
	return {
		'--padding': padding,
		'--color-main': 'transparent',
		'--color-main-hover': 'rgba(0, 0, 0, 0.05)',
		'--color-main-active': 'rgba(0, 0, 0, 0.1)',
		'--color-contrast': color.hex(),
		'--color-contrast-hover': colorHover.hex(),
		'--color-contrast-active': colorActive.hex(),
		'--color-focus': focusColor.hex(),
		'--outline-border': 'inset 0 0 0 1px var(--color-contrast)',
	};
}

function ghost(tokens) {
	const color = chroma(tokens.color);
	const colorHover = getHover(color);
	const colorActive = getActive(color);
	const focusColor = getFocus(color);
	let padding = '';
	if (tokens.size == 'small') {
		padding = '8px';
	} else if (tokens.size == 'medium') {
		padding = '12px';
	} else if (tokens.size == 'large') {
		padding = '20px';
	} else {
		throw new Error(`unrecognized size value for Button: ${tokens.size}`);
	}
	return {
		'--padding': padding,
		'--color-main': 'transparent',
		'--color-main-hover': 'rgba(0, 0, 0, 0.05)',
		'--color-main-active': 'rgba(0, 0, 0, 0.1)',
		'--color-contrast': color.hex(),
		'--color-contrast-hover': colorHover.hex(),
		'--color-contrast-active': colorActive.hex(),
		'--color-focus': focusColor.hex(),
	};
}

const STYLES = {
	fill,
	outline,
	ghost,
};

function defaultAbstractTheme() {
	return {
		color: '#000000',
		size: 'medium',
		shape: 'rounded',
		style: 'fill',
	};
}

export default function createButtonTheme(abstractTheme = {}) {
	console.log('in button theming fn');
	console.log('got abstract theme', abstractTheme);
	abstractTheme = Object.assign(defaultAbstractTheme(), abstractTheme);
	console.log('abstract theme after merging with defaults', abstractTheme);
	const concreteTheme = {};
	Object.assign(concreteTheme, STYLES[abstractTheme.style](abstractTheme));
	if (abstractTheme.size == 'small') {
		concreteTheme['--font-size'] = '12px';
		concreteTheme['--line-height'] = '1.4';
		concreteTheme['--icon-padding'] = '8px';
	} else if (abstractTheme.size == 'medium') {
		concreteTheme['--font-size'] = '14px';
		concreteTheme['--line-height'] = '1.77';
		concreteTheme['--icon-padding'] = '12px';
	} else if (abstractTheme.size == 'large') {
		concreteTheme['--font-size'] = '16px';
		concreteTheme['--line-height'] = '1.5';
		concreteTheme['--icon-padding'] = '20px';
	} else {
		throw new Error(`unrecognized size value for Button: ${tokens.size}`);
	}
	if (abstractTheme.shape == 'square') {
		concreteTheme['--border-radius'] = '0';
	} else if (abstractTheme.shape == 'rounded') {
		concreteTheme['--border-radius'] = '8px';
	} else if (abstractTheme.shape == 'pill') {
		concreteTheme['--border-radius'] = '32px';
	} else {
		throw new Error(`unrecognized shape value for Button: ${tokens.shape}`);
	}
	console.log('concrete theme', concreteTheme);
	return concreteTheme;
}
