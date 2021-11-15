module.exports = {
  displayName: 'spark',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  coverageDirectory: '../../coverage/libs/spark',
  /**
   * Enable `@testing-library/jest-dom` matchers.
   *
   * @see https://jestjs.io/docs/configuration#setupfilesafterenv-array
   */
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
