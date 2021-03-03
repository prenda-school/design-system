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

Install packages in root dir then run `npm run storybook`. Navigate to `localhost:6006`. If a component you are working on doesn't have a story then you can add one in the `/stories/`.

Implement components in `/src`.

## Testing

Run tests with `npm run test`. We are using snapshot testing (https://storybook.js.org/docs/react/workflows/snapshot-testing). Run `npm run test:updateSnapshot` to update the snapshots.

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
