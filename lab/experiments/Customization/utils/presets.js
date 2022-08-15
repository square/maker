// Don't need weights for this demo because their variable fonts
export const presets = {
	resetStyles: {
		fonts: {
			baseSize: 16,
			sizeScale: 1.12,
			heading: {
				fontFamily: 'Work Sans',
				fontWeight: '700',
			},
			body: {
				fontFamily: 'Open Sans',
				fontWeight: '500',
			},
		},
		section: {
			custom: {
				maxWidth: '1000px',
			},
		},
		button: {
			custom: {
				fontFamily: 'Open Sans',
				fontWeight: '500',
				borderRadius: 0,
				borderWidth: 1,
			},
		},
		card: {
			custom: {
				color: '#ffffff',
				borderRadius: 0,
				borderWidth: 1,
				borderColor: '#e1e1e1',
			},
		},
		image: {
			custom: {
				borderRadius: 0,
				borderWidth: 0,
				borderColor: '#ffffff',
			},
		},
	},
	presetOne: {
		shapes: {
			imageBorderRadius: '8px',
		},
		colors: {
			background: '#c7f4f4',
			heading: '#0061bd',
			body: '#0051a8',
			'neutral-0': '#c7f4f4',
			'neutral-10': '#bce6e6',
			'neutral-20': '#a5caca',
			'neutral-80': '#5a6c6c',
			'neutral-90': '#181b1b',
			'neutral-100': '#000000',
			critical: {
				fill: '#cd2026',
				text: '#a82826',
				subtle: '#f6eceb',
			},
			warning: {
				fill: '#ffbf00',
				text: '#7e662a',
				subtle: '#f9eecf',
			},
			success: {
				fill: '#008000',
				text: '#0a7A06',
				subtle: '#ebf1eb',
			},
			elevation: '#ffffff',
			overlay: 'rgba(0, 0, 0, 0.32)',
			primary: '#f50f7e',
		},
		fonts: {
			heading: {
				fontFamily: 'Rubik',
				fontWeight: '800',
			},
			body: {
				fontFamily: 'Karla',
				fontWeight: '500',
			},
		},
		section: {
			custom: {
				maxWidth: '1000px',
			},
		},
		button: {
			textColor: '#33fcff',
			custom: {
				fontFamily: 'Rubik',
				fontWeight: '500',
				borderRadius: '4',
				borderWidth: '2',
				borderColor: '#36fbff',
				boxShadowHorizontal: '1',
				boxShadowVertical: '1',
				boxShadowBlurRadius: '0',
				boxShadowSpreadRadius: '1',
				boxShadowColor: '#f50f7e',
				hoverBoxShadowHorizontal: '3',
				hoverBorderColor: '#38faff',
				hoverBorderWidth: '2',
				hoverBoxShadowVertical: '3',
				hoverBoxShadowSpreadRadius: '2',
				hoverBoxShadowColor: '#0160bd',
				hoverBoxShadowBlurRadius: '0',
				hoverColor: '#ff3898',
			},
		},
		card: {
			custom: {
				color: '#c7f4f4',
				borderRadius: '4',
				borderWidth: '2',
				borderColor: '#f60e7e',
				boxShadowHorizontal: '2',
				boxShadowVertical: '2',
				boxShadowBlurRadius: '0',
				boxShadowSpreadRadius: '2',
				boxShadowColor: 'transparent',
				titleColor: '#f60e7e',
				hoverColor: '#ebffff',
				hoverBoxShadowHorizontal: '3',
				hoverBorderColor: '#f70d7e',
				hoverBorderWidth: '2',
				hoverBoxShadowVertical: '3',
				hoverBoxShadowSpreadRadius: '2',
				hoverBoxShadowColor: '#0160bd',
				hoverBoxShadowBlurRadius: '0',
			},
		},
		image: {
			custom: {
				borderRadius: 0,
				borderWidth: 0,
				borderColor: '#ffffff',
			},
		},
	},
	presetTwo: {
		colors: {
			background: '#f0f0ef',
			heading: '#635303',
			body: '#005214',
			'neutral-0': '#f0f0ef',
			'neutral-10': '#e2e2e2',
			'neutral-20': '#c7c7c6',
			'neutral-80': '#6a6a6a',
			'neutral-90': '#1a1a1a',
			'neutral-100': '#000000',
			critical: {
				fill: '#cd2026',
				text: '#a82826',
				subtle: '#f6eceb',
			},
			warning: {
				fill: '#ffbf00',
				text: '#7e662a',
				subtle: '#f9eecf',
			},
			success: {
				fill: '#008000',
				text: '#0a7A06',
				subtle: '#ebf1eb',
			},
			elevation: '#ffffff',
			overlay: 'rgba(0, 0, 0, 0.32)',
			primary: '#005313',
		},
		fonts: {
			heading: {
				fontFamily: 'Playfair Display',
				fontWeight: '600',
			},
			body: {
				fontFamily: 'Karla',
				fontWeight: '500',
			},
		},
		button: {
			textColor: '#f0f0ef',
			custom: {
				fontFamily: 'Playfair Display',
				fontWeight: '400',
				borderRadius: '2',
				borderWidth: '1',
				borderColor: '#005413',
				boxShadowHorizontal: '1',
				boxShadowVertical: '1',
				boxShadowBlurRadius: '2',
				boxShadowSpreadRadius: '0',
				boxShadowColor: '#c5c6a9',
				hoverColor: '#004211',
				hoverTextColor: '#f0f0ef',
				hoverBorderWidth: '1',
				hoverBorderColor: '#005413',
				hoverBoxShadowHorizontal: '2',
				hoverBoxShadowVertical: '2',
				hoverBoxShadowBlurRadius: '2',
				hoverBoxShadowSpreadRadius: '1',
				hoverBoxShadowColor: '#baba91',
			},
		},
		card: {
			custom: {
				color: '#e2e2e2',
				borderRadius: '4',
				borderWidth: '0',
				borderColor: '#c5c5a9',
				boxShadowHorizontal: '0',
				boxShadowVertical: '0',
				boxShadowBlurRadius: '0',
				boxShadowSpreadRadius: '0',
				boxShadowColor: '#c5c5a9',
				titleColor: '#005413',
				hoverColor: '#f7f7f7',
				hoverBoxShadowHorizontal: '1',
				hoverBoxShadowVertical: '1',
				hoverBoxShadowBlurRadius: '3',
				hoverBoxShadowColor: '#bab991',
				hoverBoxShadowSpreadRadius: '1',
			},
		},
		image: {
			custom: {
				borderRadius: 0,
				borderWidth: 0,
				borderColor: '#ffffff',
			},
		},
		section: {
			custom: {
				maxWidth: '5000px',
			},
		},
	},
};
