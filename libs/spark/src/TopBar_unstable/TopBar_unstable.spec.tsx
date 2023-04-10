import { render } from '@testing-library/react';
import TopBar_unstable from './TopBar_unstable';

describe('TopBar_unstable', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<TopBar_unstable />);

    expect(baseElement).toBeTruthy();
  });
});
