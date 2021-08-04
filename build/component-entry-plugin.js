const { sources, Compilation } = require('webpack');

const EntryPlugin = {
	apply(compiler) {
		compiler.hooks.thisCompilation.tap('entry-plugin', (compilation) => {
			compilation.hooks.processAssets.tap(
				{
					name: 'entry-plugin',
					stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
				},
				() => {
					let index = '';

					if (compilation.assets['styles.css']) {
						index += 'import "./styles.css";';
					}

					if (compilation.assets['script.js']) {
						index += 'export * from "./script.js";';
					}

					compilation.emitAsset('index.js', new sources.RawSource(index));
				},
			);
		});
	},
};

module.exports = EntryPlugin;
