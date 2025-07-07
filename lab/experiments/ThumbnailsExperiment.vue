<template>
	<div :class="$s.Page">
		<m-text
			pattern="title"
			:size="4"
		>
			Thumbnails A11y Testing
		</m-text>

		<section :class="$s.Section">
			<m-text
				pattern="title"
				:size="2"
			>
				Basic Thumbnails (No Interactions)
			</m-text>
			<m-text :size="0">
				These thumbnails are for display only - no click handlers.
				Images should have default alt text like "Thumbnail 1", "Thumbnail 2", etc.
			</m-text>
			<m-thumbnails
				:thumbnails="sampleImages"
				:max-thumbnails="4"
			/>
		</section>

		<section :class="$s.Section">
			<m-text
				pattern="title"
				:size="2"
			>
				Clickable Thumbnails with Custom Alt Text
			</m-text>
			<m-text :size="0">
				These thumbnails are clickable and have custom alt text.
				Try keyboard navigation (Tab, Enter, Space).
			</m-text>
			<m-thumbnails
				:thumbnails="sampleImages"
				:max-thumbnails="3"
				:thumbnail-alt="customAltTexts"
				thumbnails-aria-label="Product gallery"
				overflow-aria-label="View additional product images"
				@thumbnail:click="onThumbnailClick"
				@overflow:click="onOverflowClick"
			/>
			<m-text
				v-if="lastAction"
				:size="-1"
				:class="$s.ActionLog"
			>
				Last action: {{ lastAction }}
			</m-text>
		</section>

		<section :class="$s.Section">
			<m-text
				pattern="title"
				:size="2"
			>
				Single Alt Text for All Images
			</m-text>
			<m-text :size="0">
				All images use the same alt text: "Profile photo"
			</m-text>
			<m-thumbnails
				:thumbnails="sampleImages.slice(0, 3)"
				:max-thumbnails="5"
				thumbnail-alt="Profile photo"
				thumbnails-aria-label="Profile photos"
				@thumbnail:click="onThumbnailClick"
			/>
		</section>

		<section :class="$s.Section">
			<m-text
				pattern="title"
				:size="2"
			>
				Large Thumbnails with Overflow
			</m-text>
			<m-text :size="0">
				Larger thumbnails with overflow button testing.
				Focus indicators should be clearly visible.
			</m-text>
			<m-thumbnails
				:thumbnails="sampleImages"
				:max-thumbnails="2"
				size="80px"
				:overflow-text-size="2"
				:thumbnail-alt="customAltTexts"
				thumbnails-aria-label="Event photos"
				overflow-aria-label="View 4 more event photos"
				@thumbnail:click="onThumbnailClick"
				@overflow:click="onOverflowClick"
			/>
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
					Empty thumbnails array
				</m-text>
				<m-thumbnails
					:thumbnails="[]"
					:max-thumbnails="3"
					thumbnail-alt="Empty image"
				/>
			</div>

			<div :class="$s.EdgeCase">
				<m-text
					pattern="title"
					:size="1"
				>
					Partial alt text array (fewer alt texts than images)
				</m-text>
				<m-thumbnails
					:thumbnails="sampleImages"
					:max-thumbnails="5"
					:thumbnail-alt="partialAltTexts"
					@thumbnail:click="onThumbnailClick"
				/>
			</div>

			<div :class="$s.EdgeCase">
				<m-text
					pattern="title"
					:size="1"
				>
					Invalid alt text (empty strings, null values)
				</m-text>
				<m-thumbnails
					:thumbnails="sampleImages.slice(0, 3)"
					:max-thumbnails="5"
					:thumbnail-alt="invalidAltTexts"
					@thumbnail:click="onThumbnailClick"
				/>
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
					<li>Use a screen reader to navigate through the thumbnails</li>
					<li>Verify each image has appropriate alt text</li>
					<li>Check that ARIA labels are announced correctly</li>
					<li>Confirm overflow buttons have descriptive labels</li>
				</ul>

				<m-text :size="0">
					<strong>Keyboard Navigation:</strong>
				</m-text>
				<ul :class="$s.List">
					<li>Tab through all interactive elements</li>
					<li>Press Enter or Space to activate thumbnails and overflow buttons</li>
					<li>Verify focus indicators are visible and clear</li>
					<li>Non-interactive thumbnails should not receive focus</li>
				</ul>

				<m-text :size="0">
					<strong>Visual Testing:</strong>
				</m-text>
				<ul :class="$s.List">
					<li>Check focus indicators have sufficient contrast</li>
					<li>Verify hover states provide clear feedback</li>
					<li>Test at different zoom levels (up to 200%)</li>
					<li>Confirm overflow button styling is clear</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
import { MText } from '@square/maker/components/Text';
import { MThumbnails } from '@square/maker/components/Thumbnails';

export default {
	components: {
		MText,
		MThumbnails,
	},

	data() {
		return {
			lastAction: '',
			sampleImages: [
				'https://picsum.photos/100/100?random=1',
				'https://picsum.photos/100/100?random=2',
				'https://picsum.photos/100/100?random=3',
				'https://picsum.photos/100/100?random=4',
				'https://picsum.photos/100/100?random=5',
				'https://picsum.photos/100/100?random=6',
			],
			customAltTexts: [
				'Red rose in bloom',
				'Sunset over mountains',
				'Ocean waves crashing',
				'Forest path in autumn',
				'City skyline at night',
				'Desert landscape',
			],
			partialAltTexts: [
				'First image description',
				'Second image description',
				// Missing descriptions for remaining images
			],
			invalidAltTexts: [
				'', // Empty string
				undefined, // Undefined value
				'   ', // Only whitespace
			],
		};
	},

	methods: {
		onThumbnailClick(thumbnail) {
			// eslint-disable-next-line no-magic-numbers
			const index = this.sampleImages.indexOf(thumbnail) + 1;
			this.lastAction = `Clicked thumbnail ${index}: ${thumbnail}`;
		},

		onOverflowClick() {
			this.lastAction = 'Clicked overflow button';
		},
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

.ActionLog {
	margin-top: 16px;
	padding: 8px 12px;
	background-color: #e8f4f8;
	border-left: 4px solid #06c;
	border-radius: 4px;
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
