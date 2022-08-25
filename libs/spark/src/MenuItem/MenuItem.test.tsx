import { render } from '@testing-library/react';
import MenuItem from './MenuItem';

describe('MenuItem', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<MenuItem>Label</MenuItem>);

    expect(baseElement).toBeTruthy();
  });
});
