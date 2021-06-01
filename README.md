<p align="center">
  
<img width="128" src="https://github.com/prenda-school/prenda-spark/blob/1e3f9d9c01980b5e323b595310e558dfba88b137/public/img/spark-logo-multicolor.svg" alt="Prenda Spark logo">

</p>

<h1 align="center">Prenda Spark</h1>

<div align="center">
  The official monorepo for libraries implementing the <a href="https://www.figma.com/files/917908403520495571/project/20230042/Design-System?fuid=918218354701455034" rel="noopener" target="_blank">Spark Design System</a>, intended for use in <a href="https://www.prenda.com/" rel="noopener" target="_blank">Prenda</a> applications. Libraries include customized <a href="https://material-ui.com/" rel="noopener" target="_blank">Material-UI</a> components and Prenda illustrations and icons.

  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/prenda-school/prenda-spark/blob/main/LICENSE)
  [![NPM Latest Version](https://img.shields.io/npm/v/@prenda/spark/latest.svg)](https://www.npmjs.com/package/@prenda/spark)
  [![NPM Downloads](https://img.shields.io/npm/dm/@prenda/spark.svg)](https://www.npmjs.com/package/@prenda/spark)
  [![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)]()
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
