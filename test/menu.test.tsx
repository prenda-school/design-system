import { Menu } from '../src';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots({ storyKindRegex: /^.*Menu.*$/ });

describe('Menu', () => {
  it('is truthy', () => {
    expect(Menu).toBeTruthy();
  });
});
