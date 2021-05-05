import { Radio } from '../src';
import 'jest-styled-components';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots({ storyKindRegex: /^prenda-spark\/Radio$/ });

describe('Radio', () => {
  it('is truthy', () => {
    expect(Radio).toBeTruthy();
  });
});
