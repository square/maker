<template>
	<m-theme
		class="toasts-lab"
		:theme="theme"
	>
		<div class="toast-controls">
			<div class="control-group">
				<b>Actions</b>
				<br>

				<br>
				<b>Open toasts</b>
				<br>
				<button @click="openToast('info')">
					info
				</button>
				<button @click="openToast('success')">
					success
				</button>
				<button @click="openToast('warning')">
					warning
				</button>
				<button @click="openToast('error')">
					error
				</button>
				<button @click="openToast('primary')">
					primary
				</button>
				<button @click="openLiteralToast">
					literal
				</button>
				<br>

				<br>
				<b>Open others</b>
				<br>
				<button @click="openModal">
					modal
				</button>
				<button @click="openDialog">
					dialog
				</button>
				<button @click="openBlade">
					blade
				</button>
				<br>

				<br>
				<b>Close toasts</b>
				<br>
				<button @click="closeAllToasts">
					all
				</button>
				<br>
			</div>

			<div class="control-group">
				<b>Toast customizations</b>
				<br>

				<br>
				<b>Style</b>
				<br>
				<label>
					<input
						v-model="toastTheme"
						type="radio"
						name="toast-theme"
						value="plain"
					>
					plain
				</label>
				<label>
					<input
						v-model="toastTheme"
						type="radio"
						name="toast-theme"
						value="saturated"
					>
					saturated
				</label>
				<br>

				<br>
				<b>Position</b>
				<br>
				<table>
					<tr>
						<td>
							<label>
								<input
									v-model="position"
									type="radio"
									name="position"
									value="top-left"
								>
								top-left
							</label>
						</td>
						<td>
							<label>
								<input
									v-model="position"
									type="radio"
									name="position"
									value="top"
								>
								top
							</label>
						</td>
						<td>
							<label>
								<input
									v-model="position"
									type="radio"
									name="position"
									value="top-right"
								>
								top-right
							</label>
						</td>
					</tr>
					<tr>
						<td>
							<label>
								<input
									v-model="position"
									type="radio"
									name="position"
									value="bottom-left"
								>
								bottom-left
							</label>
						</td>
						<td>
							<label>
								<input
									v-model="position"
									type="radio"
									name="position"
									value="bottom"
								>
								bottom
							</label>
						</td>
						<td>
							<label>
								<input
									v-model="position"
									type="radio"
									name="position"
									value="bottom-right"
								>
								bottom-right
							</label>
						</td>
					</tr>
				</table>

				<br>
				<b>Animate from</b>
				<br>
				<label>
					<input
						v-model="transitionFrom"
						type="radio"
						name="transition-from"
						value="top"
					>
					top
				</label>
				<label>
					<input
						v-model="transitionFrom"
						type="radio"
						name="transition-from"
						value="bottom"
					>
					bottom
				</label>
				<label>
					<input
						v-model="transitionFrom"
						type="radio"
						name="transition-from"
						value="left"
					>
					left
				</label>
				<label>
					<input
						v-model="transitionFrom"
						type="radio"
						name="transition-from"
						value="right"
					>
					right
				</label>
				<br>

				<br>
				<b>Persist duration</b>
				<br>
				<label>
					<input
						v-model="duration"
						type="range"
						step="1"
						min="1"
						max="6"
					>
					{{ durationText }}
				</label>
				<br>

				<br>
				<b>Content length</b>
				<br>
				<label>
					<input
						v-model="length"
						type="radio"
						name="length"
						value="short"
					>
					short
				</label>
				<label>
					<input
						v-model="length"
						type="radio"
						name="length"
						value="medium"
					>
					medium
				</label>
				<label>
					<input
						v-model="length"
						type="radio"
						name="length"
						value="long"
					>
					long
				</label>
				<br>

				<br>
				<b>Width</b>
				<br>
				<label>
					<input
						v-model="maxWidth"
						type="range"
						step="100"
						min="400"
						max="700"
					>
					{{ maxWidthText }}
				</label>
				<br>

				<br>
				<b>Progress bar</b>
				<br>
				<label>
					<input
						v-model="progress"
						type="range"
						step="1"
						min="-1"
						max="100"
					>
					{{ progress === '-1'? 'none' : progress+'%' }}
				</label>
				<br>
			</div>

			<div class="control-group">
				<b>Site styles</b>
				<br>

				<br>
				<b>Primary color</b>
				<br>
				<input
					v-model="primaryColor"
					type="color"
				>
				{{ primaryColor }}
				<br>

				<br>
				<b>Background color</b>
				<br>
				<input
					v-model="bgColor"
					type="color"
				>
				{{ bgColor }}
				<br>

				<br>
				<b>Icons</b>
				<br>
				<label>
					<input
						v-model="iconStyle"
						type="radio"
						name="icon-style"
						value="filled"
					>
					filled
				</label>
				<label>
					<input
						v-model="iconStyle"
						type="radio"
						name="icon-style"
						value="outlined"
					>
					outlined
				</label>
				<br>
			</div>
		</div>

		<m-blade-layer />
		<m-modal-layer />
		<m-dialog-layer />
		<advanced-toast-layer
			:position="position"
			:transition-from="transitionFrom"
		/>
	</m-theme>
</template>

<script>
/* eslint-disable no-console,implicit-arrow-linebreak,prefer-template,prefer-destructuring */
import { MTheme } from '@square/maker/components/Theme';
import makerColors from '@square/maker/utils/maker-colors';
import { MToast, MBread } from '@square/maker/components/Toast';
import { MModalLayer } from '@square/maker/components/Modal';
import { MDialogLayer } from '@square/maker/components/Dialog';
import { MBladeLayer } from '@square/maker/components/Blade';

import AlertTriangleFilled from '@square/maker-icons/AlertTriangleFilled';
import AlertCircleFilled from '@square/maker-icons/AlertCircleFilled';
import CheckCircleFilled from '@square/maker-icons/CheckCircleFilled';
import InfoFilled from '@square/maker-icons/InfoFilled';
import AlertTriangle from '@square/maker-icons/AlertTriangle';
import AlertCircle from '@square/maker-icons/AlertCircle';
import CheckCircle from '@square/maker-icons/CheckCircle';
import Info from '@square/maker-icons/Info';

import AdvancedToastLayer from './AdvancedToastLayer.vue';
import ActionBarBlade from '../../components/ActionBarBlade.vue';
import ActionBarDialog from '../../components/ActionBarDialog.vue';
import ActionBarModal from '../../components/ActionBarModal.vue';

const filledIcons = {
	critical: AlertCircleFilled,
	warning: AlertTriangleFilled,
	success: CheckCircleFilled,
	info: InfoFilled,
};

const outlineIcons = {
	critical: AlertCircle,
	warning: AlertTriangle,
	success: CheckCircle,
	info: Info,
};

export default {
	components: {
		AdvancedToastLayer,
		MTheme,
		MModalLayer,
		MDialogLayer,
		MBladeLayer,
	},

	mixins: [
		AdvancedToastLayer.apiMixin,
		MModalLayer.apiMixin,
		MDialogLayer.apiMixin,
		MBladeLayer.apiMixin,
	],

	data() {
		return {
			transitionFrom: 'bottom',
			position: 'bottom',
			toastTheme: 'plain',
			length: 'medium',
			maxWidth: '600',
			primaryColor: '#006aff',
			bgColor: '#ffffff',
			duration: '5',
			progress: '-1',
			iconStyle: 'filled',
		};
	},

	computed: {
		theme() {
			const colors = {
				primary: this.primaryColor,
				background: this.bgColor,
				...makerColors(this.bgColor, this.primaryColor),
			};
			const icons = this.iconStyle === 'filled' ? filledIcons : outlineIcons;
			const toast = {
				patterns: {
					primary: {
						iconName: 'info',
						accentColor: '@colors.contextualPrimary.fill',
					},
					primarySaturated: {
						iconName: 'info',
						accentColor: '@colors.contextualPrimary.onFill',
						color: '@colors.contextualPrimary.onFill',
						bgColor: '@colors.contextualPrimary.fill',
					},
					infoSaturated: {
						iconName: 'info',
						bgColor: '@colors["neutral-100"]',
						color: '@colors["neutral-0"]',
						accentColor: '@colors["neutral-0"]',
					},
					successSaturated: {
						iconName: 'success',
						accentColor: '@colors.success.onFill',
						color: '@colors.success.onFill',
						bgColor: '@colors.success.fill',
					},
					warningSaturated: {
						iconName: 'warning',
						accentColor: '@colors.warning.onFill',
						color: '@colors.warning.onFill',
						bgColor: '@colors.warning.fill',
					},
					errorSaturated: {
						iconName: 'critical',
						accentColor: '@colors.critical.onFill',
						color: '@colors.critical.onFill',
						bgColor: '@colors.critical.fill',
					},
				},
			};
			return {
				colors,
				icons,
				toast,
			};
		},
		primaryText() {
			if (this.length === 'short') {
				return 'Something branded happened.';
			}
			if (this.length === 'medium') {
				return 'I\'m a primary toast, whatever that means.';
			}
			return 'I\'m a primary toast, what does that mean? Something branded happened? Okay. Something very on brand happened.';
		},
		infoText() {
			if (this.length === 'short') {
				return 'Something happened.';
			}
			if (this.length === 'medium') {
				return 'Hello. Something happened.';
			}
			return 'Hello. A lot of things happened. So many things. Some of them are still happening. More will happen in the future.';
		},
		successText() {
			if (this.length === 'short') {
				return 'Something happened!';
			}
			if (this.length === 'medium') {
				return 'Success! The thing happened!';
			}
			return 'Success! So many things happened, and they were all excellent and brought much joy all across the land hooray!';
		},
		warningText() {
			if (this.length === 'short') {
				return 'Something barely happened.';
			}
			if (this.length === 'medium') {
				return 'Warning. Something barely happened.';
			}
			return 'Warning. A lot of things happened, and all of them were kinda off. You should be concerned, but only slightly.';
		},
		errorText() {
			if (this.length === 'short') {
				return 'Something did NOT happen!';
			}
			if (this.length === 'medium') {
				return 'Error! Something did NOT happen!';
			}
			return 'Error! Nothing happened! Literally none of the things you wanted to happen actually happened. It all broke. Oops.';
		},
		durationText() {
			if (this.duration === '6') {
				return 'forever';
			}
			return `${this.duration}s`;
		},
		maxWidthText() {
			if (this.maxWidth === '700') {
				return 'full-width';
			}
			return `${this.maxWidth}px`;
		},
	},

	watch: {
		position(newValue) {
			if (newValue === 'bottom') {
				this.transitionFrom = 'bottom';
			} else if (newValue === 'top') {
				this.transitionFrom = 'top';
			} else if (newValue.endsWith('left')) {
				this.transitionFrom = 'left';
			} else { // ends with right
				this.transitionFrom = 'right';
			}
		},
	},

	methods: {
		openModal() {
			this.modalApi.open(() => <ActionBarModal openToast={this.openToast} />);
		},
		openDialog() {
			this.dialogApi.open(() => <ActionBarDialog openToast={this.openToast} />);
		},
		openBlade() {
			this.bladeApi.open(() => <ActionBarBlade openToast={this.openToast} />);
		},
		openLiteralToast() {
			const SECONDS_TO_MS_MULTIPLIER = 1000;
			const selectedDismissAfter = Number.parseInt(this.duration, 10) * SECONDS_TO_MS_MULTIPLIER;
			const maxLiteralDismissAfter = 4000;
			const literalDismissAfter = Math.min(maxLiteralDismissAfter, selectedDismissAfter);
			this.toastApi.open(() =>
				<MBread dismissAfter={literalDismissAfter} style={{ background: 'transparent', boxShadow: 'none' }}>
					<svg xmlns={'http://www.w3.org/2000/svg'} width={'100px'} height={'100px'} viewBox={'0 0 486.4 486.4'}><path fill={'#ad6b1a'} d={'M451.2 202.8c24-23.2 35.2-53.6 35.2-87.2 0-74.4-61.6-96.8-139.2-96.8-41.6 0-78.4 6.4-104 24-25.6-17.6-63.2-24-104.8-24C60.8 19.6 0 41.2 0 115.6c0 33.6 11.2 64 35.2 87.2v190.4c0 48.8-25.6 89.6 23.2 89.6h370.4c48.8 0 23.2-40.8 23.2-89.6V202.8h-.8z'}/><path fill={'#e5a641'} d={'M451.2 187.6c24-23.2 35.2-53.6 35.2-87.2 0-74.4-61.6-96.8-139.2-96.8-41.6 0-78.4 6.4-104 24-25.6-17.6-63.2-24-104.8-24C60.8 4.4 0 26 0 100.4c0 33.6 11.2 64 35.2 87.2V378c0 48.8-25.6 88.8 23.2 88.8h370.4c48.8 0 23.2-40 23.2-88.8V187.6h-.8z'}/><path fill={'#c47e22'} d={'M428 466.8c48.8 0 23.2-40 23.2-88.8V187.6c24-23.2 35.2-53.6 35.2-87.2 0-74.4-61.6-96.8-139.2-96.8-41.6 0-78.4 6.4-104 24-25.6-17.6-64-24-105.6-24'}/><path fill={'#f2e5a2'} d={'M419.2 194c16-19.2 25.6-44 25.6-71.2 0-60.8-52-78.4-115.2-78.4-33.6 0-64.8 5.6-85.6 19.2-20.8-14.4-51.2-19.2-85.6-19.2-63.2 0-116.8 17.6-116.8 78.4 0 27.2 9.6 52 25.6 71.2v155.2c0 40-14.4 85.6 24.8 85.6h301.6c40 0 24.8-46.4 24.8-85.6V194h.8z'}/><g fill={'#e2ce8d'}><path d={'M394.4 434.8c40 0 24.8-46.4 24.8-85.6V194c16-19.2 25.6-44 25.6-71.2 0-60.8-52-78.4-115.2-78.4-33.6 0-64.8 5.6-85.6 19.2-20.8-14.4-50.4-19.2-84.8-19.2'}/><circle cx={'147.2'} cy={'160.4'} r={'20'}/><circle cx={'248'} cy={'380.4'} r={'20'}/></g><circle cx={'379.2'} cy={'123.6'} r={'20'} fill={'#f2e5a2'}/><g fill={'#e2ce8d'}><circle cx={'139.2'} cy={'335.6'} r={'12.8'}/><circle cx={'123.2'} cy={'235.6'} r={'10.4'}/><circle cx={'196'} cy={'286'} r={'10.4'}/></g><circle cx={'323.2'} cy={'230.8'} r={'10.4'} fill={'#f2e5a2'}/><g fill={'#e2ce8d'}><circle cx={'103.2'} cy={'107.6'} r={'8'}/><circle cx={'188'} cy={'210'} r={'8'}/></g><circle cx={'304.8'} cy={'138'} r={'8'} fill={'#f2e5a2'}/><circle cx={'257.6'} cy={'279.6'} r={'4.8'} fill={'#e2ce8d'}/><circle cx={'367.2'} cy={'274'} r={'4.8'} fill={'#f2e5a2'}/>
					</svg>
				</MBread>);
		},
		openToast(pattern = 'info', options) {
			options = options || { actionbarOffset: false };
			const text = this.getText(pattern);
			let maxWidth = `${this.maxWidth}px`;
			if (maxWidth === '700px') {
				maxWidth = '100%';
			}
			const style = { maxWidth };
			const persistent = this.duration === '6';
			const SECONDS_TO_MS_MULTIPLIER = 1000;
			const dismissAfter = Number.parseInt(this.duration, 10) * SECONDS_TO_MS_MULTIPLIER;
			const actions = this.getActions(this.length);
			if (this.toastTheme === 'saturated') {
				pattern += 'Saturated';
			}
			let hideIcon = false;
			if (this.length === 'short') {
				hideIcon = true;
			}
			this.toastApi.open(() => <MToast
				pattern={pattern}
				text={text}
				actions={actions}
				style={style}
				persistent={persistent}
				dismissAfter={dismissAfter}
				hideIcon={hideIcon}
				progress={this.progress === '-1' ? undefined : Number.parseInt(this.progress, 10)}
			/>, options);
		},
		closeAllToasts() {
			this.toastApi.closeAll();
		},
		getText(pattern = 'info') {
			let text = '';
			if (pattern === 'info') {
				text += this.infoText;
			} else if (pattern === 'success') {
				text += this.successText;
			} else if (pattern === 'warning') {
				text += this.warningText;
			} else if (pattern === 'error') {
				text += this.errorText;
			} else if (pattern === 'primary') {
				text += this.primaryText;
			} else {
				text += `unknown pattern: ${pattern}`;
			}
			return text;
		},
		getActions(length = 'medium') {
			if (length === 'short') {
				return [];
			}
			if (length === 'medium') {
				return [
					{
						text: 'Okay',
						click: () => console.log('okay clicked'),
					},
				];
			}
			// long length
			return [
				{
					text: 'Undo',
					click: () => console.log('undo clicked'),
				},
				{
					text: 'Redo',
					click: () => console.log('redo clicked'),
				},
			];
		},
	},
};
</script>

<style scoped>
.toasts-lab {
	box-sizing: border-box;
	min-height: 100vh;
	padding: 16px;
	font-family:
		-apple-system,
		"system-ui",
		"Segoe UI",
		Helvetica,
		Arial,
		sans-serif,
		"Apple Color Emoji",
		"Segoe UI Emoji";
}

.toast-controls {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
	gap: 8px;
}

.control-group {
	padding: 8px;
	border: 2px solid var(--maker-color-neutral-20);
	border-radius: 4px;
}

input,
label,
button {
	cursor: pointer;
}

input[type="range"] {
	cursor: grab;
}

input[type="progress"]:active {
	cursor: grabbing;
}
</style>
