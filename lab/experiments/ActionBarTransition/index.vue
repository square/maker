<template>
	<m-container>
		<h1>Action bar test</h1>
		<p>To preview the persistent action bar, please view this page in a mobile browser.</p>
		<p>
			Otherwise
			<button @click="openCart">
				Click here
			</button>
			to open the item modal.
		</p>

		<div :class="$s.Controls">
			<h4>Delay (milliseconds)</h4>
			<m-segmented-control
				v-model="enterDelay"
				size="small"
			>
				<m-segment
					v-for="i in 8"
					:key="i"
					:value="i * 100"
				>
					{{ i * 100 }}
				</m-segment>
			</m-segmented-control>
			<h4>Stiffness</h4>
			<p>A higher stiffness will result in a snappier animation.</p>
			<m-segmented-control
				v-model="springStiffness"
				size="small"
			>
				<m-segment
					v-for="i in 10"
					:key="i"
					:value="i * 100"
				>
					{{ i * 100 }}
				</m-segment>
			</m-segmented-control>
			<h4>Damping</h4>
			<p>
				This is the opposing force to stiffness.
				As you reduce this value, relative to stiffness,
				the spring will become bouncier and the animation
				will last longer. Likewise, higher relative values will
				have less bounciness and result in shorter animations.
			</p>
			<m-segmented-control
				v-model="springDamping"
				size="small"
			>
				<m-segment
					v-for="i in 10"
					:key="i"
					:value="i * 10"
				>
					{{ i * 10 }}
				</m-segment>
			</m-segmented-control>
			<h4>Mass</h4>
			<p>
				This is the mass of the animating object.
				Heavier objects will take longer to speed up and slow down.
			</p>
			<m-segmented-control
				v-model="springMass"
				size="small"
			>
				<m-segment
					v-for="i in 10"
					:key="i"
					:value="i / 2"
				>
					{{ i / 2 }}
				</m-segment>
			</m-segmented-control>
		</div>
		<m-action-bar>
			<m-action-bar-button
				key="primary"
				align="center"
				full-width
				@click="openCart"
			>
				View Cart
				<template #information>
					3 items
				</template>
			</m-action-bar-button>
		</m-action-bar>
	</m-container>
</template>

<script>

import { modalApi } from '@square/maker/components/Modal';
import { MActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import { MContainer } from '@square/maker/components/Container';
import { MSegmentedControl, MSegment } from '@square/maker/components/SegmentedControl';
import ItemModal from './ItemModal.vue';

export default {
	components: {
		MActionBar,
		MActionBarButton,
		MContainer,
		MSegmentedControl,
		MSegment,
	},

	inject: {
		modalApi,
	},

	data() {
		return {
			enterDelay: 600,
			springStiffness: 400,
			springDamping: 30,
			springMass: 1.5,
		};
	},

	methods: {

		openCart() {
			this.modalApi.open((h) => h(
				ItemModal,
				{
					props: {
						enterDelay: this.enterDelay,
						springStiffness: this.springStiffness,
						springDamping: this.springDamping,
						springMass: this.springMass,
					},
				},
			));
		},
	},
};
</script>

<style module="$s">
.Controls {
	padding: 16px 24px 36px;
	background: #fff;
}
</style>
