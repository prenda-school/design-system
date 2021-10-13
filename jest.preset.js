const nxPreset = require('@nrwl/jest/preset');

const setupFiles = (nxPreset.setupFiles ?? []).concat([
  '../../jest.overrides.js',
]);

module.exports = { ...nxPreset, setupFiles };
