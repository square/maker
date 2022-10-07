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
			@keypress="sanitizePinInput"
			@keyup="updateCaretPosition"
			@input="onInputPin"
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
const INPUT_FILTER_REGEX = /\D/gi;
const INPUT_KEY_REGEX = /\d/;

const DEFAULT_INPUT_SIZE = 6;
const PIN_CELL_WIDTH = 50;
const PIN_CELL_SPACING = 8;
const ONE = 1;
const COMPLETE_TIMEOUT_MS = 500;

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
			completeTimeout: undefined,
			isShaking: false,
		};
	},

	computed: {
		computedStyles() {
			const pinInputWidth = (this.pinLength * PIN_CELL_WIDTH)
				+ ((this.pinLength - ONE) * PIN_CELL_SPACING);

			return {
				'--pin-input-width': `${pinInputWidth}px`,
			};
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

	methods: {
		setFocus(focusState) {
			this.isFocused = focusState;
			this.updateCaretPosition();
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

		onPastePin(event) {
			event.preventDefault();
			const pastedValue = (event.clipboardData || window.clipboardData).getData('text');
			this.handlePinChange(pastedValue);
		},

		handlePinChange(input) {
			this.updateCaretPosition();
			clearTimeout(this.completeTimeout);
			if (!input) {
				this.inputValue = input ?? '';
				return;
			}

			this.inputValue = this.sanitizePinValue(input);

			if (this.inputValue.length === this.pinLength) {
				this.handleComplete(this.inputValue);
			}
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

		handleComplete(pin) {
			this.completeTimeout = setTimeout(() => this.$emit('complete', pin), COMPLETE_TIMEOUT_MS);
		},

		/**
		 * shakes and clears pininput
		 * @public
		 */
		shakeAndClearInputs() {
			this.inputValue = '';
			this.isShaking = true;
			const TIMEOUT_LENGTH_MS = 1000;
			setTimeout(() => {
				this.isShaking = false;
				this.$refs.input.focus();
			}, TIMEOUT_LENGTH_MS);
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
	padding-left: 20px;
	color: transparent;
	caret-color: $maker-color-body;
	font-size: 20px;
	font-family: monospace;
	letter-spacing: 2.3em;
	background: transparent;
	border: 0;
	outline: 0;
}

.PinInputCells {
	position: relative;
	z-index: 0;
	display: flex;
	gap: 8px;
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
		border-color: rgba(206, 50, 23, 1);
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
