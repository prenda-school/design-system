# spark

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test spark` to execute the unit tests via [Jest](https://jestjs.io).

## Prenda Spark

- [Documentation](#documentation)
- [Development](#development)
- [Testing](#testing)
- [WIP and TODOS](#wip-and-todos)
- [Install](#install)
- [Usage](#usage)

---

## Documentation

> Official Docs: https://prenda-school.github.io/prenda-documentation/

Prenda Spark extends Material UI react components (https://material-ui.com/) by overriding select styles to match the Prenda Design System philosophy

## Development

1. Clone the repository.
2. Ensure you have Node Version Manager installed on your system ([see instructions](https://github.com/nvm-sh/nvm#installing-and-updating)).
3. Run `> nvm use` to ensure specified node version is used.
4. Run `> npm ci` to install dependencies.
5. Run `> nx run spark:storybook` to trigger nx to run the spark project in develop mode (open `http://localhost:4200/` in your default browser to view.)

Now you can develop components within the `libs/spark/src/` directory and see changes update in realtime.

## Testing

Run tests with `nx test spark` for tests using `@testing-library/react`(Prenda Spark uses Jest tests with React Testing Library) . To run end-to-end tests with [Cypress.io](https://www.cypress.io/), run `nx run spark-e2e`, and add the `--watch` flag to run using the Cypress test runner.

## WIP and TODOS

- Please see the Asana board for all current WIP and TODOS https://app.asana.com/share/prenda/spark-v1-release-wip-and-todos/995455616843969/2480fe89c9ef452f98b70ba4d981caa9

## Install

```bash
npm install --save @prenda/spark
```

## Usage

```tsx
import React from 'react';

import { Button } from '@prenda/spark';

const App = () => {
  return (
    <>
      <Button size="large">I am a button</Button>
    </>
  );
};

export default App;
```
