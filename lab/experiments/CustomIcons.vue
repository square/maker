<template>
	<!-- eslint-disable max-len, vue/max-attributes-per-line -->
	<m-theme
		class="custom-icons-lab"
		:theme="iconTheme"
		:style="styles"
	>
		<!-- load font awesome icons css -->
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
			crossorigin="anonymous"
			referrerpolicy="no-referrer"
		>
		<!-- select icon style -->
		<h3>
			icon style
		</h3>
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
		<h3>
			rendered i tags using font awesome cdn css icon font
		</h3>
		<i
			v-for="faIcon in faIcons"
			:key="faIcon + '-fa'"
			:class="faClasses(faIcon, chosenIconStyle)"
		/>
		<h3>
			rendered object tags using bootstrap cdn svg icons
		</h3>
		<object
			v-for="bsIcon in bsIcons"
			:key="bsIcon + '-bs'"
			type="image/svg+xml"
			class="icon"
			:data="bsUrl(bsIcon, chosenIconStyle)"
		/>
		<!-- select icon style -->
		<h3>
			icon pattern
		</h3>
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
		<h3>
			rendered themed micons (font awesome + bootstrap)
		</h3>
		<m-icon
			v-for="icon in allIcons"
			:key="icon + '-all'"
			:name="icon"
			:pattern="chosenIconPattern"
		/>
		<template
			v-if="chosenIconPattern === 'gradient'"
		>
			<h3>
				customize gradient
			</h3>
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
		<h3>
			multi-tone / non-solid icons (icons w/shading + highlights)
		</h3>
		<label>
			icon color
			<input
				v-model="iconColor"
				type="color"
			>
			{{ iconColor }}
		</label>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="large icon"
		>
			<path
				fill="var(--icon-color)"
				fill-rule="evenodd"
				d="M1.1 2.5 1 19.6c0 .8.4 1.4 1 1.7l3.7 2c.4.3.9.5 1.4.4L21 21.8c1.1-.1 2-1.2 2-2.4V2.3L18.9 0 1.1 2.5Zm15.3 7.1V3.2l1-.2v6.6c0 .5-.4 1-.9 1.1l-4.6.6h-.1c-.4 0-.8-.4-.8-.9V3.9l1-.1v6.5l4.3-.6.1-.1Z"
				clip-rule="evenodd"
			/>
			<path
				fill="var(--icon-color-contrast)"
				fill-opacity=".2"
				d="M5.2 4.8 1.1 2.5 18.9 0 23 2.3 5.2 4.8Z"
			/>
			<path
				fill="url(#a)"
				fill-opacity=".5"
				fill-rule="evenodd"
				d="M1.1 2.5 1 19.6c0 .8.4 1.4 1 1.7l4 2.1.1.1H6c-.5-.4-.9-1-.9-1.7l.1-17-4.1-2.3Z"
				clip-rule="evenodd"
			/>
			<defs>
				<linearGradient
					id="a"
					x1="3.5"
					x2="3.5"
					y1="2.5"
					y2="23.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						stop-color="var(--icon-color-contrast)"
						stop-opacity="0"
					/>
					<stop
						stop-color="var(--icon-color-contrast)"
						offset=".5"
					/>
				</linearGradient>
			</defs>
		</svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 25 24"
			class="large icon"
		>
			<path fill="var(--icon-color)" d="M19 13.8h.2L15.8 12c2-.6 3.6-2.7 3.6-5 0-1.9-1-3.3-2.6-3.8l.6.2-3.6-2c-.7-.3-1.5-.5-2.3-.4a5.4 5.4 0 0 0-4.2 5.2c0 1.6.8 3 2 3.6l2.4 1.3h-.2c-4.1.6-7.5 4.7-7.6 9.1 0 .4.2.6.4.8L8 23a15.6 15.6 0 0 0 14.1-2c.4-.2.6-.6.6-1a7 7 0 0 0-3.7-6.3Zm-11.3 9h.1Zm-.1-.6v.3-.3Zm0 .3Z" />
			<path fill="url(#a)" fill-opacity=".5" fill-rule="evenodd" d="M22 16.9c.4.9.7 2 .7 3.2 0 .3-.2.7-.5 1a17.7 17.7 0 0 1-7 2.6A14.6 14.6 0 0 1 8 23l-3.7-2a.9.9 0 0 1-.4-.8c0-4.4 3.5-8.5 7.6-9h.2L9.2 9.7a4 4 0 0 1-2-3.6c0-2.5 2-4.8 4.3-5.2.8 0 1.6 0 2.3.4l3.1 1.8c-1.9-.7-4.2.3-5.3 2.4-1.3 2.3-.7 5 1.3 6.1 2 1 4.5 0 5.8-2.2a5 5 0 0 0 .3-4.3c.2.5.4 1.1.4 1.8 0 2.3-1.6 4.4-3.6 5l2.8 1.5c-1-.4-2.2-.6-3.5-.4-4 .5-7.5 4.6-7.6 9a1 1 0 0 0 0 .4c.2.2.3.4.6.5a16.6 16.6 0 0 0 14-2c.4-.2.6-.6.6-1 0-1.1-.3-2.2-.7-3.1ZM7.7 22.8h.1Z" clip-rule="evenodd" />
			<defs>
				<linearGradient id="a" x1="13.3" x2="13.3" y1="-2" y2="23.8" gradientUnits="userSpaceOnUse">
					<stop stop-opacity="0" stop-color="var(--icon-color-contrast)" />
					<stop offset=".52" stop-color="var(--icon-color-contrast)" />
				</linearGradient>
			</defs>
		</svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 25 24"
			class="large icon"
		>
			<path fill="var(--icon-color)" fill-rule="evenodd" d="M19.94 7.19c.26.15.42.46.42.91l.02 6.52c.01.91-.62 2-1.41 2.45l-5.68 3.28c-.45.26-.85.25-1.11.02l.1.08-7.05-4.1c-.25-.15-.41-.46-.41-.91L4.8 8.92c0-.9.63-1.99 1.41-2.45l5.68-3.27c.4-.23.75-.25 1.01-.1l7.04 4.09Zm-7.91 12.99Zm7.71-13.06Zm-2.3 3.96-.01-2.94h-.01L10.54 4 8 5.46l6.89 4.17.01 2.92 2.54-1.47Z" clip-rule="evenodd" />
			<path fill="url(#a)" fill-opacity=".5" fill-rule="evenodd" d="M20.38 14.62Zm-7.1 5.73Zm-1 .1-7.05-4.1c-.25-.15-.41-.46-.41-.91L4.8 8.92c0-.9.63-1.99 1.41-2.45l5.68-3.27c.4-.23.75-.25 1.01-.1l6.98 4.06a.88.88 0 0 0-.64 0c-.1.03-.2.07-.3.13l-1.51.87L10.54 4 7.99 5.45l6.9 4.18-1.63.94a3.14 3.14 0 0 0-1.41 2.45l.02 6.52v.06c.01.3.1.54.24.7l.16.15Z" clip-rule="evenodd" />
			<defs>
				<linearGradient id="a" x1="12.59" x2="12.59" y1="7" y2="20.54" gradientUnits="userSpaceOnUse">
					<stop stop-opacity="0" stop-color="var(--icon-color-contrast)" />
					<stop offset=".52" stop-color="var(--icon-color-contrast)" />
				</linearGradient>
			</defs>
		</svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 25 24"
			class="large icon"
		>
			<path fill="var(--icon-color)" fill-rule="evenodd" d="m19 10.38-2.33-1.27L19 10.38a.5.5 0 0 1 .3.03l-3.14-1.7.62-4.73h.01L13.15 2l-.89.12.03.02-.03-.02-1.15 2.34v.02c-1.74 3.52-3.08 6.24-4 8.14l-.02-.01-.08.18 1.7.93-1.69-.92c-.12.24-.16.46 0 .55l3.16 1.71-.62 4.73 3.65 1.99v-.02l.89-.12 5.27-10.67.06-.15c.08-.18.02-.49-.42-.43v-.01H19Zm-4.9 4.53h.01-.01Z" clip-rule="evenodd" />
			<path fill="url(#a)" fill-opacity=".5" fill-rule="evenodd" d="m16.17 8.71-.28 2.11 3.1-.44-2.32-1.27L19 10.38a.5.5 0 0 1 .3.03l-3.14-1.7Zm-2.07 6.2-3.11.44c-.51.07-.5-.24-.34-.58l.08-.18A2237.23 2237.23 0 0 1 15.9 4.1l.89-.12h.01L13.15 2l-.89.12.03.02-.03-.02-1.15 2.34v.02c-1.74 3.52-3.08 6.24-4 8.14l-.02-.01-.08.18 1.7.93-1.69-.92c-.12.24-.16.46 0 .55l3.16 1.71-.62 4.73 3.65 1.99v-.02l.9-6.84h-.01Z" clip-rule="evenodd" />
			<defs>
				<linearGradient id="a" x1="13.11" x2="13.11" y1="6.51" y2="21.78" gradientUnits="userSpaceOnUse">
					<stop stop-opacity="0" stop-color="var(--icon-color-contrast)" />
					<stop offset=".52" stop-color="var(--icon-color-contrast)" />
				</linearGradient>
			</defs>
		</svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 25 24"
			class="large icon"
		>
			<path fill="var(--icon-color)" fill-rule="evenodd" d="m21.14 5.12-3.65-1.98a1.2 1.2 0 0 0-.75-.13l-4.99.7L15.4 5.7l4.99-.7-3.64-1.99L20.39 5c.27-.04.53 0 .75.13Zm-5.74.58-3.65-1.98c-.38.05-.74.27-1 .58l3.65 1.98c.25-.31.62-.53 1-.58Zm-2.32 15.37-3.53-1.91a.92.92 0 0 1-.25-.19h.01-.01l-4.98-4.68 3.65 1.99.08.07-.08-.07-3.65-1.99a1.38 1.38 0 0 1-.41-1.02c0-.41.16-.84.42-1.16l6.42-7.81 3.65 1.98-6.42 7.82a1.83 1.83 0 0 0-.42 1.16c.01-.41.16-.84.42-1.16l6.42-7.82c.26-.31.62-.53 1-.58l4.99-.7c.78-.11 1.42.49 1.41 1.34v5.38c-.01.42-.16.83-.43 1.15l-6.42 7.82a1.6 1.6 0 0 1-1 .59c-.32.04-.63-.03-.87-.2ZM20.39 7.7c-.01.64-.49 1.22-1.08 1.3-.58.08-1.06-.36-1.06-1s.48-1.22 1.07-1.3c.59-.08 1.08.36 1.07 1Z" clip-rule="evenodd" />
			<path fill="url(#a)" fill-opacity=".5" fill-rule="evenodd" d="m17.49 3.14 3.65 1.98a1.2 1.2 0 0 0-.75-.13l-3.64-1.98L20.39 5l-4.99.7-3.65-1.99 4.99-.7c.27-.04.53.01.75.13ZM15.4 5.7c-.38.05-.75.27-1 .58L10.75 4.3c.26-.31.62-.53 1-.58L15.4 5.7Zm-2.2 15.44-3.65-1.98a.92.92 0 0 1-.25-.19h.01-.01l-4.98-4.68 3.65 1.99 4.96 4.66.02.01c.08.07.16.14.25.19Zm-8.87-9.03 6.42-7.81 3.65 1.98-6.42 7.82c-.26.3-.42.72-.42 1.15 0 .43.15.78.41 1.02v.01l-3.65-1.99a1.38 1.38 0 0 1-.41-1.02c0-.41.16-.84.42-1.16Z" clip-rule="evenodd" />
			<defs>
				<linearGradient id="a" x1="12.52" x2="12.52" y1="3" y2="21.14" gradientUnits="userSpaceOnUse">
					<stop stop-opacity="0" stop-color="var(--icon-color-contrast)" />
					<stop offset=".52" stop-color="var(--icon-color-contrast)" />
				</linearGradient>
			</defs>
		</svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="large icon"
		>
			<path fill="var(--icon-color)" fill-rule="evenodd" d="m7.97 2.68 4.45-.63 1.4.77 2.6-.37 3.65 1.98-.01 1.92L7.61 8.1 3.96 6.12V4.2l3.11-.44 3.65 1.99-3.65-1.99.9-1.08Zm8.98 2.19ZM8.49 8.94V9L4.85 7.01l-.02 11.47 3.64 1.98h.01c0 .94.6 1.63 1.41 1.7.12 0 .24 0 .36-.02l7.12-1c.92-.13 1.68-1 1.77-1.98l.01-.2.02-10.46V7.44L8.49 8.94Zm.8 13.04L5.66 20c-.5-.27-.83-.83-.83-1.51l3.65 1.98c0 .69.33 1.24.83 1.5Z" clip-rule="evenodd" />
			<path fill="url(#a)" fill-opacity=".5" fill-rule="evenodd" d="M8.49 9 4.85 7.01 4.83 18.5l-.01-.01c0 .68.33 1.24.83 1.51l3.65 1.98c-.5-.27-.83-.8-.83-1.49l-2.12-1.16 2.13 1.16v-.03h-.01L8.49 9Zm10.66 9.96.02-10.46-.02 10.46Zm-12.8.37-1.52-.83 1.52.83Z" clip-rule="evenodd" />
			<path fill="url(#b)" fill-opacity=".3" fill-rule="evenodd" d="m7.97 2.68 4.45-.63 1.4.77 2.6-.37 3.65 1.98-3.12.44-.89-.83-4.44.62-.9 1.09-3.65-1.99.9-1.08Zm2.75 3.07L7.07 3.76l-3.11.44v1.92L7.61 8.1V6.18l3.11-.43ZM7.61 8.1l12.45-1.75L7.61 8.1Z" clip-rule="evenodd" />
			<defs>
				<linearGradient id="a" x1="11.99" x2="11.99" y1="7.01" y2="22.16" gradientUnits="userSpaceOnUse">
					<stop stop-opacity="0" stop-color="var(--icon-color-contrast)" />
					<stop offset=".52" stop-color="var(--icon-color-contrast)" />
				</linearGradient>
				<linearGradient id="b" x1="12.02" x2="12.02" y1="2.05" y2="8.1" gradientUnits="userSpaceOnUse">
					<stop stop-opacity="0" stop-color="var(--icon-color-contrast)" />
					<stop offset=".52" stop-color="var(--icon-color-contrast)" />
				</linearGradient>
			</defs>
		</svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="large icon"
		>
			<path fill="var(--icon-color)" fill-rule="evenodd" d="M13.33 6.01a.68.68 0 0 0-.27 0l-1.83-1c.17-.02.34 0 .47.08h.01l1.8 1c.27.12.44.4.44.75v3.56l2.61-.36c.18-.02.34 0 .48.08l1.77.96c.28.12.48.41.48.78 0 .52-.4 1.02-.9 1.09l-4.45.62v4.8c0 .54-.41 1.03-.9 1.09-.48.06-.88-.3-.89-.81 0 .32.16.58.39.71l-1.8-.97a.83.83 0 0 1-.41-.75h-.01v-3.56l-2.61.37c-.44.06-.8-.24-.88-.67.05.26.2.48.4.59l-1.82-1a.81.81 0 0 1-.41-.74c0-.53.4-1.02.89-1.08l1.82.99 4.45-.63v-.01l-4.46.63-1.82-1 4.45-.62.01-4.81 1.82.98c0-.53.4-1 .9-1.07.1-.02.18-.01.27 0Zm-1.18 7.8-.01 4.81h.01v-4.8Zm.41 5.57-.02-.02.02.02Zm6.21-8.32a.72.72 0 0 0-.39-.03l-4.43.62 4.44-.62a.8.8 0 0 1 .38.03Z" clip-rule="evenodd" />
			<path fill="url(#a)" fill-opacity=".5" fill-rule="evenodd" d="M12.16 10.65h-.05l.05.03v-.03Zm6.61.42a.72.72 0 0 0-.39-.04l-4.43.62V10.4l2.61-.36c.18-.02.34 0 .48.08l1.77.96a.8.8 0 0 0-.04-.01ZM7.7 12.54c-.49.06-.88.56-.88 1.08l.01.16c.05.27.2.48.4.59l-1.82-1a.81.81 0 0 1-.41-.74c0-.53.4-1.02.89-1.08l1.82.99H7.7Zm4.46-.64-4.46.63-1.82-1 4.45-.62 1.83.99Z" clip-rule="evenodd" />
			<path fill="var(--icon-color)" fill-rule="evenodd" d="m13.33 6.01.19.07-1.8-.98-.02-.01a.74.74 0 0 0-.47-.08l1.83 1c.1-.02.18-.01.27 0Zm-1.17 5.89-1.83-1 .01-4.8 1.69.91-1.68-.91c0-.53.39-1.01.89-1.08l1.82.99c-.5.07-.89.56-.89 1.08l-.01 4.7m-1.83 2.29-.01 3.56h.01c0 .34.16.6.41.75l1.8.97.02.02-.02-.02a.82.82 0 0 1-.39-.73h-.01l.01-4.81-1.82.26Z" clip-rule="evenodd" />
			<path fill="url(#b)" fill-opacity=".5" fill-rule="evenodd" d="m13.33 6.01.19.07-1.8-.98-.02-.01a.74.74 0 0 0-.47-.08l1.83 1c.1-.02.18-.01.27 0Zm-1.17 5.89-1.83-1 .01-4.8 1.69.91-1.68-.91c0-.53.39-1.01.89-1.08l1.82.99c-.5.07-.89.56-.89 1.08l-.01 4.7m-1.83 2.29-.01 3.56h.01c0 .34.16.6.41.75l1.8.97.02.02-.02-.02a.82.82 0 0 1-.39-.73h-.01l.01-4.81-1.82.26Z" clip-rule="evenodd" />
			<defs>
				<linearGradient id="a" x1="7.5" x2="6.36" y1="8.5" y2="14.37" gradientUnits="userSpaceOnUse">
					<stop stop-opacity="0" stop-color="var(--icon-color-contrast)" />
					<stop offset=".52" stop-color="var(--icon-color-contrast)" />
				</linearGradient>
				<linearGradient id="b" x1="11.7" x2="11.5" y1="5.02" y2="16.5" gradientUnits="userSpaceOnUse">
					<stop stop-opacity="0" stop-color="var(--icon-color-contrast)" />
					<stop offset=".52" stop-color="var(--icon-color-contrast)" />
				</linearGradient>
			</defs>
		</svg>
	</m-theme>
</template>

<script>
import { defaultTheme, MTheme } from '@square/maker/components/Theme';
import { MIcon } from '@square/maker/components/Icon';
import { MChoice, MChoiceOption } from '@square/maker/components/Choice';
import { getContrast } from '@square/maker/utils/get-contrast';
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
			iconColor: '#000000',
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
		styles() {
			return {
				'--icon-color': this.iconColor,
				'--icon-color-contrast': getContrast(this.iconColor),
			};
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

.icon.large {
	width: 48px;
	height: 48px;
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
