module.exports = {
	root: true,

	extends: [
		'airbnb-base',
		'plugin:unicorn/recommended',
	],

	parserOptions: {
		parser: 'babel-eslint',
	},

	settings: {
		'import/resolver': {
			webpack: {
				config: './build/webpack-development-config',
			},
		},
	},

	rules: {
		indent: 'off',
		'indent-legacy': ['error', 'tab'],
		'no-tabs': 'off',

		'no-param-reassign': 'off',
		'no-return-await': 'off',

		// As a library, dependencies are packaged in and can be in devDeps
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',
		'import/no-unresolved': ['error', { ignore: ['^doc/'] }],

		// eslint parsing bug: https://github.com/babel/babel/issues/10904
		'template-curly-spacing': 'off',

		'unicorn/no-process-exit': 'off',
		'unicorn/no-useless-undefined': 'off',
		'unicorn/filename-case': ['error', {
			cases: {
				pascalCase: true,
				kebabCase: true,
			},
		}],
		'unicorn/prevent-abbreviations': [
			'error',
			{
				replacements: {
					prop: false,
					props: false,
				},
			},
		],
		'no-console': 'error',
		'no-debugger': 'error',

		// https://github.com/airbnb/javascript/issues/1271#issuecomment-548688952
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],
	},

	overrides: [
		{
			files: ['*.vue'],
			extends: [
				'plugin:vue/recommended',
			],
			rules: {
				'vue/html-indent': ['error', 'tab'],
				'vue/no-unregistered-components': ['error', {
					ignorePatterns: [
						'router-view',
						'router-link',
					],
				}],
				'vue/component-name-in-template-casing': ['error', 'kebab-case'],

				// Disabled until github.com/vuejs/eslint-plugin-vue/issues/1260
				'vue/custom-event-name-casing': 'off',

				'vue/no-deprecated-slot-attribute': ['error'],
				'vue/no-deprecated-slot-scope-attribute': ['error'],
				'vue/no-deprecated-scope-attribute': ['error'],
			},
		},
		{
			files: ['*.md'],
			plugins: ['markdown'],
			processor: 'markdown/markdown',
		},
		{
			files: ['**/*.md/*'],
			rules: {
				'unicorn/filename-case': 'off',
			},
		},
		{
			files: ['lab/**'],
			settings: {
				'import/resolver': {
					webpack: {
						config: './lab/webpack-lab-config',
					},
				},
			},
		},
		{
			files: ['styleguide/**'],
			settings: {
				'import/resolver': {
					webpack: {
						config: './styleguide/webpack-styleguide-config',
					},
				},
			},
		},
	],
};
