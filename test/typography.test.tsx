import { Typography } from '../src';
import 'jest-styled-components';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots({ storyKindRegex: /^prenda-spark\/Typography$/ });

describe('Typography', () => {
  it('is truthy', () => {
    expect(Typography).toBeTruthy();
  });
});
