<template>
	<!-- eslint-disable max-len -->
	<m-theme
		class="custom-icons-lab"
		:theme="iconTheme"
	>
		<!-- load font awesome icons css -->
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
			crossorigin="anonymous"
			referrerpolicy="no-referrer"
		>
		<!-- select icon style -->
		<label>
			icon style
		</label>
		<m-choice v-model="chosenIconStyle">
			<m-choice-option
				v-for="iconStyle in iconStyles"
				:key="iconStyle"
				:value="iconStyle"
			>
				{{ iconStyle }}
			</m-choice-option>
		</m-choice>
		<!-- rendering icons without maker theming -->
		<label>
			rendered i tags using font awesome cdn css icon font
		</label>
		<i
			v-for="faIcon in faIcons"
			:key="faIcon + '-fa'"
			:class="faClasses(faIcon, chosenIconStyle)"
		/>
		<label>
			rendered object tags using bootstrap cdn svg icons
		</label>
		<object
			v-for="bsIcon in bsIcons"
			:key="bsIcon + '-bs'"
			type="image/svg+xml"
			class="icon"
			:data="bsUrl(bsIcon, chosenIconStyle)"
		/>
		<!-- select icon style -->
		<label>
			icon pattern
		</label>
		<m-choice v-model="chosenIconPattern">
			<m-choice-option
				v-for="iconPattern in iconPatterns"
				:key="iconPattern"
				:value="iconPattern"
			>
				{{ iconPattern }}
			</m-choice-option>
		</m-choice>
		<!-- rendering icons with maker theming -->
		<label>
			rendered themed micons (font awesome + bootstrap)
		</label>
		<m-icon
			v-for="icon in allIcons"
			:key="icon + '-all'"
			:name="icon"
			:pattern="chosenIconPattern"
		/>
		<template
			v-if="chosenIconPattern === 'gradient'"
		>
			<label>
				customize gradient
			</label>
			<label>
				start color
				<input
					v-model="startColor"
					type="color"
				>
				{{ startColor }}
			</label>
			<label>
				end color
				<input
					v-model="endColor"
					type="color"
				>
				{{ endColor }}
			</label>
			<label>
				angle
				<input
					v-model="angle"
					type="range"
					min="0"
					max="360"
				>
				{{ angle }} deg
			</label>
			<p>
				note: gradient doesn't apply to font awesome icons because
				they're an icon font. it applies to bootstrap icons since we're
				rendering them inline as svgs.
			</p>
		</template>
		<!-- https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Gradients -->
		<!-- https://fvsch.com/svg-gradient-fill -->
		<!-- https://stackoverflow.com/q/9025678/2766908 -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			focusable="false"
			class="invisible-but-not-hidden"
		>
			<defs>
				<linearGradient
					id="gradient"
					:gradientTransform="`rotate(${angle} 0.5 0.5)`"
				>
					<stop
						offset="0%"
						:stop-color="startColor"
					/>
					<stop
						offset="100%"
						:stop-color="endColor"
					/>
				</linearGradient>
			</defs>
		</svg>
	</m-theme>
</template>

<script>
import { defaultTheme, MTheme } from '@square/maker/components/Theme';
import { MIcon } from '@square/maker/components/Icon';
import { MChoice, MChoiceOption } from '@square/maker/components/Choice';
import AsyncInlineSvg from '../components/AsyncInlineSvg.vue';

// fa = Font Awesome
// bs = Bootstrap

const iconStyles = [
	'outline',
	'fill',
];

const iconStylesToFa = {
	outline: 'regular',
	fill: 'solid',
};

const iconStyleToBs = {
	outline: '',
	fill: '-fill',
};

function faClasses(faIconName, iconStyle) {
	const faIconStyle = iconStylesToFa[iconStyle];
	return `fa-${faIconStyle} fa-${faIconName}`;
}

function bsUrl(bsIconName, iconStyle) {
	const bsIconStyle = iconStyleToBs[iconStyle];
	return `https://icons.getbootstrap.com/assets/icons/${bsIconName}${bsIconStyle}.svg`;
}

const faIcons = [
	'user',
	'heart',
	'face-grin-hearts',
	'face-smile',
	'file',
	'bell',
	'clipboard',
	'circle-up',
	'circle-down',
	'bookmark',
	'hand',
	'thumbs-up',
	'thumbs-down',
	'comments',
	'lemon',
	'paper-plane',
	'sun',
	'flag',
	'moon',
	'lightbulb',
	'keyboard',
	'images',
];

const bsIcons = [
	'8-circle',
	'airplane',
	'alarm',
	'arrow-down-left-square',
	'arrow-down-right-square',
	'arrow-through-heart',
	'award',
	'balloon',
	'binoculars',
	'car-front',
	'cloud-drizzle',
	'cup-hot',
	'dice-5',
	'droplet',
	'lamp',
	'trophy',
];

const iconPatterns = Object.keys(defaultTheme().icon.patterns);
iconPatterns.push('gradient');

export default {
	components: {
		MTheme,
		MIcon,
		MChoice,
		MChoiceOption,
	},
	data() {
		return {
			faIcons,
			bsIcons,
			chosenIconStyle: iconStyles[0],
			iconStyles,
			chosenIconPattern: iconPatterns[0],
			iconPatterns,
			startColor: '#ff0000',
			endColor: '#0000ff',
			angle: '0',
		};
	},
	computed: {
		iconTheme() {
			const icons = {};
			for (const faIcon of this.faIcons) {
				// map fa icons to render fns
				icons[faIcon] = () => <i
					class={faClasses(faIcon, this.chosenIconStyle)}
				/>;
			}
			for (const bsIcon of this.bsIcons) {
				// map bs icons to render fns
				// need to use special component to fetch
				// icons async and render them inline
				icons[bsIcon] = () => <AsyncInlineSvg
					class="icon"
					fragment={false}
					src={`https://icons.getbootstrap.com/assets/icons/${bsIcon}${iconStyleToBs[this.chosenIconStyle]}.svg`}
				/>;
				/*
					this works BUT the icon can't be styled with CSS anymore
					icons[bsIcon] = () => <img
						class="icon"
						src={`https://icons.getbootstrap.com/assets/icons/${bsIcon}${iconStyleToBs[this.chosenIconStyle]}.svg`}
					/>;
				*/
			}
			const icon = {
				patterns: {
					gradient: {
						fill: 'url(#gradient)',
					},
				},
			};
			return {
				icons,
				icon,
			};
		},
		allIcons() {
			return this.faIcons.concat(this.bsIcons);
		},
	},
	methods: {
		faClasses,
		bsUrl,
	},
};
</script>

<style scoped>
.custom-icons-lab {
	min-width: 400px;
	max-width: 600px;
	margin: 8px;
}

.custom-icons-lab > * {
	margin: 8px;
}

.icon {
	display: inline-block;
	width: 16px;
	height: 16px;
	vertical-align: bottom;
}

label {
	display: block;
}

/* https://fvsch.com/svg-gradient-fill */
.invisible-but-not-hidden {
	position: absolute;
	width: 0;
	height: 0;
}
</style>
