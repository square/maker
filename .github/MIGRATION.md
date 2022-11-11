# Migration guides for Maker major releases

## [15.x](https://square.github.io/maker/styleguide/15.9.0/#/) -> [16.x](https://square.github.io/maker/styleguide/latest-stable/#/) ([PR](https://github.com/square/maker/pull/500))

### `parentModal` removed from `modalApi`, use `closeAll` instead

Before, if a user wanted to close a stack of modals simultaneously, they would write `this.modalApi.parentModal.close()`, which worked at some point in time, but has been broken for a while, and even while it "worked" it would force close both modals without running their `beforeClose` hooks. For these reasons `parentModal` has been removed and replaced with a `closeAll` method which solves all of these problems.

15.x (before) | 16.x (after)
-|-
`this.modalApi.parentModal.close()` | `this.modalApi.closeAll()`

### Loading `normal` size renamed to `medium`

The naming scheme for Maker component semantic sizes is: `xsmall`, `small`, `medium`, `large`, `xlarge` but the Loading component was implemented forever ago and its size values were `normal` and `large` which is weird so we're renaming `normal` to `medium` so it's more consistent with the rest of the library.

15.x (before) | 16.x (after)
-|-
`<m-loading size="normal" />` | `<m-loading size="medium" />`

## MenuOption `click-handler` prop removed, use `@click` instead

Should've been `@click` from the beginning, but was overlooked during code review.

15.x (before) | 16.x (after)
-|-
`<m-menu-option :click-handler="someMethod">` | `<m-menu-option @click="someMethod">`

## [14.x](https://square.github.io/maker/styleguide/14.18.3/#/) -> [15.x](https://square.github.io/maker/styleguide/15.9.0/#/) ([PR](https://github.com/square/maker/pull/441))

### MButton pattern & variant renames

MButton patterns `primary`, `secondary`, and `tertiary` have been removed since they're identical to variants `fill`, `outline`, and `ghost` respectively. MButton variants `primary`, `secondary`, and `tertiary` have also been renamed to `fill`, `outline`, and `ghost` respectively. Filled button patterns `primaryFilled`, `errorFilled `, `successFilled `, `warningFilled`, `infoFilled ` have been renamed to `primaryFill`, `errorFill `, `successFill`, `warningFill`, `infoFill`.

| before (14.x) | after (15.x) |
|-|-|
| `<m-button>` | `<m-button>` (no changes) |
| `<m-button variant="primary">` | `<m-button variant="fill">` |
| `<m-button variant="secondary">` | `<m-button variant="outline">` |
| `<m-button variant="tertiary">` | `<m-button variant="ghost">` |
| `<m-button pattern="primary">` ** | `<m-button variant="fill">` |
| `<m-button pattern="secondary">` ** | `<m-button variant="outline">` |
| `<m-button pattern="tertiary">`  **| `<m-button variant="ghost">` |
| `<m-button pattern="primaryFilled">`| `<m-button pattern="primaryFill">` |
| `<m-button pattern="errorFilled">`| `<m-button pattern="errorFill">` |
| `<m-button pattern="successFilled">`| `<m-button pattern="successFill">` |
| `<m-button pattern="warningFilled">`| `<m-button pattern="warningFill">` |
| `<m-button pattern="infoFilled">`| `<m-button pattern="infoFill">` |

**Note:** If you were using these deprecated patterns in a custom theme and wish to continue using them, you can update them from this:

```js
button: {
  patterns: {
    primary: {
      /* customizations */
    },
    secondary: {
      /* customizations */
    },
    tertiary: {
      /* customizations */
    },
  },
},
```

To this:

```js
button: {
  patterns: {
    primary: {
      variant: 'fill',
      /* customizations */
    },
    secondary: {
      variant: 'outline',
      /* customizations */
    },
    tertiary: {
      variant: 'ghost',
      /* customizations */
    },
  },
},
```

### MNotice prop `variant` renamed to `display`

MNotice's `variant` prop has been renamed to `display`.

before (14.x) | after (15.x)
-|-
`<m-notice>` | `<m-notice>` (no changes)
`<m-notice variant="inline">` | `<m-notice display="inline">`
`<m-notice variant="block">` | `<m-notice display="block">`

### Default theme changes

**NOTE:** If you're using MTheme at the root of your app and setting an explicit primary color then these changes won't affect your app. These changes only affect people who are using Maker without MTheme or with MTheme but aren't setting an explicit primary color and have been relying on the implicit primary color being `#000000`.

Within the default theme the primary color has changed from `#000000` to `#006aff`, the derived contextual primary colors have been updated, the overlay color has changed from `rgba(0, 0, 0, 0.3)` to `rgba(0, 0, 0, 0.32)`. The default parameters within the `maker-colors` utility function have also been updated accordingly.

If you weren't using MTheme before and relying on the implicit primary color being `#000000`, e.g.

```vue
<template>
  <div id="app">
    <m-button>
      i expect this button to be #000000
      but if i migrate to 15.x it will be #006aff
    </m-button>
  </div>
</template>
```

You will now have to import MTheme and explicitly set the primary color to `#000000`, e.g.

```vue
<template>
  <div id="app">
    <m-theme :theme="{ colors: { primary: '#000000' }, }">
      <m-button>
        now this button is guaranteed to be
        #000000 in both 14.x and 15.x
      </m-button>
    </m-theme>
  </div>
</template>
```

Also, if you were previously using the `maker-colors` utility function and relying on the implicit primary color being `#000000` by calling the function with only the first parameter, e.g. `makerColors(bgColor)`, then you now also have to pass `#000000` as an explicit 2nd argument to maintain the same appearance in your app migrating to 15.x from 14.x, e.g. `makerColors(bgColor, '#000000')`. Again, if you were already using the utility function with an explicit 2nd parameter in 14.x, `makerColors(bgColor, primaryColor)`, then you do not have to make any changes when migrating to 15.x.

## [13.x](https://square.github.io/maker/styleguide/13.0.1/#/) -> [14.x](https://square.github.io/maker/styleguide/14.18.3/#/) ([PR](https://github.com/square/maker/pull/389))

### Transition components moved from `/components` to `/utils`

before (13.x) | after (14.x)
-|-
`import { MTouchCapture } from '@square/maker/components/TouchCapture';` | `import { MTouchCapture } from '@square/maker/utils/TouchCapture';`
`import { MTransitionFadeIn } from '@square/maker/components/TransitionFadeIn';` | `import { MTransitionFadeIn } from '@square/maker/utils/TransitionFadeIn';`
`import { MTransitionResize } from '@square/maker/components/TransitionResize';` | `import { MTransitionResize } from '@square/maker/utils/TransitionResize';`
`import { MTransitionSpringLeft } from '@square/maker/components/TransitionSpringLeft';` | `import { MTransitionSpringLeft } from '@square/maker/utils/TransitionSpringLeft';`
`import { MTransitionSpringUp } from '@square/maker/components/TransitionSpringUp';` | `import { MTransitionSpringUp } from '@square/maker/utils/TransitionSpringUp';`
`import { MTransitionStaggered } from '@square/maker/components/TransitionStaggered';` | `import { MTransitionStaggered } from '@square/maker/utils/TransitionStaggered';`

Other transition components like MTransition and MTransitionResponsive were already in the `/utils` directory so if you were using those then those imports don't require any updates.


## [12.x](https://square.github.io/maker/styleguide/12.5.0/#/) -> [13.x](https://square.github.io/maker/styleguide/13.0.1/#/) ([PR](https://github.com/square/maker/pull/386))

### `profiles` refactored from keyed array into object

The `profiles` field within theme config objects has been changed from a keyed array to an object. You should refactor your code to change `profiles` from a keyed array to an object. Example of what `profiles` looked like before:

```js
// 12.x (before)
// keyed array
[
  {
    id: 'light-profile',
    colors: { /* whatever */ },
  },
  {
    id: 'dark-profile',
    colors: { /* whatever */ },
  },
]
```

Example of what `profiles` should look like now:

```js
// 13.x (after)
// object
{
  'light-profile': {
    colors: { /* whatever */ },
  },
  'dark-profile': {
    colors: { /* whatever */ },
  },
}
```

## [11.x](https://square.github.io/maker/styleguide/11.8.4/#/) -> [12.x](https://square.github.io/maker/styleguide/12.5.0/#/) ([PR](https://github.com/square/maker/pull/351))

### `chroma-js` removed, replaced by `colord`

Maker peer dependencies have changed. `chroma-js` has been replaced by `colord`. In your `package.json`:

11.x (before) | 12.x (after)
-|-
`"chroma-js": "^2.1.0"` | `"colord": "^2.9.2"`


## [9.x](https://square.github.io/maker/styleguide/9.8.1/#/) -> [11.x](https://square.github.io/maker/styleguide/11.8.4/#/) ([PR](https://github.com/square/maker/pull/302))

10.x was skipped.

### MHeading was removed, replaced with MText

9.x (before) | 11.x (after)
-|-
`import { MHeading } from '@square/maker/components/Heading'` | `import { MText } from '@square/maker/components/Text'`
`<m-heading>` | `<m-text pattern="title">`

### Typography now globally themeable

Any theming configs you had for `heading` and `text` should be moved into the new `fonts` config of the theme object. Take these:

```js
// in theme object
heading: {
  fontFamily: 'headingFontFamily',
  fontWeight: 'headingFontWeight',
},
text: {
  fontFamily: 'textFontFamily',
  fontWeight: 'textFontWeight',
},
```

And move them here:

```js
// in theme object
fonts: {
  heading: {
    fontFamily: 'headingFontFamily',
    fontWeight: 'headingFontWeight',
  },
  body: {
    fontFamily: 'textFontFamily',
    fontWeight: 'textFontWeight',
  },
},
```

### Public CSS variables renamed

9.x (before) | 11.x (after)
-|-
`--neutral-0` | `--maker-color-neutral-0`
`--neutral-10` | `--maker-color-neutral-10`
`--neutral-20` | `--maker-color-neutral-20`
`--neutral-80` | `--maker-color-neutral-80`
`--neutral-90` | `--maker-color-neutral-90`
`--neutral-100` | `--maker-color-neutral-100`
`--color-primary` | `--maker-color-primary`
`--color-background` | `--maker-color-background`
`--color-heading` | `--maker-color-heading`
`--maker-color-title` | `--maker-color-heading`
`--color-text` | `--maker-color-body`
`--maker-color-paragraph` | `--maker-color-body`
`--color-elevation` | `--maker-color-elevation`
`--color-overlay` | `--maker-color-overlay`
`--font-family-title` | `--maker-font-heading-font-family`
`--maker-font-family-title` | `--maker-font-heading-font-family`
`--font-weight-title` | `--maker-font-heading-font-weight`
`--maker-font-weight-title` | `--maker-font-heading-font-weight`
`--font-family-paragraph` | `--maker-font-body-font-family`
`--maker-font-family-paragraph` | `--maker-font-body-font-family`
`--font-weight-paragraph` | `--maker-font-body-font-weight`
`--maker-font-weight-paragraph` | `--maker-font-body-font-weight`
`--font-family-label` | `--maker-font-label-font-family`
`--maker-font-family-label` | `--maker-font-label-font-family`
`--font-weight-label` | `--maker-font-label-font-weight`
`--maker-font-weight-label` | `--maker-font-label-font-weight`

### Prefer patterns over variants for MButtons

Although the `variant` prop has not been deprecated, it's almost always more correct to use `pattern` for MButtons now.

9.x (before) | 11.x (after)
-|-
`<m-button variant="primary">` | `<m-button pattern="primary">`
`<m-button variant="secondary">` | `<m-button pattern="secondary">`
`<m-button variant="tertiary">` | `<m-button pattern="tertiary">`

### Miscellaneous

1. If you don't want to set a themeable prop but must pass some null-ish value then `''` (empty string) no longer works for that use-case, you must now explicitly pass `undefined`.
2. Margin was removed from `<m-text element="p">` (`p` is the default), and if you want to maintain margin on these elements you now need to add it with your own CSS

## [8.x](https://square.github.io/maker/styleguide/8.1.0/#/) -> [9.x](https://square.github.io/maker/styleguide/9.8.1/#/) ([PR](https://github.com/square/maker/pull/205))

### Theme component majorly refactored

Prior to this release MTheme was nonfunctional so nobody should have been using it so although it received major refactors it should not require any code refactors in user code.

### Text component props were renamed

8.x (before) | 9.x (after)
-|-
`<m-text text-color="#000">` | `<m-text color="#000">`
`<m-heading text-color="#000">` | `<m-heading color="#000">`

## [7.x](https://square.github.io/maker/styleguide/7.0.3/#/) -> [8.x](https://square.github.io/maker/styleguide/8.1.0/#/) ([PR](https://github.com/square/maker/pull/256))

### Dropped support for UC Android & Opera Mini browsers

No code refactors necessary.

## [6.x](https://square.github.io/maker/styleguide/6.7.3/#/) -> [7.x](https://square.github.io/maker/styleguide/7.0.3/#/) ([PR](https://github.com/square/maker/pull/249))

### MTextButton moved from `/Button` to `/TextButton`

6.x (before) | 7.x (after)
-|-
`import { MTextButton } from '@square/maker/components/Button'` | `import { MTextButton } from '@square/maker/components/TextButton'`

## [5.x](https://square.github.io/maker/styleguide/5.4.0/#/) -> [6.x](https://square.github.io/maker/styleguide/6.7.3/#/) ([PR](https://github.com/square/maker/pull/148))

### MSection removed, replaced with MContainer

5.x (before) | 6.x (after)
-|-
`import { MSection } from '@square/maker/components/Section'` | `import { MContainer } from '@square/maker/components/Container'`
`<m-section>` | `<m-container bg-color="#fff">`

## [4.x](https://square.github.io/maker/styleguide/4.12.0/#/) -> [5.x](https://square.github.io/maker/styleguide/5.4.0/#/) ([PR](https://github.com/square/maker/pull/129))

### MNoticeButton removed, replaced with MTextButton

4.x (before) | 5.x (after)
-|-
`import { MNoticeButton } from '@square/maker/components/Notice'` | `import { MTextButton } from '@square/maker/components/Button'`
`<m-notice-button>` | `<m-text-button>`

## [3.x](https://square.github.io/maker/styleguide/3.0.0/#/) -> [4.x](https://square.github.io/maker/styleguide/4.12.0/#/) ([PR](https://github.com/square/maker/pull/47))

### `lodash` dependency was externalized

No code refactors necessary.

## [2.x](https://square.github.io/maker/styleguide/2.2.4/#/) -> [3.x](https://square.github.io/maker/styleguide/3.0.0/#/) ([PR](https://github.com/square/maker/pull/41))

### `date-fns` dependency was externalized

No code refactors necessary.

## [1.x](https://square.github.io/maker/styleguide/1.3.1/#/) -> [2.x](https://square.github.io/maker/styleguide/2.2.4/#/) ([PR](https://github.com/square/maker/pull/35))

### Peer dependencies changed

- Update peer dep `popmotion` from `8.x` to `^9.3.1`
- Add new peer dep `stylefire` to `^7.0.3`

### Transition components renamed

1.x (before) | 2.x (after)
-|-
`import { MTransitionFade } from '@square/maker/components/TransitionFade'` | `import { MTransitionFadeIn } from '@square/maker/components/TransitionFadeIn'`
`import { MTransitionSpring } from '@square/maker/utils/TransitionSpring'` | `import { MTransition } from '@square/maker/utils/Transition'`
`import { MTransitionSpringResponsive } from '@square/maker/utils/TransitionSpringResponsive'` | `import { MTransitionResponsive } from '@square/maker/utils/TransitionResponsive'`
`<m-transition-fade>` | `<m-transition-fade-in>`
`<m-transition-spring>` | `<m-transition>`
`<m-transition-spring-responsive>` | `<m-transition-responsive>`

### Transition props changed

MTransition and MTransitionResponsive now take transition functions instead of `popmotion` config objects.
