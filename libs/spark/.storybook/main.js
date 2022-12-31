const rootMain = require('../../../.storybook/main');

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.addons.push('@storybook/addon-links', 'storybook-addon-pseudo-states');
rootMain.stories.push('../**/*.stories.@(js|jsx|ts|tsx|mdx)');

rootMain.typescript = {
  check: true,
  checkOptions: {
    tsconfig: './libs/spark/.storybook/tsconfig.json',
  },
};

module.exports = rootMain;
