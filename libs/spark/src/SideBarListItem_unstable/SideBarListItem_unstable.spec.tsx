import { render } from '@testing-library/react';
import SideBarProvider_unstable from '../SideBarProvider_unstable';
import SideBarListItem_unstable from './SideBarListItem_unstable';

describe('SideBarListItem_unstable', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <SideBarProvider_unstable>
        <SideBarListItem_unstable />
      </SideBarProvider_unstable>
    );

    expect(baseElement).toBeTruthy();
  });
});
