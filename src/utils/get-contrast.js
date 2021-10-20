import chroma from 'chroma-js';

function getContrast(chromaBg, targetChromaFg) {
	const contrastAccessibilityThreshold = 3;
	if (!targetChromaFg
		|| chroma.contrast(chromaBg, targetChromaFg) < contrastAccessibilityThreshold) {
		const isLightThreshold = 0.32;
		const isLight = chromaBg.luminance() > isLightThreshold;
		return chroma(isLight ? '#000' : '#fff');
	}
	return targetChromaFg;
}

export default getContrast;
