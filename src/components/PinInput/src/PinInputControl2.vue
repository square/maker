<template>
	<div
		:class="$s.PinInputContainer"
		:style="computedStyles"
	>
		<input
			ref="input"
			:class="$s.PinInput"
			:maxlength="pinLength"
			:value="inputValue"
			type="text"
			inputmode="numeric"
			pattern="[0-9]*"
			@keypress="sanitizePinInput"
			@keyup="updateCaretPosition"
			@input="onInputPin"
			@focus="setFocus(true)"
			@blur="setFocus(false)"
		>

		<div :class="$s.PinInputCells">
			<div
				v-for="pinPosition in pinLength"
				:key="pinPosition"
				:class="{
					[$s.PinInputCell]: true,
					[$s.isFocused]: isCellFocused(pinPosition - 1),
					[$s.fill]: variant === 'fill',
				}"
			>
				{{ inputValue[pinPosition - 1] }}
			</div>
		</div>
	</div>
</template>

<script>
const INPUT_FILTER_REGEX = /\D/gi;
const INPUT_KEY_REGEX = /\d/;
const DEFAULT_INPUT_SIZE = 6;

export default {
	props: {
		/**
		 * Length of pin
		 */
		pinLength: {
			type: Number,
			default: DEFAULT_INPUT_SIZE,
			validator: (value) => value > 0 && value <= DEFAULT_INPUT_SIZE,
		},

		/**
		 * Input variant
		 */
		variant: {
			type: String,
			default: 'fill',
			validator: (variant) => ['fill', 'outline'].includes(variant),
		},
	},

	data() {
		return {
			inputValue: '',
			isFocused: false,
			caretPosition: undefined,
		};
	},

	computed: {
		computedStyles() {
			const pinInputWidth = (this.pinLength * 50) + ((this.pinLength - 1) * 8);

			return {
				'--pin-input-width': `${pinInputWidth}px`,
			};
		},
	},

	methods: {
		setFocus(focusState) {
			this.isFocused = focusState;
			this.updateCaretPosition();
		},

		isCellFocused(pinIndex) {
			const isCurrentIndex = this.caretPosition === pinIndex;
			const isLastIndex = this.pinLength === pinIndex + 1;
			const isActiveIndex = isLastIndex
				? isCurrentIndex || this.caretPosition === this.pinLength
				: isCurrentIndex;

			if (!this.isFocused) {
				return false;
			}

			return this.isFocused && isActiveIndex;
		},

		onInputPin(event) {
			const input = event?.target?.value;
			this.handlePinChange(input);
		},

		onPastePin(event) {
			event.preventDefault();
			const pastedValue = (event.clipboardData || window.clipboardData).getData('text');
			this.handlePinChange(pastedValue);
		},

		handlePinChange(input) {
			this.updateCaretPosition();
			if (!input) {
				this.inputValue = input ?? '';
				return;
			}

			this.inputValue = this.sanitizePinValue(input);

			// Handle complete PIN
			// Handle PIN error
		},

		sanitizePinValue(input = '') {
			return input
				.replaceAll(INPUT_FILTER_REGEX, '')
				.slice(0, this.pinLength);
		},

		sanitizePinInput(event) {
			if (!event.key?.match(INPUT_KEY_REGEX)) {
				event.preventDefault();
				event.stopPropagation();
			}
		},

		updateCaretPosition() {
			this.caretPosition = this.isFocused
				? this.$refs.input.selectionStart
				: undefined;
		},
	},
};
</script>

<style module="$s">
.PinInputContainer {
	position: relative;
	width: var(--pin-input-width);
}

.PinInput {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1;
	background: transparent;
	border: 0;
	outline: 0;
	letter-spacing: 2.3em;
	padding-left: 20px;
	font-family: monospace;
	font-size: 20px;
	color: transparent;
	caret-color: $maker-color-body;
}

.PinInputCells {
	position: relative;
	display: flex;
	gap: 8px;
	z-index: 0;
}

.PinInputCell {
	display: flex;
	flex: 0 1 auto;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	width: 50px;
	min-width: 0;
	height: 50px;
	padding: 0;
	font-weight: inherit;
	font-size: 16px;
	font-family: inherit;
	text-align: center;
	background: $maker-color-background;
	border: 1px solid $maker-color-neutral-20;
	border-radius: $maker-shape-default-border-radius;
	outline: none;
	cursor: pointer;

	&.isFocused {
		border: 2px solid $maker-color-neutral-80;
	}

	&.fill {
		background: $maker-color-neutral-10;
	}
}
</style>
