import { Button } from '../src/';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots({ storyKindRegex: /^.*Button.*$/ });

describe('Button', () => {
  it('is truthy', () => {
    expect(Button).toBeTruthy();
  });
});
