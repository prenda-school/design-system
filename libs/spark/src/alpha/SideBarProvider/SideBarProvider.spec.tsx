import { render } from '@testing-library/react';
import SideBarProvider from './SideBarProvider';

describe('SideBarProvider', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<SideBarProvider />);

    expect(baseElement).toBeTruthy();
  });
});
