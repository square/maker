<template>
	<m-theme
		class="wrapper"
		:theme="theme"
	>
		<div class="controls">
			<label>
				<input
					v-model="bgColor"
					type="color"
				>
				background
			</label>
			<h3>Button settings</h3>
			<p>* - Not applied on outline buttons</p>
			<label>
				<select
					v-model="fontFamily"
				>
					<option>
						Georgia
					</option>
					<option>
						Verdana
					</option>
					<option>
						Monospace
					</option>
				</select>
				Font family
			</label>
			<label>
				<select
					v-model="fontWeight"
				>
					<option>
						normal
					</option>
					<option>
						bold
					</option>
				</select>
				Font weight
			</label>
			<label>
				<input
					v-model="fontSize"
					type="range"
					min="12"
					max="32"
					step="2"
				>
				Font size: {{ fontSize }}
			</label>
			<label>
				<select
					v-model="fontFamilyHover"
				>
					<option>
						Georgia
					</option>
					<option>
						Verdana
					</option>
					<option>
						Monospace
					</option>
				</select>
				Font family hover
			</label>
			<label>
				<select
					v-model="fontWeightHover"
				>
					<option>
						normal
					</option>
					<option>
						bold
					</option>
				</select>
				Font weight hover
			</label>
			<label>
				<input
					v-model="fontSizeHover"
					type="range"
					min="12"
					max="32"
					step="2"
				>
				Font size hover: {{ fontSizeHover }}
			</label>
			<label>
				<input
					v-model="color"
					type="color"
				>
				Color
			</label>
			<label>
				<input
					v-model="colorHover"
					type="color"
				>
				Hover color
			</label>
			<label>
				<input
					v-model="textColor"
					type="color"
				>
				Text color *
			</label>
			<label>
				<input
					v-model="textColorHover"
					type="color"
				>
				Hover text color *
			</label>
			<p><strong>Border</strong></p>
			<div class="choice">
				<label>
					<input
						v-model="borderRadius"
						type="number"
						min="0"
						max="32"
						step="2"
					>
					Radius
				</label>
				<label>
					<input
						v-model="borderWidth"
						type="number"
						min="1"
						max="10"
					>
					Thickness
				</label>
				<label>
					<input
						v-model="borderColor"
						type="color"
					>
					Color *
				</label>
			</div>
			<p><strong>Hover border</strong></p>
			<div class="choice">
				<label>
					<input
						v-model="borderRadiusHover"
						type="number"
						min="0"
						max="32"
						step="2"
					>
					Radius
				</label>
				<label>
					<input
						v-model="borderWidthHover"
						type="number"
						min="1"
						max="10"
					>
					Thickness
				</label>
				<label>
					<input
						v-model="borderColorHover"
						type="color"
					>
					Color *
				</label>
			</div>
			<p><strong>Box shadow</strong></p>
			<div class="choice">
				<label>
					<input
						v-model="boxShadowHorizontal"
						type="number"
						min="0"
						max="20"
					>
					Horizontal
				</label>
				<label>
					<input
						v-model="boxShadowVertical"
						type="number"
						min="0"
						max="20"
					>
					Vertical
				</label>
				<label>
					<input
						v-model="boxShadowBlurRadius"
						type="number"
						min="0"
						max="20"
					>
					Blur
				</label>
				<label>
					<input
						v-model="boxShadowSpreadRadius"
						type="number"
						min="0"
						max="20"
					>
					Spread
				</label>
				<input
					v-model="boxShadowColor"
					type="color"
				>
			</div>
			<p><strong>Hover box shadow</strong></p>
			<div class="choice">
				<label>
					<input
						v-model="boxShadowHorizontalHover"
						type="number"
						min="0"
						max="20"
					>
					Horizontal
				</label>
				<label>
					<input
						v-model="boxShadowVerticalHover"
						type="number"
						min="0"
						max="20"
					>
					Vertical
				</label>
				<label>
					<input
						v-model="boxShadowBlurRadiusHover"
						type="number"
						min="0"
						max="20"
					>
					Blur
				</label>
				<label>
					<input
						v-model="boxShadowSpreadRadiusHover"
						type="number"
						min="0"
						max="20"
					>
					Spread
				</label>
				<input
					v-model="boxShadowColorHover"
					type="color"
				>
			</div>
		</div>
		<table class="ButtonTable">
			<thead>
				<tr>
					<td />
					<th>
						Fill
					</th>
					<th>
						Outline
					</th>
					<th>
						Ghost
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>
						Large
					</th>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="fill"
							size="large"
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="outline"
							size="large"
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="ghost"
							size="large"
						>
							Button
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Medium
					</th>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="fill"
							size="medium"
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="outline"
							size="medium"
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="ghost"
							size="medium"
						>
							Button
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Small
					</th>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="fill"
							size="small"
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="outline"
							size="small"
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="ghost"
							size="small"
						>
							Button
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Disabled
					</th>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="fill"
							disabled
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="outline"
							disabled
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="ghost"
							disabled
						>
							Button
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Info slot
					</th>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="fill"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="outline"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="ghost"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Info slot (stacked)
					</th>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="fill"
							align="stack"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="outline"
							align="stack"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="ghost"
							align="stack"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Info slot (reversed)
					</th>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="fill"
							align="space-between"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="outline"
							align="space-between"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="ghost"
							align="space-between"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Full width
					</th>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="fill"
							full-width
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="outline"
							full-width
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							variant="ghost"
							full-width
						>
							Button
						</m-button>
					</td>
				</tr>
			</tbody>
		</table>
	</m-theme>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MTheme } from '@square/maker/components/Theme';
import makerColors from '@square/maker/utils/maker-colors';

const defaultButtonProps = {
	color: '#9142ff',
	colorHover: undefined,
	fontFamily: 'Verdana',
	fontWeight: 'normal',
	fontSize: undefined,
	fontFamilyHover: 'Monospace',
	fontWeightHover: 'bold',
	fontSizeHover: undefined,
	textColor: '#ffffff',
	textColorHover: undefined,
	borderRadius: undefined,
	borderRadiusHover: undefined,
	borderWidth: undefined,
	borderWidthHover: undefined,
	borderColor: undefined,
	borderColorHover: undefined,
	boxShadowHorizontal: undefined,
	boxShadowHorizontalHover: undefined,
	boxShadowVertical: undefined,
	boxShadowVerticalHover: undefined,
	boxShadowBlurRadius: undefined,
	boxShadowBlurRadiusHover: undefined,
	boxShadowSpreadRadius: undefined,
	boxShadowSpreadRadiusHover: undefined,
	boxShadowColor: undefined,
	boxShadowColorHover: undefined,
};

function boxShadowFormat(horizontal, vertical, blur, spread, color) {
	return blur || spread
		? `${horizontal || 0}px ${vertical || 0}px ${blur || 0}px ${spread || 0}px ${color || '#000000'}`
		: undefined;
}

export default {
	components: {
		MButton,
		MTheme,
	},
	data() {
		return {
			buttonText: 'Button text that is long and may require truncation',
			infoText: 'Information text that is long and may require truncation',
			bgColor: '#ffffff',
			...defaultButtonProps,
		};
	},
	computed: {
		theme() {
			const {
				fontSize,
				fontFamily,
				fontWeight,
				fontSizeHover,
				fontFamilyHover,
				fontWeightHover,
			} = this;
			const buttonTextPattern = {
				...(fontFamily && { fontFamily }),
				...(fontWeight && { fontWeight }),
				...(fontSize && { fontSize: `${fontSize}px` }),
			};
			const buttonTextPatternHover = {
				...(fontFamilyHover && { fontFamily: fontFamilyHover }),
				...(fontWeightHover && { fontWeight: fontWeightHover }),
				...(fontSizeHover && { fontSize: `${fontSizeHover}px` }),
			};
			return {
				colors: {
					background: this.bgColor,
					...makerColors(this.bgColor),
				},
				text: {
					patterns: {
						buttonLabel: buttonTextPattern,
						buttonLabelHover: buttonTextPatternHover,
					},
				},
				button: {
					textPatternHover: 'buttonLabelHover',
				},
			};
		},
		buttonProps() {
			const {
				color,
				colorHover,
				textColor,
				textColorHover,
				borderRadius,
				borderRadiusHover,
				borderWidth,
				borderWidthHover,
				borderColor,
				borderColorHover,
				boxShadowHorizontal,
				boxShadowHorizontalHover,
				boxShadowVertical,
				boxShadowVerticalHover,
				boxShadowBlurRadius,
				boxShadowBlurRadiusHover,
				boxShadowSpreadRadius,
				boxShadowSpreadRadiusHover,
				boxShadowColor,
				boxShadowColorHover,
			} = this;

			const boxShadow = boxShadowFormat(boxShadowHorizontal, boxShadowVertical,
			boxShadowBlurRadius, boxShadowSpreadRadius, boxShadowColor);
			const boxShadowHover = boxShadowFormat(boxShadowHorizontalHover, boxShadowVerticalHover,
			boxShadowBlurRadiusHover, boxShadowSpreadRadiusHover, boxShadowColorHover);

			return {
				color,
				colorHover,
				textColor,
				textColorHover,
				borderColor,
				borderColorHover,
				boxShadow,
				boxShadowHover,
				...(borderRadius && { borderRadius: `${borderRadius}px` }),
				...(borderRadiusHover && { borderRadiusHover: `${borderRadiusHover}px` }),
				...(borderWidth && { borderWidth: `${borderWidth}px` }),
				...(borderWidthHover && { borderWidthHover: `${borderWidthHover}px` }),
			};
		},
	},

};
</script>

<style scoped>
.wrapper {
	display: flex;
	gap: 40px;
	padding: 40px;
}

p,
h3 {
	margin: 8px 0 0;
}

.controls {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.ButtonTable {
	max-width: 100%;
	font-family: -apple-system, 'Helvetica Neue', sans-serif;
	border-collapse: separate;
	border-spacing: 16px;
}

.icon {
	width: 16px;
	height: 16px;
}
</style>
