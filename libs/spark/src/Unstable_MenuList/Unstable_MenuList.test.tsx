import { render } from '@testing-library/react';
import Unstable_MenuList from './Unstable_MenuList';

describe('Unstable_MenuList', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_MenuList />);

    expect(baseElement).toBeTruthy();
  });
});
