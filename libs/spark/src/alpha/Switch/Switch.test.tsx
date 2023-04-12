import { render } from '@testing-library/react';
import Switch from './Switch';

describe('Switch', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Switch aria-label="Label" />);

    expect(baseElement).toBeTruthy();
  });
});
