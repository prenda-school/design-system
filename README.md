## Prenda Spark

- [Documentation](#documentation)
- [Development](#development)
- [WIP and TODOS](#wip-and-todos)
- [Install](#install)
- [Usage](#usage)

---

## Documentation

> Official Docs: https://prenda-school.github.io/prenda-documentation/

Prenda Spark, based on create-react-library (https://github.com/transitive-bullshit/create-react-library), extends Material UI react components (https://material-ui.com/) by overriding select styles to match the Prenda Design System philosophy

## Development

Install packages in root and example directories.

```
npm i && cd example && npm i
```

Run `npm run start` in the root and example directories. Use two terminals/tabs for this.

Now changes you make to components in the `src` dir within the project root should automatically be detected and cause Spark to be built. The build output will then be put into dist and be made available to the example directory project for testing.

## WIP and TODOS

- Implement https://www.figma.com/file/y6Ca8BdJtQEd3Of1saRieF/Prenda-Design-System---Web?node-id=29%3A0
- Possibly better development feedback loop through a dedicated react component playground tool?
- Add CNAME record for pointing \<URL TBD> to docs.
- Re-publish to NPM under `@prenda/spark` (currently is `prenda-spark`).
- Add github action/other mechanism for running an npm publish process if version changes in `package.json`.

## Install

```bash
npm install --save prenda-spark
```

## Usage

```tsx
import React from 'react'

import { Button } from 'prenda-spark'

const App = () => {
  return (
    <>
      <Button size='large'>I am a button</Button>
    </>
  )
}

export default App
```
