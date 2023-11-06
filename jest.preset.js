const nxPreset = require('@nx/jest/preset').default;

const setupFiles = (
  nxPreset.setupFiles === undefined ? [] : nxPreset.setupFiles
).concat(['../../jest.overrides.js']);

module.exports = { ...nxPreset, setupFiles };
