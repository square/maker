import combos from 'combos';
import hasOwnProp from 'has-own-prop';
import DemoBox from '~/components/DemoBox.vue';

const getAttributes = (permutation) => {
	const attributes = {};

	// eslint-disable-next-line no-restricted-syntax
	for (const key in permutation) {
		if (hasOwnProp(permutation, key) && !key.startsWith('$')) {
			attributes[key] = permutation[key];
		}
	}

	return attributes;
};

const getSlots = (h, permutation) => {
	const slots = [];

	// eslint-disable-next-line no-restricted-syntax
	for (const key in permutation) {
		if (!hasOwnProp(permutation, key) || !key.startsWith('$slots.')) {
			// eslint-disable-next-line no-continue
			continue;
		}

		slots.push(h('template', {
			slot: key.replace('$slots.', ''),
		}, [permutation[key]]));
	}

	return slots;
};

export default {
	props: {
		component: {
			type: undefined,
		},
		options: {
			type: undefined,
			required: true,
		},
	},

	computed: {
		permutations() {
			return combos(this.options);
		},
	},

	render(h) {
		const { component } = this;

		return h('div', this.permutations.map((permutation) => {
			const attributes = getAttributes(permutation);
			const slots = getSlots(h, permutation);
			return h(DemoBox, {
				props: {
					tooltip: attributes,
				},
			}, [
				h(component, {
					attrs: {
						...attributes,
					},
				}, slots),
			]);
		}));
	},

};
