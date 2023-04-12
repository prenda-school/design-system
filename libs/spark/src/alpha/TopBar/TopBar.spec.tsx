import { render } from '@testing-library/react';
import TopBar from './TopBar';

describe('TopBar', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<TopBar />);

    expect(baseElement).toBeTruthy();
  });
});
