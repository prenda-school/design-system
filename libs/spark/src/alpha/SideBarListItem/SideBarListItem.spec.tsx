import { render } from '@testing-library/react';
import SideBarProvider from '../SideBarProvider';
import SideBarListItem from './SideBarListItem';

describe('SideBarListItem', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <SideBarProvider>
        <SideBarListItem />
      </SideBarProvider>
    );

    expect(baseElement).toBeTruthy();
  });
});
