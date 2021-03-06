<template>
	<section
		:class="[
			$s.Section,
			$s[`size_${size}`],
		]"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<header :class="$s.Header">
			<div
				v-if="label"
				:class="$s.Label"
			>
				{{ label }}

				<div
					v-if="sublabel"
					:class="$s.Sublabel"
				>
					{{ sublabel }}
				</div>
			</div>

			<div :class="$s.RequirementLabel">
				<!-- @slot requirement label slot -->
				<slot name="requirement-label" />
			</div>
		</header>

		<!-- @slot section content -->
		<slot />
	</section>
</template>

<script>
import assert from '@square/maker/utils/assert';

/**
 * @inheritAttrs section
 * @inheritListeners section
 */
export default {
	inheritAttrs: false,

	props: {
		/**
		 * Section label
		 */
		label: {
			type: String,
			default: undefined,
		},
		/**
		 * Section sublabel
		 */
		sublabel: {
			type: String,
			default: undefined,
		},
		/**
		 * Section size
		 */
		size: {
			type: String,
			default: 'medium',
			validator: (size) => ['small', 'medium', 'large'].includes(size),
		},
	},

	created() {
		assert.warn(false, 'The Section component will change dramatically in a future release. Consider changing to Container component.');
	},
};
</script>

<style module="$s">
.Section {
	--color-white: #fff;
	--color-black-90: rgba(0, 0, 0, 0.9);
	--color-black-55: rgba(0, 0, 0, 0.55);

	padding: 16px 24px;
	color: var(--color-black-90);
	font-family: inherit;
	background-color: var(--color-white);
}

.Label {
	margin-bottom: 16px;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
}

.size_small {
	& .Label {
		font-size: 12px;
		line-height: 20px;
		letter-spacing: 0.5px;
		text-transform: uppercase;
	}
}

.size_medium {
	& .Label {
		font-size: 14px;
		line-height: 20px;
	}
}

.size_large {
	& .Label {
		font-size: 24px;
		line-height: 32px;
	}
}

.Sublabel {
	color: var(--color-black-55);
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: normal;
	text-transform: none;
}

.RequirementLabel {
	color: var(--color-black-55);
	font-size: 14px;
	line-height: 24px;
}

.Header {
	display: flex;
	justify-content: space-between;
	font-size: 14px;
}
</style>
