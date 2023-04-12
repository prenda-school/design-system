import { render } from '@testing-library/react';
import Paper from './Paper';

describe('Paper', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Paper />);

    expect(baseElement).toBeTruthy();
  });
});
