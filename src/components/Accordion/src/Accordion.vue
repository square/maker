<template>
	<div
		v-bind="$attrs"
		v-on="$listeners"
	>
		<m-row
			:id="id"
			:class="$s.AccordionHeader"
			type="button"
			element="button"
			:aria-expanded="isExpanded"
			:aria-controls="`${id}-content`"
			@click="toggleExpanded"
		>
			<template #default>
				<!-- @slot title of accordion -->
				<slot name="title">
					<m-text
						pattern="title"
						:size="-2"
						text-transform="uppercase"
					>
						{{ title }}
					</m-text>
				</slot>
			</template>
			<template #secondary>
				<!-- @slot secondary info, goes under title -->
				<slot name="secondary">
					<m-text
						v-if="secondary"
						pattern="paragraph"
						:size="-1"
					>
						{{ secondary }}
					</m-text>
				</slot>
			</template>
			<template #side>
				<!-- @slot side info, goes left of open/close icon -->
				<slot name="side">
					<m-text
						v-if="side"
						pattern="title"
						:size="-2"
						text-transform="uppercase"
					>
						{{ side }}
					</m-text>
				</slot>
			</template>
			<template #side-secondary>
				<!-- @slot side secondary info, goes under side slot -->
				<slot name="side-secondary">
					<m-text
						v-if="sideSecondary"
						pattern="paragraph"
						:size="-1"
					>
						{{ sideSecondary }}
					</m-text>
				</slot>
			</template>
			<template #suffix>
				<!-- @slot open & close icon -->
				<slot name="icon">
					<m-icon :name="iconName" />
				</slot>
			</template>
		</m-row>
		<m-transition-collapse>
			<div
				v-if="isExpanded"
				:id="`${id}-content`"
				role="region"
				:aria-labelledby="id"
				:aria-hidden="!isExpanded"
				:class="$s.ContentWrapper"
			>
				<!-- @slot content to expand & collapse -->
				<slot />
			</div>
		</m-transition-collapse>
	</div>
</template>

<script>
import { isUndefined } from 'lodash';
import { MRow } from '@square/maker/components/Row';
import { MText } from '@square/maker/components/Text';
import { MIcon } from '@square/maker/components/Icon';
import { MTransitionCollapse } from '@square/maker/components/TransitionCollapse';

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	components: {
		MText,
		MIcon,
		MRow,
		MTransitionCollapse,
	},

	inheritAttrs: false,

	model: {
		prop: 'expanded',
		event: 'accordion:update',
	},

	props: {
		/**
		 * if truthy or equal to expandKey the accordion will expand, otherwise it will collapse
		 */
		expanded: {
			type: [Boolean, String],
			default: undefined,
		},
		/**
		 * used to orchestrate the collapsing & expanding of multiple accordions
		 */
		expandKey: {
			type: String,
			default: undefined,
		},
		/**
		 * accordion title, will be overriden if title slot is used
		 */
		title: {
			type: String,
			required: false,
			default: '',
		},
		/**
		 * secondary info, will be overridden if secondary slot is used
		 */
		secondary: {
			type: String,
			required: false,
			default: '',
		},
		/**
		 * accordion side title, will be overriden if title slot is used
		 */
		side: {
			type: String,
			required: false,
			default: '',
		},
		/**
		 * secondary side info, will be overridden if side-secondary slot is used
		 */
		sideSecondary: {
			type: String,
			required: false,
			default: '',
		},
		/**
		 * ID for the accordion header, used for aria-controls.
		 * A unique ID will be generated if not provided.
		 */
		id: {
			type: String,
			default: () => {
				const BASE_36 = 36;
				const RANDOM_ID_START_INDEX = 2;
				const RANDOM_ID_LENGTH = 9;
				return `m-accordion-header-${Math.random()
					.toString(BASE_36)
					.slice(RANDOM_ID_START_INDEX, RANDOM_ID_START_INDEX + RANDOM_ID_LENGTH)}`;
			},
		},
	},

	data() {
		return {
			internalExpanded: !!this.expanded,
		};
	},

	computed: {
		isExpanded() {
			// if user didn't pass expanded prop OR is not listening
			// to updates then use internal data to manage expanded state
			if (isUndefined(this.expanded) || !this.$listeners['accordion:update']) {
				return this.internalExpanded;
			}
			if (isUndefined(this.expandKey)) {
				return !!this.expanded;
			}
			return this.expanded === this.expandKey;
		},
		iconName() {
			return this.isExpanded ? 'chevronUp' : 'chevronDown';
		},
	},

	methods: {
		toggleExpanded() {
			// no listener, just toggle internal state
			if (!this.$listeners['accordion:update']) {
				this.internalExpanded = !this.internalExpanded;
				return;
			}

			// listener but no control, just emit updates
			if (isUndefined(this.expanded)) {
				this.internalExpanded = !this.internalExpanded;
				/**
				 * emits updated expand value after state change
				 */
				this.$emit('accordion:update', this.internalExpanded);
				return;
			}

			// listener & control, but no expandKey
			// emit toggled expanded value
			if (isUndefined(this.expandKey)) {
				this.$emit('accordion:update', !this.expanded);
				return;
			}

			// collapsing with expandKey, emit false
			if (this.expanded === this.expandKey) {
				this.$emit('accordion:update', false);
				return;
			}

			// expanding with expandKey, emit expandKey
			this.$emit('accordion:update', this.expandKey);
		},
	},
};
</script>

<style module="$s">
.AccordionHeader {
	padding: 0;
	background: none;
	border: none;
	cursor: pointer;
}

.ContentWrapper {
	overflow: hidden;
}

.ContentWrapper > *:first-child {
	margin-top: 16px;
}
</style>
