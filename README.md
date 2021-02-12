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

Install packages in root dir then run `npm run storybook`. Navigate to `localhost:6006`. If a component you are working on doesn't have a story then you can add one in the `src/stories/`.

## WIP and TODOS

- Have storybook import the output from the build rather than directly importing ts (as a consumer would do).
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
