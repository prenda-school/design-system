import { render } from '@testing-library/react';
import SideBarProvider_unstable from '../SideBarProvider_unstable';
import SideBarDrawer_unstable from './SideBarDrawer_unstable';

describe('SideBarDrawer_unstable', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <SideBarProvider_unstable>
        <SideBarDrawer_unstable />
      </SideBarProvider_unstable>
    );

    expect(baseElement).toBeTruthy();
  });
});
