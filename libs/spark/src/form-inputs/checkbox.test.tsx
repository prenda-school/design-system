import { Checkbox } from '../src';
import 'jest-styled-components';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots({ storyKindRegex: /^prenda-spark\/Checkbox$/ });

describe('Checkbox', () => {
  it('is truthy', () => {
    expect(Checkbox).toBeTruthy();
  });
});
