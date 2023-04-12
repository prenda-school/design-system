import { render } from '@testing-library/react';
import FormControlLabel from './FormControlLabel';

describe('FormControlLabel', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <FormControlLabel label="Label" control={<input />} />
    );

    expect(baseElement).toBeTruthy();
  });
});
