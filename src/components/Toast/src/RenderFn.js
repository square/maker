import toastApi from './toast-api';

// @vue/component
export default {
	inject: {
		parentToastApi: {
			default: undefined,
			from: toastApi,
		},
	},

	provide() {
		const toastApiWithCloseSelf = {
			...this.parentToastApi,
		};

		toastApiWithCloseSelf.closeSelf = () => {
			console.log('in close self');
			this.parentToastApi.close(this.renderFn);
		};

		return {
			[toastApi]: toastApiWithCloseSelf,
		};
	},

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
