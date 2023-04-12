import { render } from '@testing-library/react';
import SideBarList from './SideBarList';

describe('SideBarList', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<SideBarList />);

    expect(baseElement).toBeTruthy();
  });
});
