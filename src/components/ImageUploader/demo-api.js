export default {
	async uploadImage({
		image,
		onUploadProgress,
		shouldSucceed = true,
	}) {
		return new Promise((resolve, reject) => this.processUpload({
			image,
			onUploadProgress,
			shouldSucceed,
			resolve,
			reject,
		}));
	},

	async processUpload({
		progress = 0,
		resolve,
		reject,
		onUploadProgress,
		image,
		shouldSucceed,
	}) {
		let newProgress;

		/* eslint-disable no-magic-numbers */
		setTimeout(() => {
			if (progress < 75) {
				newProgress = progress + 15;
				onUploadProgress({ loaded: newProgress });
				this.processUpload({
					resolve,
					reject,
					onUploadProgress,
					progress: newProgress,
					shouldSucceed,
				});
			} else if (shouldSucceed) {
				onUploadProgress({ loaded: 100 });
				resolve({ data: { hello: 'world!', image } });
			} else {
				onUploadProgress({ loaded: 100 });
				reject(new Error('Some error'));
			}
		}, 500);
		/* eslint-enable no-magic-numbers */
	},
};
