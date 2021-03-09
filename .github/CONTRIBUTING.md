# Contributing

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

### Develop in DocDev

Render a component README.md in doc-dev—a server-side rendered dev environment with [hot-module replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/):

```sh
$ component=COMPONENT_NAME npm run dev
```

### Develop in the Lab

Refer to [/lab/README.md](/lab/README.md).

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

### Developing the Styleguide

Refer to [/styleguide/README.md](/styleguide/README.md).

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

- `master`

- `built`

- `develop`

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
