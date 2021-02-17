import { Menu } from '../src';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots();

describe('Button', () => {
  it('is truthy', () => {
    expect(Menu).toBeTruthy();
  });
});
