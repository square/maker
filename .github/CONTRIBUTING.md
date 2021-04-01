# 🛠 Contributing

This document contains all of the dry technical details of how to contribute to Maker. This document assumes your proposed contribution is sensible and within Maker's scope and guiding philosophies. If you are unsure if the last sentence applies to you please read [What is Maker?](./WHAT_IS_MAKER.md)

## Supported environments

Last 2 major versions of Safari, Chrome, Firefox, & Edge on macOS, Linux, Windows, iOS, & Android. Also, Node.js LTS for Vue.js SSR.

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
# Lint JS & CSS
$ npm run lint

# Lint JS
$ npm run lint:js

# Lint JS & autofix where possible
$ npm run lint:js -- --fix

# Lint CSS
$ npm run lint:css

# Lint CSS & autofix where possible
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
   $ git add -f components utils
   ```

4. Commit and push. The no-verify flag (`-n`) is so that commit hooks don't run on the distribution files.

   ```sh
   $ git commit -nam built
   $ git push origin HEAD
   ```

## Git workflow

This repo uses the [GitHub flow](https://guides.github.com/introduction/flow/). 
### Commit style

This repository uses [Conventional Commits](https://www.conventionalcommits.org) for simple yet meaningful commit messages. Not only are they user-friendly, they are also machine-readable for automated release notes and versioning.


It has the following formats:

#### Without scope

```
<type>: <subject>
```

#### With scope
```
<type>(<scope>): <subject>
```

#### Breaking change

```
<type>(<scope>)!: <subject>
```

#### Breaking change with message
You can also put indicate a breaking change on the second line of the commit message with a description.
```
<type>: <subject>
BREAKING CHANGE: <required message>
```

#### Types

Version influencing types:
- `fix`: user-facing bug fix (patch version bump 🏥)
- `feat`: user-facing feature (minor version bump 🌟)

Other types:
- `revert`: reverts a previous commit
- `docs`: changes to the documentation
- `build`: changes that affect the build system or external dependencies
- `test`: adding missing tests, refactoring tests; no production code change
- `refactor`: refactoring production code, eg. renaming a variable
- `style`: formatting, missing semi colons, etc; no production code change
- `perf`: changes that improve performance
- `ci`: changes to CI configuration files and scripts (eg. GitHub Actions)
- `chore`: updating grunt tasks etc; no production code change

If deciding between `feat` or `fix` vs another type, choose `feat` or `fix` because they influence the version bump appropriately.

#### Examples
- `chore: enabled NUXT SSR`
- `style: linting fix`
- `feat(button): add button component`
- `fix(button): inherit event listeners`
- `refactor(button)!: remove deprecated size prop`

### Releasing

To release your approved PR, simply merge it to `master` via squash.

[semantic-release](https://semantic-release.gitbook.io/semantic-release/) will run on Github Actions to determine the next version based on the commits and publish a new version to [npm](https://www.npmjs.com/package/@square/maker) and [GitHub](https://github.com/square/maker/releases).

#### Pre-releases
For instructions on how to do pre-releases, refer to the [semantic-release docs](https://github.com/semantic-release/semantic-release/blob/master/docs/recipes/pre-releases.md).

#### Dry-run
If you'd like to verify the expected version changes locally, you can run `semantic-release` in dry-mode.

In your local environment, run the following from your branch:

```sh
GH_TOKEN=<YOUR GitHub PAT> npx semantic-release -d -b <CURRENT BRANCHNAME>
```

Note, this will look at the specific commits in your branch but that they will be squashed when merged.
