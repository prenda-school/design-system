import { render } from '@testing-library/react';
import LinearProgress_unstable from './LinearProgress_unstable';

describe('LinearProgress_unstable', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<LinearProgress_unstable />);

    expect(baseElement).toBeTruthy();
  });
});
