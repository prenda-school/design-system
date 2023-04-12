import { render } from '@testing-library/react';
import LinearProgress from './LinearProgress';

describe('LinearProgress', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<LinearProgress />);

    expect(baseElement).toBeTruthy();
  });
});
