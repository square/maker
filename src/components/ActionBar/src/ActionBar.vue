<script>
export default {
	inject: {
		actionBar: 'action-bar',
	},

	inheritAttrs: false,

	destroyed() {
		// eslint-disable-next-line no-underscore-dangle
		this.actionBar.unregister(this._uid);
	},

	render() {
		// eslint-disable-next-line no-underscore-dangle
		this.actionBar.register(this._uid, this.$slots.default);

		// eslint-disable-next-line unicorn/no-useless-undefined
		return undefined;
	},
};
</script>
