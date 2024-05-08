import type { StorybookConfig } from '@storybook/react-vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm',
    '@chromatic-com/storybook',
  ],
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
    tokens: {
      title: '@prenda/tokens',
      url: 'http://localhost:4403',
    },
  },
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [nxViteTsPaths()],
    }),
  docs: {
    autodocs: true,
  },
};

export default config;
