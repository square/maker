# Contributing

This document contains all of the dry technical details of how to contribute to Maker. This document assumes your proposed contribution is sensible and within Maker's scope and guiding philosophies. If you are unsure if the last sentence applies to you please read [What is Maker?](./WHAT_IS_MAKER.md)

## Supported environments

- Desktop
	- Safari
	- Chrome
	- Firefox
	- Edge
- Mobile
  - iOS - Safari
  - iOS - Chrome
  - iOS - Firefox
  - Android - Chrome
- Node.js (SSR)

## Codebase setup

### Prerequisites

1. Use expected Node version via [NVM](http://nvm.sh):

   ```sh
   nvm i
   ```

2. Install dependencies

   ```sh
   npm ci
   ```

## Development

### Local Component Development

Render a component's README.md with [hot-module replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/):

```sh
$ component=COMPONENT_NAME npm run dev
```

This kind of local development is most appropriate when you are working on a single component and your changes will be reflected in that component's documentation.

If you need to share your WIP work with someone else (such as a Designer or a fellow Engineer), you can do a WIP Styleguide deploy.

### Local Lab Development

Refer to [/lab/README.md](/lab/README.md).

This kind of local development is most appropriate when you are working on multiple components simultaneously and you need to experiment with complex multi-component views to make sure all of your changes work together.

It's both easy & possible to build & deploy Lab experiments in WIP branches to [Maker's public Github Pages directory](https://square.github.io/maker/) if you need to share your in-progress work with someone else.

### Local Styleguide Development

Refer to [/styleguide/README.md](/styleguide/README.md).

This kind of local development is only appropriate if you are directly working on the styleguide itself, and not on any particular component.

It's both easy & possible to build & deploy Styleguide changes in WIP branches to [Maker's public Github Pages directory](https://square.github.io/maker/) if you need to share your in-progress work with someone else.

### Testing local changes on local network devices (eg. mobile)

Both DocDev and the Lab servers bind to the loopback address [`127.0.0.1`](https://superuser.com/a/949522) (or `localhost`) by default for security reasons. To make the servers available externally to your [local area network (LAN)](https://en.wikipedia.org/wiki/Local_area_network) so that it can be accessed by other devices on the same network (eg. mobile), bind the server to `0.0.0.0`, which makes the server available via all interfaces on your computer:

```sh
# For doc-dev
$ component=COMPONENT_NAME npm run dev -- -a 0.0.0.0

# Or, if you're using the lab
$ npm run lab -- -a 0.0.0.0
```

The interface addresses the server was bound to will be listed when the server starts. Enter the appropriate address into your device.

> Tip: Share the IP address URL quickly via [Chrome](https://support.google.com/chrome/answer/9430554?co=GENIE.Platform%3DDesktop&hl=en) or by making a QR Code via `npx qrcode <URL>`

### Testing local changes over the internet

Start the server normally and expose it via [ngrok](https://ngrok.com/), in a separate terminal:

```sh
$ ngrok http <SERVER PORT>
```

### Linting

```sh
# run JS lints
$ npm run lint:js

# run JS lints & autofix where possible
$ npm run lint:js -- --fix

# run CSS lints
$ npm run lint:css

# run CSS lints & autofix where possible
$ npm run lint:css -- --fix
```

### Build

Build component library and produce distribution files.

```sh
$ npm run build
```

### Testing releases

If you want to test a branch before releasing it, you can push up a _built branch_ and npm install the git reference.

1. From the branch you want to produce a build from, branch off by appending `-built` after your branch name.

2. Create a build.

   ```sh
   $ npm run build
   ```

3. Add the distribution files. The force flag is necessary because the distribution is ignored by gitignore.

   ```sh
   $ git add -f components
   ```

4. Commit and push. The no-verify flag (`-n`) is so that commit hooks don't run on the distribution files.

   ```sh
   $ git commit -nam built
   $ git push origin HEAD
   ```

## Git workflow

### Branches

The only "special" branch is the `master` branch which represents the latest stable version of the library. Most PRs with bug fixes, features, and even breaking changes should probably be made against, and ultimately merged into, `master`. The only exception is if you're unsure of changes and need to validate your ideas in production before making an official stable Maker release, which would be most common in the case of breaking changes and major version releases, so let's go over an example of how we'd do one.

Let's say Maker is on version `1.5.2` and you have a breaking change, or maybe several, that you'd like to make and that would require a major version release of `2.0.0`. Unless you're very confident in your changes you'll likely want to do a few _pre-releases_ first, and hold out on directly merging your changes directly into `master`. So what you'd do is:

1. Make a `v2` branch, or whatever you want to call it, as long as the name is descriptive.
2. Within this branch bump the version of Maker within `package.json` from `1.5.2` to `2.0.0-beta.0`.
3. Make and merge all your tentative changes into `v2` and bump the pre-release version with every merged change, e.g. `-beta.0`, `-beta.1`, `-beta.2`, etc.
4. Build, i.e. `npm run build`, and publish them to npm, i.e. `npm run publish`.
5. Build and deploy the styleguide for your changes to get feedback from coworkers, i.e. `npm run styleguide-build`.
6. Repeat steps 3 - 6 until you feel confident in your changes and they have stabilized.
7. Open `v2` PR against `master`, get approval, merge in, build & publish official `2.0.0` release.

### Commit style

Commit following the [Conventional Commits style](https://www.conventionalcommits.org) for simple yet meaningful commit messages. It has the following formats:

#### With scope

```
<type>(<scope>): <subject>
```

#### Without scope

```
<type>: <subject>
```

Reference [this JSON](https://github.com/commitizen/conventional-commit-types/blob/master/index.json) for supported commit types.

#### Examples

```
chore: enabled NUXT SSR
```

```
style: correcting linting error
```

```
feat: added button component
```

```
fix(button): inherit event listeners
```
