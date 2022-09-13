<template>
	<div
		:class="{
			[$s.PinInputContainer]: true,
			[$s.shake]: isShaking,
			[$s.disabled]: disabled,
			[$s.error]: Boolean($slots.error),
		}"
	>
		<input
			v-for="(val, i) in pin"
			:key="i"
			:ref="getPinCellRef(i)"
			:value="val"
			:autocomplete="i === 0 ? 'one-time-code' : 'off'"
			:disabled="disabled"
			:maxlength="i === 0 ? pinLength : 1"
			:class="{
				[$s.PinInputCell]: true,
				[$s.filled]: variant === 'fill',
				[$s.error]: invalid,
			}"
			type="text"
			inputmode="numeric"
			pattern="[0-9]*"
			required
			@input="onInputPin($event, i)"
			@paste="onPastePin($event, i)"
			@focus="onFocusPin($event, i)"
			@keydown.delete="onDelete($event, i)"
		>
	</div>
</template>

<script>
import { BASE_TEN } from '@square/maker/utils/constants';

const DEFAULT_INPUT_SIZE = 6;

export default {
	props: {
		/**
		 * Lenth of pin
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
			pin: new Array(this.pinLength).fill(''),
			isShaking: false,
		};
	},

	computed: {
		currentPin() {
			return this.pin.join('');
		},
	},

	watch: {
		// Refocus on first input when re-enabled
		disabled(isDisabled) {
			if (!isDisabled) {
				this.focusOnPinCell(0);
			}
		},
	},

	mounted() {
		this.focusOnPinCell(0);
	},

	methods: {
		findFirstIncompletePinCellIndex() {
			return this.pin.findIndex((value) => value === '');
		},

		getPinCellRef(index) {
			return `pin-cell-${index}`;
		},

		// Focus on verification code cell input at given index.
		focusOnPinCell(index) {
			const cellReference = this.$refs[this.getPinCellRef(index)];
			if (cellReference?.[0]?.focus) {
				cellReference[0].focus();
			}
		},

		onInputPin(event, index) {
			const input = event?.target?.value;
			if (!input) {
				return;
			}
			// Only allow integers in input
			const inputValue = Number.isInteger(Number.parseInt(input, BASE_TEN)) ? input : '';

			// One-time-code autofill is treated as an input, not a paste
			if (this.attemptSplitPinIntoInputs(inputValue, index)) {
				return;
			}

			this.$set(this.pin, index, inputValue);

			const firstIncompleteCellIndex = this.findFirstIncompletePinCellIndex();

			// eslint-disable-next-line no-magic-numbers
			if (firstIncompleteCellIndex === -1) {
				this.handleComplete(this.currentPin);
				return;
			}

			// This allows us to auto jump to the next code cell input as the user types.
			this.focusOnPinCell(firstIncompleteCellIndex);
		},

		attemptSplitPinIntoInputs(value, inputIndex) {
			if (inputIndex === 0
				&& value?.length === this.pinLength
				&& Number.isInteger(Number.parseInt(value, BASE_TEN))
			) {
				this.$set(this, 'pin', value.split(''));

				// Having a timeout here gives the user a chance to see their code before success/failure
				const TIMEOUT_LENGTH_MS = 500;
				setTimeout(() => { this.handleComplete(this.currentPin); }, TIMEOUT_LENGTH_MS);
				return true;
			}
			return false;
		},

		handleComplete(pin) {
			this.$emit('complete', pin);
		},

		onPastePin(event, index) {
			event.preventDefault();
			const pastedValue = (event.clipboardData || window.clipboardData).getData('text');
			this.attemptSplitPinIntoInputs(pastedValue, index);
		},

		onDelete(event, index) {
			// Reset current index, and then focus on previous cell
			this.$set(this.pin, index, '');

			// eslint-disable-next-line no-magic-numbers
			const newIndex = index - 1;
			if (newIndex >= 0) {
				this.focusOnPinCell(newIndex);
			}
		},

		onFocusPin(event, index) {
			event.preventDefault();
			this.$set(this.pin, index, '');
		},

		resetPin() {
			const newArray = (new Array(this.pinLength)).fill('');
			this.$set(this, 'pin', newArray);
		},

		/**
		 * shakes and clears pininput
		 * @public
		 */
		shakeAndClearInputs() {
			this.resetPin();
			this.focusOnPinCell(0);
			this.isShaking = true;
			const TIMEOUT_LENGTH_MS = 1000;
			setTimeout(() => {
				this.isShaking = false;
			}, TIMEOUT_LENGTH_MS);
		},
	},
};
</script>

<style module="$s">
.PinInputContainer {
	display: flex;
	flex-wrap: nowrap;
	gap: 8px;
	align-items: center;
	font-weight: var(--maker-font-label-font-weight, 500);
	font-family: var(--maker-font-label-font-family, inherit);

	&.error {
		padding-bottom: 8px;
	}
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
	color: $maker-color-neutral-90;
	font-weight: inherit;
	font-size: 16px;
	font-family: inherit;
	text-align: center;
	background: $maker-color-background;
	border: 1px solid $maker-color-neutral-20;
	border-radius: $maker-shape-default-border-radius;
	outline: none;
	caret-color: currentColor;
	cursor: pointer;

	&.filled {
		background: $maker-color-neutral-10;
	}

	&.error {
		border-color: rgba(206, 50, 23, 1);
	}

	&.disabled {
		opacity: 0.6;
	}

	&:focus,
	&:valid,
	&:hover {
		border: 2px solid $maker-color-neutral-80;
	}
}

.shake {
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
