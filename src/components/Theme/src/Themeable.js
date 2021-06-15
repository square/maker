import { isString, get } from 'lodash';
import themeKey from './key';

/**
 * @param {Object} entireTheme entire theme object, with top-level theme definitions and all component themes
 * @param {Object} parentTheme inherited theme from parent for this particular component
 * @param {Object} myTheme theme definition for this particular component
 * @param {String[]} myMixins this particular component's selected mixins
 * @param {Function} myThemingFn this particular component's theming function
 * @return {Object} concrete component theme
 */
function getComputedTheme(entireTheme = {}, parentTheme = {}, myTheme = {}, myMixins = [], myThemingFn) {
	const combinedTheme = {
		...parentTheme,
		...myTheme,
		mixins: {
			...parentTheme.mixins,
			...myTheme.mixins,
		}
	};
	// console.log({ myMixins });
	for (const mixin of myMixins) {
		if (combinedTheme && combinedTheme.mixins[mixin]) {
			Object.assign(combinedTheme, combinedTheme.mixins[mixin]);
		}
	}
	for (const [key, maybePointerValue] of Object.entries(combinedTheme)) {
		if (isString(maybePointerValue) && maybePointerValue.startsWith('@')) {
			const pointerPath = maybePointerValue.slice(1 - maybePointerValue.length);
			const derefValue = get(entireTheme, pointerPath);
			combinedTheme[key] = derefValue;
		}
	}
	return myThemingFn(combinedTheme) || {};
}

function Themeable(Component, themingFn, themeSubtree) {
	return {
		inheritAttrs: false,

		props: {
			// theme object
			theme: {
				type: Object,
				default: () => ({}),
			},
			// list of string mixins, which should be present in theme
			mixins: {
				type: [String, Array],
				default: () => ([]),
			},
		},

		inject: {
			// inherited theme object from parent
			parentTheme: {
				from: themeKey,
				default: () => ({}),
			},
		},

		render(createElement) {
			return createElement(
                Component,
				{
					attrs: this.$attrs,
					props: this.$attrs,
					style: this.styles,
					on: this.$listeners,
					scopedSlots: this.$scopedSlots,
				},
                this.$slots,
            );
		},

		computed: {
			myMixins() {
				if (isString(this.mixins)) {
					return [this.mixins];
				}
				return this.mixins;
			},
			myConcreteTheme() {
				const entireTheme = this.parentTheme || {};
				const parentTheme = this.parentTheme && this.parentTheme[themeSubtree];
				// console.log(this.myMixins);
				return getComputedTheme(entireTheme, parentTheme, this.theme, this.myMixins, themingFn);
			},
			styles() {
				const styles = {};
				for (const [property, value] of Object.entries(this.myConcreteTheme)) {
					styles[property] = value;
				}
				return styles;
			},
		},
	};
}

export default Themeable;
