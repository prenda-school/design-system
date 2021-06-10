# Contributing to Prenda Spark

Thank you for helping us make this project great and being a part of the Prenda Spark community. Here are a few guidelines that will help you along the way.

## Code of Conduct

Prenda Spark has no official Code of Conduct. Prenda employees should abide company policies. Outside contributors are asked to be respectful and understanding at all times. Prenda project maintainers can take administrative action at any time.

## Design-to-Development Pipeline

Prenda Spark represents a collaborative effort between the Design and Engineering teams at Prenda. Every component starts out in a Figma Design page within the Web file. Once a component is initially completed, it can be implemented in the Spark repository. Any further changes should be tracked in this repository as well. This requires a significant amount of coordination, but we know it is possible with everyone involved.

### New

1. A designer completes an initial component design.
2. The designer files a "New Component" Issue in this repository. The description should:
    - Provide a link to the corresponding Figma page.
    - Describe the motivation and use-case of component, if necessary.
    - Enumerate descriptors like variants, sizes, etc.
    - Describe component makeup, if the component has, or is, a composition pattern.
3. An engineer assesses the description, communicates with the designer as necessary, and produces an initial written assessment:
    - Formalize enumerated descriptors to props
    - Suggest which components from [Material-UI](https://material-ui.com) can be custom-styled or modified to produce the new component.
4. Label the issue with "ready" (to be worked on).
5. A engineer "claims" the issue (assigns themselves), create a new branch, begins work on implementation.

### Change

1. A designers makes a change to a completed component.
2. The designer files a "Change to Component" Issue in this repository. The description should:
    - Provide a link to the corresponding Figma page.
    - Describe the before-and-after of the change.
2. An engineer assesses the description, communicates with the designer as necessary, and produces a change plan.
custom-styled or modified to produce the new component.
4. Label the issue with "ready" (to be worked on).
5. A engineer "claims" the issue (assigns themselves), create a new branch, begins work on implementation.

### Implementation Work

Requirements:
- Spark components is based on a Material-UI component(s).
  - Imports from MUI should be named and prefixed with `Mui`.
```tsx
// FILE: src/Button.tsx
import { 
  ButtonBase as MuiButtonBase,
  ButtonBaseProps as MuiButtonBaseProps,
} from '@material-ui/core';
``` 
- Spark component props are defined as a TypeScript interface and extend the underlying component's props.
```tsx
// FILE: src/Button.tsx
export interface ButtonProps 
  extends Omit<MuiButtonBaseProps, 'unwanted_prop'> {
    custom_prop?: 'value';
  }
```
- Styling is done using `styled-components` or `emotion`.
- Component is functional React component.
- Component name is prefixed with "Spark", but exported as proper name.
```tsx
// FILE: src/Button.tsx
...

const SparkButton: FC<ButtonProps> = (props) => {...};

export { SparkButton as Button };
```
- One component per file
  - internal (sub-)components can be moved to `src/internal/` as needed.
  - components with composition patterns that customize other existing Spark components should also be prefixed accordingly 
```tsx
// FILE: src/Button.tsx
import { Button, ButtonProps } from './Button';

export interface DropdownButtonProps = ButtonProps;

const SparkDropdownButton: React.FC<DropdownButtonProps> = props => {
  const { id, handleClick } = React.useContext(Context);
  return (
    <Button
      aria-controls={id}
      aria-haspopup="true"
      onClick={handleClick}
      {...props}
    />
  );
};

export { SparkDropdownButton as DropdownButton };
```
- Component and Props interface are exported in `src/index.ts`.

### Other

If somebody claims an issue but doesn't follow up for more than a week, then it's fine to take it over -- you should leave a comment to let others know.

If there has been no activity on an issue for 7 to 14 days, it is safe to assume that nobody is working on it.

## Keep a Pull Request small

When in doubt, keep your Pull Requests small. To give a Pull Request the best chance of getting accepted, don't bundle more than one feature or bug fix per Pull Request. It's often best to create two smaller Pull Requests than one big one.

### Open an Issue first

Before working on any change besides chores, it is best to open an issue first and discuss it with the maintainers.

## Get Up and Running

1. Initial setup depends on if you are inside or outside of Prenda. See [Inside of Prenda?](##-inside-of-prenda) or [Outside of Prenda?](##-outside-of-prenda).

2. Install dependencies.
```sh
npm install
```

3. Create a new topic branch.
```sh
git checkout -b my-topic-branch
```

From here, your next steps will be project specific. See project README's:
- [Spark](/libs/spark/README.md)

## Inside of Prenda

You have ability to create new branches in the repo instead of forking.

1. Clone the repository to your local machine.

```sh
# Inside of Prenda?
git clone https://github.com/prenda-school/prenda-spark
cd prenda-spark
```

## Outside of Prenda

If you are not a part of Prenda but would like to contribute to Prenda Spark, then we appreciate you and will accept your contributions. However, you will not be able to be as closely involved in the Design-to-Development Pipeline; you will not be given access to Prenda's Figma organization or design files. The best places for you to contribute are fixing bugs and improving our documentation, stories, and markdown.

Setup Process:

1. Fork the repository.

2. Clone the fork to your local machine, add upstream remote, and synchronize your local with upstream.

```sh
# Outside of Prenda?
git clone https://github.com/<your username>/prenda-spark.git
cd prenda-spark
git remote add upstream https://github.com/prenda-school/prenda-spark.git
git checkout main
git pull upstream main
```

## About Nx

Prenda Spark uses [Nx](https://nx.dev/) to scaffold and support our workspace. Read through [Getting Started](https://nx.dev/latest/angular/getting-started/intro) to become familiar with it.

Here's some notable description, auto-generated by Nx, that we'll leave for posterity / knowledge.

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
