<p align="center">
  
<img width="128" src="https://github.com/prenda-school/prenda-spark/blob/main/public/img/spark-logo-multicolor-darker.svg" alt="Prenda Spark logo">

</p>

<h1 align="center">Prenda Spark</h1>

<div align="center">
  <p>
    The official monorepo for libraries implementing the <a href="https://www.figma.com/files/917908403520495571/project/20230042/Design-System?fuid=918218354701455034" rel="noopener" target="_blank">Spark Design System</a>, intended for use in <a href="https://www.prenda.com/" rel="noopener" target="_blank">Prenda</a> applications. Spark libraries include customized <a href="https://material-ui.com/" rel="noopener" target="_blank">Material-UI</a> components and Prenda illustrations and icons.
  </p>

  [![Contributors](https://img.shields.io/github/contributors/prenda-school/prenda-spark)](https://github.com/prenda-school/prenda-spark/graphs/contributors)
  [![License](https://img.shields.io/badge/license-MIT-blue)](https://github.com/prenda-school/prenda-spark/blob/main/LICENSE)
  [![NPM Latest Version](https://img.shields.io/npm/v/@prenda/spark/latest)](https://www.npmjs.com/package/@prenda/spark)
  [![NPM Downloads](https://img.shields.io/npm/dm/@prenda/spark)](https://www.npmjs.com/package/@prenda/spark)
  [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow)](https://conventionalcommits.org)
  [![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079)](https://semver.org/)
  [![Figma](https://img.shields.io/badge/-designed%20in%20Figma-f24e1e?logo=figma&logoColor=white)](https://www.figma.com/files/917908403520495571/project/20230042/Design-System?fuid=918218354701455034)
  [![Nx](https://img.shields.io/badge/-maintained%20with%20Nx-143055?logo=Nx&logoColor=white)](https://nx.dev/)
  [![Build State](https://github.com/prenda-school/prenda-spark/workflows/Continuous%20Integration%20Test/badge.svg)](https://github.com/prenda-school/prenda-spark/actions?query=workflow%3aContinuous%20Integration%20Test+branch%3Amain)


</div>

## Installation

Prenda Spark is available as an [NPM package](https://www.npmjs.com/package/@prenda/spark).

```sh
npm install @prenda/spark
```

## Usage

here is a quick example to get you started.

```tsx
import * as React from 'react';
import ReactDOM from 'react-dom';
import { SparkThemeProvider, Button } from '@prenda/spark';

function App() {
  return (
    <SparkThemeProvider>
      <Button>Hello World</Button>
    </SparkThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

The `SparkThemeProvider` can be placed anywhere in the render tree, at least above a Spark component (the need for the theme provider may be removed in the future).

## Documentation

There is no documentation site currently. We are working on getting a static storybook site up with self-documenting component stories.

## Contributing

Read the [contributing guide](/CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to Prenda Spark.

## Changelog

If you have recently updated, please read the changelog for each library for details of what has changed.

- [Spark](/libs/spark/CHANGELOG.md)

## License

This project is licensed under the terms of the [MIT license](/LICENSE).

## About

This project was generated using [Nx](https://nx.dev). This project was formerly generated using [Create React App](https://github.com/facebook/create-react-app) and [TSdx](https://tsdx.io/).

Prenda Spark is designed using Figma application, but is not affiliated with Figma in any way.