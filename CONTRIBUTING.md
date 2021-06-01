# Contributing to Prenda Spark

Thank you for helping us make this project great and being a part of the Prenda Spark community. Here are a few guidelines that will help you along the way.

## Code of Conduct

Prenda Spark has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it.
Please read [the full text](/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Design-to-Development Pipeline

Prenda Spark represents a collaborative effort between the Design and Engineering teams at Prenda. Every component starts out in a Figma Design page within the Web file. 

1. A designer completes an initial component design.
2. The designer files a "New Component" Issue in this repository. The description should:
  - Provide a link to the corresponding Figma page.
  - Describe the motivation and use-case of component, if necessary.
  - Enumerate descriptors like variants, sizes, etc.
  - Describe component makeup, if the component has, or is, a composition pattern.
3. An engineer assesses the description, communicates with the designer as necessary, and produces an initial written assessment:
  - Formalize enumerated descriptors to props
  - Suggest which components from [Material-UI](https://material-ui.com) can be custom-styled or modified to produce the new component.
4. Once the assessment is complete, either initially or with additional engineer / designer conversation, the issue is labeled "ready".
5. One or many engineers claim the issue, create a new branch, and work on the implementation.
  - Claiming = assign to themselves -- the aim is to make sure two people don't unknowingly work on the same issue.
  - Branches can be created by Prenda engineers and help collaboration or picking up where others left off, if everyone is in agreement for that. 
    - If you are outside of Prenda, fork & clone instead of branch, and see below.

The Spark Design System is constantly evolving, most rapidly in Figma. When a designers makes a change to a component's Figma page:

1. The designer files a "Change to Component" Issue in this repository. The description should:
  - Provide a link to the corresponding Figma page.
  - Describe the before-and-after of the change.
2. An engineer assesses the description, communicates with the designer as necessary, and produces a change plan.
3. An engineer claims the issue, creates a new branch, and works on implementing the change.

If somebody claims an issue but doesn't follow up for more than a week, it's fine to take it over but you should still leave a comment.
If there has been no activity on the issue for 7 to 14 days, it is safe to assume that nobody is working on it.

## Outside of Prenda

If you are not a part of Prenda but would like to contribute to Prenda Spark, then we appreciate you and will accept your contributions. However, you will not be able to be as closely involved in the Design Pipeline; you will not be given access to Prenda's Figma organization or design files. The best places for you to contribute are fixing bugs and improving our documentation, stories, and markdown.

## Keep a Pull Request small

When in doubt, keep your Pull Requests small. To give a Pull Request the best chance of getting accepted, don't bundle more than one feature or bug fix per Pull Request. It's often best to create two smaller Pull Requests than one big one.

### Open an Issue first

Before working on any change besides chores, it is best to open an issue first and discuss it with the maintainers.

## About Nx

### Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

### Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@prenda-spark/mylib`.

### Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

### Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

### Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

### Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

### Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
