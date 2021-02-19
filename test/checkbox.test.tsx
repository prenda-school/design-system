import { Checkbox } from '../src';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots();

describe('Button', () => {
  it('is truthy', () => {
    expect(Checkbox).toBeTruthy();
  });
});
