import { IconButton } from './';
import 'jest-styled-components';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots({ storyKindRegex: /^prenda-spark\/IconButton$/ });

describe('IconButton', () => {
  it('is truthy', () => {
    expect(IconButton).toBeTruthy();
  });
});
