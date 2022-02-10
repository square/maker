<template>
	<div>
		<div
			:style="{ width: containerWidth }"
			:class="{
				[$s.PinInputContainer]: true,
				[$s.shake]: isShaking,
				[$s.disabled]: disabled,
			}"
		>
			<div
				v-for="n in pinLength"
				:key="n"
				:class="$s.CodeInputWrapper"
			>
				<input
					:ref="getCodeCellRef(n - 1)"
					:value="code[n - 1]"
					:autocomplete="n === 1 ? 'one-time-code' : 'off'"
					:disabled="disabled"
					:class="{
						[$s.CodeInput]: true,
						[$s.filled]: variant === 'fill',
						[$s.error]: $slots.error,
					}"
					type="text"
					maxlength="1"
					inputmode="numeric"
					pattern="[0-9]*"
					required
					@input="onInputCode($event, n - 1)"
					@paste="onPasteCode($event, n - 1)"
					@focus="onFocusCode($event, n - 1)"
					@keydown.delete="onDelete($event, n - 1)"
				>
			</div>
		</div>
		<!-- @slot Input error slot -->
		<slot name="error" />
	</div>
</template>

<script>
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
		 * Disable the inputs
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			code: new Array(this.pinLength).fill(''),
			isShaking: false,
			lastAttemptedCode: '',
		};
	},

	computed: {
		currentCode() {
			return this.code.join('');
		},

		containerWidth() {
			const SINGLE_CONTAINER_WIDTH = 58;
			return `${this.pinLength * SINGLE_CONTAINER_WIDTH}px`;
		},
	},

	watch: {
		// While waiting for response, Inputs are disabled - refocus on first input when re-enabled
		disabled(isDisabled) {
			if (!isDisabled) {
				this.focusOnCodeCell(0);
			}
		},
	},

	mounted() {
		this.focusOnCodeCell(0);
	},

	updated() {
		const isForCurrentCode = this.currentCode === this.lastAttemptedCode;
		const shouldShake = this.$slots.error
			&& !this.disabled
			&& isForCurrentCode;

		if (shouldShake) {
			this.shakeInputs();
		}
	},

	methods: {
		findFirstIncompleteCodeCellIndex() {
			return this.code.findIndex((value) => value === '');
		},

		getCodeCellRef(index) {
			return `code-cell-${index}`;
		},

		// Focus on verification code cell input at given index.
		focusOnCodeCell(index) {
			const cellReference = this.$refs[this.getCodeCellRef(index)];
			if (cellReference?.[0]?.focus) {
				cellReference[0].focus();
			}
		},

		onInputCode(event, index) {
			if (!event.data) {
				return;
			}

			// Only allow integers in input
			const BASE_TEN = 10;
			const inputValue = Number.isInteger(Number.parseInt(event.data, BASE_TEN)) ? event.data : '';
			this.$set(this.code, index, inputValue);

			const firstIncompleteCellIndex = this.findFirstIncompleteCodeCellIndex();

			// eslint-disable-next-line no-magic-numbers
			if (firstIncompleteCellIndex === -1) {
				this.handleComplete();
				return;
			}

			// This allows us to auto jump to the next code cell input as the user types.
			this.focusOnCodeCell(firstIncompleteCellIndex);
		},

		attemptSplitCodeIntoInputs(value, inputIndex) {
			const BASE_TEN = 10;
			if (inputIndex === 0
				&& value?.length === this.pinLength
				&& Number.isInteger(Number.parseInt(value, BASE_TEN))
			) {
				this.$set(this, 'code', value.split(''));
				const TIMEOUT_LENGTH_MS = 200;
				setTimeout(this.handleComplete, TIMEOUT_LENGTH_MS);
				return true;
			}
			return false;
		},

		handleComplete() {
			const code = this.code.join('');
			this.lastAttemptedCode = code;
			this.$emit('complete', code);
		},

		onPasteCode(event, index) {
			event.preventDefault();
			const pastedValue = (event.clipboardData || window.clipboardData).getData('text');
			this.attemptSplitCodeIntoInputs(pastedValue, index);
		},

		onDelete(event, index) {
			// Reset current index, and then focus on previous cell
			this.$set(this.code, index, '');

			// eslint-disable-next-line no-magic-numbers
			const newIndex = index - 1;
			if (newIndex >= 0) {
				this.focusOnCodeCell(newIndex);
			}
		},

		onFocusCode(_event, index) {
			this.$set(this.code, index, '');
		},

		resetcode() {
			const newArray = (new Array(this.pinLength)).fill('');
			this.$set(this, 'code', newArray);
		},

		shakeInputs() {
			this.resetcode();
			this.focusOnCodeCell(0);
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
	align-items: center;
	justify-content: space-between;
	padding-bottom: 8px;
}

.CodeInput {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 46px;
	height: 46px;
	padding: 0;
	font-weight: 500;
	font-size: var(--font-step-0-size);
	text-align: center;
	background: #fff;
	border: 1px solid #d3d3d3;
	border-radius: 8px;
	outline: none;
	caret-color: black;
	cursor: pointer;

	&.filled {
		background: #f6f7f9;
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
		border: 2px solid rgba(0, 0, 0, 0.9);
	}
}

/**
 * Wrapper class allows for pin input border size to change without causing other pins to shift
 */
.CodeInputWrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
}

.CodeInput:focus,
.CodeInput:valid {
	border: 2px solid black;
}

/* Remove stepper on number inputs */
input[type=number] {
	-moz-appearance: textfield;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
	margin: 0;
	-webkit-appearance: none;
}

.shake {
	animation: invalidcodeshake 500ms linear;
}

@keyframes invalidcodeshake {
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
