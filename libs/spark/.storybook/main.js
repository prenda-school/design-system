const rootMain = require('../../../.storybook/main');

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.addons.push('@storybook/addon-links', '@storybook/addon-essentials');
rootMain.stories.push(
  '../stories/**/*.stories.mdx',
  '../stories/**/*.stories.@(js|jsx|ts|tsx)'
);

rootMain.typescript = {
  check: true,
  checkOptions: {
    tsconfig: './libs/spark/.storybook/tsconfig.json',
  },
};

module.exports = rootMain;
