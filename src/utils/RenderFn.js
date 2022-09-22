// @vue/component
export default {
	props: {
		renderFn: {
			type: Function,
			required: true,
		},
	},

	render(h) {
		return this.renderFn(h);
	},
};
