import { render } from '@testing-library/react';
import SideBarListSubheader from './SideBarListSubheader';

describe('SideBarListSubheader', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<SideBarListSubheader />);

    expect(baseElement).toBeTruthy();
  });
});
