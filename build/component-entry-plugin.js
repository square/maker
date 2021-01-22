const ComponentEntryPlugin = {
	apply(compiler) {
		compiler.hooks.emit.tapAsync('component-entry', (compilation, callback) => {
			let index = '';

			if (compilation.assets['styles.css']) {
				index += 'import "./styles.css";';
			}

			if (compilation.assets['script.js']) {
				index += 'export * from "./script.js";';
			}
			compilation.assets['index.js'] = {
				source() {
					return index;
				},
				size() {
					return index.length;
				},
			};
			callback();
		});
	},
};

module.exports = ComponentEntryPlugin;
