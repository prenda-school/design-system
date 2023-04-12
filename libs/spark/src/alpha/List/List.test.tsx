import { render } from '@testing-library/react';
import List from './List';

describe('List', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<List />);

    expect(baseElement).toBeTruthy();
  });
});
