import { Checkbox } from '../src';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots({ storyKindRegex: /^prenda-spark\/Checkbox$/ });

describe('Checkbox', () => {
  it('is truthy', () => {
    expect(Checkbox).toBeTruthy();
  });
});
