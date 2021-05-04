import {
  DropdownContext,
  DropdownButton,
  DropdownMenu,
  DropdownMenuItem,
  DropdownDivider,
} from '../src';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots({ storyKindRegex: /^prenda-spark\/Menu$/ });

describe('DropdownContext', () => {
  it('is truthy', () => {
    expect(DropdownContext).toBeTruthy();
  });
});

describe('DropdownButton', () => {
  it('is truthy', () => {
    expect(DropdownButton).toBeTruthy();
  });
});
describe('DropdownMenu', () => {
  it('is truthy', () => {
    expect(DropdownMenu).toBeTruthy();
  });
});
describe('DropdownMenuItem', () => {
  it('is truthy', () => {
    expect(DropdownMenuItem).toBeTruthy();
  });
});
describe('DropdownDivider', () => {
  it('is truthy', () => {
    expect(DropdownDivider).toBeTruthy();
  });
});
