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
			:disabled="disabled || isShaking"
			@keydown="handleKeyDown"
			@keypress="sanitizePinInput"
			@input="onInputPin"
			@keyup="updateCaretPosition"
			@click="updateCaretPosition"
			@focus="setFocus(true)"
			@blur="setFocus(false)"
		>
		<div
			:class="{
				[$s.PinInputCells]: true,
				[$s.isShaking]: isShaking,
			}"
		>
			<div
				v-for="pinPosition in pinLength"
				:key="pinPosition"
				:class="{
					[$s.PinInputCell]: true,
					[$s.isFocused]: isCellFocused(pinPosition - 1),
					[$s.fill]: variant === 'fill',
					[$s.error]: invalid,
				}"
			>
				{{ inputValue[pinPosition - 1] }}
			</div>
		</div>
	</div>
</template>

<script>
const INPUT_FILTER_REGEX = /\D/gimu;
const INPUT_KEY_REGEX = /\d/;

const DEFAULT_INPUT_SIZE = 6;
const PIN_CELL_WIDTH = 50;
const PIN_CELL_SPACING = 8;
const ONE = 1;
const SHAKE_TIMEOUT = 1000;

export default {
	props: {
		/**
		 * Length of pin
		 */
		pinLength: {
			type: Number,
			default: DEFAULT_INPUT_SIZE,
			validator: (value) => value > 0,
		},

		/**
		 * Input variant
		 */
		variant: {
			type: String,
			default: 'fill',
			validator: (variant) => ['fill', 'outline'].includes(variant),
		},

		/**
		 * Toggles input invalid state
		 */
		invalid: {
			type: Boolean,
			default: false,
		},

		/**
		 * Disable the inputs
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			inputValue: '',
			isFocused: false,
			caretPosition: undefined,
			shakeTimeout: undefined,
			isShaking: false,
		};
	},

	computed: {
		computedStyles() {
			const pinInputWidth = (this.pinLength * PIN_CELL_WIDTH)
				+ ((this.pinLength - ONE) * PIN_CELL_SPACING);
			const caretColor = this.shouldShowCaret
				? 'var(--maker-color-body, #000000)'
				: 'transparent';

			return {
				'--pin-input-width': `${pinInputWidth}px`,
				'--pin-cell-caret-color': caretColor,
			};
		},

		shouldShowCaret() {
			if (!this.isFocused) {
				return false;
			}

			return this.caretPosition === this.inputValue.length && this.caretPosition !== this.pinLength;
		},
	},

	watch: {
		// Refocus on first input when re-enabled
		disabled(isDisabled) {
			if (!isDisabled) {
				this.$refs.input.focus();
			}
		},
	},

	beforeDestroy() {
		clearTimeout(this.shakeTimeout);
	},

	methods: {
		setFocus(focusState) {
			this.isFocused = focusState;
			if (this.isFocused) {
				this.$nextTick(() => this.setCaretPositionToEnd());
			}
		},

		isCellFocused(pinIndex) {
			const isCurrentIndex = this.caretPosition === pinIndex;
			const isLastIndex = this.pinLength === pinIndex + ONE;
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

		handlePinChange(input) {
			this.updateCaretPosition();
			if (!input) {
				this.inputValue = input ?? '';
				return;
			}

			this.inputValue = this.sanitizePinValue(input);

			if (this.inputValue.length === this.pinLength) {
				this.handleComplete(this.inputValue);
			}
		},

		handleKeyDown(event) {
			if (event.key === 'Backspace') {
				this.handleBackspace(event);
			}
		},

		sanitizePinValue(input = '') {
			return input
				.replace(INPUT_FILTER_REGEX, '')
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

		setCaretPositionToEnd() {
			this.caretPosition = this.inputValue.length;
			this.$refs.input.selectionStart = this.caretPosition;
			this.$refs.input.selectionEnd = this.caretPosition;
		},

		handleComplete(pin) {
			this.$emit('complete', pin);
		},

		handleBackspace(event) {
			if (this.caretPosition < this.inputValue.length) {
				event.preventDefault();
				event.stopPropagation();

				const position = this.caretPosition;
				this.inputValue = this.inputValue.slice(0, position)
					+ this.inputValue.slice(position + ONE);

				this.$nextTick(() => {
					this.$refs.input.selectionStart = position;
					this.$refs.input.selectionEnd = position;
				});
			}
		},

		/**
		 * shakes and clears pininput
		 * @public
		 */
		shakeAndClearInputs() {
			this.inputValue = '';
			this.isShaking = true;
			clearTimeout(this.shakeTimeout);
			this.shakeTimeout = setTimeout(() => {
				this.isShaking = false;
				this.$refs.input.focus();
			}, SHAKE_TIMEOUT);
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
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	padding-left: 25px;
	color: transparent;
	caret-color: var(--pin-cell-caret-color);
	font-size: 20px;
	font-family: monospace;
	letter-spacing: 2.3em;
	background: transparent;
	border: 0;
	outline: 0;

	/* Prevents Safari styles */
	&:-webkit-autofill-and-obscured,
	&:-webkit-autofill-strong-password,
	&:-webkit-autofill-strong-password-viewable,
	&:-webkit-autofill {
		color: transparent !important;
		box-shadow: 0 0 0 1000px $maker-color-background inset;
	}
}

.PinInputCells {
	position: relative;
	display: flex;
	gap: 8px;
	pointer-events: none;
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

	&.error {
		border-color: $maker-color-error-fill;
	}
}

.isShaking {
	animation: invalidpinshake 500ms linear;
}

@keyframes invalidpinshake {
	8%,
	41% {
		transform: translateX(-16px);
	}

	25%,
	58% {
		transform: translateX(16px);
	}

	75% {
		transform: translateX(-8px);
	}

	92% {
		transform: translateX(8px);
	}

	0%,
	100% {
		transform: translateX(0);
	}
}
</style>
