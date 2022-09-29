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
			<select
				v-model="textPattern"
			>
				<option>
					paragraph
				</option>
				<option>
					label
				</option>
				<option>
					title
				</option>
				<option>
					headline
				</option>
			</select>
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
						v-model="shape"
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
						v-model="shapeHover"
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
							pattern="fill"
							size="large"
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							pattern="outline"
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
							pattern="fill"
							size="medium"
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							pattern="outline"
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
							pattern="fill"
							size="small"
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							pattern="outline"
							size="small"
						>
							Button
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Expandable
					</th>
					<td>
						<m-button
							v-bind="buttonProps"
							pattern="fill"
							size="expandable"
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							pattern="outline"
							size="expandable"
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
							pattern="fill"
							disabled
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							pattern="outline"
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
							pattern="fill"
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
							pattern="outline"
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
							pattern="fill"
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
							pattern="outline"
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
							pattern="fill"
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
							pattern="outline"
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
							pattern="fill"
							full-width
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							v-bind="buttonProps"
							pattern="outline"
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
	textPattern: 'paragraph',
	color: '#9142ff',
	colorHover: undefined,
	textColor: '#ffffff',
	textColorHover: undefined,
	shape: undefined,
	shapeHover: undefined,
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
			return {
				colors: {
					background: this.bgColor,
					...makerColors(this.bgColor),
				},
				fonts: {
					heading: {
						fontFamily: 'Georgia',
						fontWeight: '600',
					},
					body: {
						fontFamily: 'Verdana',
						fontWeight: '400',
					},
					label: {
						fontFamily: 'Monospace',
						fontWeight: '500',
					},
				},
			};
		},
		buttonProps() {
			const {
				textPattern,
				color,
				colorHover,
				textColor,
				textColorHover,
				shape,
				shapeHover,
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
				textPattern,
				color,
				colorHover,
				textColor,
				textColorHover,
				borderColor,
				borderColorHover,
				boxShadow,
				boxShadowHover,
				...(shape && { shape: `${shape}px` }),
				...(shapeHover && { shapeHover: `${shapeHover}px` }),
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
