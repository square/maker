<template>
	<div class="page">
		<m-heading :size="4">
			Kitchen Sink
		</m-heading>

		<div class="section">
			<m-heading :size="2">
				Button
			</m-heading>
			<m-button>
				Button
			</m-button>
			<m-button>
				<plus-icon
					inline
					class="icon"
				/>
				Button
			</m-button>
			<m-button>
				Button
				<plus-icon
					inline
					class="icon"
				/>
			</m-button>
			<m-button>
				<x-icon
					inline
					class="icon"
				/>
			</m-button>
			<m-button disabled>
				Disabled button
			</m-button>
			<m-button loading>
				Loading
			</m-button>
			<m-button variant="secondary">
				Button
			</m-button>
			<m-button variant="secondary">
				<plus-icon
					inline
					class="icon"
				/>
				Button
			</m-button>
			<m-button variant="secondary">
				Button
				<plus-icon
					inline
					class="icon"
				/>
			</m-button>
			<m-button variant="secondary">
				<x-icon
					inline
					class="icon"
				/>
			</m-button>
			<m-button
				variant="secondary"
				disabled
			>
				Disabled button
			</m-button>
			<m-button
				variant="secondary"
				loading
			>
				Loading
			</m-button>
			<m-button variant="tertiary">
				Button
			</m-button>
			<m-button variant="tertiary">
				<plus-icon
					inline
					class="icon"
				/>
				Button
			</m-button>
			<m-button variant="tertiary">
				Button
				<plus-icon
					inline
					class="icon"
				/>
			</m-button>
			<m-button variant="tertiary">
				<x-icon
					inline
					class="icon"
				/>
			</m-button>
			<m-button
				variant="tertiary"
				disabled
			>
				Disabled button
			</m-button>
			<m-button
				variant="tertiary"
				loading
			>
				Loading
			</m-button>
		</div>

		<div class="section">
			<m-heading :size="2">
				Checkbox
			</m-heading>
			<m-checkbox>
				checkbox
			</m-checkbox>
			<m-checkbox disabled>
				disabled checkbox
			</m-checkbox>
			<m-checkbox invalid>
				invalid checkbox
			</m-checkbox>
			<m-checkbox>
				checkbox with a label
				<template #sublabel>
					and also a sublabel
				</template>
			</m-checkbox>
		</div>

		<div class="section">
			<m-heading :size="2">
				Divider
			</m-heading>

			<m-divider />
		</div>

		<div class="section">
			<m-heading :size="2">
				Heading
			</m-heading>

			<m-heading
				v-for="size in [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7]"
				:key="`heading-${size}`"
				:size="size"
			>
				Size {{ size }}
			</m-heading>
		</div>

		<div class="section">
			<m-heading :size="2">
				Image
			</m-heading>

			<m-image
				class="square"
				src="https://source.unsplash.com/random/200x200"
			/>
		</div>

		<div class="section">
			<m-heading :size="2">
				Input
			</m-heading>

			<m-input placeholder="placeholder" />
			<m-input
				placeholder="disabled"
				disabled
			/>
			<m-input
				placeholder="invalid"
				invalid
			/>
			<m-input
				placeholder="align right"
				align="right"
			/>
			<m-input placeholder="prefix text">
				<template #prefix>
					$
				</template>
			</m-input>
			<m-input
				placeholder="suffix text"
				align="right"
			>
				<template #suffix>
					pounds
				</template>
			</m-input>
			<m-input placeholder="prefix icon">
				<template #prefix>
					<pencil-icon
						inline
						class="icon"
					/>
				</template>
			</m-input>
			<m-input
				placeholder="suffix icon"
				align="right"
			>
				<template #suffix>
					<calendar-icon
						inline
						class="icon"
					/>
				</template>
			</m-input>
			<m-input placeholder="with error message">
				<template #error>
					<m-notice type="error">
						error message here
					</m-notice>
				</template>
			</m-input>
		</div>

		<div class="section">
			<m-heading :size="2">
				Loading
			</m-heading>

			<m-loading />
		</div>

		<div class="section">
			<m-heading :size="2">
				Notice
			</m-heading>

			<m-notice type="error">
				I am an error notice
			</m-notice>
			<m-notice
				type="error"
				variant="block"
			>
				I am a block error notice
			</m-notice>
			<m-notice type="success">
				I am an success notice
			</m-notice>
			<m-notice
				type="success"
				variant="block"
			>
				I am a block success notice
			</m-notice>
			<m-notice type="warning">
				I am an warning notice
			</m-notice>
			<m-notice
				type="warning"
				variant="block"
			>
				I am a block warning notice
			</m-notice>
			<m-notice type="info">
				I am an info notice
			</m-notice>
			<m-notice
				type="info"
				variant="block"
			>
				I am a block info notice
			</m-notice>
		</div>

		<div class="section">
			<m-heading :size="2">
				Radio
			</m-heading>

			<m-radio value="1">
				radio
			</m-radio>
			<m-radio
				value="1"
				disabled
			>
				disabled radio
			</m-radio>
			<m-radio
				value="1"
				invalid
			>
				invalid radio
			</m-radio>
			<m-radio value="1">
				radio with label
				<template #sublabel>
					and also a sublabel
				</template>
			</m-radio>
		</div>

		<div class="section">
			<m-heading :size="2">
				Section
			</m-heading>

			<m-section>
				section content
			</m-section>
			<m-section label="section label">
				section content
			</m-section>
			<m-section
				label="section label"
				sublabel="section sublabel"
			>
				section content
			</m-section>
			<m-section
				label="section label"
				sublabel="section sublabel"
			>
				section content
				<template #requirement-label>
					section requirement label
				</template>
			</m-section>
		</div>

		<div class="section">
			<m-heading :size="2">
				Select
			</m-heading>

			<m-select
				v-model="currentOption"
				placeholder="placeholder"
				:options="options"
			/>
			<m-select
				v-model="currentOption"
				placeholder="placeholder"
				:options="options"
				disabled
			/>
			<m-select
				v-model="currentOption"
				placeholder="placeholder"
				:options="options"
				invalid
			/>
			<m-select
				v-model="currentOption"
				placeholder="placeholder"
				:options="options"
			>
				<template #error>
					<m-notice type="error">
						error message here
					</m-notice>
				</template>
			</m-select>
		</div>

		<div class="section">
			<m-heading :size="2">
				Skeleton
			</m-heading>

			<m-skeleton-block class="square" />

			<m-skeleton-text :lines="3" />
		</div>

		<div class="section">
			<m-heading :size="2">
				Stepper
			</m-heading>

			<m-stepper v-model="number" />
		</div>

		<div class="section">
			<m-heading :size="2">
				Text
			</m-heading>

			<m-text
				v-for="size in [-1, 0, 1]"
				:key="`text-${size}`"
				:size="size"
			>
				Size {{ size }}
			</m-text>
		</div>

		<div class="section">
			<m-heading :size="2">
				Textarea
			</m-heading>

			<m-textarea placeholder="placeholder" />
			<m-textarea
				placeholder="placeholder"
				disabled
			/>
			<m-textarea
				placeholder="placeholder"
				invalid
			/>
			<m-textarea
				placeholder="placeholder"
				resizable
			/>
			<m-textarea placeholder="placeholder">
				<template #error>
					<m-notice type="error">
						error message here
					</m-notice>
				</template>
			</m-textarea>
		</div>

		<div class="section">
			<m-heading :size="2">
				Toggle
			</m-heading>

			<m-toggle>
				toggle
			</m-toggle>
			<m-toggle disabled>
				disabled toggle
			</m-toggle>
			<m-toggle invalid>
				invalid toggle
			</m-toggle>
			<m-toggle>
				toggle label
				<template #sublabel>
					toggle sublabel
				</template>
			</m-toggle>
		</div>
	</div>
</template>

<script>
import {
	PlusIcon, XIcon, PencilIcon, CalendarIcon,
} from '@square/orbit-icons';
import { MButton } from '@square/maker/components/Button';
import { MCheckbox } from '@square/maker/components/Checkbox';
import { MDivider } from '@square/maker/components/Divider';
import { MHeading } from '@square/maker/components/Heading';
import { MImage } from '@square/maker/components/Image';
import { MInput } from '@square/maker/components/Input';
import { MLoading } from '@square/maker/components/Loading';
import { MNotice } from '@square/maker/components/Notice';
import { MRadio } from '@square/maker/components/Radio';
import { MSection } from '@square/maker/components/Section';
import { MSelect } from '@square/maker/components/Select';
import { MSkeletonBlock, MSkeletonText } from '@square/maker/components/Skeleton';
import { MStepper } from '@square/maker/components/Stepper';
import { MText } from '@square/maker/components/Text';
import { MTextarea } from '@square/maker/components/Textarea';
import { MToggle } from '@square/maker/components/Toggle';

export default {
	components: {
		PlusIcon,
		XIcon,
		PencilIcon,
		CalendarIcon,
		MButton,
		MCheckbox,
		MDivider,
		MHeading,
		MImage,
		MInput,
		MLoading,
		MNotice,
		MRadio,
		MSection,
		MSelect,
		MSkeletonBlock,
		MSkeletonText,
		MStepper,
		MText,
		MTextarea,
		MToggle,
	},

	data() {
		return {
			number: 1,
			currentOption: '1',
			options: [
				{
					value: '1',
					label: 'Option 1',
				},
				{
					value: '2',
					label: 'Option 2',
				},
				{
					value: '3',
					label: 'Option 3',
				},
			],
		};
	},
};
</script>

<style scoped>
.page {
	padding: 16px;
}

.section {
	margin-top: 64px;
}

.square {
	width: 200px;
	height: 200px;
}

.icon {
	width: 16px;
	height: 16px;
}
</style>
