import { render } from '@testing-library/react';
import CircularProgress_unstable from './CircularProgress_unstable';

describe('CircularProgress_unstable', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<CircularProgress_unstable />);

    expect(baseElement).toBeTruthy();
  });
});
