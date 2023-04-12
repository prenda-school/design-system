import { render } from '@testing-library/react';
import MenuList from './MenuList';

describe('MenuList', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<MenuList />);

    expect(baseElement).toBeTruthy();
  });
});
