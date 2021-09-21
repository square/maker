<template>
	<div
		:class="$s.Surface"
		:style="styles"
	>
		<div
			:class="$s.Scale"
		>
			<h2>Color modes</h2>
			<p>Creating a consistent UI experience against any background color</p>
			<h3>Select a color</h3>
			<input
				v-model="backgroundColor"
				type="color"
			>
			<h3>Generated contrast colors</h3>
			<div>
				<span
					v-for="(color, index) in colors"
					:key="index"
					:style="{ backgroundColor : color }"
				/>
			</div>
			<p
				v-for="(color, key, index) in colors"
				:key="index"
			>
				{{ key }} : {{ color }}
			</p>
		</div>
		<div>
			<h3>Current UI</h3>
			<div
				:class="$s.Preview"
				:style="{ color : contrastColor }"
			>
				<div>
					<m-heading
						:size="0"
					>
						Enter delivery address
					</m-heading>
					<m-text :size="-1">
						<check-circle :class="$s.Icon" /> Pickup until 10:00 pm
					</m-text>
					<m-text :size="-1">
						<check-circle :class="$s.Icon" /> Estimated prep time: 15 minutes
					</m-text>
					<m-notice
						type="info"
						variant="block"
					>
						Switching to shipping will change the scheduled time you selected
					</m-notice>
				</div>
				<m-divider />
				<div>
					<m-input
						placeholder="Delivery address"
						style="margin-bottom: 16px;"
					/>
					<m-input
						placeholder="Apt, floor, Suite, etc. (Optional)"
					/>
				</div>
				<m-divider />
				<div>
					<m-button
						full-width
						:color="contrastColor"
					>
						Button
					</m-button>
				</div>
			</div>
		</div>
		<div>
			<h3>Proposed UI</h3>
			<div
				:class="$s.Preview"
			>
				<div>
					<m-heading
						:class="$s.Heading"
						:size="0"
					>
						Enter delivery address
					</m-heading>
					<m-text
						:class="$s.Paragraph"
						:size="-1"
					>
						<check-circle :class="$s.Icon" /> Pickup until 10:00 pm
					</m-text>
					<m-text
						:class="$s.Paragraph"
						:size="-1"
					>
						<check-circle :class="$s.Icon" /> Estimated prep time: 15 minutes
					</m-text>
					<m-notice
						:class="$s.Notice"
						type="info"
						variant="block"
					>
						Switching to shipping will change the scheduled time you selected
					</m-notice>
				</div>
				<m-divider :class="$s.Divider" />
				<div>
					<m-input
						:class="$s.Input"
						placeholder="Delivery address"
					/>
					<m-input
						:class="$s.Input"
						placeholder="Apt, floor, Suite, etc. (Optional)"
					/>
				</div>
				<m-divider :class="$s.Divider" />
				<div>
					<m-button
						full-width
						:color="contrastColor"
					>
						Button
					</m-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
/* eslint-disable no-magic-numbers */
import chroma from 'chroma-js';
import { generateContrastColors } from '@adobe/leonardo-contrast-colors';

import { MButton } from '@square/maker/components/Button';
import { MHeading } from '@square/maker/components/Heading';
import { MInput } from '@square/maker/components/Input';
import { MText } from '@square/maker/components/Text';
import { MDivider } from '@square/maker/components/Divider';
import CheckCircle from '@square/maker-icons/CheckCircle';
import { MNotice } from '@square/maker/components/Notice';

const RATIOS = {
	light: [1.1, 1.2, 1.5, 1.9, 2.5, 3.5, 4.5, 6, 12.8],
	dark: [1.2, 1.5, 1.9, 2.5, 3.5, 4.5, 5.5, 7, 14],
};

const IS_LIGHT_THRESHOLD = 0.32;

export default {
	components: {
		MButton,
		MHeading,
		MInput,
		MText,
		MDivider,
		CheckCircle,
		MNotice,
	},

	data() {
		return {
			backgroundColor: '#ffffff',
		};
	},

	computed: {
		colors() {
			const { backgroundColor } = this;
			const isLight = chroma(backgroundColor).luminance() > IS_LIGHT_THRESHOLD;
			const mode = isLight ? 'light' : 'dark';

			const colors = generateContrastColors({
				colorKeys: [backgroundColor],
				base: backgroundColor,
				ratios: RATIOS[mode],
				colorspace: 'CAM02',
			});

			const variables = {};
			let level = 100;
			colors.forEach((color) => {
				variables[`--color-${level}`] = color;
				level += 100;
			});

			return variables;
		},

		styles() {
			const { backgroundColor, colors } = this;
			return {
				backgroundColor,
				...colors,
			};
		},

		contrastColor() {
			return chroma(this.backgroundColor).luminance() > IS_LIGHT_THRESHOLD
				? '#000000' : '#ffffff';
		},
	},
};
</script>

<style module="$s">
.Surface {
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	width: 100%;
	max-width: 1400px;
	height: 100vh;
	margin: auto;
	padding: 25px 50px;
	color: var(--color-900);
	font-family: Arial, Helvetica, sans-serif;

	& > div {
		width: 30%;
	}
}

.Scale {
	& > * {
		margin-bottom: 16px;
	}

	& span {
		display: inline-block;
		width: 40px;
		height: 32px;
	}

	& p {
		margin: 4px auto;
	}
}

.Preview {
	border: 1px solid var(--color-300);

	& > div {
		padding: 24px 36px;
	}
}

.Icon {
	width: 16px;
	margin-right: 8px;
	vertical-align: middle;
}

.Heading {
	color: var(--color-900);
}

.Paragraph {
	color: var(--color-800);
}

.Divider {
	background-color: var(--color-300) !important;
}

.Notice {
	color: var(--color-800);
	background-color: var(--color-100);

	& svg {
		fill: var(--color-800);
		stroke: var(--color-100);
	}
}

.Input {
	&:first-child {
		margin-bottom: 16px;
	}

	& > div {
		color: var(--color-800);
		background-color: var(--color-100);

		&:hover,
		&:focus {
			border-color: var(--color-300) !important;
		}

		& input::placeholder {
			color: var(--color-800) !important;
		}
	}
}
</style>
