import { render } from '@testing-library/react';
import CircularProgress from './CircularProgress';

describe('CircularProgress', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<CircularProgress />);

    expect(baseElement).toBeTruthy();
  });
});
