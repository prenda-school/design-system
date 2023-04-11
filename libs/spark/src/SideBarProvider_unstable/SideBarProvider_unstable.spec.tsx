import { render } from '@testing-library/react';
import SideBarProvider_unstable from './SideBarProvider_unstable';

describe('SideBarProvider_unstable', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<SideBarProvider_unstable />);

    expect(baseElement).toBeTruthy();
  });
});
