<script>
import cssValidator from '@square/maker/utils/css-validator';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

const externalLinkPtrn = /^(https?:)?\/\//i;
function isExternalLink(url) {
	return typeof url === 'string' && externalLinkPtrn.test(url);
}

/**
 * checks if to route is valid in current vue router app
 */
function hasRoute(router, to) {
	if (!router) {
		return false;
	}
	const resolved = router.resolve(to);
	return resolved.resolved.matched.length > 0;
}

/**
 * gets RouterLink component from parent component if there is one
 */
function getRouterLink(parent) {
	return parent.$options.components['router-link'] || parent.$options.components.RouterLink;
}

/**
 * returns RouterLink component if RouterLink should be rendered
 */
function shouldRenderRouterLink(parent, to) {
	const RouterLink = getRouterLink(parent);
	if (!RouterLink) {
		return false;
	}
	if (!to || !(to instanceof Object)) {
		return false;
	}
	if (hasRoute(parent.$router, to) && !isExternalLink(to)) {
		return RouterLink;
	}
	return false;
}

/**
 * Link component
 * @inheritAttrs a
 * @inheritListeners a
 */
export default {
	// functional: true,

	inject: {
		theme: {
			default: defaultTheme(),
			from: MThemeKey,
		},
	},

	inheritAttrs: false,

	props: {
		to: {
			type: [String, Object],
			required: true,
		},
		/**
		 * Color of link
		 */
		color: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
	},

	computed: {
		...resolveThemeableProps('link', [
			'color',
		]),
		inlineStyles() {
			return {
				color: this.resolvedColor,
			};
		},
	},

	render(createElement) {
		// const parent = this.$parent;
		// const to = this.to;
		// const defaultSlot = this.$slots.default;
		const {
			$parent,
			$props,
			to,
			$s,
			attrs,
			inlineStyles,
			$listeners,
			$slots,
		} = this;
		const RouterLink = shouldRenderRouterLink($parent, to);
		if (RouterLink) {
			return createElement(RouterLink, {
				class: $s.Link,
				attrs,
				style: inlineStyles,
				props: $props,
				on: $listeners,
			}, $slots.default);
		}
		return createElement('a', {
			class: $s.Link,
			attrs: {
				href: to,
				...attrs,
			},
			style: inlineStyles,
			on: $listeners,
		}, $slots.default);
	},
};
</script>

<style module="$s">
.Link {
	font-weight: var(--maker-font-label-font-weight, 500);
	font-family: var(--maker-font-label-font-family, inherit);
	text-decoration: underline;
	cursor: pointer;
}
</style>
