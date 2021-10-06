import * as React from 'react';
import { addons } from '@storybook/addons';

// Read about the purpose of this file: https://storybook.js.org/docs/react/configure/features-and-behavior

// Hierarchy naming described here: https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
//  Limitation is that slashes ("/") cannot be used in a name. Also
//  these are just long.
const nameToLabel = {
  pds: 'Prenda Design System (PDS)',
  '@ps': '@prenda/spark',
  '@psi': '@prenda/spark-icons',
};

// Hierarchy naming
addons.setConfig({
  sidebar: {
    renderLabel: (item) => {
      const name = nameToLabel[item.name] ?? item.name;
      return <abbr title={name}>{name}</abbr>;
    },
  },
});
