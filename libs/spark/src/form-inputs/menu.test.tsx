import { Menu } from './';
import 'jest-styled-components';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots({ storyKindRegex: /^prenda-spark\/Menu$/ });

describe('Menu', () => {
  it('is truthy', () => {
    expect(Menu).toBeTruthy();
  });
});
