import { render } from '@testing-library/react';
import FormHelperText from './FormHelperText';

describe('FormHelperText', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<FormHelperText />);

    expect(baseElement).toBeTruthy();
  });
});
