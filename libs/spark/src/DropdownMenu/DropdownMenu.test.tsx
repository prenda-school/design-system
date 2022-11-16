import { render } from '@testing-library/react';
import DropdownContext from '../DropdownContext';
import Unstable_Menu from '../Unstable_Menu';
import DropdownMenu from './DropdownMenu';

describe('DropdownMenu', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <DropdownContext>
        <DropdownMenu />
      </DropdownContext>
    );

    expect(baseElement).toBeTruthy();
  });

  it('Can render with component override of Unstable Menu', () => {
    const { baseElement } = render(
      <DropdownContext>
        <DropdownMenu component={Unstable_Menu} />
      </DropdownContext>
    );

    expect(baseElement).toBeTruthy();
  });
});
