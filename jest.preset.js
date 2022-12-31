const nxPreset = require('@nrwl/jest/preset');

const setupFiles = (
  nxPreset.setupFiles === undefined ? [] : nxPreset.setupFiles
).concat(['../../jest.overrides.js']);

module.exports = { ...nxPreset, setupFiles };
