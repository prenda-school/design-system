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

Prenda Spark, based on TSdx (https://tsdx.io/), extends Material UI react components (https://material-ui.com/) by overriding select styles to match the Prenda Design System philosophy

## Development

1. Clone the repository.
2. Ensure you have Node Version Manager installed on your system ([see instructions](https://github.com/nvm-sh/nvm#installing-and-updating)).
3. Run `> nvm use` to ensure specified node version is used.
4. Ensure you have Yarn 1 installed globally ([see instructions](https://classic.yarnpkg.com/en/docs/install/#windows-stable)).
5. Run `> yarn` to install dependencies.
6. Run `> yarn start` to trigger TSdx to run the project is development watch mode.
7. Open another terminal
8. Run `> yarn storybook` to start the Storybook component explorer on port 6006 (should automatically open `http://localhost:6006/` in your default browser) (loads stories from `./stories`).

Now you can develop components within the `src/` directory and see changes update in realtime.

### Writing Stories

1. Ensure you are importing Spark modules from the build output (`/dist`) and not the source (`/src`)

```diff
# FILE: /stories/button.stories.tsx
- import { Button } from '../src'
+ import { Button } from '../dist'
```

#### Notes

- Ensure
- Yarn is used over NPM so that ["resolutions"](https://classic.yarnpkg.com/en/docs/selective-version-resolutions/) can be specified in `./package.json`. NPM does not have this capability yet.
- Yarn has no direct equivalent of `> npm ci`, but you can use `> rm -rf ./node_modules && yarn install --frozen-lockfile` if the functionality is needed.

## Testing

Run tests with `yarn test`. We are using snapshot testing (https://storybook.js.org/docs/react/workflows/snapshot-testing). Run `yarn run test:updateSnapshot` to update the snapshots.

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
