<p align="center">
  
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/prenda-school/design-system/blob/main/public/img/prenda-design-system-abstract-mark-logo-inverse.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/prenda-school/design-system/blob/main/public/img/prenda-design-system-abstract-mark-logo.svg">
  <img alt="Prenda Design System logo" src="https://github.com/prenda-school/design-system/blob/main/public/img/prenda-design-system-abstract-mark-logo.svg" width="128">
</picture>

</p>

<h1 align="center">Prenda Design System</h1>

<div align="center">
  <p>
    Implementations of the <a href="https://www.figma.com/files/917908403520495571/project/20230042/Design-System?fuid=918218354701455034" rel="noopener" target="_blank">Prenda Design System</a>, intended for use in <a href="https://www.prenda.com/" rel="noopener" target="_blank">Prenda</a> software applications.
  </p>

[![Contributors](https://img.shields.io/github/contributors/prenda-school/design-system)](https://github.com/prenda-school/design-system/graphs/contributors)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://github.com/prenda-school/design-system/blob/main/LICENSE)
[![NPM Latest Version](https://img.shields.io/npm/v/@prenda/spark/latest)](https://www.npmjs.com/package/@prenda/spark)
[![NPM Downloads](https://img.shields.io/npm/dm/@prenda/spark)](https://www.npmjs.com/package/@prenda/spark)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow)](https://conventionalcommits.org)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079)](https://semver.org/)
[![Figma](https://img.shields.io/badge/-designed%20in%20Figma-f24e1e?logo=figma&logoColor=white)](https://www.figma.com/files/917908403520495571/project/20230042/Design-System?fuid=918218354701455034)
[![Nx](https://img.shields.io/badge/-maintained%20with%20Nx-143055?logo=Nx&logoColor=white)](https://nx.dev/)
[![Build State](https://github.com/prenda-school/design-system/workflows/Continuous%20Integration%20Test/badge.svg)](https://github.com/prenda-school/design-system/actions?query=workflow%3aContinuous%20Integration%20Test+branch%3Amain)

</div>

## Installation

Implementations are available as installable NPM packages:

- [@prenda/spark](https://www.npmjs.com/package/@prenda/spark)
- [@prenda/spark-icons](https://www.npmjs.com/package/@prenda/spark-icons)

```sh
npm i @prenda/spark @prenda/spark-icons
```

## Usage

Here is an example to get you started.

```tsx
import React from 'react';
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

## Documentation

The [Prenda Design System Storybook](https://www.chromatic.com/library?appId=60b7f55f55fbd4004993da4c) acts as the documentation of the implementation. Stories are arranged in a hierarchy according to their NPM package and export names. Stories take on two forms: descriptive and programmatic. Descriptive stories are capitalized and present information in exposition. Programmatic stories are lowercased, named according to progammatic combinations (like prop names and values), and present the output of the programming.

## Contributing

Read the [contributing guide](/CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes.

## Updating

Read the changelog of each library to address breaking changes and learn about new features and fixes.

- [`@prenda/spark/CHANGELOG`](https://github.com/prenda-school/design-system/blob/main/libs/spark/CHANGELOG.md)
- [`@prenda/spark-icons/CHANGELOG`](https://github.com/prenda-school/design-system/blob/main/libs/spark-icons/CHANGELOG.md)

## License

This project is licensed under the terms of the [MIT license](/LICENSE).

## About

This project was generated using [Nx](https://nx.dev). This project was formerly generated using [Create React App](https://github.com/facebook/create-react-app) and [TSdx](https://tsdx.io/).

Prenda Design System is designed using Figma application, but is not affiliated with Figma in any way.
