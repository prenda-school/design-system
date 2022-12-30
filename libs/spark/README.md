# @prenda/spark

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

Prenda Spark extends Material UI react components (https://v4.mui.com/) by overriding select styles to match the Prenda Design System philosophy.

## Development

### Set Up

1. Clone the repository.
2. Ensure you have Node Version Manager installed on your system ([see instructions](https://github.com/nvm-sh/nvm#installing-and-updating)).
3. Run `nvm use` to ensure specified node version is used.
4. Run `npm ci` to install dependencies.
5. Ensure you have [Nx](https://nx.dev) installed on your system (`npm i -g nx`) ([see more](https://nx.dev/latest/react/tutorial/01-create-application#note-on-the-nx-cli)), or if this is not possible, you can use `npx nx` instead of `nx` in the commands in this document.

### Usage

Run `nx run spark:storybook` to run the spark project in develop mode (open `http://localhost:4400/` in your default browser to view.)

Now you can develop components within the `libs/spark/src/` directory and see changes update in realtime.

Depending on your preferred IDE, consider downloading a [community IDE plugin for Nx workspaces](https://nx.dev/latest/react/getting-started/console#download).

The Spark theme refers to font files for _Nunito_, which should be served at the `/fonts` path. These fonts are available in this library in `libs/spark/public/fonts`.

## Testing

Run tests with `nx run spark:test`.
Spark uses Jest tests with React Testing Library.

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
