import { Button } from './';
import 'jest-styled-components';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots({ storyKindRegex: /^prenda-spark\/Button$/ });

describe('Button', () => {
  it('is truthy', () => {
    expect(Button).toBeTruthy();
  });
});
