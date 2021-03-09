# 🔬 Lab

The lab is a free space where you can experiment features holistically in an app environment. It comes with features such as server-side rendering and HMR.

## Develop in the Lab

```sh
$ npm run lab
```

## Creating a lab experiment

Add a new Vue file or directory in `lab/experiments` to create a lab experiment. Content from this directory is used to automatically generate the lab Vue router, similarly to [NuxtJs's file-system routing](https://nuxtjs.org/docs/2.x/features/file-system-routing).


### Creating a simple lab experiment
Add your Vue SFC file to this directory and name it appropriately. That's it! Spin up the lab and find it on the index page.

```
lab/experiments/
├── ...
│
│   # Creates router entry /YourNewExperiment
└── YourNewExperiment.vue
```


### Creating a multi-page lab experiment
1. Create a directory named after the experiment
2. Add an `index.vue` SFC as the entry page of the experiment directory
3. Add relavant Vue SFCs to the directory to create pages
4. (Optional) If you have non-page components that you want to use in your pages, create a `components` directory
5. (Optional) If you want to create a [layout](https://router.vuejs.org/guide/essentials/nested-routes.html) shared across the pages, add a Vue SFC as a sibling to the directory with the same name.

```
lab/experiments/
├── ...
│
│   # Creates layout for YourNewExperiment (optional)
├── YourNewExperiment.vue
│
│   # Creates router entry /YourNewExperiment
└── YourNewExperiment/
    │
    │   # Main page for /YourNewExperiment
    ├── index.vue
    │
    │   # Directory for components (optional)
    ├── components/
    │
    │   # Creates router entry /YourNewExperiment/PageA
    └── PageA.vue

```

### Building & Deploying

```sh
$ npm run lab-build
```

The built assets are placed into the `/.dist/lab/{git-branch-name}` directory and automatically pushed to Github so they should be visible from the [public Square Maker Github Pages directory](https://square.github.io/maker/). You can share the deploy link with anyone if you need them to take a look at your WIP work. You can also view the lab locally by running `npx http-server` from built assets directory and visiting `localhost:8080` in your browser.
