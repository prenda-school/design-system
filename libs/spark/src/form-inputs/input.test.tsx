import { Input } from '../src';
import 'jest-styled-components';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots({ storyKindRegex: /^prenda-spark\/Input$/ });

describe('Input', () => {
  it('is truthy', () => {
    expect(Input).toBeTruthy();
  });
});
