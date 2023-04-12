import { render } from '@testing-library/react';
import InputAdornment from './InputAdornment';

describe('InputAdornment', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <InputAdornment position="start">kg</InputAdornment>
    );

    expect(baseElement).toBeTruthy();
  });
});
