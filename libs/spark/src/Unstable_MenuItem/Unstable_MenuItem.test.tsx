import { render } from '@testing-library/react';
import Unstable_MenuItem from './Unstable_MenuItem';

describe('Unstable_MenuItem', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_MenuItem>Label</Unstable_MenuItem>
    );

    expect(baseElement).toBeTruthy();
  });
});
