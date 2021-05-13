const rootMain = require('../../../.storybook/main');

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.addons.push(
  '@storybook/addon-links',
  '@storybook/addon-essentials',
  '@storybook/addon-storyshots'
);
rootMain.stories.push(
  '../src/**/*.stories.mdx',
  '../src/**/*.stories.@(js|jsx|ts|tsx)'
);

module.exports = rootMain;
