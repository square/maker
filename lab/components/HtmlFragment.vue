<script>
/* eslint-disable no-underscore-dangle */
// https://stackoverflow.com/a/47332729/2766908
import Vue from 'vue/dist/vue';

// https://stackoverflow.com/a/67771171/2766908
// https://jsfiddle.net/Linusborg/mfqjk5hm/
/**
 * unlike "v-html" this renders html content
 * without a wrapping container
 */
export default {
	functional: true,
	props: {
		html: {
			type: String,
			required: true,
		},
	},
	render(h, context) {
		const nodes = new Vue({
			beforeCreate() {
				this.$createElement = h;
			},
			template: `<div>${context.props.html}</div>`,
		}).$mount()._vnode.children;
		return nodes;
	},
};
</script>
