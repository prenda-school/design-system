import { render } from '@testing-library/react';
import Typography from './Typography';

describe('Typography', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Typography />);

    expect(baseElement).toBeTruthy();
  });
});
