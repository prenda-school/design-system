import { render } from '@testing-library/react';
import SideBarListSubheader_unstable from './SideBarListSubheader_unstable';

describe('SideBarListSubheader_unstable', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<SideBarListSubheader_unstable />);

    expect(baseElement).toBeTruthy();
  });
});
