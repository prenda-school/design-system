import { render } from '@testing-library/react';
import SideBarList_unstable from './SideBarList_unstable';

describe('SideBarList_unstable', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<SideBarList_unstable />);

    expect(baseElement).toBeTruthy();
  });
});
