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

- Move this WIP and TODOS to asana (todo)
- Implement https://www.figma.com/file/y6Ca8BdJtQEd3Of1saRieF/Prenda-Design-System---Web?node-id=29%3A0
  - Button (MVP)
  - Menu (MVP)
  - Checkbox (MVP)
  - Input (MVP)
  - Large Input (MVP)
  - Radio (MVP)
  - Fonts (todo)
- Add CNAME record for pointing \<URL TBD> to docs.
- Add github action/other mechanism for running an npm publish process if version changes in `package.json`. (todo)
- Optimize Menu component (among other issues it shouldn't need an internal useState).  (todo)
- Implement Colors https://www.figma.com/file/w9lodWeivyS4GHdBNIYaJr/Spark-Design-System---Base?node-id=1%3A2 (todo)
- Implement Logos https://www.figma.com/file/w9lodWeivyS4GHdBNIYaJr/Spark-Design-System---Base?node-id=5%3A0 (todo)
- Implement Typography https://www.figma.com/file/w9lodWeivyS4GHdBNIYaJr/Spark-Design-System---Base?node-id=1%3A3 (todo)
- Add Founders Grotesk font (todo)
- Implement Iconography https://www.figma.com/file/w9lodWeivyS4GHdBNIYaJr/Spark-Design-System---Base?node-id=65%3A158 (todo)
- Implement https://www.figma.com/file/w9lodWeivyS4GHdBNIYaJr/Spark-Design-System---Base?node-id=65%3A11 (todo)

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
