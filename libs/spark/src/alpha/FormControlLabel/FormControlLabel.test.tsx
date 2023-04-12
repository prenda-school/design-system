import { render } from '@testing-library/react';
import FormControlLabel from './FormControlLabel';

describe('FormControlLabel', () => {
  it('Can render without ThemeProvider', () => {
    const Input = () => <input />; // gets passed form control props that aren't valid on DOM
    const { baseElement } = render(
      <FormControlLabel label="Label" control={<Input />} />
    );

    expect(baseElement).toBeTruthy();
  });
});
