import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../decorators/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../examples/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'packages/dataviz/vite.config.ts',
      },
    },
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
