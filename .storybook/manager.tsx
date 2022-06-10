import React from 'react';
import { addons, Config } from '@storybook/addons';
import { create } from '@storybook/theming';

// Read about the purpose of this file: https://storybook.js.org/docs/react/configure/features-and-behavior

// Hierarchy naming described here: https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy . Limitation is that slashes ("/") cannot be used in a name, so we define some shorthand-mappings here (also these are just long).
const nameToLabel = {
  '@ps': '@prenda/spark',
  '@psi': '@prenda/spark-icons',
};

const config: Config = {
  sidebar: {
    renderLabel: (item) => {
      const name = nameToLabel[item.name] ?? item.name;
      return <abbr title={name}>{name}</abbr>;
    },
    showRoots: false,
  },
  theme: create({
    base: 'light',
    brandTitle: 'Prenda Design System',
    brandUrl: 'https://github.com/prenda-school/design-system',
    brandImage: '/img/pds-brand-image.svg',
  }),
};

addons.setConfig(config);

export default config;
