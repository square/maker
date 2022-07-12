<template>
	<div
		v-bind="$attrs"
		v-on="$listeners"
	>
		<m-row
			:class="$s.AccordionHeader"
			type="button"
			element="button"
			:aria-expanded="isExpanded"
			@click="toggleExpanded"
		>
			<template #default>
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
				<slot name="secondary">
					<m-text
						pattern="paragraph"
						:size="-1"
					>
						{{ secondary }}
					</m-text>
				</slot>
			</template>
			<template #suffix>
				<slot name="icon">
					<m-icon :name="iconName" />
				</slot>
			</template>
		</m-row>
		<m-transition-collapse>
			<div
				v-if="isExpanded"
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
import { MRow } from '@square/maker/utils/Row';
import { MText } from '@square/maker/components/Text';
import { MIcon } from '@square/maker/components/Icon';
import { MTransitionCollapse } from '@square/maker/utils/TransitionCollapse';

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
