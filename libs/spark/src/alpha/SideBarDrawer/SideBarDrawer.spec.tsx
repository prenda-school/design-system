import { render } from '@testing-library/react';
import SideBarProvider from '../SideBarProvider';
import SideBarDrawer from './SideBarDrawer';

describe('SideBarDrawer', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <SideBarProvider>
        <SideBarDrawer />
      </SideBarProvider>
    );

    expect(baseElement).toBeTruthy();
  });
});
