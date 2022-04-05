import { render } from '@testing-library/react';
import Unstable_CssBaseline from './Unstable_CssBaseline';

describe('Unstable_CssBaseline', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_CssBaseline />);

    expect(baseElement).toBeTruthy();
  });
});
