import path = require('path');
import jscodeshift from 'jscodeshift';
import readFile from '../util/readFile';
import transform from './Typography';

function read(fileName) {
  return readFile(path.join(__dirname, fileName));
}

describe('@prenda/design-codemod', () => {
  describe('v0.11.0', () => {
    describe('Typography', () => {
      it('transforms parameters as needed', () => {
        const actual = transform(
          {
            source: read('./Typography.test/actual.js'),
            path: require.resolve('./Typography.test/actual.js'),
          },
          { jscodeshift }
        );

        const expected = read('./Typography.test/expected.js');
        expect(actual).toBe(expected);
      });

      it('should be idempotent', () => {
        const actual = transform(
          {
            source: read('./Typography.test/expected.js'),
            path: require.resolve('./Typography.test/expected.js'),
          },
          { jscodeshift }
        );

        const expected = read('./Typography.test/expected.js');
        expect(actual).toBe(expected);
      });
    });
  });
});
