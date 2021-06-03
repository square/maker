import { isString, get } from 'lodash';
import themeKey from './key';

function getComputedTheme(parentTheme = {}, myTheme = {}, myMixins = [], myThemingFn) {
	const combinedTheme = {
		...parentTheme,
		...myTheme,
	};
	for (const mixin of myMixins) {
		if (parentTheme.mixins && parentTheme.mixins[mixin]) {
			Object.assign(combinedTheme, parentTheme.mixins[mixin]);
		}
		if (myTheme.mixins && myTheme.mixins[mixin]) {
			Object.assign(combinedTheme, myTheme.mixins[mixin]);
		}
	}
	for (const [key, maybePointerValue] of Object.entries(combinedTheme)) {
		if (maybePointerValue.startsWith('@')) {
			const pointerPath = maybePointerValue.slice(1 - maybePointerValue.length);
			const derefValue = get(parentTheme, pointerPath);
			combinedTheme[key] = derefValue;
		}
	}
	return myThemingFn(combinedTheme) || {};
}

function Themeable(Component, themingFn, themeSubtree) {
	return {
		inheritAttrs: false,

		props: {
			theme: {
				type: Object,
				default: () => {},
			},
			mixins: {
				type: [String, Array],
				default: () => [],
			},
		},

		inject: {
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
			myTheme() {
				const parentTheme = this.parentTheme && this.parentTheme[themeSubtree];
				return getComputedTheme(parentTheme, this.theme, this.myMixins, themingFn);
			},
			styles() {
				const styles = {};
				for (const [property, value] of Object.entries(this.myTheme)) {
					styles[property] = value;
				}
				return styles;
			},
		},
	};
}

export default Themeable;
