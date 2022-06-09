import { render } from '@testing-library/react';
import Unstable_FormControlLabel from './Unstable_FormControlLabel';

describe('Unstable_FormControlLabel', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_FormControlLabel label="Label" control={<input />} />
    );

    expect(baseElement).toBeTruthy();
  });
});
