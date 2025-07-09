<template>
	<div :class="$s.Page">
		<m-text
			pattern="title"
			:size="4"
		>
			Stepper A11y Testing
		</m-text>

		<section :class="$s.Section">
			<m-text
				pattern="title"
				:size="2"
			>
				Basic Stepper
			</m-text>
			<m-text :size="0">
				Basic stepper with default settings. Test keyboard navigation with Tab and Enter/Space.
			</m-text>
			<div :class="$s.StepperContainer">
				<m-stepper
					v-model="basicValue"
					:min="0"
					:max="10"
				/>
				<m-text :size="-1">
					Current value: {{ basicValue }}
				</m-text>
			</div>
		</section>

		<section :class="$s.Section">
			<m-text
				pattern="title"
				:size="2"
			>
				Stepper with Custom Range
			</m-text>
			<m-text :size="0">
				Stepper with custom min/max values. Notice how buttons become disabled at limits.
			</m-text>
			<div :class="$s.StepperContainer">
				<m-stepper
					v-model="rangeValue"
					:min="5"
					:max="15"
				/>
				<m-text :size="-1">
					Current value: {{ rangeValue }} (Range: 5-15)
				</m-text>
			</div>
		</section>

		<section :class="$s.Section">
			<m-text
				pattern="title"
				:size="2"
			>
				Styled Stepper
			</m-text>
			<m-text :size="0">
				Stepper with custom colors and rounded buttons. Accessibility features remain intact.
			</m-text>
			<div :class="$s.StepperContainer">
				<m-stepper
					v-model="styledValue"
					:min="0"
					:max="20"
					color="#007bff"
					text-color="#ffffff"
					shape="rounded"
				/>
				<m-text :size="-1">
					Current value: {{ styledValue }}
				</m-text>
			</div>
		</section>

		<section :class="$s.Section">
			<m-text
				pattern="title"
				:size="2"
			>
				Pill-shaped Stepper
			</m-text>
			<m-text :size="0">
				Stepper with pill-shaped buttons and custom colors.
			</m-text>
			<div :class="$s.StepperContainer">
				<m-stepper
					v-model="pillValue"
					:min="0"
					:max="100"
					color="#28a745"
					text-color="#ffffff"
					shape="pill"
				/>
				<m-text :size="-1">
					Current value: {{ pillValue }}
				</m-text>
			</div>
		</section>

		<section :class="$s.Section">
			<m-text
				pattern="title"
				:size="2"
			>
				Manual Input Testing
			</m-text>
			<m-text :size="0">
				Tab to the quantity display and press Enter/Space to activate manual input.
				You can also use Arrow Up/Down keys to increment/decrement.
				Press Escape to cancel manual input.
			</m-text>
			<div :class="$s.StepperContainer">
				<m-stepper
					v-model="manualValue"
					:min="1"
					:max="999"
				/>
				<m-text :size="-1">
					Current value: {{ manualValue }}
				</m-text>
			</div>
		</section>

		<section :class="$s.Section">
			<m-text
				pattern="title"
				:size="2"
			>
				Keyboard Navigation Testing
			</m-text>
			<m-text :size="0">
				This section focuses on keyboard navigation:
				<br>• Tab to focus the quantity display
				<br>• Press Enter or Space to activate manual input
				<br>• Use Arrow Up/Down keys to increment/decrement
				<br>• Press Escape to cancel manual input
			</m-text>
			<div :class="$s.StepperContainer">
				<m-stepper
					v-model="keyboardValue"
					:min="0"
					:max="50"
					aria-label="Keyboard test stepper"
					decrement-aria-label="Decrease value"
					increment-aria-label="Increase value"
					quantity-aria-label="Current value. Press Enter to edit, Arrow keys to adjust"
				/>
				<m-text :size="-1">
					Current value: {{ keyboardValue }}
				</m-text>
			</div>
		</section>

		<section :class="$s.Section">
			<m-text
				pattern="title"
				:size="2"
			>
				Screen Reader Announcements
			</m-text>
			<m-text :size="0">
				This section tests screen reader value announcements.
				When using a screen reader, value changes should be announced automatically.
				Try different aria-live settings: 'polite' (default) vs 'assertive'.
			</m-text>
			<div :class="$s.StepperContainer">
				<m-stepper
					v-model="screenReaderValue"
					:min="0"
					:max="20"
					aria-label="Screen reader test stepper"
					aria-live="polite"
				/>
				<m-text :size="-1">
					Current value: {{ screenReaderValue }} (aria-live: polite)
				</m-text>
			</div>
			<div :class="$s.StepperContainer">
				<m-stepper
					v-model="assertiveValue"
					:min="0"
					:max="20"
					aria-label="Assertive announcements stepper"
					aria-live="assertive"
				/>
				<m-text :size="-1">
					Current value: {{ assertiveValue }} (aria-live: assertive)
				</m-text>
			</div>
		</section>

		<section :class="$s.Section">
			<m-text
				pattern="title"
				:size="2"
			>
				Edge Cases Testing
			</m-text>

			<div :class="$s.EdgeCase">
				<m-text
					pattern="title"
					:size="1"
				>
					Large Numbers
				</m-text>
				<div :class="$s.StepperContainer">
					<m-stepper
						v-model="largeValue"
						:min="1000"
						:max="9999"
					/>
					<m-text :size="-1">
						Current value: {{ largeValue }}
					</m-text>
				</div>
			</div>

			<div :class="$s.EdgeCase">
				<m-text
					pattern="title"
					:size="1"
				>
					Negative Numbers
				</m-text>
				<div :class="$s.StepperContainer">
					<m-stepper
						v-model="negativeValue"
						:min="-10"
						:max="10"
					/>
					<m-text :size="-1">
						Current value: {{ negativeValue }}
					</m-text>
				</div>
			</div>

			<div :class="$s.EdgeCase">
				<m-text
					pattern="title"
					:size="1"
				>
					Single Step Range
				</m-text>
				<div :class="$s.StepperContainer">
					<m-stepper
						v-model="singleValue"
						:min="5"
						:max="5"
					/>
					<m-text :size="-1">
						Current value: {{ singleValue }} (Both buttons should be disabled)
					</m-text>
				</div>
			</div>
		</section>

		<section :class="$s.Section">
			<m-text
				pattern="title"
				:size="2"
			>
				Accessibility Testing Instructions
			</m-text>
			<div :class="$s.Instructions">
				<m-text :size="0">
					<strong>Screen Reader Testing:</strong>
				</m-text>
				<ul :class="$s.List">
					<li>Navigate to each stepper and verify button labels are announced correctly</li>
					<li>Test that disabled states are properly announced</li>
					<li>Verify manual input mode has appropriate labels</li>
					<li>Check that current value is communicated clearly</li>
					<li>Test value change announcements when incrementing/decrementing</li>
					<li>Verify aria-live regions announce value changes appropriately</li>
					<li>Compare 'polite' vs 'assertive' announcement timing</li>
				</ul>

				<m-text :size="0">
					<strong>Keyboard Navigation:</strong>
				</m-text>
				<ul :class="$s.List">
					<li>Tab through all stepper components</li>
					<li>Use Enter and Space to activate increment/decrement buttons</li>
					<li>Tab to quantity display, press Enter/Space to activate manual input</li>
					<li>Use Arrow Up/Down keys on quantity display to increment/decrement</li>
					<li>Press Escape to cancel manual input mode</li>
					<li>Verify input validation works correctly</li>
					<li>Check that Tab moves focus correctly between elements</li>
				</ul>

				<m-text :size="0">
					<strong>Visual Testing:</strong>
				</m-text>
				<ul :class="$s.List">
					<li>Check focus indicators are visible and clear</li>
					<li>Verify disabled button states are visually distinct</li>
					<li>Test at different zoom levels (up to 200%)</li>
					<li>Confirm hover states provide clear feedback</li>
					<li>Test with high contrast mode</li>
				</ul>

				<m-text :size="0">
					<strong>Functional Testing:</strong>
				</m-text>
				<ul :class="$s.List">
					<li>Test boundary conditions (min/max values)</li>
					<li>Verify manual input validation and error handling</li>
					<li>Check that buttons properly disable at limits</li>
					<li>Test with various number formats and ranges</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
import { MText } from '@square/maker/components/Text';
import { MStepper } from '@square/maker/components/Stepper';

export default {
	components: {
		MText,
		MStepper,
	},

	data() {
		return {
			basicValue: 5,
			rangeValue: 10,
			styledValue: 8,
			pillValue: 50,
			manualValue: 25,
			keyboardValue: 15,
			screenReaderValue: 10,
			assertiveValue: 5,
			largeValue: 5000,
			negativeValue: 0,
			singleValue: 5,
		};
	},
};
</script>

<style module="$s">
.Page {
	max-width: 1200px;
	margin: 0 auto;
	padding: 32px;
}

.Section {
	margin-bottom: 48px;
	padding: 24px;
	border: 1px solid #e0e0e0;
	border-radius: 8px;
}

.EdgeCase {
	margin-bottom: 24px;
	padding: 16px;
	background-color: #f9f9f9;
	border-radius: 4px;
}

.StepperContainer {
	display: flex;
	gap: 16px;
	align-items: center;
	margin-top: 16px;
}

.Instructions {
	margin-top: 16px;
}

.List {
	margin: 8px 0 16px 20px;
}

.List li {
	margin-bottom: 4px;
}
</style>
