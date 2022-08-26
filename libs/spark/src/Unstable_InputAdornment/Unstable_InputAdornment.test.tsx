import { render } from '@testing-library/react';
import Unstable_InputAdornment from './Unstable_InputAdornment';

describe('Unstable_InputAdornment', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_InputAdornment position="start">kg</Unstable_InputAdornment>
    );

    expect(baseElement).toBeTruthy();
  });
});
