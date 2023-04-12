import { render } from '@testing-library/react';
import CssBaseline from './CssBaseline';

describe('CssBaseline', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<CssBaseline />);

    expect(baseElement).toBeTruthy();
  });
});
