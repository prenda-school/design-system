import type { StorybookConfig } from '@storybook/react-vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  refs: {
    components: {
      title: '@prenda/components',
      url: 'http://localhost:4401',
    },
    icons: {
      title: '@prenda/icons',
      url: 'http://localhost:4402',
    },
  },
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [nxViteTsPaths()],
    }),
};

export default config;
